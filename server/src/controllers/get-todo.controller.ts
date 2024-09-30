import { Request, Response } from "express";
import pool from "../db";

const getTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const getQuery =  `SELECT * FROM todo WHERE todo_id = ${request.params.id}`;
        const specificTodo = await pool.query(getQuery);
        
        response.status(200).send(specificTodo.rows);
    } catch (error) {
        if (error instanceof Error) {
            response.status(500).send(error.message);
        }
    }
}

export default getTodoController;