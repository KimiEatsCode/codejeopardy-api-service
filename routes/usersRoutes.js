import express, { Router, urlencoded } from "express";
import {
  getUsers,
  getUserGames,
  getUserGameInfo,
  setUserScore,
  updateUserClue,
  getUserClue,
  resetUserClues,
} from "..services/usersMethods";
import cors from "cors";
const app = express();

const router = Router();
// Apply CORS to all routes in the router
app.use(
  urlencoded({
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

const router01 = Router();
const router02 = Router();
const router03 = Router();
const router04 = Router();
const router05 = Router();
const router06 = Router();
const router07 = Router();
const router08 = Router();
const router09 = Router();
//Routes that use userMethods

/* GET all users */
router01.get("/api/users", async function (req, res, next) {
  try {
    const data = await getUsers();

    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({
      error: `get users info query failed`,
    });
  }
  // res.end();
});

/* GET all games for a user */
router02.get("/api/gameslist/:userid", async function (req, res, next) {
  try {
    let userid = req.params.userid;
    const data = await getUserGames(userid);
    res.json(data.rows.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `get games for user query failed Internal Server Error` });
  }
  // res.end();
});

/* GET one game info for a user */
router03.get("/api/gameslist/:userid/:gameid", async function (req, res, next) {
  try {
    let userid = req.params.userid;
    let gameid = req.params.gameid;
    const data = await getUserGameInfo(userid, gameid);
    // console.log("route get one game info for user " + JSON.stringify(data.rows.rows));
    res.json(data.rows.rows);
  } catch (error) {
    return res.status(500).json({
      error: `get one game for user query failed Internal Server Error`,
    });
  }
  // res.end();
});

//Update user score for a game
router04.patch(
  "/api/users/:userid/:gameid/:score",
  async function (req, res, next) {
    try {
      let userid = req.params.userid;
      let gameid = req.params.gameid;
      let score = req.params.score;

      const data = await setUserScore(userid, gameid, score);
      res.json(data.rows.rows);
    } catch (error) {
      return res.status(500).json({ error: "update user score query failed" });
    }
    // res.end();
  }
);

// UPDATE users clues - clue id and answeredCorrect
router05.patch(
  "/api/category-clues/users/:userid/:clueid/:answeredCorrect/:catid/:gameid",
  async function (req, res, next) {
    try {
      let userid = req.params.userid;
      let clueid = req.params.clueid;
      let answeredCorrect = req.params.answeredCorrect;
      let catid = req.params.catid;
      let gameid = req.params.gameid;

      const data = await updateUserClue(
        userid,
        clueid,
        answeredCorrect,
        catid,
        gameid
      );

      res.json(data.rows.rows);
    } catch (error) {
      return res.status(500).json({
        error: `UPDATE users clues table answered clue id and answeredCorrect query failed`,
      });
    }
    // res.end();
  }
);

router06.get(
  "/api/category-clues/user/:userid/:catid",
  async function (req, res, next) {
    try {
      let userid = req.params.userid;
      let catid = req.params.catid;

      const data = await getUserClue(userid, catid);
      // console.log("get clue by clue id " + JSON.stringify(data.rows.rows));
      res.json(data.rows.rows);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "get clue by clue id query failed" });
    }

    // res.end();
  }
);

//Reset users clues in users_clues table for gameid
router07.patch(
  "/api/category-clues/user/:userid/:gameid",
  async function (req, res, next) {
    try {
      let userid = req.params.userid;
      let gameid = req.params.gameid;
      const data = await resetUserClues(userid, gameid);
      console.log("reset clues  " + data);
      res.json(data.rows.rows);
    } catch (error) {
      return res.status(500).json({
        error: `UPDATE users clues to answercorrect 0 query failed`,
      });
    }
    // res.end();
  }
);

export default {
  router01,
  router02,
  router03,
  router04,
  router05,
  router06,
  router07,
};
