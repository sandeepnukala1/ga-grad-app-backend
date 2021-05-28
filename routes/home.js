///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/User.js")

/////////////////////////////////
// Custom Middleware Functions
/////////////////////////////////

// const addUserToRequest = async (req, res, next) => {
//     // check if the user is logged in
//     if (req.session.userId){
//         req.user = await User.findById(req.session.userId)
//         next()
//     } else {
//         next()
//     }
// }

// // checks if req.user exists, if not, redirect to login
// const isAuthorized = (req, res, next) => {
//     if (req.user){
//         next()
//     } else {
//         res.redirect("/auth/login")
//     }
// }


///////////////////////////////
// Router Specific Middleware
////////////////////////////////

// router.use(addUserToRequest)

////////////////////////////////
//Router Routes
///////////////////////////////




// create a test route
router.get("/", (req, res) => {
  res.send("hello world");
});

// JOBS INDEX ROUTE
router.get("/jobs", async (req, res) => {
  try {
    // send all posted jobs
    res.json(await Job.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// JOB CREATE ROUTE
router.post("/jobs", async (req, res) => {
  try {
    // send all job
    res.json(await Job.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// UPDATE JOB  ROUTE
router.put("/jobs/:id", async (req, res) => {
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
router.delete("/jobs/:id", async (req, res) => {
  try {
    // send all jobs and remove job by ID
    res.json(await Job.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router