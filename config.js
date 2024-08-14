const dotenv = require("dotenv");
// const Pool = require("pg").Pool;
// const { Client } = require('pg');
const mysql2 = require("mysql2");


//in dev use
dotenv.config({ path: "./config.env" });
//in prod use
// dotenv.config();


const pool = mysql2.createPool({
  connectionLimit: 5,
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});


pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;
