
const dotenv = require("dotenv");
const express = require('express');
const pg = require('pg');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 2000;
dotenv.config({ path: "./config.env" });
// dotenv.config();

const gameMethods = require("./services/gameMethods");
const gameMethodsRouter = require("./routes/gameRoutes");

app.use(cors())

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://codejeopardy-api-service-ap1e.onrender.com"
  ); // Replace "*" with your allowed domains
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const pool = new pg.Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  ssl: process.env.SSL,
});



app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(gameMethodsRouter.router0);
app.use(gameMethodsRouter.router1);
app.use(gameMethodsRouter.router2);
app.use(gameMethodsRouter.router3);
app.use(gameMethodsRouter.router4);
app.use(gameMethodsRouter.router5);
app.use(gameMethodsRouter.router6);
app.use(gameMethodsRouter.router7);
app.use(gameMethodsRouter.router8);

app.get('/test', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.send(result.rows[0].now);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = pool;
