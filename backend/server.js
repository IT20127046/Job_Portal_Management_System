const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

//app middleware
app.use(bodyparser.json());
app.use(cors());

// Routes
const applicationRoutes = require("./routes/applicationRoutes");
app.use(applicationRoutes);

const interviewRoutes = require("./routes/interviewRoutes");
app.use(interviewRoutes);

const assessmentRoutes = require("./routes/assessmentRoutes");
app.use(assessmentRoutes);

const userRoutes = require("./routes/userRoutes");
app.use(userRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use(adminRoutes);

const InquiriesRoutes = require("./routes/InquiriesRoutes");
app.use(InquiriesRoutes);

const vacancyRoutes = require("../backend/routes/vacancyRoutes");
app.use(vacancyRoutes);

const resumeRoutes = require("./routes/resumeRoutes");
app.use(resumeRoutes);

const interviewMsgRoutes = require("./routes/interviewMsgRoutes");
app.use(interviewMsgRoutes);

const sendAssessmentRoutes = require("./routes/sendAssessmentRoutes");
app.use(sendAssessmentRoutes);

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.listen(port, () => {
  console.log(`Server is started in port ${port}`);
});
