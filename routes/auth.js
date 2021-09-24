const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // hasing password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    console.log(hashedPass);
    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login

module.exports = router;
