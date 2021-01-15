require('dotenv').config();

const ENV = {
    HOST1: process.env.HOST1 || 'http://localhost:3100',
    HOST2: process.env.HOST2 || 'http://localhost:3101',
    DB_PORT: parseInt(process.env.DB_PORT || '5100'),
    DB_DATABASE: process.env.DB_DATABASE || "postgres",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PW: process.env.DB_PW,
    DB_USER: process.env.DB_USER,
    IS_SPLIT_SERVER: process.env.SPLIT_SERVER.toLocaleLowerCase() === "true",
    IS_DEV: process.env.NODE_ENV !== "production",
};
if (!ENV.DB_USER) throw new Error("pls SET env:DB_USER")
if (!ENV.HOST1) throw new Error("pls SET env:HOST1")
if (!ENV.HOST2) throw new Error("pls SET env:HOST2")
export {ENV}