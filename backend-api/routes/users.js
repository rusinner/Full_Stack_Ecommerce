const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const User = require("../models/User");
//UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //check password in case of changing
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
