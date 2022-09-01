import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ViewVacancy() {
  const [vacancy, setVacancy] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/vacancy/getAll`).then((response) => {
      setVacancy(response.data.exsitingVacancy);
    });    
  }, []);

  const onDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/vacancy/delete/${id}`).then((res,) => {
      if(res.data.success) {
        
      }
      // alert("Delete Successful");
      window.location = '/';
    })
  }

  return (
    <div className="container px-5 my-3">
      <br />
      <br />
      <div className="row">
        <div className="float-left col-lg-9 mt-2 mb-2">
          &nbsp;
          <h2>Posted Vacancies</h2>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
          &nbsp;
          <input
            className="form-control border border-dark"
            type="search"
            placeholder="Search"
            name="searchQuery"
            // onChange={this.handleSearchArea}
          ></input>
        </div>

        <hr />
      </div>
      <div>
        <a className="btn btn-outline-primary" href={"/create/vacancy"}>
          <i className="fa fa-edit"></i>&nbsp;Create New Vacancy
        </a>  &nbsp;
        <a className="btn btn-outline-warning" href={"/create/vacancy"}>
        <i class="fa fa-bar-chart"></i>&nbsp;Genarate Report
        </a>
      </div>
      &nbsp;
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job ID</th>
            <th scope="col">Job Title</th>
            <th scope="col">Job Type</th>
            <th scope="col" style={{ width: "10%" }}>Closing Date</th>
            <th scope="col" style={{ width: "12%" }}>No of Vacancy</th>
            <th scope="col">Status</th>
            <th scope="col" style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {vacancy.map((data, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{data.jobId}</td>
              <td>{data.jobTitle}</td>
              <td>{data.jobType}</td>
              <td>{data.closingDate}</td>
              <td>{data.noOfVacancy}</td>
              <td>{data.adminStatus}</td>
              <td className="text-center">
                <a className="btn btn-outline-success " href={"/update/vacancy"}>
                  <i className="fa fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp; &nbsp; &nbsp;               
                <button className="btn btn-outline-danger" type="submit" onClick={() => onDelete(data._id)}>            
                  <i className="fa fa-trash"></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
