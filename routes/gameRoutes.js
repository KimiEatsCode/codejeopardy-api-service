const express = require("express");
const app = express();
const router = express.Router();
const gameMethods = require("../services/gameMethods");
const db = require("../config");

//in dev use
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
//in prod use
// dotenv.config();

/*have to have express.Router() for each http call*/

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

router.get("/",  function (req, res, next) {
   try {
      const rows =  db.query(`SELECT * FROM categories`,(err, rows, fields));
      //helper only returns data if rows are not empty
      const data = helper.emptyOrRows(rows[0].id);
      console.log(res.headersSent) // 
      console.log(req) // 
      console.log("test " + data);
      return data;
    } catch (err) {
      return err.stack;
    }
    res.end();
  });
  

/* GET game categories. */
router.get("/api/game-categories", async function (req, res, next) {
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
router.get("/api/category-clues/:catid", async function (req, res, next) {
  try {
    let catid = req.params.catid;
    console.log(catid);
    const data = await gameMethods.getCategoryClues(catid);
    res.json(data.rows.rows);
  } catch (err) {
    console.error(`Error while getting a category clues `, err.message);
    next(err);
  }
  res.end();
});

//GET all clues
router.get("/api/allclues", async function (req, res, next) {
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
router.get("/api/category-clue/:clue_id", async function (req, res, next) {
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
router.patch(
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
router.patch("/api/category-clue/newgame", async function (req, res, next) {
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
router.patch("/api/game/:gameid&:score", async function (req, res, next) {
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
router.get("/api/games", async function (req, res, next) {
  try {
    const data = await gameMethods.getGames();
    res.json(data.rows.rows[0]);
  } catch (err) {
    console.error(`Error while getting category clues `, err.message);
    next(err);
  }
  res.end();
});

module.exports = router;