const jWT = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler");
const adminModel = require("../models/adminModel");

const registerAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const existingAdmin = await Admin.findOne({ username: username });
  if (existingAdmin) {
    res.status(400)
    throw new Error("Admin already exists!")
  }

  const hashedPassword = bcrypt.hash(password, 10)
  

});

const loginAdmin = () => {};

module.exports = { registerAdmin, loginAdmin };
