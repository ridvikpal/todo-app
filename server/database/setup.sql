-- The schema for the database
CREATE DATABASE IF NOT EXISTS todoapp;

CREATE TABLE IF NOT EXISTS todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);