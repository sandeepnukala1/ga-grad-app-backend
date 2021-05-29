////////////////////////////////
// MODELS
////////////////////////////////
const {Schema, model} = require("mongoose");
  
  // The User Schema
const UserSchema = new Schema({
      username: {type: String, unique: true, required: true},
      password: {type: String, required: true}
  }, {timestamps: true})
  
const User = model ("User", UserSchema);
  
// Export the Model
module.exports = User;
  
  