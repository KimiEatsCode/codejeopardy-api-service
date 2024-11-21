
const express = require('express');
const { Pool } = require('pg');


const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// dotenv.config();

const pool = new Pool({
  USERNAME: process.env.USERNAME,
  HOST: process.env.HOST,
  DATABASE: process.env.DATABASE,
  PASSWORD: process.env.PASSWORD,
  PORT: process.env.PORT,
  // ssl: process.env.SSL,
});


module.exports = pool;
