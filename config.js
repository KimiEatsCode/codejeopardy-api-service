const Pool = require("pg").Pool;
const dotenv = require("dotenv");
//in dev use below
dotenv.config({ path: "./config.env" });
//in prod use below
// dotenv.config();

const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  ssl: process.env.SSL,
});

module.exports = pool;

