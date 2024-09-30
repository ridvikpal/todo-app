import { Router } from "express";
import getAllTodosController from "../controller/get-all-todos.controller";
import getTodoController from "../controller/get-todo.controller";
import postTodoController from "../controller/post-todo.controller";
import putTodoController from "../controller/put-todo.controller";
import deleteTodoController from "../controller/delete-todo.controller";

export const todoRouter = Router();

todoRouter.get("/get", getAllTodosController);
todoRouter.get("/get/:id", getTodoController);
todoRouter.get("/post", postTodoController);
todoRouter.get("/put/:id", putTodoController);
todoRouter.get("/delete/:id", deleteTodoController);