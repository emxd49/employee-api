const express = require("express");
const { registerAdmin, loginAdmin } = require("../controllers/adminController");
const adminRouter = express.Router();

adminRouter.route("/register").post(registerAdmin);
adminRouter.route("/login").post(loginAdmin);

module.exports = adminRouter;
