const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const gameRoutes = require("./routes/gameRoutes");
const mysql2 = require("mysql2");
//in dev use
dotenv.config({ path: "./config.env" });
//in prod use
// dotenv.config();
const app = express();
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(gameRoutes.router0);
app.use(gameRoutes.router1);
app.use(gameRoutes.router2);
app.use(gameRoutes.router3);
app.use(gameRoutes.router4);
app.use(gameRoutes.router5);
app.use(gameRoutes.router6);
app.use(gameRoutes.router7);
app.use(gameRoutes.router8);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(Error(404));
});

// error handler
app.use(function (err, req, res, next) {
  //   // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //   // render the error page
  res.status(err.status || 500);
  // res.render("error");
  // render causes error because express will look for a view engine to render to but this api is for a vue app not for this express
});

app.get("/test", (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results);
    }
  });
});
app.listen(3700, () => {
  console.log(`index js message: Server is running at http://localhost:3700`);
});

const pool = mysql2.createPool({
  connectionLimit: 5,
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database connected successfully");
  connection.release();
});

module.exports = pool;
