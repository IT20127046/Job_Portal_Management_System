import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ScheduleInterview() {
  const [applicantId, setApplicantId] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [interviewMode, setInterviewMode] = useState("");
  const [status, setStatus] = useState("Not Completed");

  useEffect(() => {
    document.title = "SchduleInterview";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      applicantId: applicantId,
      applicantName: applicantName,
      jobTitle: jobTitle,
      description: description,
      interviewDate: interviewDate,
      interviewTime: interviewTime,
      interviewMode: interviewMode,
      status: status
    }

    
    saveInterview(data);

  };

  const saveInterview = (data) => {
    console.log(data);
    axios.post(`http://localhost:5000/interview/add`, data).then((res) => {
            if(res.data.success){
                console.log("Success");
            }    
    });
  }

  return (
    <div>
      <div className="container">
        <br />

        <h4>Schdule New Interview</h4>
        <hr />

        <div className="container">
          <div
            className="container bg-light text-dark p-5"
            style={{ "max-width": "600px", border: "2px solid #000000" }}
          >
            <center>
              <h4>Schdule New Interview</h4>
            </center>
            <br />
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Applicant ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="applicantId"
                  name="applicantId"
                  value={applicantId}
                  onChange={(e) => {
                    setApplicantId(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Applicant Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="applicantName"
                  name="applicantName"
                  value={applicantName}
                  onChange={(e) => {
                    setApplicantName(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  name="jobTitle"
                  value={jobTitle}
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="interviewDate"
                  name="interviewDate"
                  value={interviewDate}
                  onChange={(e) => {
                    setInterviewDate(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="interviewTime"
                  name="interviewTime"
                  value={interviewTime}
                  onChange={(e) => {
                    setInterviewTime(e.target.value);
                  }}
                />
              </div>

              <label className="form-label">Mode</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="interviewMode"
                value={interviewMode}
                onChange={(e) => {
                  setInterviewMode(e.target.value);
                }}
              >
                <option defaultValue>Select Mode</option>
                <option value="Online">Online</option>
                <option value="Physical">Physical</option>
              </select>

              <br />

              <center>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>

        <br/>
      </div>
    </div>
  );
}
