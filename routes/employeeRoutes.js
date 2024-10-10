const express = require("express");
const {
  getEmployees,
  getEmployeeByID,
  updateEmployee,
  deleteEmployee,
  addEmployee,
} = require("../controllers/employeeController");
const employeeRouter = express.Router();

employeeRouter.route("/").get(getEmployees).post(addEmployee);
employeeRouter
  .route("/:id")
  .get(getEmployeeByID)
  .delete(deleteEmployee)
  .put(updateEmployee);

module.exports = employeeRouter;
