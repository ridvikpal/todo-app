import { Request, Response } from "express";
import { deleteTodo } from "../service/delete-todo.service";

const deleteTodoController = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        const deletedTodo = await deleteTodo(parseInt(request.params.id));

        response.status(200).send(deletedTodo);
    } catch (error) {
        if (error instanceof Error) {
            response.status(500).send(error.message);
        }
    }
}

export default deleteTodoController;