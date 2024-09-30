import { Pool } from 'pg';

import auth from '../database/auth.json';

const pool = new Pool({
    user: auth.username,
    password: auth.password,
    host: 'localhost',
    port: 5432,
    database: "todoapp"
});

export default pool;