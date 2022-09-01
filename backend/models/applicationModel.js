const mongoose = require("mongoose");

const application = new mongoose.Schema({ 
    vacancyNo: { type: String, required: true },
    companyId: { type: String, required: true },
    companyName: {type: String, required: true},
    applicantId: { type: String, required: true },
    jobTitle: { type: String, required: true },
    applicantFirstName: { type: String, required: true },
    applicantLastName: { type: String, required: true },
    applicantEmail: { type: String, required: true },
    applicantPhone: { type: String, required: true },
    appliedDate: { type: Date, required: true },
    educationalQualifications: [{type: Object, required: true}], 
    experience: [{type: Object}], 
    skills: [{type: Object, required: true}], 
    languages: [{type: Object, required: true}], 
    referees: [{type: Object}], 
    coverLetter: { type: String, required: true },
    additionalInformation: { type: String},
    status: { type: String, required: true },
    comments: { type: String},
});

module.exports = mongoose.model("Application", application);