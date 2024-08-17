import express from 'express';
import cors from 'cors';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('server has been started on port 5000');
});
