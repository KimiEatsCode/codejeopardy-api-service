const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// dotenv.config({ path: "./config.env" });
const morgan = require("morgan");
let app = express();
const pool = require("./config");
const port = process.env.PORT;
const gameMethods = require("./services/gameMethods");
const gameMethodsRouter = require("./routes/gameRoutes");
console.log("console logging environ vars" + process.env);

app.use(express.json());
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res, next) => {
  try {
    const data = await gameMethods.getGames();
    res.json(data.rows.rows[0]);
  } catch (err) {
    console.error(`Error while getting games `, err.message);
    next(err);
  }
  res.end();
});

app.use(gameMethodsRouter.router0);
app.use(gameMethodsRouter.router1);
app.use(gameMethodsRouter.router2);
app.use(gameMethodsRouter.router3);
app.use(gameMethodsRouter.router4);
app.use(gameMethodsRouter.router5);
app.use(gameMethodsRouter.router6);
app.use(gameMethodsRouter.router7);
app.use(gameMethodsRouter.router8);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});

if (process.env.NODE_ENV === "development") {
  //when go to an api url aka make a api request
  //morgan shows the request  url
  console.log("env var for node_env is " + process.env.NODE_ENV);
  app.use(morgan("dev"));
}
