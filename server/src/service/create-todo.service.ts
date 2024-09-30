import pool from "../database/pool";
import { Todo } from "../types/todo.type";

export const createTodo = async (description: string): Promise<Todo | undefined> => {
    const postQuery = `INSERT INTO todo (description) VALUES('${description}') RETURNING *`;
    const newTodo = await pool.query(postQuery);

    return newTodo.rows[0];
}