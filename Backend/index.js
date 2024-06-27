// Initiate the server
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user-route");
const authRoutes = require("./routes/auth-route");
const customError = require("./utils/error");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ 
    success: false,
    message: message,
    status: status
   });
})
