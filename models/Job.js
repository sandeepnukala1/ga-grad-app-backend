////////////////////////////////
// MODELS
////////////////////////////////

const {Schema, model} = require("mongoose");

//Job Schema
const jobSchema = new Schema({
    title: {type:String, required:true},
    description:{type: String, required:true},
    requirements: String,
    location: String,
    salary: String,
    username: {type:String, required: true},
    resumeReady: Boolean,
    foundLinkedInConnection: Boolean,
    recruiterFollowUp: Boolean,
    applicationSubmitted: Boolean,
    dateSubmitted: Date

  }, {timestamps: true});

  const Job = model ("job", jobSchema);
  
// Export the Model
module.exports = Job;
  