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

app.use(cors()); // Enable CORS for all routes

// Optional: Configure specific CORS options
app.use(
  cors({
    origin: "*", // Replace with your Vue app's origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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
app.listen(3000, () => {
  console.log(`Example app listening at 3000`);
});

if (process.env.NODE_ENV = "development") {
  //when go to an api url aka make a api request
  //morgan shows the request  url
  console.log("env var for node_env is " + process.env.NODE_ENV);
  app.use(morgan("dev"));
}
