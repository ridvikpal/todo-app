import { Request, Response } from "express";
import { getTodo } from "../service/get-todo.service";

const getTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const specificTodo = await getTodo(parseInt(request.params.id));
        
        response.status(200).send(specificTodo);
    } catch (error) {
        if (error instanceof Error) {
            response.status(500).send(error.message);
        }
    }
}

export default getTodoController;