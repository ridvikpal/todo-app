import pool from "../database/pool";
import { Todo } from "../types/todo.type";

export const getTodo = async (id: number): Promise<Todo | undefined> => {
    const getQuery = `SELECT * FROM todo WHERE todo_id = ${id}`;
    const specificTodo = await pool.query(getQuery);

    return specificTodo.rows[0];
}

export const getAllTodos = async (): Promise<Todo[] | undefined> => {
    const getQuery = `SELECT * FROM todo`;
    const allTodos = await pool.query(getQuery);

    return allTodos.rows;
}