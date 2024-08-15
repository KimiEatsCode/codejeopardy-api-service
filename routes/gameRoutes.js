const express = require("express");
const app = express();
const pool = require("../config");
// const gameMethods = require("../services/gameMethods");

//in dev use
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//in prod use
// dotenv.config();

/*have to have express.Router() for each http call*/
const router0 = express.Router();
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
const router4 = express.Router();
const router5 = express.Router();
const router6 = express.Router();
const router7 = express.Router();
const router8 = express.Router();

// Enable CORS for all routes
app.use(function (req, res, next) {
  res.header(
    `Access-Control-Allow-Origin,
    ${process.env.HOST}`
  ); // Replace "*" with your allowed domains
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router0.get("/", (req, res, next) => {
  res.send("test router 0");
});

/* NOT WORKING
/* example below with method imported into file GET game categories. */
// router1.get("/api/game-categories", async function (req, res, next) {
//   pool.query(gameMethods.getGameCategories(), function (err, result) {
//     if (err) {
//       console.log(err);
//       res.send("Unable to get the comments");
//     } else {
//       res.json(result);
//     }
//   });
// });

/* WORKING
/* with query string GET game categories  */
router1.get("/api/game-categories", async function (req, res, next) {
  try {
    const [results, fields] = await pool.query(
      "SELECT * FROM categories"
    );
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  res.end();
});

/* GET all category clues in a specific category */
router2.get("/api/category-clues/:catid", async function (req, res, next) {
  try {
    const [results, fields] = await pool.query(
      `SELECT * FROM clues WHERE category_id = ${catid} ORDER BY ASC`
    );
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  res.end();
});

// //GET all clues
router3.get("/api/allclues", async function (req, res, next) {
  try {
    const [results, fields] = await pool.query(`SELECT * FROM clues`);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  res.end();
});

// /* GET specific category clue based on clue id */
router4.get("/api/category-clue/:clue_id", async function (req, res, next) {
  try {
    const [results, fields] = await pool.query(
      `SELECT * FROM clues WHERE clue_id = ${id}`
    );
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  res.end();
});

// /* UPDATE answered clue id and answeredCorrect  */
router5.patch(
  "/api/category-clue/:clueid&:answeredCorrect",
  async function (req, res, next) {
    try {
      const [results, fields] = await pool.query(
        `UPDATE clues SET answered = ${answeredClue} WHERE clue_id= ${id}`
      );
      res.json(results);
    } catch (err) {
      console.log(err);
    }
    res.end();
  }
);

// /* UPDATE answered to reset game to new game */
router6.patch("/api/category-clue/newgame", async function (req, res, next) {
  try {
    const [results, fields] = await pool.query(
      `UPDATE clues SET answered = null
    `
    );
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  res.end();
});

// /* UPDATE game score*/
router7.patch("/api/game/:gameid&:score", async function (req, res, next) {
  try {
    const [results, fields] = await pool.query(
      `UPDATE games SET game_score = ${score} WHERE id=${gameid}`
    );
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  res.end();
  res.end();
});

// /* GET all games */
router8.get("/api/games", async function (req, res, next) {
  try {
    const [results, fields] = await pool.query(`SELECT * FROM games`);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  res.end();
  res.end();
});

module.exports = {
  router0,
  router1,
  router2,
  router3,
  router4,
  router5,
  router6,
  router7,
  router8,
};
