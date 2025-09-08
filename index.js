
import express from 'express'; // Import the default export
const app = express(); // Access the express function
//use path for dev
// require("dotenv").config({ path: "config.env" });
import { config } from 'dotenv'; config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// const cors = require("cors");
import cors from 'cors';

// app.options("*", cors());

// app.use(
//   cors({
//     origin: ["*"],
//     credentials: true,
//   })
// );

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST, PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  app.use(cors());
  next();
});


// const gameMethodsRouter = require("./routes/gameRoutes");

import { gameMethodsRouter } from './routes/gameRoutes.js';

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

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
