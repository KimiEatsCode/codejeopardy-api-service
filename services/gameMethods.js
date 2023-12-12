const db = require("./db");
const helper = require("../helper");

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
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
}

async function getCategoryClues(catid) {
  console.log("clues received");
  const rows = await db.query(
    `SELECT * FROM clues WHERE category_id = ${catid}`
  );
  console.log(rows);
  return {
    rows,
  };
}
``;

async function getAllClues() {
  console.log("games received");
  const rows = await db.query(`SELECT * FROM clues`);
  console.log(rows);
  return {
    rows,
  };
}

async function getGames() {
  console.log("games received");
  const rows = await db.query(`SELECT * FROM game`);
  console.log(rows);
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
  console.log("reset game");
  const rows = await db.query(`UPDATE clues SET answered = null
  `);
  return {
    rows,
  };
}

async function setScore(gameid, score) {
  console.log("game methods set score" + score);
  const rows = await db.query(
    `UPDATE game SET game_score = ${score} WHERE id=${gameid}`
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
  getAllClues
};
