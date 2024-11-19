const Pool = require("pg").Pool;
const dotenv = require("dotenv");

if (process.env.NODE_ENV === "development") {
dotenv.config({ path: "./config.env" });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config();
}

const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  ssl: process.env.SSL,
});

module.exports = pool;
