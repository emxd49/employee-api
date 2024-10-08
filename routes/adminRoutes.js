const express = require('express')
const { createAdmin } = require('../controllers/adminController')
const adminRouter = express.Router()

adminRouter.route("/register").post(createAdmin)
adminRouter.route("/login").post(loginAdmin)