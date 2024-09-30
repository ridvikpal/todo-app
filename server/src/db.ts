import { Pool } from 'pg';

import auth from '../database/auth.json';

const pool = new Pool({
    user: auth.username,
    password: auth.password,
    host: 'localhost',
    port: 5432,
    database: "todo_app"
});

export default pool;