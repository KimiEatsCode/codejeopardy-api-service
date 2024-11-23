const express = require("express");
let app = express();
const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
dotenv.config();
const PORT = process.env.PORT || 8080;

const cors = require("cors");
const gameMethodsRouter = require("./routes/gameRoutes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "localhost:3000",
    "http://codejeopardy-api-service-ap1e:10000/*",
    "localhost:8080/*",
    "https://codejeopardy-api-service-ap1e.onrender.com",
    "https://codejeopardy-api-service-ap1e.onrender.com/api/*"
  ); // Replace "*" with your allowed domains
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
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

//If get error localhost refused to connect
//check you passing 3000 through applisten function below
app.listen(3000, () => {
  console.log(`Example app listening at 3000`);
});
