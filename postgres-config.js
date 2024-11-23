
const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool ({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
  });


// new way, available since 6.0.0:

// create a pool
// var pool = new pg.Pool()

// connection using created pool
// pool.connect(function (err, client, done) {
//   const rows = client.query(`SELECT * FROM categories`);
//   done();
//   return rows;
// });

// pool shutdown
// pool.end();


  // pool takes the object above -config- as parameter
//   const pool = new pg.Pool(config);

//   pool.on("error", (err, client) => {
//     console.error("Unexpected error on idle client", err);
//     process.exit(-1);
//   });

  module.exports = {
    pool
  }