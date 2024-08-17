-- The schema for the database

CREATE DATABASE todoapp;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255);
)