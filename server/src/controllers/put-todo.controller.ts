import { Request, Response } from "express";
import pool from "../db";

const putTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const { description } = request.body;
        const putQuery = `UPDATE todo SET description = '${description}' WHERE todo_id = ${request.params.id} RETURNING *`;
        const updatedTodo = await pool.query(putQuery);

        response.json(updatedTodo.rows);
    } catch (error) {
        if (error instanceof Error) {
            response.send(error.message);
        }
    }
}

export default putTodoController;