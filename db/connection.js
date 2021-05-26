///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
// import mongoose
const mongoose = require("mongoose");

// pull MONGODB_URL from .env
const { PORT = 3000, MONGODB_URL } = process.env;

// Establish Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  // Connection Events
  mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));
  
///////////////////////////////////
// Exporting Our Connection
///////////////////////////////////
module.exports = mongoose