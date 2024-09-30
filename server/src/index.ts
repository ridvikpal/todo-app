import express from 'express';
import cors from 'cors';
import { todoRouter } from './controllers/todo.router';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/2do', todoRouter);

app.listen(port, () => {
    console.log('server has been started on port 5000');
});