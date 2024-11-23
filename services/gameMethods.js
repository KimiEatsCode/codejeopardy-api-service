const db = require("../postgres-config");
const pg = require("pg");

const express = require("express");

const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" });


async function getGames() {

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
  try {
    const rows = await db.pool.query(`SELECT * FROM categories`);

    return {
      rows,
    }
  } catch (err){
    if(err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: "get categories query failed" }); // 500
    }
  }
}

async function getCategoryClues(catid) {
  try { const rows = await db.pool.query(
    `SELECT * FROM clues WHERE category_id = ${catid} ORDER BY value ASC`
  );
  return {
    rows
  }
} catch (err){
  if(err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: "get clue by id query failed" }); // 500
  }
}
  
}
``;

async function getAllClues() {
try {
  const rows = await db.pool.query(`SELECT * FROM clues`);
  return {
    rows,
  }

} catch (err){
  if(err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: "get all clues query failed" }); // 500
  }
}
}

async function getClue(id) {
try {
  const rows = await db.pool.query(`SELECT * FROM clues WHERE clue_id = ${id}`);
  return {
    rows,
} 
} catch (err){
  if(err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: "get clue id query failed" }); // 500
  }
}
  
}

async function updateClue(id, answeredClue) {
 try {
  const rows = await db.pool.query(
    `UPDATE clues SET answered = ${answeredClue} WHERE clue_id= ${id}`
  );
  return {
    rows,
  };
 } catch (err){
    if(err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: "update clue query failed" }); // 500
    }
  }
 
}

async function resetClues() {
  try {
    const rows = await db.pool.query(`UPDATE clues SET answered = null
      `);
      return {
        rows,
      };
    } catch (err){
      if(err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: "reset clues query failed" }); // 500
      }
    }
 
}

async function setScore(gameid, score) {
 try {
  const rows = await db.pool.query(
    `UPDATE games SET game_score = ${score} WHERE id=${gameid}`
  );
  return {
    rows,
  };
} catch (err){
  if(err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err, message: "set score query failed" }); // 500
  }
}

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
