const router = require("express").Router();
//import models from mongoDB
const User = require("../models/User");
//encrypted password in DB library
const CryptoJS = require("crypto-js");
//JSON WebToken
const jwt = require("jsonwebtoken");

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

router.post("/login", async (req, res) => {
  //find user from DB
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials!");
    //decrypt password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong Credentials!");

    //create JWT
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    //send all info to database except from password for security reasons
    //._doc is only beacuse of mongoDB stores data in this file
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
