const express = require("express");
const gameMethods = require("../services/gameMethods");

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://codejeopardy-api-service-ap1e.onrender.com"
  ); // Replace "*" with your allowed domains
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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

const app = express();

/* GET welcome message*/
router0.get("/", async function (req, res, next) {
  console.log("api connection is working");
  res.json("route of api working");
  res.end();
});

/* GET game categories. */
router1.get("/api/game-categories", async function (req, res, next) {
  try {
    const data = await gameMethods.getGameCategories();
    res.json(data.data.rows);
    // console.log("get categories " + data.data.rows[0]);
  } catch (err) {
    console.error(`Error while getting game categories `, err.message);
    next(err);
  }
});

/* GET all category clues in a specific category */
router2.get("/api/category-clues/:catid", async function (req, res, next) {
  try {
    let catid = req.params.catid;

    const data = await gameMethods.getCategoryClues(catid);
    console.log("category clues data " + data.rows.rows);
    res.json(data.rows.rows);
  } catch (err) {
    console.error(`Error while getting a category clues `, err.message);
    next(err);
  }
  res.end();
});

//GET all clues
router3.get("/api/allclues", async function (req, res, next) {
  try {
    const data = await gameMethods.getAllClues();
    res.json(data.rows.rows[0]);
  } catch (err) {
    console.error(`Error while getting all clues `, err.message);
    next(err);
  }
  res.end();
});

/* GET specific category clue based on clue id */
router4.get("/api/category-clue/:clue_id", async function (req, res, next) {
  try {
    let id = req.params.clue_id;
    console.log(id);
    const data = await gameMethods.getClue(id);
    res.json(data.rows.rows[0]);
  } catch (err) {
    console.error(`Error while getting specific clue `, err.message);
    next(err);
  }
  res.end();
});

/* UPDATE answered clue id and answeredCorrect  */
router5.put(
  "/api/category-clue/:clueid&:answeredCorrect",
  async function (req, res, next) {
    try {
      let id = req.params.clueid;
      let answeredCorrect = req.params.answeredCorrect;
      const data = await gameMethods.updateClue(id, answeredCorrect);
      res.json(data.rows.rows[0]);
    } catch (err) {
      console.error(`Error while updating clue answered`, err.message);
      next(err);
    }
    res.end();
  }
);

/* UPDATE answered to reset game to new game */
router6.put("/api/category-clue/newgame", async function (req, res, next) {
  try {
    const data = await gameMethods.resetClues();
    res.json(data.rows.rows[0]);
  } catch (err) {
    console.error(`Error while resetting game answered to false `, err.message);
    next(err);
  }
  res.end();
});

/* UPDATE game score*/
router7.put("/api/game/:gameid&:score", async function (req, res, next) {
  try {
    let gameid = req.params.gameid;
    let score = req.params.score;
    console.log("set game score " + score + "gameid " + gameid);
    const data = await gameMethods.setScore(gameid, score);
    res.json(data.rows.rows[0]);
  } catch (err) {
    console.error(`Error while resetting game answered to 0 `, err.message);
    next(err);
  }
  res.end();
});

/* GET all games */
router8.get("/api/games", async function (req, res, next) {
  try {
    const data = await gameMethods.getGames();
    res.json(data.rows.rows[0]);
  } catch (err) {
    console.error(`Error while getting category clues `, err.message);
    next(err);
  }
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
