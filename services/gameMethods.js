// const pool = require("../config");
const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

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

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
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
pool.connect(function (err, client, done) {
  const rows = client.query(`SELECT * FROM categories`);
  done();
  return rows;
});

// pool shutdown
pool.end();

// async function getGameCategories() {
//   const client = await pool.connect();
//   const rows = await client.query(`SELECT * FROM categories`);

//   return {
//     rows,
//   };
// }

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
