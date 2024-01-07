const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const payload = {
    userName,
    email,
    password: hashPassword,
  };
  const user = await User.create(payload);
  res.json({ message: "user registered" });
});
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "user login" });
});
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
