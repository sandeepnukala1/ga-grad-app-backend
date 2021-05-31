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
    resume: Boolean,
    research: Boolean,
    linkedin: Boolean,
    followup: Boolean,
    application: Boolean,
    submitted: Boolean,
    notes: String,
    username: {type:String, required: true}
  }, {timestamps: true});

  const Job = model ("job", jobSchema);
  
// Export the Model
module.exports = Job;
  