import express from 'express';
import cors from 'cors';
import pool from './db';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// create a todo

app.post("/2do/post", async (request, result) => {
    try {
        const { description } = request.body;
        const postQuery = `INSERT INTO todo (description) VALUES('${description}') RETURNING *`
        const newTodo = await pool.query(postQuery);

        result.json(newTodo.rows);
    } catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
});

// get all todos

app.get("/2do/get", async (request, result) => {
    try {
        const getQuery =  `SELECT * FROM todo`;
        const allTodos = await pool.query(getQuery);

        result.json(allTodos.rows);
    } catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
})

// get a todo

app.get("/2do/get/:id", async (request, result) => {
    try {
        const getQuery =  `SELECT * FROM todo WHERE todo_id = ${request.params.id}`;
        const specificTodo = await pool.query(getQuery);

        result.json(specificTodo.rows);
    } catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
});

// update a todo
app.put("/2do/put/:id", async (request, result) => {
    try {
        const { description } = request.body;
        const putQuery = `UPDATE todo SET description = '${description}' WHERE todo_id = ${request.params.id} RETURNING *`;
        const updatedTodo = await pool.query(putQuery);

        result.json(updatedTodo.rows);
    } catch (error) {
        if (error instanceof Error) {
            result.send(error.message);
        }
    }
});

// delete a todo

app.listen(port, () => {
    console.log('server has been started on port 5000');
});