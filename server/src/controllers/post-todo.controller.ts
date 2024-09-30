import { Request, Response } from "express";
import pool from "../db";

const postTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const { description } = request.body;
        const postQuery = `INSERT INTO todo (description) VALUES('${description}') RETURNING *`
        const newTodo = await pool.query(postQuery);

        response.json(newTodo.rows);
    } catch (error) {
        if (error instanceof Error) {
            response.send(error.message);
        }
    }
}

export default postTodoController;