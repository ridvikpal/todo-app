import pool from "../database/pool";
import { Todo } from "../types/todo.type";

export const updateTodo = async (id: number, description: string): Promise<Todo | undefined> => {
    const putQuery = `UPDATE todo SET description = '${description}' WHERE todo_id = ${id} RETURNING *`;
    const updatedTodo = await pool.query(putQuery);

    return updatedTodo.rows[0];
}