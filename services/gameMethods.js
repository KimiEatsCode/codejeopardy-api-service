// var express = require("express");
// const helper = require("../helper");
// const connection = require("../config");

// const test = () => {
//   const test = connection.query(`SELECT * FROM categories`);
//   return test;
// };

// async function getGameCategories() {

// // important note: doesn't work connection query needs to be in the routes file not in a separate methods file
// // better to organize routes into separate files and have query statements in the routes than to have methods separated from the routes?

//I got the idea to put the sql queries methods in a separate file from routes file from this tutorial https://blog.logrocket.com/build-rest-api-node-express-mysql/#setting-up-express-js-rest-api




// try {
//   return await connection.query(
//     `SELECT * FROM categories`,
//     function (error, results, fields) {
//       res.json(results);
//     }
//   );
// } catch (err) {
//   return err.stack;
// }
// }

// async function getCategoryClues(catid) {
//   try {
//     const rows = await connection.query(
//       `SELECT * FROM clues WHERE category_id = ${catid} ORDER BY ASC`
//     );
//     return rows;
//   } catch (err) {
//     return err.stack;
//   }
// }

// async function getAllClues() {
//   try {
//     const rows = await connection.query(`SELECT * FROM clues`);
//     console.log("getAllClues  " + rows);
//     return rows;
//   } catch (err) {
//     return err.stack;
//   }
// }

// async function getGames() {
//   try {
//     const rows = await connection.query(`SELECT * FROM games`);
//     return rows;
//   } catch (err) {
//     return err.stack;
//   }
// }

// async function getClue(id) {
//   try {
//     const rows = await connection.query(
//       `SELECT * FROM clues WHERE clue_id = ${id}`
//     );
//     console.log("single clue getClue" + JSON.stringify(rows));
//     return rows;
//   } catch (err) {
//     return err.stack;
//   }
// }

// async function updateClue(id, answeredClue) {
//   try {
//     const rows = await connection.query(
//       `UPDATE clues SET answered = ${answeredClue} WHERE clue_id= ${id}`
//     );
//     console.log("single clue updateClue" + JSON.stringify(answeredClue));
//     return rows;
//   } catch (err) {
//     return err.stack;
//   }
// }

// async function resetClues() {
//   try {
//     console.log("reset games");
//     const rows = await connection.query(`UPDATE clues SET answered = null
//     `);
//     return rows;
//   } catch (err) {
//     return err.stack;
//   }
// }

// async function setScore(gameid, score) {
//   try {
//     const rows = await connection.query(
//       `UPDATE games SET game_score = ${score} WHERE id=${gameid}`
//     );
//     return rows;
//   } catch (err) {
//     return err.stack;
//   }
// }

// module.exports = {
//   getGameCategories,
// getCategoryClues,
// getGames,
// getClue,
// updateClue,
// resetClues,
// setScore,
// getAllClues,
// };
