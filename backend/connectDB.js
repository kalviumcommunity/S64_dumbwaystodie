const mongoose = require("mongoose");

const MONGO_URI = "your_mongodb_atlas_or_local_url_here"; 

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB Connected Successfully!");
  } catch (error) {
    console.error(" MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
