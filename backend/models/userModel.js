const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  field: {
    type: String,
  },
  address: {
    type: String,
  },

  type: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
  website: {
    type: String,
  },
  csize: {
    type: String,
  },
  founded: {
    type: String,
  },
  dob: {
    type: String,
  },
  sex: {
    type: String,
  },
  about: {
    type: String,
  },
  dateRegistered: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", userSchema);
