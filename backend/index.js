const express = require("express");
const mongoose = require("mongoose");

// Require Environment Variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Create MongoDB Connection using mongoose
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connection Open");
  })
  .catch((err) => {
    console.log("Error in Database Connection", err);
  });

// Require Routes
const cardRoutes = require("./routes/card");

// Create Express App
const app = express();

// Enable cors
const cors = require("cors");
app.use(
  cors({
    origin: process.env.FRONTEND_HOST,
    credentials: true,
  })
);

// Setup to handle POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create Routes
app.use("/cards", cardRoutes);

app.get("/ping", (req, res) => {
  return res
    .status(200)
    .json({ status: true, message: "Server Up and Running" });
});

// Start Backend Server
app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
