const Pool = require("pg").Pool;
const dotenv = require("dotenv");
//in dev use below
dotenv.config({ path: "./config.env" });
//in prod use below
// dotenv.config();

const env_vars = {
  // apiUrl: "https://codejeopardy-api.onrender.com"
  apiUrl: "localhost:5432",
};
module.exports = env_vars;

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
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  // connectionString: process.env.DBConfigLink,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

module.exports = pool;
