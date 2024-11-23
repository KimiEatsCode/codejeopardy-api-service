const db = require("../postgres-config");
const client = require("../heroku-config-postgres");



async function getGames() {
  const rows = await client.query("SELECT * FROM games");
  return rows;
};


async function getGameCategories() {
  const rows = await client.query(`SELECT * FROM categories`);

  return {
    rows,
  };
}

async function getAllClues() {
  const rows = await client.query(`SELECT * FROM clues`);
  return {
    rows,
  };
}

async function getCategoryClues(catid) {
  const rows = await client.query(
    `SELECT * FROM clues WHERE category_id = ${catid} ORDER BY value ASC`
  );
  return {
    rows,
  };
}
``;

async function getClue(id) {
  const rows = await client.query(`SELECT * FROM clues WHERE clue_id = ${id}`);
  return {
    rows,
  };
}

async function updateClue(id, answeredClue) {
  const rows = await client.query(
    `UPDATE clues SET answered = ${answeredClue} WHERE clue_id= ${id}`
  );
  return {
    rows,
  };
}

async function resetClues() {
  const rows = await client.query(`UPDATE clues SET answered = null
      `);
  return {
    rows,
  };
}

async function setScore(gameid, score) {
  const rows = await client.query(
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
