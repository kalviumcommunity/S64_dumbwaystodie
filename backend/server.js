const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./connectDB"); 
const menuRoutes = require("./routes"); 


const app = express();

connectDB();

app.use(express.json()); 

app.get("/ping", (req, res) => {
  try {
    res.send("pong");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});


app.get("/", (req, res) => {
  const status = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to the API", db_status: status });
});


app.use("/api", menuRoutes); 


const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
