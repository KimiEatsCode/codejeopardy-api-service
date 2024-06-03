const express = require("express");
// const mysql = require("mysql2/promise");
// const config = require("../config");

// const app = express();

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//   host: config.db.host,
//   user: config.db.user,
//   password: config.db.password,
//   database: config.db.database,
// });

// // Connect to the MySQL database
// pool.getConnection((err, connection) => {
//   if (err) {
//     throw err;
//   }

//   console.log("Connected to MySQL database!");

//   // Close the connection
//   connection.release();
// });

// // Start the Express server
// app.listen(3000, () => {
//   console.log("Express server listening on port 3000!");
// });

const mysql = require("mysql2");
const connection = mysql.createConnection({

});

connection.connect();

connection.query(`SELECT * FROM categories`, (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0]);
});

// connection.end();

(module.exports = connection), connectDB();
