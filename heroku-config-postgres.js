//use for development local NOT production
<<<<<<< HEAD
// require("dotenv").config({ path: "config.env" });
require("dotenv").config();
=======
//require("dotenv").config({ path: "config.env" });
 require("dotenv").config();
>>>>>>> origin/main
const { Client } = require("pg");

const client = new Client({
  // USERNAME:process.env.USERNAME,
  // PASSWORD:process.env.PASSWORD,
  // HOST:process.env.HOST,
  // DATABASE:process.env.DATABASE,
<<<<<<< HEAD
  connectionString: process.env.connectionString,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
=======

  connectionString: process.env.connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
>>>>>>> origin/main
});

client.connect();

module.exports = client;
