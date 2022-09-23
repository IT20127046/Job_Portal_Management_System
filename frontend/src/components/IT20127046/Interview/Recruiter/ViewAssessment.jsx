import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../../Main.css";
import NavBar from "../../../IT20128036/NavBar";
import jwt_decode from "jwt-decode";

export default function ViewAssessment() {

  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    retriveAssessments();
  }, []);

  const retriveAssessments = () => {
    axios.get(`http://localhost:5000/assessment/getAll`).then((res) => {
      if (res.data.success) {
        setAssessments(res.data.exsitingAssessment);
      }
    });
  };

  const onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Delete this Assessment?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/assessment/delete/${id}`)
          .then((res) => {
            if (res.data.success) {
              window.location.reload();
            }
          });
      } else {
      }
    });
  };
  return (
    <div>
      <NavBar />

      <div className="backgroudImage">
        <div className="container mainBody">
          <br />

          <div className="row">
            <div className="float-left col-lg-9 mt-2 mb-2">
              &nbsp;
              <h3><i className="fa fa-handshake-o"></i> Added Assessments</h3>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              &nbsp;
              <input
                className="form-control border border-dark"
                type="search"
                placeholder="Search"
              ></input>
            </div>
            <hr />
          </div>

          <div className="container">
            <div>
              <a className="btn btn-primary" href="/assessment/add">
                <i className="fa fa-plus"></i>&nbsp; Add New Assessment
              </a>
            </div>
            <br />

            <div
              className="container bg-light shadow p-3 mb-5 rounded mt-3"
              style={{ borderRadius: "8px" }}
            >
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Drive Link</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {assessments.slice(0).reverse().map((assessment, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{assessment.title}</td>
                      <td>{assessment.jobTitle}</td>
                      <td>{assessment.description}</td>
                      <td>{assessment.driveLink}</td>
                      
                      <td className="text-center">
                        <a
                          className="btn btn-success "
                          href={`/assessment/update/${assessment._id}`}
                        >
                          <i className="fa fa-edit"></i> Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger"
                          type="submit"
                          onClick={() => onDelete(assessment._id)}
                        >
                          <i className="fa fa-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}