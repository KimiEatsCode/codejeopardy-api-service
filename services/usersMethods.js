// const client = require("../db-config-postgres");
import { client } from '../db-config-postgres.js';
async function getUsers() {
  const rows = await client.query(`SELECT * FROM users ORDER BY userid ASC`);
  return {
    rows,
  };
}

async function getUserGames(userid) {
  const rows = await client.query(`SELECT *
FROM users_games LEFT JOIN games ON game_id = gameid WHERE userid_games = ${userid} ORDER BY game_id ASC`);
  return {
    rows,
  };
}

//get game info for a user
async function getUserGameInfo(userid, gameid) {
  const rows = await client.query(`SELECT *
FROM users_games RIGHT JOIN games ON game_id = ${gameid} WHERE userid_games = ${userid} AND gameid= ${gameid}`);
  return {
    rows,
  };
}

async function setUserScore(userid, gameid, score) {
  const rows = await client.query(
    `UPDATE users_games SET game_score = ${score} WHERE userid_games=${userid} AND gameid=${gameid}`
  );

  return {
    rows,
  };
}

async function updateUserClue(userid, clueid, answeredCorrect, catid, gameid) {
  const rows = await client.query(
    `INSERT INTO users_clues (userid_clues, clueid, answeredcorrect,catid, gameid) VALUES (${userid}, ${clueid},${answeredCorrect},${catid}, ${gameid}) ON CONFLICT ON CONSTRAINT sqlpropk_clueid DO UPDATE SET answeredcorrect = ${answeredCorrect} RETURNING *`
  );

  return {
    rows,
  };
}

//prepared method way
// async function updateUserClue(userid, clueid, answeredCorrect) {
//   const query = {

//     name: 'update-clue-answered',
//     text: 'INSERT INTO users_clues (userid_clues, clueid, answeredCorrect) VALUES ($1, $2, $3) ON CONFLICT (clueid) DO UPDATE SET answeredCorrect = $3 RETURNING *',
//     values: [userid, clueid, answeredCorrect],
//   }

//  const rows = await client.query(query);

//   return {
//     rows,
//   };
// }

//get game info for a user
// async function getUserClue(userid, clueid) {
//   const rows = await client.query(`SELECT * FROM users_clues WHERE clueid = ${clueid} AND userid = ${userid} ORDER BY value ASC`);
// }

//get clues for categories in game with user clues info for answeredCorrect

async function getUserClue(userid, catid) {
  // const rows = await client.query(`
  //   SELECT * FROM clues LEFT JOIN users_clues ON clue_id = clueid
  //   WHERE category_id = ${catid}
  //   AND (userid_clues = ${userid} OR userid_clues IS NULL)
  //   ORDER BY value ASC`);

  const rows = await client.query(
    `SELECT
      clues.*,
        users_clues.answeredcorrect
  FROM
      clues
   LEFT JOIN
      users_clues ON clues.clue_id = users_clues.clueid AND users_clues.userid_clues = ${userid}
  WHERE
      category_id = ${catid}
  ORDER BY
      value ASC`
  );
  return {
    rows,
  };
}

async function resetUserClues(userid, gameid) {
  const rows =
    await client.query(`UPDATE users_clues SET answeredcorrect = 0 WHERE gameid = ${gameid} AND userid_clues = ${userid} RETURNING *
      `);
  return {
    rows,
  };
}

export {
  getUsers,
  getUserGames,
  getUserGameInfo,
  setUserScore,
  updateUserClue,
  getUserClue,
  resetUserClues,
};
