const express = require("express");

const routes = express.Router();

// const User = require("../../../model/user");

const { check, validationResult } = require("express-validator");
//load input validations
const registerInputValidations = require("../../../validation/registerValidation");

routes.get("/test", (req, res) => {
  res.json({ msg: "this is from user file" });
});

routes.post(
  "/register",
  check("name", "Name is required").notEmpty,
  check("email", "Name is required").isEmail(),
  check("Password", "Name is required").isLength({ min: 6 }),
  (req, res) => {
    // const {errors, isValid} = registerInputValidations(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
      });

      newUser
        .save()
        .then((user) => req.json(user))
        .catch((err) => console.log(err));

      //return res.json(req.body);
    }
  }
);

module.exports = routes;
