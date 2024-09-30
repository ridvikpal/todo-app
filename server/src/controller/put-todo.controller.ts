import { Request, Response } from "express";
import { updateTodo } from "../service/update-todo.service";

const putTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const updatedTodo = await updateTodo(
            parseInt(request.params.id),
            request.body.description
        );

        response.status(200).send(updatedTodo);
    } catch (error) {
        if (error instanceof Error) {
            response.status(500).send(error.message);
        }
    }
}

export default putTodoController;