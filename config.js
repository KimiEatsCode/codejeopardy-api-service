const dotenv = require("dotenv");
// const Pool = require("pg").Pool;
// const { Client } = require('pg');
// https://sidorares.github.io/node-mysql2/docs
const mysql2 = require("mysql2/promise");

//in dev use
dotenv.config({ path: "./config.env" });
//in prod use
// dotenv.config();

const pool = mysql2.createPool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

pool.getConnection((err, connection) => {
  try {
    console.log(
      "Database needs to say connected successfully before routes will work"
    );
  } catch (err) {
    console.log("Database not connected");
    console.log(err);
  }

  connection.release();
});

module.exports = pool;
