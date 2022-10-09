const mongoose = require("mongoose");

const inquiries = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  msg: { type: String, required: true },
  reply: { type: String },
});

module.exports = mongoose.model("Inquiries", inquiries);
