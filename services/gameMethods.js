const pool = require("../config");


async function getGames() {
  const client = await pool.connect();
  console.log(client + " client ****");
  const rows = await pool.query(`SELECT * FROM games`);
  return {
    rows,
  };
}

async function getGameCategories() {
  const client = await pool.connect();
  const rows = await client.query(`SELECT * FROM categories`);

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
