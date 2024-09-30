"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const port = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// create a todo
app.post("/2do/post", (request, result) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description } = request.body;
        const postQuery = `INSERT INTO todo (description) VALUES('${description}') RETURNING *`;
        const newTodo = yield db_1.default.query(postQuery);
        result.json(newTodo.rows);
    }
    catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
}));
// get all todos
app.get("/2do/get", (request, result) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getQuery = `SELECT * FROM todo`;
        const allTodos = yield db_1.default.query(getQuery);
        result.json(allTodos.rows);
    }
    catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
}));
// get a todo
app.get("/2do/get/:id", (request, result) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getQuery = `SELECT * FROM todo WHERE todo_id = ${request.params.id}`;
        const specificTodo = yield db_1.default.query(getQuery);
        result.json(specificTodo.rows);
    }
    catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
}));
// update a todo
app.put("/2do/put/:id", (request, result) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description } = request.body;
        const putQuery = `UPDATE todo SET description = '${description}' WHERE todo_id = ${request.params.id} RETURNING *`;
        const updatedTodo = yield db_1.default.query(putQuery);
        result.json(updatedTodo.rows);
    }
    catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
}));
// delete a todo
app.delete("/2do/delete/:id", (request, result) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteQuery = `DELETE FROM todo WHERE todo_id = ${request.params.id}`;
        const deletedTodo = yield db_1.default.query(deleteQuery);
        result.json(deletedTodo);
    }
    catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
}));
app.listen(port, () => {
    console.log('server has been started on port 5000');
});
//# sourceMappingURL=index.js.map