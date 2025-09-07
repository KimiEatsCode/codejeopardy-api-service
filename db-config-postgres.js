//use for development local NOT production
// require("dotenv").config({ path: "config.env" });

//use for production
 require("dotenv").config();

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.connectionString,
  //SSL uncomment for production heroku
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
