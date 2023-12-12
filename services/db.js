const mysql2 = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


async function query(sql, params) {
  try {
    const connection = await mysql2.createConnection({
      host: process.env.HOST,
      user: process.env.STACKHERO_MYSQL_USER,
      password: process.env.STACKHERO_MYSQL_PASSWORD,
      database: process.env.DATABASE,
    });

    const [results] = await connection.execute(sql, params);

    return results;
  } catch (err) {
    console.error(`Error with mysql2 createConnection function `, err.message);
    next(err);
  }
}

module.exports = {
  query,
};
