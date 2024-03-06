const mongoose = require("mongoose");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob:{
    type:Date,
    required: true,
  },
  age: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  gender:{
    type:String,
    enum:["male","female"],
    required: true,
  },
  role:{
    type:String,
    enum:["patient","doctor","admin"],
    required: true,
  }
});
module.exports = mongoose.model("User", userSchema);
