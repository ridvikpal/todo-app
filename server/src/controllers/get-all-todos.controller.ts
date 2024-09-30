import { Request, Response } from "express";
import pool from "../db";

const getAllTodosController = async (
    request: Request,
    response: Response,
) => {
    try {
        const getQuery =  `SELECT * FROM todo`;
        const allTodos = await pool.query(getQuery);
        
        response.status(200).send(allTodos.rows);
    }catch (error) {
        if (error instanceof Error) {
            response.status(500).send(error.message);
        }
    }
}

export default getAllTodosController;