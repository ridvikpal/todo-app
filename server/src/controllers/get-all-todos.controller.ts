import { Response } from "express";
import pool from "../db";

const getAllTodosController = async (
    response: Response,
) => {
    try {
        const getQuery =  `SELECT * FROM todo`;
        const allTodos = await pool.query(getQuery);
        console.log(allTodos.rows);
        response.status(200).json(allTodos.rows);
        // response.send(allTodos.rows);
    }catch (error) {
        if (error instanceof Error) {
            // response.send(error.message);
            // console.log(response);
        }
    }
}

export default getAllTodosController;