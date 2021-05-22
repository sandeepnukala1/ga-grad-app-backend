///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
// pull MONGODB_URL from .env
const { PORT = 3000, MONGODB_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import middlware
const cors = require("cors");
const morgan = require("morgan");


///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
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

////////////////////////////////
// MODELS
////////////////////////////////
const JobSchema = new mongoose.Schema({
  title: {type:String, required:true},
  description:{type: String, required:true},
  requirements: String,
  location: String,
  salary: String,
});

const Job = mongoose.model("Job", JobSchema);

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});


// JOBS INDEX ROUTE
app.get("/job", async (req, res) => {
  try {
    // send all posted jobs
    res.json(await Job.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// JOB CREATE ROUTE
app.post("/job", async (req, res) => {
  try {
    // send all job
    res.json(await Job.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// UPDATE JOB  ROUTE
app.put("/job/:id", async (req, res) => {
  try {
    // send all job and find job by ID to update
    res.json(
      await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// DELETE JOB ROUTE
app.delete("/job/:id", async (req, res) => {
  try {
    // send all jobs and remove job by ID
    res.json(await Job.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));