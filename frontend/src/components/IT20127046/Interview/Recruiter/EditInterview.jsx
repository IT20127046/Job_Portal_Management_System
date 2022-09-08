import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "../../Main.css";
import NavBar from "../../../IT20128036/NavBar";

export default function EditInterview() {
  const { id } = useParams();

  const [description, setDescription] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [interviewMode, setInterviewMode] = useState("");

  useEffect(() => {
    retriveInterview();
  }, []);

  const retriveInterview = () => {
    axios.get(`http://localhost:5000/interview/get/${id}`).then((res) => {
      if (res.data.success) {
        setDescription(res.data.exsitingInterview.description);
        setInterviewDate(res.data.exsitingInterview.interviewDate);
        setInterviewTime(res.data.exsitingInterview.interviewTime);
        setInterviewMode(res.data.exsitingInterview.interviewMode);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      description: description,
      interviewDate: interviewDate,
      interviewTime: interviewTime,
      interviewMode: interviewMode,
    };

    updateInterview(data);
  };

  const updateInterview = (data) => {
    axios
      .put(`http://localhost:5000/interview/update/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          window.location = "/interview/recruiter";
        }
      });
  };

  return (
    <div>
      <NavBar />

      <div className="backgroudImage">
        <div className="container mainBody">
          <br />

          <h4>
            <i className="fa fa-plus"></i> Schedule a Interview
          </h4>
          <hr />

          <div>
            <div className="container bg-light shadow p-3 mb-5  rounded mt-3 col-lg-10 ">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <strong>Interview Date</strong>
                      <input
                        type="date"
                        className="form-control"
                        name="interviewDate"
                        value={interviewDate}
                        onChange={(e) => setInterviewDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <strong>Interview Time</strong>
                      <input
                        type="time"
                        className="form-control"
                        name="interviewTime"
                        value={interviewTime}
                        onChange={(e) => setInterviewTime(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                &nbsp;
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <strong>Interview Mode</strong>
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
                    </div>
                  </div>
                </div>
                &nbsp;
                <div className="form-group">
                  <strong>Description :</strong>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                &nbsp;
                <div className=" my-3">
                  <div className="form-group ">
                    <a
                      className="btn btn-outline-primary col-md-2"
                      href={"/interview/recruiter"}
                    >
                      <i class="fa fa-arrow-left"></i>&nbsp;Back
                    </a>{" "}
                    &nbsp;
                    <button
                      className="btn btn-success col-md-2"
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
