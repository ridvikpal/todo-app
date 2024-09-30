import pool from "../database/pool";
import { Todo } from "../types/todo.type";

export const deleteTodo = async (id: number): Promise<Todo | undefined> => {
    const deleteQuery = `DELETE FROM todo WHERE todo_id = ${id} RETURNING *`;
    const deletedTodo = await pool.query(deleteQuery);

    return deletedTodo.rows[0];
}