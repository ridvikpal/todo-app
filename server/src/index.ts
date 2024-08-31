import express from 'express';
import cors from 'cors';
import pool from './db';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// create a todo

// get all todos

// get a todo

// update a todo

// delete a todo

app.listen(port, () => {
    console.log('server has been started on port 5000');
});