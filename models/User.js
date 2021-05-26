////////////////////////////////
// MODELS
////////////////////////////////

const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description:{type: String, required:true},
    requirements: String,
    location: String,
    salary: String,
  }, {timestamps: true});
  
  // The User Schema
const UserSchema = new mongoose.Schema({
      username: {type: String, unique: true, required: true},
      password: {type: String, required: true},
      jobs: [JobSchema],
  }, {timestamps: true})
  
  
const User = mongoose.model("User", UserSchema);
  
// Export the User Model
module.exports = User
  
  