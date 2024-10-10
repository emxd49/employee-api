const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const adminModel = require("../models/adminModel");

const registerAdmin = asyncHandler(async (req, res) => {
  console.log(req.body);
  
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const existingAdmin = await adminModel.findOne({ username: username });
  if (existingAdmin) {
    res.status(400);
    throw new Error("username already exists!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await adminModel.create({ username: username, password: hashedPassword });
  res.status(201).json({ message: "Successfully created admin" });
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const admin = await adminModel.findOne({ username });

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    res.status(401);
    throw new Error("invalid username or password!");
  }
  const accessToken = jwt.sign(
    {
      username: username,
    },
    process.env.JWTKEY,
    { expiresIn: "100s" }
  );
  res.status(200).json({ accessToken: accessToken });
});

module.exports = { registerAdmin, loginAdmin };
