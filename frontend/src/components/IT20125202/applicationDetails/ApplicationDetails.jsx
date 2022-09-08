import React from 'react';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import RecruiterView from './RecruiterView';
import JobSeekerView from './JobSeekerView';
import NavBar from '../../IT20128036/NavBar';
import image from "../../../images/background.png";

export default function ApplicationDetails() {

  const [userType, setUserType] = React.useState('');

  React.useEffect(() => {
    document.title = "All Application";
    // console.log(id);

    const usertoken = localStorage.userToken;
    const decoded = jwt_decode(usertoken);

    setUserType(decoded.type);

  }, []);

  return (
    <div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px', paddingTop: '10px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '0px 0px 0px 0px', overflowY: 'scroll', height: '100vh' }}>
      <NavBar />
      <div className='jumbotron' style={{ background: 'white', borderTop: '5px solid black', minHeight: '100vh' }}>
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}> Application Details </h1>
        {
          userType === 'Job Recruiter' && (
            <RecruiterView />
          )
        }
        {
          userType === 'Job Seeker' && (
            <JobSeekerView />
          )
        }

      </div>
    </div>
  )
}
