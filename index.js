const express = require("express");
const cors = require("cors");
const gameMethodsRouter = require("./routes/gameRoutes");
const connection = require("./config.js");

const app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(gameMethodsRouter.router0);
app.use(gameMethodsRouter.router1);
app.use(gameMethodsRouter.router2);
app.use(gameMethodsRouter.router3);
app.use(gameMethodsRouter.router4);
app.use(gameMethodsRouter.router5);
app.use(gameMethodsRouter.router6);
app.use(gameMethodsRouter.router7);
app.use(gameMethodsRouter.router8);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

app.listen(() => {
  console.log(
    `index js message: Server is running at http://localhost:${process.env.PORT}`
  );
});
