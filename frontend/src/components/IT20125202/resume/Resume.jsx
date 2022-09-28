import React, { useEffect } from "react";
import NavBar from "../../IT20128036/NavBar";
import image from "../../../images/back1.jpg";
import Form from "./Form";
import ExistingResume from "./ExistingResume";
import axios from "axios";
import jwt_decode from 'jwt-decode';

export default function Resume() {
  const [resumeExists, setResumeExists] = React.useState(false);

  useEffect(() => {

    const usertoken = localStorage.userToken;
    const decoded = jwt_decode(usertoken);

    axios.get(`http://localhost:5000/resumes/${decoded._id}`)
      .then(response => {
        // console.log(response.data.exsitingResume);
        if (response.data.exsitingResume) {
          setResumeExists(true);
        }

        // console.log(response.data.exsitingApplication);
        // console.log(applicationDet);
      })
      .catch(error => {
        console.log(error);
      })

  }, [resumeExists]);

  return (
    <div>
      <NavBar />
      <div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px', paddingTop: '10px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '0px 0px 0px 0px', overflowY: 'scroll', height: '100vh', borderTop: '5px solid black' }}>
        <div className='jumbotron' style={{ background: 'white', minHeight: '100vh' }}>
          <br />
          <br />
          <h1 style={{ textAlign: "center" }}> Resume </h1>
          {resumeExists &&
            <ExistingResume />
          }
          {!resumeExists &&
            <Form />
          }
        </div>
      </div>
    </div>
  );
}