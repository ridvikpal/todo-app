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

        result.json(newTodo.rows[0]);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
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
            console.log(error.message);
        }
    }
})

// get a todo

// update a todo

// delete a todo

app.listen(port, () => {
    console.log('server has been started on port 5000');
});