import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function CreateVacancy() {
  // const [user, setUser] = useState([]);
  const [jobId, setJobId] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [workPlaceType, setWorkPlaceType] = useState("");
  const [location, setLocation] = useState("");
  const [noOfVacancy, setNoOfVacancy] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [adminStatus, setAdminStatus] = useState("Pending");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      jobId: jobId,
      jobTitle: jobTitle,
      company: company,
      workPlaceType: workPlaceType,
      location: location,
      noOfVacancy: noOfVacancy,
      jobType: jobType,
      description: description,
      image: image,
      closingDate: closingDate,
      adminStatus: adminStatus,
    };

    axios.post(`http://localhost:5000/vacancy/add`, data).then((res) => {
      if (res.data.success) {
        swal("Vacancy created successfully", "", "success");

        setTimeout(() => {
          window.location = "/view/vacancy";
        }, "3000");

        setJobId("");
        setJobTitle("");
        setCompany("");
        setWorkPlaceType("");
        setLocation("");
        setNoOfVacancy("");
        setJobType("");
        setDescription("");
        setImage("");
        setClosingDate("");
        setAdminStatus("");
      }
    });
  };
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/users`).then((response) => {
  //     setUser(response.data.existingUsers);
  //     console.log(response.data.existingUsers)
  //   });
  // }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/vacancy/getAll`).then((response) => {
      setJobId("J" + String(response.data.exsitingVacancy.length + 1));
    });
  }, []);

  return (
    <div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="fa fa-plus"></i>&nbsp; Add New Vacancy
        </button>
        &nbsp;&nbsp;
        <a className="btn btn-warning" href={""}>
          <i class="fa fa-bar-chart"></i>&nbsp;Genarate Report
        </a>
        <div className="modal" id="exampleModal">
          <div className="modal-dialog modal-dialog-scrollable modal-lg pb-5">
            <div className="modal-content ">
              <div className="modal-header">
                <div className="text-center">
                  <h3 className="modal-title">
                    <i className="fa fa-briefcase"></i>&nbsp;Find A Great Hire
                    ,Fast
                  </h3>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmit}>
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>Job Title :</strong>
                      <input
                        type="text"
                        className="form-control"
                        name="jobTitle"
                        placeholder="Enter job title"
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                      />
                      <small className="text-muted">
                        Start each word with a capital letter
                      </small>
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>Company Name :</strong>
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        placeholder="Enter company name"
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>Work Place Type :</strong>
                      <select
                        className="form-select"
                        name="workPlaceType"
                        onChange={(e) => setWorkPlaceType(e.target.value)}
                        required
                      >
                        <option value="Not Selected">Not Selected</option>
                        <option value="On-Site">On-Site</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>Location :</strong>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter location"
                        name="location"
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>No of Vacancy :</strong>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter number"
                        name="noOfVacancy"
                        pattern="[0-9]{1,2}"
                        title="Please input the number"
                        onChange={(e) => setNoOfVacancy(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group ">
                      <strong>Job Type :</strong>
                      <div className="mt-2 fs-6">
                        <input
                          type="radio"
                          name="jobType"
                          value="Full time"
                          style={{ width: "30px", height: "1em" }}
                          onChange={(e) => setJobType(e.target.value)}
                        />
                        &nbsp;&nbsp;Full time&nbsp;&nbsp;&nbsp;
                        <input
                          type="radio"
                          name="jobType"
                          value="Part time"
                          style={{ width: "35px", height: "1em" }}
                          onChange={(e) => setJobType(e.target.value)}
                        />
                        &nbsp;&nbsp;Part time&nbsp;&nbsp;&nbsp;
                        <input
                          type="radio"
                          name="jobType"
                          value="Internship"
                          style={{ width: "35px", height: "1em" }}
                          onChange={(e) => setJobType(e.target.value)}
                        />
                        &nbsp;&nbsp;Internship&nbsp;&nbsp;&nbsp;
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>Job Description (Maximum word 1000) :</strong>
                      <textarea
                        class="form-control"
                        name="description"
                        rows="2"
                        maxLength="1000"
                        placeholder="Enter a short description of your vacancy"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>Choose a photo :</strong>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        multiple={true}
                        onChange={(e) => {
                          setImage(e.target.files[0].name);
                        }}
                        required
                      />
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12">
                    <div className="form-group">
                      <strong>Application Closing Date :</strong>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Pick a date"
                        name="closingDate"
                        onChange={(e) => setClosingDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  &nbsp;
                  <div className="col-md-12 mt-4">
                    <div className="form-group">
            <strong>Agree term and conditions&nbsp;&nbsp;</strong>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        required
                      />
                    </div>
                  </div>
                  <div className=" my-4 mx-3">
                    <div className="form-group text-center">
                      <button
                        className="btn btn-primary col-md-4"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
