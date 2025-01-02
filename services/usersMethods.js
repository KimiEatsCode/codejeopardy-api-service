const client = require("../heroku-config-postgres");

async function getUsers() {
  const rows = await client.query(`SELECT * FROM users`);
  return {
    rows,
  };
}


async function getUserGames(userid) {
  const rows = await client.query(`SELECT *
FROM  users_games LEFT JOIN games ON game_id = gameid WHERE userid_games = ${userid}`);
  return {
    rows,
  };
}


async function setUserScore(userid, gameid, score) {
  const rows = await client.query(
    `UPDATE users SET game_score = ${score} WHERE userid_games=${userid} AND gameid=${gameid}`
  );
  return {
    rows,
  };
}


module.exports = {
    getUsers,
    getUserGames,
    setUserScore
}