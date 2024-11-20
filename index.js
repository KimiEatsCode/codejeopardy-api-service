const express = require("express");
const dotenv = require("dotenv");
if ((process.env.NODE_ENV = "development")) {
  dotenv.config({ path: "./config.env" });
} else if ((process.env.NODE_ENV = "production")) {
  dotenv.config();
}
const morgan = require("morgan");
let app = express();
const cors = require('cors');
const pool = require("./config");
const port = 3000;
const gameMethods = require("./services/gameMethods");
const gameMethodsRouter = require("./routes/gameRoutes");

app.use(cors())

app.use(function (req, res, next) {
  const allowedOrigins = [
    "*"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(gameMethodsRouter.router0);
app.use(gameMethodsRouter.router1);
app.use(gameMethodsRouter.router2);
app.use(gameMethodsRouter.router3);
app.use(gameMethodsRouter.router4);
app.use(gameMethodsRouter.router5);
app.use(gameMethodsRouter.router6);
app.use(gameMethodsRouter.router7);
app.use(gameMethodsRouter.router8);

//If get error localhost refused to connect
//check you passing 3000 through applisten function below
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

if ((process.env.NODE_ENV = "development")) {
  //when go to an api url aka make a api request
  //morgan shows the request  url
  console.log("env var for node_env is " + process.env.NODE_ENV);
  app.use(morgan("dev"));
}
