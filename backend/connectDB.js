const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then((data)=>{
        console.log("MongoDB Connected Successfully")
    })
    .catch((error)=> {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // Exit process with failure
  })
};

module.exports = connectDB;
