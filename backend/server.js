require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./connectDB");

const app = express();
const PORT = process.env.PORT;
// MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.log("MongoDB connection error:", err));
connectDB();
// Home Route with DB Status
app.get("/", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to the ASAP Project!", databaseStatus: dbStatus });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


