const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username already taken"],
  },
  password: { type: String, required: [true, "password is required"] },
  //   token: { type: String, required: [true, "Gender is required"] },
});

module.exports = mongoose.model("admin", adminSchema);
