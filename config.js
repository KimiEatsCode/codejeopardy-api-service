
const express = require('express');
const pg = require("pg")
let app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  USERNAME: process.env.USERNAME,
  HOST: process.env.HOST,
  DATABASE: process.env.DATABASE,
  PASSWORD: process.env.PASSWORD,
  SSL: process.env.SSL,
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});


app.get('/', (req, res, next) => {
   pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM GetAllStudent()', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
       })
   })
});


module.exports = pool;
