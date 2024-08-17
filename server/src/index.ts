import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

console.log('App is starting');

app.listen(5000, () => {
    console.log('server has been started on port 5000');
});
