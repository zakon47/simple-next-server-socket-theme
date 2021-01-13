import pg from 'pg'
import {ENV} from "../shared/const";

const POOL = new pg.Pool({
    user: ENV.DB_USER,
    password: ENV.DB_PW,
    database: ENV.DB_DATABASE,
    port: ENV.DB_PORT,
    host: ENV.DB_HOST
});

export {POOL};
