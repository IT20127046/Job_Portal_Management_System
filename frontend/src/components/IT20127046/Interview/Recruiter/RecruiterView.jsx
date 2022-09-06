import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecruiterView() {

    const [interviews, setInterviews] = useState([]);

    useEffect(()=>{
        retriveInterviews();
    }, []);

    const retriveInterviews = () =>{
        axios.get(`http://localhost:5000/interview/getAll`).then((res) => {
            if(res.data.success){
                setInterviews(res.data.exsitingInterview);
                console.log(res.data.exsitingInterview);
            }    
    });
    }

    const onDelete = (id) =>{

    }

  return (
    <div><div className="container">
    <br />

    <center><h4>Schduled Interviews</h4></center>
    
    <hr />

    <div className="container">
      <div>
        <a className="btn btn-success m-2" href="">
          Schdule New Interview
        </a>
      </div>
      <br />

      <div className="mb-4">
        <input
          style={{maxWidth:"400px"}} 
          type="search" 
          className="form-control border border-dark" 
          name="searchQuery"
          id="search" 
          placeholder="Serach....."
        />
      </div>

      <div className="container p-3 mb-2 bg-light text-dark">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Applicant Name</th>
              <th scope="col">Job Title</th>
              <th scope="col">Data</th>
              <th scope="col">Time</th>
              <th scope="col">Mode</th>
              <th scope="col">Status</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{interview.applicantName}</td>
                <td>{interview.jobTitle}</td>
                <td>{interview.interviewDate}</td>
                <td>{interview.interviewTime}</td>
                <td>{interview.interviewMode}</td>
                <td>{interview.status}</td>
                <td>
                  <a
                    className="btn btn-outline-success"
                    href={`/edit/documentTemp/${interview._id}`}
                  >
                    Update
                  </a>
                </td>
                <td>
                  <a
                    className="btn btn-outline-danger"
                    onClick={() =>onDelete(interview._id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div></div>
  )
}
