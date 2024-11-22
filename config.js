
const express = require('express');

let app = express();
const pg = require("pg")
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// dotenv.config();




//pool query will close the pool
export const query = (text, params) => pool.query(text, params)
