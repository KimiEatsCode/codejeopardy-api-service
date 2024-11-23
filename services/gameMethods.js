const db = require("../postgres-config");
const pg = require("pg");

const express = require("express");
let app = express();

const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" });
// dotenv.config();


async function getGames() {
  // const client = await pool.connect();
  // console.log(client + " client ****");
  try { const rows = await db.pool.query(`SELECT * FROM games`);
  return {
    rows,
  } 
} catch (err){
  if(err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: "get games query failed" }); // 500
  }
}
}

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
  getGames,
  getGameCategories,
  getCategoryClues,
  getClue,
  updateClue,
  resetClues,
  setScore,
  getAllClues,
};
