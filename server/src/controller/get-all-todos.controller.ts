import { Request, Response } from "express";
import { getAllTodos } from "../service/get-todo.service";

const getAllTodosController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const allTodos = await getAllTodos();
        
        response.status(200).send(allTodos);
    }catch (error) {
        if (error instanceof Error) {
            response.status(500).send(error.message);
        }
    }
}

export default getAllTodosController;