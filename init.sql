CREATE TABLE visits (
    id BIGSERIAL PRIMARY KEY,
    visitor_hash TEXT NOT NULL,
    visited_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX visits_visited_at_idx ON visits (visited_at);
