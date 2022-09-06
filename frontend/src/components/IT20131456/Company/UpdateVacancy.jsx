import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

export default function UpdateVacancy() {
  const { id } = useParams();
  console.log(id);
  const [vacancy, setVacancy] = useState([]);
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

  useEffect(() => {
    axios.get(`http://localhost:5000/vacancy/get/${id}`).then((response) => {
      setVacancy(response.data.exsitingVacancy);
      setJobId(response.data.exsitingVacancy.jobId);
      setJobTitle(response.data.exsitingVacancy.jobTitle);
      setCompany(response.data.exsitingVacancy.company);
      setWorkPlaceType(response.data.exsitingVacancy.workPlaceType);
      setLocation(response.data.exsitingVacancy.location);
      setNoOfVacancy(response.data.exsitingVacancy.noOfVacancy);
      setJobType(response.data.exsitingVacancy.jobType);
      setDescription(response.data.exsitingVacancy.description);
      setImage(response.data.exsitingVacancy.image);
      setClosingDate(response.data.exsitingVacancy.closingDate);
    });
  }, []);

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
    };

    axios
      .put(`http://localhost:5000/vacancy/update/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          swal("Vacancy update successfully", "", "success");
          setTimeout(() => {
            window.location = "/view/vacancy";
          }, "3000");
        }
      });
  };

  return (
    <div>
      <div className="container px-5 my-3">
        <div className="row">
          <div className="float-left col-lg-9 mt-2 mb-2">
            <h3>
              <i className="fa fa-edit"></i> Update Your Vacancy
            </h3>
          </div>
          <hr />
        </div>
      </div>
      <div className="container bg-light p-3 mb-5  rounded mt-3 col-lg-10 ">
        <form>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <strong>Job Id </strong>
                <input
                  type="text"
                  className="form-control bg-light"
                  name="jobId"
                  placeholder="Enter job id"
                  value={jobId}
                  readOnly
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <strong>Company </strong>
                <input
                  type="text"
                  className="form-control bg-light"
                  name="company"
                  placeholder="Enter company name"
                  value={company}
                  readOnly
                />
              </div>
            </div>
          </div>
          &nbsp;
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <strong>Job Title :</strong>
                <input
                  type="text"
                  className="form-control"
                  name="jobTitle"
                  placeholder="Enter job title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <strong>Work Place Type :</strong>
                <select
                  className="form-select"
                  name="workplacetype"
                  value={workPlaceType}
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
          </div>
          &nbsp;
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <strong>Location :</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter location"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <strong>No of Vacancy :</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter number"
                  name="noofvacancy"
                  value={noOfVacancy}
                  onChange={(e) => setNoOfVacancy(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          &nbsp;
          <div className="row">
            <div className="col-md-6">
              <div className="form-group ">
                <strong>Job Type :</strong>
                <div className="mt-2 fs-6">
                  <input
                    type="radio"
                    name="jobType"
                    value="Full time"
                    onChange={(e) => setJobType(e.target.value)}
                    style={{ width: "30px", height: "1em" }}
                  />
                  &nbsp;&nbsp;Full time&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    name="jobType"
                    value="Part time"
                    onChange={(e) => setJobType(e.target.value)}
                    style={{ width: "35px", height: "1em" }}
                  />
                  &nbsp;&nbsp;Part time&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    name="jobType"
                    value="Internship"
                    onChange={(e) => setJobType(e.target.value)}
                    style={{ width: "35px", height: "1em" }}
                  />
                  &nbsp;&nbsp;Internship&nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <strong>Job Description :</strong>
                <textarea
                  class="form-control"
                  id="description"
                  rows="2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            &nbsp;
            <div className="row mt-3">
              <div className="col-md-6">
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
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Application Closing Date :</strong>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pick a date"
                    name="closingDate"
                    value={closingDate}
                    onChange={(e) => setClosingDate(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          &nbsp;
          <div className=" my-3">
            <div className="form-group ">
              <a
                className="btn btn-primary col-md-2"
                href={"/view/vacancy"}
              >
                <i class="fa fa-arrow-left"></i>&nbsp;Back
              </a>{" "}
              &nbsp;
              <button
                className="btn btn-success col-md-2"
                onClick={onSubmit}
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
