//use for development local NOT production
// require("dotenv").config({ path: "config.env" });
<<<<<<< HEAD
 require("dotenv").config();
=======
require("dotenv").config();
>>>>>>> branch2-multiple-users
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
