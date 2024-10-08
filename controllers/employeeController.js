const Employee = require("../models/employeeModel");

const asyncHandler = require("express-async-handler");

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
});
const getEmployeeByID = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("Employee not found!");
  }
  res.status(200).json(employee);
});
const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("Employee not found!");
  }
  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedEmployee);
});
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("User not found!");
  }
  await Employee.findByIdAndDelete(req.params.id);
  res.status(200).json(employee);
});
const addEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, gender, email, education, dob, experience } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !gender ||
    !email ||
    !education ||
    !dob ||
    !experience
  ) {
    res.status(400);
    throw new Error("ALL FIELDS ARE MANDATORY");
  }
  const employee = await Employee.create({
    firstName,
    lastName,
    gender,
    email,
    education,
    dob,
    experience,
  });
  res.status(201).json(employee);
});

module.exports = {
  getEmployees,
  getEmployeeByID,
  updateEmployee,
  deleteEmployee,
  addEmployee,
};
