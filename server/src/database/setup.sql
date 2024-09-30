-- Create the database as long as it doesn't exist
SELECT 'CREATE DATABASE todo_app' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'todo_app')\gexec

-- Set the current database to be the todo_app database using: \c todo_app

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);