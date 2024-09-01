import express from 'express';
import cors from 'cors';
import pool from './db';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// create a todo

app.post("/todos", async (request, result) => {
    try {
        console.log(request.body);
        // const newTodo = await pool.query(`INSERT INTO todo (description) VALUES( ${description} )`);

        // console.log(newTodo);
        // console.log(result);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
});

// get all todos

// get a todo

// update a todo

// delete a todo

app.listen(port, () => {
    console.log('server has been started on port 5000');
});