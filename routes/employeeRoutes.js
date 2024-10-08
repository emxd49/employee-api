const express = require("express");
const {
  getEmployees,
  getEmployeeByID,
  updateEmployee,
  deleteEmployee,
  addEmployee,
} = require("../controllers/employeeController");
const employeeRouter = express.Router();

router.route("/").get(getEmployees).post(addEmployee);
router
  .route("/:id")
  .get(getEmployeeByID)
  .delete(deleteEmployee)
  .put(updateEmployee);

module.exports = employeeRouter;
