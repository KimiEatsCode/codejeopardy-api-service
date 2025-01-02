const express = require("express");
let app = express();
//use path for dev
require("dotenv").config({ path: "config.env" });
// require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const cors = require("cors");


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST, PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  app.use(cors());
  next();
});

const gameMethodsRouter = require("./routes/gameRoutes");
const usersMethodsRouter = require("./routes/usersRoutes");

//games routes
app.use(gameMethodsRouter.router0);
app.use(gameMethodsRouter.router1);
app.use(gameMethodsRouter.router2);
app.use(gameMethodsRouter.router3);
app.use(gameMethodsRouter.router4);
app.use(gameMethodsRouter.router5);
app.use(gameMethodsRouter.router6);
app.use(gameMethodsRouter.router7);
app.use(gameMethodsRouter.router8);
app.use(gameMethodsRouter.router9);
app.use(gameMethodsRouter.router10);
//users route
app.use(usersMethodsRouter.router01);
app.use(usersMethodsRouter.router02);
app.use(usersMethodsRouter.router03);

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
