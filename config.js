const dotenv = require("dotenv");
// const Pool = require("pg").Pool;
// const { Client } = require('pg');
// https://sidorares.github.io/node-mysql2/docs
const mysql2 = require("mysql2/promise");

//in dev use
dotenv.config({ path: "./config.env" });
//in prod use
// dotenv.config();

//https://blog.logrocket.com/build-rest-api-node-express-mysql/#setting-up-express-js-rest-api

const connection = mysql2.createConnection({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// pool.getConnection((err, connection) => {
//   if (err) throw err;
//   console.log("Database connected successfully");
//   connection.release();
// });

module.exports = connection;
