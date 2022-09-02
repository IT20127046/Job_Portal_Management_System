import React, { useState } from "react";
import axios from "axios";
import Vacancy1 from "../../../images/vacancy1.png";


export default function CreateVacancy() {

  const [jobId,setJobId] = useState("ab");  
  const [jobTitle, setJobTitle] = useState("");  
  const [companyId, setCompanyId] = useState("jjj");  
  const [company, setCompany] = useState("");  
  const [workPlaceType, setWorkPlaceType] = useState("");  
  const [location, setLocation] = useState("");  
  const [noOfVacancy, setNoOfVacancy] = useState("");  
  const [jobType, setJobType] = useState("");  
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");  
  const [closingDate, setClosingDate] = useState("");
  const [adminStatus, setAdminStatus] = useState("Pending");

  const onSubmit = () => {  

    // for(var i=0;i<=1;i++){

    //   jobId = jobId+i;   
    // }

    const data = {
      
      jobId:jobId,
      jobTitle:jobTitle,
      companyId:companyId,
      company:company,
      workPlaceType:workPlaceType,
      location:location,
      noOfVacancy:noOfVacancy,
      jobType:jobType,
      description:description,
      image:image,
      closingDate:closingDate,
      adminStatus:adminStatus,
    };    

    axios.post(`http://localhost:5000/vacancy/add`, data).then((res) => {
      if (res.data.success) {
        console.log();
        // alert("Added Success");
       
        window.location = '/';    

        setJobId("");  
        setJobTitle("");  
        setCompanyId(""); 
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

  return (
    <div>
      <br />
      <div className="container shadow p-3 mb-5 border border-dark rounded mt-5 col-lg-6 ">
        <div className="form-group row">
          <div className="col-lg-12 margin-tb">
            <div className="float-left">
              &nbsp;
              <div className="text-center">
                <img src={Vacancy1} style={{ width: "15%" }} />
              </div>
              <h2 className="text-center">Find A Greate Hire, Fast</h2>
              &nbsp;
            </div>
          </div>
        </div>
        <form >
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
              <select className="form-select" name="workPlaceType" onChange={(e) => setWorkPlaceType(e.target.value)} required>
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
                type="text"
                className="form-control"
                placeholder="Enter number"
                name="noOfVacancy"
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
              <strong>Job Description :</strong>
              <textarea
                class="form-control"
                name="description"
                rows="2"
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
          &nbsp;
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <strong>Choose a photo :</strong>
                <input
                    type="file" 
                    name='image'
                    className="form-control"
                    multiple={true}
                    onChange={(e) => {
                    setImage(e.target.files[0].name)
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
                  onChange={(e) => setClosingDate(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          &nbsp;
          <div className="col-md-6">
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
            <div className="form-group" style={{textAlign:"right"}}>
              <button className="btn btn-outline-primary col-md-3" type='submit' >
                Submit 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
