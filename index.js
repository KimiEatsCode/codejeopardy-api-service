const express = require("express");
const cors = require("cors");
const gameMethodsRouter = require("./routes/gameRoutes");
const pool = require("./config.js");

const app = express();

app.use(cors());

// var corsOptions = {
//   origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// simple route
// app.get("/", (req, res) => {
//   res.json({
//     message:
//       "test: route in index js not gameRoutes js Get a response for codejeo app.",
//   });
// });

//app use needs to have endpoint as first parameter then router with the endpoint http call as second parameter)

app.use("/", gameMethodsRouter.router0);
app.use("/api/game-categories", gameMethodsRouter.router1);
app.use(gameMethodsRouter.router2);
app.use(gameMethodsRouter.router3);
app.use(gameMethodsRouter.router4);
app.use(gameMethodsRouter.router5);
app.use(gameMethodsRouter.router6);
app.use(gameMethodsRouter.router7);
app.use(gameMethodsRouter.router8);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  //   // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //   // render the error page
  res.status(err.status || 500);
  // render causes error because express will look for a view engine to render to but this api is for a vue app not for this express
  // res.render("error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `index js message: Server is running at http://localhost:${PORT}`
  );
});
