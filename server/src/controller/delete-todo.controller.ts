import { Request, Response } from "express";
import pool from "../db";

const deleteTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const deleteQuery = `DELETE FROM todo WHERE todo_id = ${request.params.id} RETURNING *`;
        const deletedTodo = await pool.query(deleteQuery);

        response.status(200).send(deletedTodo.rows);
    } catch (error) {
        if (error instanceof Error) {
            response.status(500).send(error.message);
        }
    }
}

export default deleteTodoController;