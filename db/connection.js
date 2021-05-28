///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// get .env variables
require("dotenv").config();

//prevent deprecative warnings
const config = {useUnifiedTopology: true, useNewUrlParser: true};

// import mongoose
const mongoose = require("mongoose");

// pull MONGODB_URL from .env
const { PORT = 3000, MONGODB_URL} = process.env;

// Establish Connection
mongoose.connect(MONGODB_URL, config)
   
  // Connection Events
  mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));
  
///////////////////////////////////
// Exporting Our Connection
///////////////////////////////////
module.exports = mongoose