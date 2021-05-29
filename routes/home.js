///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router();
const User = require("../models/User.js");
const Job = require ("../models/Job");
const auth = require("../auth/index");

// create a test route
router.get("/", (req, res) => {
  res.send("hello world");
});

// JOBS INDEX ROUTE
router.get("/jobs", async (req, res) => {
  try {
    const {username} = req.payload; 
    res.status(200).json(await Job.find({username}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// JOB CREATE ROUTE
router.post("/jobs", async (req, res) => {
try {
  const {username} = req.payload; 
  req.body.username = username
  res.status(200).json(await Job.create(req.body));
} catch (error) {
  //send error
  res.status(400).json(error);
}
});


// UPDATE JOB  ROUTE
router.put("/jobs/:id", async (req, res) => {
  try {
    const {username} = req.payload; 
    req.body.username = username;
    const {id} = req.params
    res.status(200).json(await Job.findByIdAndUpdate(id, req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// DELETE JOB ROUTE
router.delete("/jobs/:id", async (req, res) => {
  try {
    // const {username} = req.payload; 
    // req.body.username = username;
    const {id} = req.params
    res.status(200).json(await Job.findByIdAndUpdate(id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router;