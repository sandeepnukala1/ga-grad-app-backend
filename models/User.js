////////////////////////////////
// MODELS
////////////////////////////////

const {Schema, model} = require("mongoose");

//Job Schema
const JobSchema = new Schema({
    title: {type:String, required:true},
    description:{type: String, required:true},
    requirements: String,
    location: String,
    salary: String,
  }, {timestamps: true});
  
  // The User Schema
const UserSchema = new Schema({
      username: {type: String, unique: true, required: true},
      password: {type: String, required: true},
      jobs: [JobSchema],
  }, {timestamps: true})
  
const User = model ("User", UserSchema);
  
// Export the Model
module.exports = User;
  
  