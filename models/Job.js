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
    resumeReady: {type: Boolean, default: false},
    foundLinkedInConnection: {type: Boolean, default: false},
    recruiterFollowUp: {type: Boolean, default: false},
    applicationSubmitted: {type: Boolean, default: false},
    dateSubmitted: Date

  }, {timestamps: true});

  const Job = model ("job", jobSchema);
  
// Export the Model
module.exports = Job;
  