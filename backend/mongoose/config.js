
const mongoose = require("mongoose")

  const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/dear_jobs");
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("err",error)
    await mongoose.disconnect();   
    process.exit(1);
  }
};

module.exports = ConnectDB
