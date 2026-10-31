use axum::{
    Router,
    http::{Method, header},
    routing::{get, post},
};
use dotenvy;
use sqlx::postgres::PgPoolOptions;
use tokio;
use tower_http::cors::{Any, CorsLayer};

#[derive(Clone)]
struct AppState {
    db: sqlx::PgPool,
}

async fn root() -> &'static str {
    "Hello from my blog!"
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

    let state = AppState { db: pool };

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods([Method::GET]);

    let app: Router = Router::new()
        .route("/", get(root))
        .layer(cors)
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    println!("Server running on {}", listener.local_addr().unwrap());
    axum::serve(listener, app)
        .with_graceful_shutdown(graceful_shutdown_signal())
        .await
        .unwrap();
}
