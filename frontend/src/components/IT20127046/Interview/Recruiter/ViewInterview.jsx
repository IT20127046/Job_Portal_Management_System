import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import UserImg from '../../../../images/user.png';

export default function ViewInterview() {
  const { id } = useParams();

  const [interviewID, setInterviewID] = useState("");
  const [applicantId, setApplicantId] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [interviewMode, setInterviewMode] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    retriveInterview();
  }, []);

  const retriveInterview = () => {
    axios.get(`http://localhost:5000/interview/get/${id}`).then((res) => {
      if (res.data.success) {
        setInterviewID(res.data.exsitingInterview._id);
        setApplicantId(res.data.exsitingInterview.applicantId);
        setApplicantName(res.data.exsitingInterview.applicantName);
        setJobTitle(res.data.exsitingInterview.jobTitle);
        setDescription(res.data.exsitingInterview.description);
        setInterviewDate(res.data.exsitingInterview.interviewDate);
        setInterviewTime(res.data.exsitingInterview.interviewTime);
        setInterviewMode(res.data.exsitingInterview.interviewMode);
        setStatus(res.data.exsitingInterview.status);
      }
    });
  };

  return (
    <div>
      <div className="container">
        <br />

        <h4>
              <i className="fa fa-info-circle"></i> Interview Details
            </h4>
        <hr />

        <div>
          <div className="container bg-light shadow p-3 mb-5  rounded mt-3 col-lg-10 ">

            <center><h4>{jobTitle} - IFS</h4></center>
            <br/>

            <div className="row">
                <div className="col-3">
                    <center>
                      <div >
                        <img src={UserImg} style={{ width: "200px", height: "200px" }}/>
                      </div> 
                    </center>
                </div>
                <div className="col-9">
                    <div className="container">
                      <div>
                        <div className="row">
                          <div className="col">
                            <p><strong>Interview ID - </strong>{interviewID}</p>
                            <p><strong>Applicant ID - </strong>{applicantId}</p>
                            <p><strong>Applicant Name - </strong>{applicantName}</p>
                            <p><strong>Job Title - </strong>{jobTitle}</p>
                          </div>
                          <div className="col">
                            <p><strong>Interview Date - </strong>{interviewDate}</p>
                            <p><strong>Interview Time - </strong>{interviewTime}</p>
                            <p><strong>Interview Mode - </strong>{interviewMode}</p>
                          </div>
                        </div>
                        <strong>Description </strong><p>{description}</p>

                        <strong>Status -</strong><p style={{ margin: "10px" }} className="badge bg-warning text-dark">{status}</p>

                        <strong>Candidate Availability -</strong><p style={{ margin: "10px" }} className="badge bg-success text-white">Yes</p>

                      </div>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
