const mongoose = require("mongoose");

const vacancy = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  workPlaceType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  noOfVacancy: {
    type: Number,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  closingDate: {
    type: String,
    required: true,
  },
  adminStatus: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Vacancy", vacancy);
