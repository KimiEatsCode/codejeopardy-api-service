require("dotenv").config({ path: "config.env" });
const { Client } = require("pg");

const client = new Client({
  // USERNAME:process.env.USERNAME,
  // PASSWORD:process.env.PASSWORD,
  // HOST:process.env.HOST,
  // DATABASE:process.env.DATABASE,
  connectionString: process.env.connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
