import React from 'react';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import RecruiterView from './RecruiterView';
import JobSeekerView from './JobSeekerView';
import NavBar from '../../IT20128036/NavBar';

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
    <div>
      <NavBar />
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
  )
}
