import React from 'react'
// import Vacancy1 from "../../../images/vacancy1.png";

export default function UpdateVacancy() {
  return (   
      <div>
        <br />
        <div className="container shadow p-3 mb-5 border border-dark rounded mt-5 col-lg-6 ">
          <div className="form-group row">
            <div className="col-lg-12 margin-tb">
              <div className="float-left">
                &nbsp;
                {/* <div className="text-center">
                  <img src={Vacancy1} style={{ width: "15%" }} />
                </div> */}
                <h2 className="text-center"> <i className="fa fa-edit"></i> Update Your Vacancy</h2>
                &nbsp;
              </div>
            </div>
          </div>
          <form>          
            <div className="col-md-12">
              <div className="form-group">
                <strong>Job Id </strong>
                <input
                  type="text"
                  className="form-control"
                  name="jobId"
                  placeholder="Enter job id"
                  required
                />
              </div>
            </div> 
            &nbsp;        
            <div className="col-md-12">
              <div className="form-group">
                <strong>Job Title :</strong>
                <input
                  type="text"
                  className="form-control"
                  name="jobTitle"
                  placeholder="Enter job title"
                  required
                />
              </div>
            </div>          
            &nbsp;
            <div className='row'>
            <div className="col-md-12">
              <div className="form-group">
                <strong>Work Place Type :</strong>
                <select className="form-select" name="workplacetype" required>
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
                  required
                />
              </div>
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
                  name="noofvacancy"
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
                    name="editList"
                    value="always"
                    style={{ width: "30px", height: "1em" }}
                  />
                  &nbsp;&nbsp;Full time&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    name="editList"
                    value="never"
                    style={{ width: "35px", height: "1em" }}
                  />
                  &nbsp;&nbsp;Part time&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    name="editList"
                    value="costChange"
                    style={{ width: "35px", height: "1em" }}
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
                  id="exampleFormControlTextarea1"
                  rows="1"
                ></textarea>
              </div>
            </div>
            &nbsp;
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Choose a photo :</strong>
                  <input
                    type="file"
                    name="file"
                    className="form-control"
                    multiple={true}
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
                    name="closingdate"
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;         
            <div className=" my-3">
              <div className="form-group">
                <button className="btn btn-outline-success col-md-12">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}
