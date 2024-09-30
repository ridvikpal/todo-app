import { Router } from "express";
import getAllTodosController from "./get-all-todos.controller";
import getTodoController from "./get-todo.controller";
import postTodoController from "./post-todo.controller";
import putTodoController from "./put-todo.controller";
import deleteTodoController from "./delete-todo.controller";

export const todoRouter = Router();

todoRouter.get("/get", getAllTodosController);
todoRouter.get("/get/:id", getTodoController);
todoRouter.get("/post", postTodoController);
todoRouter.get("/put/:id", putTodoController);
todoRouter.get("/delete/:id", deleteTodoController);