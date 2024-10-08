const connectDB = require("./database/dbConnection");
const { errorHandler } = require("./middleware/errorHandler");
const cors = require("cors");
const port = process.env.PORT || 5000;

const express = require("express");
const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/employee", require("./routes/employeeRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log("Server runnning on PORT", port);
});
