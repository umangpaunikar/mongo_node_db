const express = require("express");

const routes = express.Router();

const User = require("../../../model/user");

const { check, validationResult } = require("express-validator");
//load input validations
const registerInputValidations = require("../../../validation/registerValidation");

routes.get("/test", (req, res) => {
  res.json({ msg: "this is from user file" });
});

routes.post(
  "/register",
  (req, res) => {

    const { errors, isValid } = registerInputValidations(req.body);
    console.log(errors, isValid)
    
    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      //if not using mongoose 
      // function to insert data inside collection ?
      // db.user.insert({----})
       //db.user.insettMany([{},{},{},{}])
       
       const newUser = new User({ // document inside collection in mongo db
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
      });

      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => console.log(err));

    }
  }
);

module.exports = routes;
