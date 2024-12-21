const express = require("express");
const gameMethods = require("../services/gameMethods");
const cors = require("cors");
const app = express();

const router = express.Router();
// Apply CORS to all routes in the router
app.use(
  express.urlencoded({
    extended: true,
  })
);
router.use(cors());
app.options("*", cors());

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, UPDATE, PATCH, PUT, POST, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/*have to have express.Router() for each http call*/
/*mergeParams makes parent params accessible to child route*/
const router0 = express.Router({ mergeParams: true });
const router1 = express.Router({ mergeParams: true });
const router2 = express.Router({ mergeParams: true });
const router3 = express.Router({ mergeParams: true });
const router4 = express.Router({ mergeParams: true });
const router5 = express.Router({ mergeParams: true });
const router6 = express.Router({ mergeParams: true });
const router7 = express.Router({ mergeParams: true });
const router8 = express.Router({ mergeParams: true });
const router9 = express.Router({ mergeParams: true });
const router10 = express.Router({ mergeParams: true });

/* GET welcome message*/
router0.get("/", async function (req, res, next) {
  try {
    res.json("router0 endpoint message");
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server Error for router 0" });
  }
});

// /* GET game categories. */
// router1.get("/api/game-categories", async function (req, res, next) {
//   try {
//     const data = await gameMethods.getGameCategories();
//     // console.log("game categories router " + JSON.stringify(data.rows.rows));
//     res.json(data.rows.rows);
//   } catch (error) {
//     return res.status(500).json({ error: "get categories query failed" });
//   }
// });

/* GET game categories. */
router1.get("/api/games/:gameid/categories", async function (req, res, next) {
  try {
    let gameid = req.params.gameid;
    const data = await gameMethods.getGameCategories(gameid);
    // console.log("game categories router " + JSON.stringify(data.rows.rows));
    res.json(data.rows.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "get game categories by gameid query failed" });
  }
});

/* GET all category clues in a specific category */
// router2.get("/api/category-clues/:catid", async function (req, res, next) {
router2.get("/api/category-clues/:catid", async function (req, res, next) {
  try {
    let catid = req.params.catid;

    const data = await gameMethods.getCategoryClues(catid);
    // console.log("category clues data " + data.rows.rows);
    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({ error: "get clues by category id failed" });
  }
  // res.end();
});

//GET all clues
router3.get("/api/allclues", async function (req, res, next) {
  try {
    const data = await gameMethods.getAllClues();
    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({ error: "get all clues query failed" });
  }
  // res.end();
});

/* GET specific category clue based on clue id */
// router4.get("/api/category-clue/:clue_id", async function (req, res, next) {
router4.get(
  "/api/category-clues/allclues/:clueid",
  async function (req, res, next) {
    try {
      let clueid = req.params.clueid;
      const data = await gameMethods.getClue(clueid);
      console.log("get clue by clue id " + JSON.stringify(data.rows.rows));
      res.json(data.rows.rows);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "get clue by clue id query failed" });
    }

    // res.end();
  }
);

/* UPDATE answered clue id and answeredCorrect  */

router5.patch(
  "/api/category-clues/allclues/:clueid/:answeredCorrect",
  async function (req, res, next) {
    try {
      let clueid = req.params.clueid;
      let answeredCorrect = req.params.answeredCorrect;
      const data = await gameMethods.updateClue(clueid, answeredCorrect);
      console.log(JSON.stringify(data.rows.rows));
      res.json(data.rows.rows);
    } catch (error) {
      return res.status(500).json({
        error: `UPDATE answered clue id and answeredCorrect query failed`,
      });
    }
    // res.end();
  }
);

/* UPDATE answered to reset game to new game */
router6.get("/api/category-clues/newgame", async function (req, res, next) {
  try {
    const data = await gameMethods.resetClues();
    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({
      error: `UPDATE answered to reset game to new game query failed`,
    });
  }
  // res.end();
});

/* UPDATE game score*/
router7.patch("/api/games/:gameid/:score", async function (req, res, next) {
  try {
    let gameid = req.params.gameid;
    let score = req.params.score;
    const data = await gameMethods.setScore(gameid, score);
    console.log("update game from api with score " + req.params.score);
    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({ error: "update score query failed" });
  }
  // res.end();
});

/* GET all games */
router8.get("/api/games", async function (req, res, next) {
  try {
    const data = await gameMethods.getGames();
    res.json(data.rows.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `get games query failed Internal Server Error` });
  }

  // res.end();
});

/* GET game data by game id */
router9.get("/api/games/:gameid", async function (req, res, next) {
  try {
    let gameid = req.params.gameid;
    const data = await gameMethods.getGameData(gameid);
    res.json(data.rows.rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({
        error: `get game data by game id query failed Internal Server Error`,
      });
  }

  // res.end();
});

/* UPDATE answered to reset game to new score */
router10.patch(
  "/api/category-clues/newscore/:gameid",
  async function (req, res, next) {
    try {
      let gameid = req.params.gameid;
      const data = await gameMethods.resetGameScore(gameid);
      console.log("reset game score ")
      res.json(data.rows.rows);
    } catch (error) {
      return res.status(500).json({
        error: `UPDATE game score to 0 query failed`,
      });
    }
    // res.end();
  }
);

// module.exports =   router;
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
  router9,
  router10,
};
