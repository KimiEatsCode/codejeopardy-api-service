// const pool = require("../config");
// const pg = require("pg");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const express = require("express");
let app = express();
dotenv.config();

// dotenv.config({ path: "./config.env" });

const connection = mysql.createConnection({
  DB_URL:process.env.DB_URL
  // port: process.env.PORT,
  // user: process.env.USERNAME,
  // host: process.env.HOST,
  // database: process.env.DATABASE,
  // password: process.env.PASSWORD,
  // ssl: process.env.SSL,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// pool takes the object above -config- as parameter
// const pool = new pg.Pool(config);

// pool.on("error", (err, client) => {
//   console.error("Unexpected error on idle client", err);
//   process.exit(-1);
// });

app.get("/test", (req, res) => {
  connection.query("SELECT * FROM categories", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

async function getGames() {
  const client = await pool.connect();
  console.log(client + " client ****");
  const rows = await pool.query(`SELECT * FROM games`);
  return {
    rows,
  };
}

// new way, available since 6.0.0:

// create a pool
// var pool = new pg.Pool()

// connection using created pool
// pool.connect(function (err, client, done) {
//   const rows = client.query(`SELECT * FROM categories`);
//   done();
//   return rows;
// });

// pool shutdown
// pool.end();

async function getGameCategories() {
  const client = await pool.connect();
  const rows = await pool.query(`SELECT * FROM categories`);

  return {
    rows,
  };
}

async function getCategoryClues(catid) {
  const client = await pool.connect();
  const rows = await pool.query(
    `SELECT * FROM clues WHERE category_id = ${catid} ORDER BY value ASC`
  );
  return {
    rows,
  };
}
``;

async function getAllClues() {
  const client = await pool.connect();
  const rows = await pool.query(`SELECT * FROM clues`);
  console.log("getAllClues  " + rows);
  return {
    rows,
  };
}

async function getClue(id) {
  const client = await pool.connect();
  const rows = await pool.query(`SELECT * FROM clues WHERE clue_id = ${id}`);
  return {
    rows,
  };
}

async function updateClue(id, answeredClue) {
  const client = await pool.connect();
  const rows = await pool.query(
    `UPDATE clues SET answered = ${answeredClue} WHERE clue_id= ${id}`
  );
  console.log("single clue updateClue" + JSON.stringify(answeredClue));
  return {
    rows,
  };
}

async function resetClues() {
  const client = await pool.connect();
  const rows = await pool.query(`UPDATE clues SET answered = null
  `);
  return {
    rows,
  };
}

async function setScore(gameid, score) {
  const client = await pool.connect();
  const rows = await pool.query(
    `UPDATE games SET game_score = ${score} WHERE id=${gameid}`
  );
  return {
    rows,
  };
}

module.exports = {
  getGameCategories,
  getCategoryClues,
  getGames,
  getClue,
  updateClue,
  resetClues,
  setScore,
  getAllClues,
};
