const mongoose = require("mongoose");

const sendAssessment = new mongoose.Schema({ 
    recruiterId: { type: String, required: true },
    applicantId: { type: String, required: true },
    applicantName: { type: String },
    jobTitle: { type: String, required: true },
    assessmentId: { type: String, required: true },
    assessmentName: { type: String, required: true },
    answer: { type: String },
});

module.exports = mongoose.model("SendAssessment", sendAssessment);