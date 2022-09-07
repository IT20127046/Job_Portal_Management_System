const mongoose = require("mongoose");

const interview = new mongoose.Schema({ 
    applicantId: { type: String, required: true },
    applicantName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    description: { type: String },
    interviewDate: { type: String, required: true },
    interviewTime: { type: String, required: true },
    interviewMode: { type: String, required: true },
    status: { type: String, required: true },
});

module.exports = mongoose.model("Interview", interview);