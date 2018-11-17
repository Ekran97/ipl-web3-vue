var express = require("express");
var router = express.Router();
const db = require("../modules/db.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

router.post("/", (req, res, next) => {
  // Si JWT
  if ("authorization" in req.headers) {
    try {
      jwt.verify(req.headers.authorization, secret);
      res.status(200).json({ jwt: req.headers.authorization });
      return;
    } catch (err) {
      //Si JWT incorrect
      console.log("Erreur JWT");
    }
  }

  // Login
  db.db
    .collection("users")
    .findOne({ email: req.body.email })
    .then(user => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res
          .status(200)
          .json({ jwt: jwt.sign({ email: user.email, id: user._id }, secret) });
      } else {
        res.status(403).send("Wrong password");
      }
    })
    .catch(err => {
      console.log(err);
      if (req.body.email == undefined || req.body.password == undefined)
        res.status(422).send(err);
      else res.status(500).send(err);
    });
});

module.exports = router;
