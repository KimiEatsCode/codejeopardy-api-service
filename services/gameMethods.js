const config = require("../config");
const helper = require("../helper");
const db = require("./db");

async function checkSQLConnections() {
  console.log("Threads connected");
  const data = await db.query(
    "SHOW STATUS WHERE `variable_name` = 'Threads_connected';"
  );
  return {
    data,
  };
}

async function getGameCategories() {
  console.log("categories received");
  const rows = await db.query(`SELECT * FROM categories`);
  //helper only returns data if rows are not empty
  const data = helper.emptyOrRows(rows);
  console.log(data);
  return {
    data,
  };
}

async function getCategoryClues(catid) {
  console.log("clues received");
  const rows = await db.query(
    `SELECT * FROM clues WHERE category_id = ${catid} ORDER BY value ASC`
  );
  return {
    rows,
  };
}
``;

async function getAllClues() {
  console.log("clues received");
  const rows = await db.query(`SELECT * FROM clues`);
  console.log("getAllClues  " + rows);
  return {
    rows,
  };
}

async function getGames() {
  console.log("games received");
  const rows = await db.query(`SELECT * FROM games`);
  // console.log(rows);
  return {
    rows,
  };
}

async function getClue(id) {
  console.log("clue received");
  const rows = await db.query(`SELECT * FROM clues WHERE clue_id = ${id}`);
  console.log("single clue getClue" + JSON.stringify(rows));
  return {
    rows,
  };
}

async function updateClue(id, answeredClue) {
  console.log("clue answered api file " + answeredClue);
  const rows = await db.query(
    `UPDATE clues SET answered = ${answeredClue} WHERE clue_id= ${id}`
  );
  console.log("single clue updateClue" + JSON.stringify(answeredClue));
  return {
    rows,
  };
}

async function resetClues() {
  console.log("reset games");
  const rows = await db.query(`UPDATE clues SET answered = null
  `);
  return {
    rows,
  };
}

async function setScore(gameid, score) {
  console.log("games methods set score" + score);
  const rows = await db.query(
    `UPDATE games SET game_score = ${score} WHERE id=${gameid}`
  );
  return {
    rows,
  };
}

module.exports = {
  checkSQLConnections,
  getGameCategories,
  getCategoryClues,
  getGames,
  getClue,
  updateClue,
  resetClues,
  setScore,
  getAllClues,
};
