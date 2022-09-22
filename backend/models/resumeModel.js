const mongoose = require("mongoose");

const resume = new mongoose.Schema({
    userId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    createdDate: { type: Date, required: true },
    updatedDate: { type: Date, required: true },
    educationalQualifications: [{type: Object, required: true}],
    experience: [{type: Object}],
    skills: [{type: Object, required: true}],
    languages: [{type: Object, required: true}],
    referees: [{type: Object}],
})

module.exports = mongoose.model("Resume", resume);