use axum::{
    Json, Router,
    extract::{ConnectInfo, State},
    http::{HeaderMap, Method, StatusCode, header},
    routing::{get, post},
};
use dotenvy;
use serde::Serialize;
use sha2::{Digest, Sha256};
use sqlx::postgres::PgPoolOptions;
use std::{
    net::SocketAddr,
    sync::{Arc, Mutex},
    time::{SystemTime, UNIX_EPOCH},
};
use tokio;
use tower_http::cors::{Any, CorsLayer};

/// A random salt that is replaced every UTC day, so a visitor's hash
/// can't be linked from one day to the next.
struct DailySalt {
    day: u64,
    bytes: [u8; 32],
}

impl DailySalt {
    fn new(day: u64) -> Self {
        Self {
            day,
            bytes: rand::random(),
        }
    }
}

#[derive(Clone)]
struct AppState {
    db: sqlx::PgPool,
    salt: Arc<Mutex<DailySalt>>,
}

#[derive(Serialize)]
struct VisitCounts {
    total: i64,
    unique_today: i64,
}

fn current_day() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs()
        / 86_400
}

/// Returns today's salt, generating a new one if the UTC day has changed.
fn current_salt(state: &AppState) -> [u8; 32] {
    let today = current_day();
    let mut salt = state.salt.lock().unwrap();
    if salt.day != today {
        *salt = DailySalt::new(today);
    }
    salt.bytes
}

fn visitor_hash(salt: &[u8], ip: &str, user_agent: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(salt);
    hasher.update(ip.as_bytes());
    hasher.update(user_agent.as_bytes());
    hex::encode(hasher.finalize())
}

// Getting the client IP for hashing their IDs
fn client_ip(headers: &HeaderMap, addr: SocketAddr) -> String {
    headers
        .get("cf-connecting-ip")
        .or_else(|| headers.get("x-forwarded-for"))
        .and_then(|v| v.to_str().ok())
        .and_then(|v| v.split(',').next())
        .map(|v| v.trim().to_string())
        .unwrap_or_else(|| addr.ip().to_string())
}

fn is_bot(user_agent: &str) -> bool {
    let ua = user_agent.to_lowercase();
    ua.is_empty()
        || ["bot", "crawler", "spider", "headless", "curl", "wget"]
            .iter()
            .any(|keyword| ua.contains(keyword))
}

async fn root() -> &'static str {
    "Hello from my blog!"
}

async fn record_visit(
    State(state): State<AppState>,
    ConnectInfo(addr): ConnectInfo<SocketAddr>,
    headers: HeaderMap,
) -> StatusCode {
    let user_agent = headers
        .get(header::USER_AGENT)
        .and_then(|v| v.to_str().ok())
        .unwrap_or("");

    if is_bot(user_agent) {
        return StatusCode::NO_CONTENT;
    }

    let hash = visitor_hash(
        &current_salt(&state),
        &client_ip(&headers, addr),
        user_agent,
    );

    match sqlx::query("INSERT INTO visits (visitor_hash) VALUES ($1)")
        .bind(hash)
        .execute(&state.db)
        .await
    {
        Ok(_) => StatusCode::NO_CONTENT,
        Err(e) => {
            eprintln!("failed to record visit: {e}");
            StatusCode::INTERNAL_SERVER_ERROR
        }
    }
}

async fn visit_count(State(state): State<AppState>) -> Result<Json<VisitCounts>, StatusCode> {
    let total: i64 = sqlx::query_scalar("SELECT COUNT(*) FROM visits")
        .fetch_one(&state.db)
        .await
        .map_err(|e| {
            eprintln!("failed to count visits: {e}");
            StatusCode::INTERNAL_SERVER_ERROR
        })?;

    // The salt rotates at UTC midnight, so "today" has to be a UTC day too
    let unique_today: i64 = sqlx::query_scalar(
        "SELECT COUNT(DISTINCT visitor_hash) FROM visits
         WHERE visited_at >= date_trunc('day', now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC'",
    )
    .fetch_one(&state.db)
    .await
    .map_err(|e| {
        eprintln!("failed to count unique visitors: {e}");
        StatusCode::INTERNAL_SERVER_ERROR
    })?;

    Ok(Json(VisitCounts {
        total,
        unique_today,
    }))
}

async fn graceful_shutdown_signal() {
    let ctrl_c = async {
        tokio::signal::ctrl_c()
            .await
            .expect("failed to install Ctrl+C handler");
    };

    // SIGTERM is what Docker, Kubernetes, and systemd send on shutdown
    #[cfg(unix)]
    let terminate = async {
        tokio::signal::unix::signal(tokio::signal::unix::SignalKind::terminate())
            .expect("failed to install SIGTERM handler")
            .recv()
            .await;
    };

    #[cfg(not(unix))]
    let terminate = std::future::pending::<()>();

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }

    println!("Shutdown signal received, finishing in-flight requests...");
}

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();

    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&std::env::var("DATABASE_URL").expect("DATABASE_URL must be set"))
        .await
        .expect("Failed to connect to database");

    let state = AppState {
        db: pool,
        salt: Arc::new(Mutex::new(DailySalt::new(current_day()))),
    };

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods([Method::GET, Method::POST])
        .allow_headers([header::CONTENT_TYPE]);

    let app: Router = Router::new()
        .route("/", get(root))
        .route("/api/visit", post(record_visit))
        .route("/api/visits", get(visit_count))
        .layer(cors)
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    println!("Server running on {}", listener.local_addr().unwrap());
    axum::serve(
        listener,
        app.into_make_service_with_connect_info::<SocketAddr>(),
    )
    .with_graceful_shutdown(graceful_shutdown_signal())
    .await
    .unwrap();
}