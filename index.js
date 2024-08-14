const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const router = require("./routes/gameRoutes");
// const pool = require("./config.js");
const router = express.Router();
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});


app.listen(() => {

  console.log(
    `index js message: Server is running at http://localhost:${process.env.PORT}`
  );
});
