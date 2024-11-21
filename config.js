
const express = require('express');
const { Pool } = require('pg');
const PORT = process.env.PORT || 1000;

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

pool.connect(function (err, client, done) {
  if (err) console.log("pool did not connect successfully " + err)
  app.listen(PORT, function () {
    console.log('listening on 3000')
  })
});

module.exports = pool;
