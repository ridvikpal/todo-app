SELECT 'CREATE DATABASE todo_app' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'todo_app')\gexec

\c todo_app

CREATE TABLE IF NOT EXISTS todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);