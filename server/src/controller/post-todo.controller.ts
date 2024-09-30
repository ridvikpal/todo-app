import { Request, Response } from "express";
import { createTodo } from "../service/create-todo.service";

const postTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const newTodo = await createTodo(request.body.description);

        response.status(200).send(newTodo);
    } catch (error) {
        if (error instanceof Error) {
            response.status(500).send(error.message);
        }
    }
}

export default postTodoController;