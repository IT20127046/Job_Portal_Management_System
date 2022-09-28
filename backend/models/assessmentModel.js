const mongoose = require("mongoose");

const assessment = new mongoose.Schema({ 
    recruiterId: { type: String, required: true },
    title: { type: String, required: true },
    jobTitle: { type: String, required: true },
    description: { type: String },
    driveLink: { type: String },
});

module.exports = mongoose.model("Assessment", assessment);