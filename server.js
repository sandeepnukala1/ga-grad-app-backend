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
//model
const User = require ("./models/User");
// import middlware
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require('bcrypt');
//import session 
const session = require('express-session');
const methodOverride = require("method-override");
//for Homerouter
const HomeRouter = require("./routes/home");
const connect = require("connect-mongodb-session")(session) // store cookies in mongo
//Auth router
const AuthRouter = require ("./controllers/user")
const auth = require ("./auth/index")

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

///////////////////////////////
// ROUTER
////////////////////////////////
app.use("/", HomeRouter);
app.get("/", auth, (req, res) => {
    res.json(req.payload);
});

app.use("/auth", AuthRouter);


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));