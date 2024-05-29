const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// dotenv.config({ path: "./config.env" });
const morgan = require("morgan");
let app = express();
const gameMethodsRouter = require("./routes/gameRoutes");
const pool = require("./config");

const port = process.env.PORT;
console.log(process.env);

app.use(express.json());
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "okie dokie kimi" });
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

if (process.env.NODE_ENV === "development") {
  //when go to an api url aka make a api request
  //morgan shows the request  url
  console.log("env var for node_env is " + process.env.NODE_ENV);
  app.use(morgan("dev"));
}
