const router = require("express").Router();
//import models from mongoDB
const User = require("../models/User");
//encrypted password in DB library
const CryptoJS = require("crypto-js");

//register means send this model to DB
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });

  //save to DB

  try {
    const savedUser = await newUser.save();
    //send to client side
    res.status(201).json(savedUser);
  } catch (error) {
    //normally specify all error codes in if statements separately
    res.status(500).json(error);
  }
});

//LOGIN

module.exports = router;
