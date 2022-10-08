const mongoose = require("mongoose");

const interviewMessage = new mongoose.Schema({ 
    recruiterId: { type: String, required: true },
    jobSeekerId: { type: String, required: true },
    mesgTitle: { type: String, required: true },
    message: { type: String, required: true },
});

module.exports = mongoose.model("InterviewMessage", interviewMessage);