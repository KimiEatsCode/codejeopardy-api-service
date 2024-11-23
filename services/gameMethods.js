const db = require("../postgres-config");
const client =require("../heroku-config-postgres");

// async function getGames() {

//  const rows =  client.query(`SELECT * FROM games`);
//   return {
//     rows,
//   }

// }

const test =(req, res) => {
   client.query('SELECT * FROM games', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
}

const getGames =(req, res) => {
  client.query('SELECT * FROM games', (err, res) => {
 if (err) throw err;
 const data = [];
 for (let row of res.rows) {
   console.log(row)
 }
 client.end();
});
}

// async function getGames() {
//   client.query("SELECT * FROM games", (err,result)=> {
//   //   if(err) {
//   //     throw err
//   // }
//   res.json(result.rows[0])
// });
// }

async function getGameCategories() {

    const rows = await client.query(`SELECT * FROM categories`);

    return {
      rows,
    }

}


async function getAllClues() {

  const rows = await client.query(`SELECT * FROM clues`);
  return {
    rows,
  }
}

async function getCategoryClues(catid) {

    const rows = await client.query(
    `SELECT * FROM clues WHERE category_id = ${catid} ORDER BY value ASC`
  );
  return {
    rows
  }

}
``;


async function getClue(id) {

  const rows = await client.query(`SELECT * FROM clues WHERE clue_id = ${id}`);
  return {
    rows,
}


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
  test,
  getGames,
  getGameCategories,
  getCategoryClues,
  getClue,
  updateClue,
  resetClues,
  setScore,
  getAllClues,
};
