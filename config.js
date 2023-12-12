const dotenv = require("dotenv");
//in dev use below
// dotenv.config({ path: "./config.env" });
//in prod use below
dotenv.config();

const Pool = require("pg").Pool;

// const config = {
//   db: {
//     /* don't expose password or any sensitive info, done only for demo */
//     host: "us-cdbr-east-06.cleardb.net",
//     user: "be38a284467428",
//     password: "e9858bff",
//     database: "heroku_1885579adcb0c5a",
//   },
// };
// module.exports = config;

// const config = {
//   db: {
//     /* don't expose password or any sensitive info, done only for demo */
//     host: "127.0.0.1",
//     user: "root",
//     password: "root",
//     database: "jeopardygame",
//   },
// };
// module.exports = config;


const pool = new Pool({
  // user: process.env.USERNAME,
  // host: process.env.HOST,
  // database: process.env.DATABASE,
  // password: process.env.PASSWORD,
  // port: process.env.PORT,
  connectionString: process.env.DBConfigLink,
  ssl: {
    rejectUnauthorized:false
  }
});

module.exports = pool;
