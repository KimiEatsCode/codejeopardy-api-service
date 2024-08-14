var express = require("express");
var express = require("express");
const helper = require("../helper");
const db = require("../config");
const router = express.Router();

router.get('/users', (req, res) => {
  alert('what')
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});
 
db.query(`SELECT * FROM categories`, (err, rows, fields) => {
  if (err) throw err;
 
  console.log("from game methods file " + rows)
  // return data;
});
 

const getGameCategories = async() => {
  try {
    const rows = await db.query(`SELECT * FROM categories`,(err, rows, fields));
    //helper only returns data if rows are not empty
    const data = helper.emptyOrRows(rows[0].id);
    console.log(data);
    return data;
  } catch (err) {
    return err.stack;
  }
}


const getCategoryClues = async(catid) =>  {
 try {
    const rows = await db.query(
      `SELECT * FROM clues WHERE category_id = ${catid} ORDER BY ASC`
    ,);
    return rows;
  } catch (err) {
    return err.stack;
  }
}

const getAllClues = async () => {
  try {
    const rows = await db.query(`SELECT * FROM clues`);
    console.log("getAllClues  " + rows);
    return rows;
  } catch (err) {
    return err.stack;
  }
};

const getGames = async () => {
  try {
    const rows = await db.query(`SELECT * FROM games`);
    return rows;
  } catch (err) {
    return err.stack;
  }
};

const getClue = async (id) => {
  try {
    const rows = await db.query(`SELECT * FROM clues WHERE clue_id = ${id}`);
    console.log("single clue getClue" + JSON.stringify(rows));
    return rows;
  } catch (err) {
    return err.stack;
  }
};

const updateClue = async (id, answeredClue) => {
  try {
    const rows = await db.query(
      `UPDATE clues SET answered = ${answeredClue} WHERE clue_id= ${id}`
    );
    console.log("single clue updateClue" + JSON.stringify(answeredClue));
    return rows;   

  } catch (err) {
    return err.stack;
  }
};

const resetClues = async () => {
  try {
    console.log("reset games");
    const rows = await db.query(`UPDATE clues SET answered = null`);
    return rows;
  } catch (err) {
    return err.stack;
  }
};

const setScore = async (gameid, score) => {
  try {
    const rows = await db.query(
      `UPDATE games SET game_score = ${score} WHERE id=${gameid}`
    );
    return rows;
  } catch (err) {
    return err.stack;
  }
};

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
