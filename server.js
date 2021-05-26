///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// grab environment variables
require("dotenv").config();
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("./db/connection");
const SECRET = process.env.SECRET || "secret";
// pull MONGODB_URL from .env
const { PORT = 3000, MONGODB_URL } = process.env;
// import middlware
const cors = require("cors");
const morgan = require("morgan");

//import bcrypt
const bcrypt = require('bcrypt');
//import session 
const session = require('express-session');
const methodOverride = require("method-override");
//for Homerouter
const HomeRouter = require("./routes/home");
const connect = require("connect-mongodb-session")(session) // store cookies in mongo


// ///////////////////////////////////////////
// //AUTH
// ////////////////////////////////////////////
// // inside of playground/bcrypt.js

// const SALT_ROUNDS = bcrypt.genSaltSync(10);

// const password = 'supersecretpassword';
// /
// const hashedString = bcrypt.hashSync(password, SALT_ROUNDS);

// SESSION MIDDLEWARE REGISTRATION (adds req.session property)
app.use(
  session({
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    saveUninitialized: true, // create session regardless of changes
    resave: true, //save regardless of changes
    store: new connect({
      uri: process.env.MONGODB_URL,
      databaseName: "sessions",
      collection: "sessions",
    }),
  })
);


///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

///////////////////////////////
// ROUTER
////////////////////////////////

//HomeRouter
app.use("/", HomeRouter);


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));