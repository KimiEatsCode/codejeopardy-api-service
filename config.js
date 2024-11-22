
const express = require('express');
const { Pool } = require("pg")

let app = express();
const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
dotenv.config();

// const pool = new Pool({
//   USERNAME: process.env.USERNAME,
//   HOST: process.env.HOST,
//   DATABASE: process.env.DATABASE,
//   PASSWORD: process.env.PASSWORD,
//   PORT: process.env.PORT,
//   ssl: process.env.SSL,
// });


// const connectionString = 'postgresql://kimicodes:lKMnOqQN7m46GGVb3TDmyKamDjyP49D7@dpg-cspm6mij1k6c73b04mtg-a/codejeopostgres_l8pp?sslmode=require'

const connectionString = "postgresql://kimicodes:lKMnOqQN7m46GGVb3TDmyKamDjyP49D7@dpg-cspm6mij1k6c73b04mtg-a.oregon-postgres.render.com/codejeopostgres_l8pp"

// const pool = new Pool({
//   connectionString,
// })

//  pool.query('SELECT NOW()')
//  pool.end()

// const client = new Client({
//   connectionString,
// })

//  client.connect()

// //  client.query('SELECT NOW()')

// //  client.end()

// module.exports = pool;

module.exports = {
  query: (text, params) => pool.query(text, params)
};
