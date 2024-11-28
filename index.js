const express = require("express");
let app = express();
//use path for dev
// require("dotenv").config({ path: "config.env" });
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
const gameMethodsRouter = require("./routes/gameRoutes");

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

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
