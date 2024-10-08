const { default: mongoose } = require("mongoose");
const mongos = require("mongoose");
const connectDB = () => {
  try {
    const connect = mongoose.connect(process.env.CONNECTION_STRING);
    console.log("DB CONNECTED!");
  } catch (error) {
    console.log("ERROR");
  }
};

module.exports = connectDB;
