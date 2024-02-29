// import mongoose from "mongoose";
const mongoose = require("mongoose");

const Apply_JobSchema = new mongoose.Schema(
  {
    // fullname: {
    //   type: String,
    //   require: [true, "User Name is required"],
    // },
    // email: {
    //   type: String,
    //   require: [true, "Email Id is required"],
    // },
    // phonenumber: {
    //   type: String,
    //   require: [true, "Phone Number  is required"],
    // },
    // workexperience: {
    //   type: String,
    //   required: false,
    // },
    inputvalue:{
      type:String,
      require:true
    },
    resume: {
      type: String,
      require: [true, "Resume required"],
    },
  },
  { timestamps: true }
);
const Apply_Job_Model = mongoose.model("Apply_Job_Model", Apply_JobSchema);

module.exports = Apply_Job_Model;
