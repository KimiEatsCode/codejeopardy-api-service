const express = require("express");
const gameMethods = require("../services/gameMethods");
const cors = require("cors");
const app = express();

const router = express.Router();
// Apply CORS to all routes in the router
<<<<<<< HEAD
router.use(cors());
// app.options("*", cors());
// app.use(cors());
=======
app.use(
  express.urlencoded({
    extended: true,
  })
);
router.use(cors());
app.options("*", cors());

>>>>>>> origin/main
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
<<<<<<< HEAD
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
=======
  res.header(
    "Access-Control-Allow-Methods",
    "GET, UPDATE, PATCH, PUT, POST, DELETE, OPTIONS"
  );
>>>>>>> origin/main
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/*have to have express.Router() for each http call*/
const router0 = express.Router({ mergeParams: true });
const router1 = express.Router({ mergeParams: true });
const router2 = express.Router({ mergeParams: true });
const router3 = express.Router({ mergeParams: true });
const router4 = express.Router({ mergeParams: true });
const router5 = express.Router({ mergeParams: true });
const router6 = express.Router({ mergeParams: true });
const router7 = express.Router({ mergeParams: true });
const router8 = express.Router({ mergeParams: true });

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

<<<<<<< HEAD
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

=======
>>>>>>> origin/main
/* GET game categories. */
router1.get("/api/game-categories", async function (req, res, next) {
  try {
    const data = await gameMethods.getGameCategories();
<<<<<<< HEAD
    console.log("game categories router " + JSON.stringify(data.rows.rows));
=======
    // console.log("game categories router " + JSON.stringify(data.rows.rows));
>>>>>>> origin/main
    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({ error: "get categories query failed" });
  }
});

/* GET all category clues in a specific category */
// router2.get("/api/category-clues/:catid", async function (req, res, next) {
router2.get("/api/category-clues/:catid", async function (req, res, next) {
  try {
    let catid = req.params.catid;

    const data = await gameMethods.getCategoryClues(catid);
<<<<<<< HEAD
    console.log("category clues data " + data.rows.rows);
=======
    // console.log("category clues data " + data.rows.rows);
>>>>>>> origin/main
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
router4.get("/api/category-clue/:clueid", async function (req, res, next) {
  try {
<<<<<<< HEAD
    let id = req.params.clue_id;
    console.log(id);
    const data = await gameMethods.getClue(id);
=======
    let clueid = req.params.clueid;
    const data = await gameMethods.getClue(clueid);
    console.log("clue id gotten gameRoutes " + JSON.stringify(data));
>>>>>>> origin/main
    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({ error: "get clue by clue id query failed" });
  }

  // res.end();
});

/* UPDATE answered clue id and answeredCorrect  */
<<<<<<< HEAD
// router5.put(
//   "/api/category-clue/:clueid/:answeredCorrect",
//   async function (req, res, next) {
  router5.put(
    "/api/category-clue/:clueid",
    async function (req, res, next) {
    try {
      let id = req.params.clueid;
      //let answeredCorrect = req.params.answeredCorrect;
      const data = await gameMethods.updateClue(id);
      res.json(data.rows.rows);
    } catch (error) {
      return res.status(500).json({
        error: `Update clue by clue id with answer correct boolean result query failed`,
=======

router5.patch(
  "/api/category-clue/:clueid/:answeredCorrect",
  async function (req, res, next) {
    try {
      let clueid = req.params.clueid;
      let answeredCorrect = req.params.answeredCorrect;
      const data = await gameMethods.updateClue(clueid, answeredCorrect);
      console.log(JSON.stringify(data));
      res.json(data.rows.rows);
    } catch (error) {
      return res.status(500).json({
        error: `UPDATE answered clue id and answeredCorrect query failed`,
>>>>>>> origin/main
      });
    }
    // res.end();
  }
);

/* UPDATE answered to reset game to new game */
router6.get("/api/category-clue/newgame", async function (req, res, next) {
  try {
    const data = await gameMethods.resetClues();
    res.json(data.rows.rows);
<<<<<<< HEAD
  } catch (err) {
    if (err) {
      return res
        .status(axios.HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: err, message: "reset clues query failed" }); // 500
    }
=======
  } catch (error) {
    return res.status(500).json({
      error: `UPDATE answered to reset game to new game query failed`,
    });
>>>>>>> origin/main
  }
  // res.end();
});

/* UPDATE game score*/
<<<<<<< HEAD
router7.put("/api/game/:gameid/:score", async function (req, res, next) {
=======
router7.patch("/api/game/:gameid/:score", async function (req, res, next) {
>>>>>>> origin/main
  try {
    let gameid = req.params.gameid;
    let score = req.params.score;
    const data = await gameMethods.setScore(gameid, score);
    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({ error: "update score query failed" });
  }
  // res.end();
});

<<<<<<< HEAD
=======
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

>>>>>>> origin/main
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
};
