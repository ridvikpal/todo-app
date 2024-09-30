import { Request, Response } from "express";
import pool from "../db";

const deleteTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const deleteQuery = `DELETE FROM todo WHERE todo_id = ${request.params.id}`;
        const deletedTodo = await pool.query(deleteQuery);

        response.json(deletedTodo);
    } catch (error) {
        if (error instanceof Error) {
            response.send(error.message);
        }
    }
}

export default deleteTodoController;