const createError = require("http-errors");
const express = require("express");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const assetPath = require("./asset_path.js");

const db = require("./modules/db.js");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const messagesRouter = require("./routes/messages");
const loginRouter = require("./routes/login");

const projectRoot = path.join(__dirname, "../..");
const serverRoot = path.join(__dirname, ".");

const app = express();

// Connect to DB, and insert default user if necessary
db.connect().then(db => {
  let collection = db.collection("users");
  collection.countDocuments().then(res => {
    if (res === 0) {
      collection
        .insertOne({
          login: "laurent",
          password: "laurent",
          firstName: "Laurent",
          lastName: "Leleux"
        })
        .catch(err => {
          console.log("[App] Unable to insert default user");
        });
    }
  });
});

app.locals.assetPath = assetPath;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(serverRoot, "public"),
    dest: path.join(serverRoot, "public"),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../../dist")));

app.use("/", indexRouter);
app.use("/api", function(req, res, next) {
  if ("authorization" in req.headers) {
    try {
      jwt.verify(req.headers.authorization, secret);
      next();
    } catch (err) {
      res.status(422).send(err);
    }
  }
});
app.use("/api/users", usersRouter);
app.use("/api/messages", messagesRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
