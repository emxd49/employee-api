const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  firstName: { type: String, required: [true, "First Name is required"] },
  lastName: { type: String, required: [true, "Last Name is required"] },
  gender: { type: String, required: [true, "Gender is required"] },
  email: { type: String, required: [true, "Email is required"] },
  education: { type: String, required: [true, "Education is required"] },
  dob: { type: Date, required: [true, "Date of Birth is required"] },
  experience: { type: Number, required: [true, "Experience is required"] },
});

module.exports = mongoose.model("Employee", employeeSchema);
