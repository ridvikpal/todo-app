import { Pool } from 'pg';

const pool = new Pool({
    user: "ridvikpal",
    password: "3214",
    host: "localhost",
    port: 5432,
    database: "todoapp"
});

export default pool;