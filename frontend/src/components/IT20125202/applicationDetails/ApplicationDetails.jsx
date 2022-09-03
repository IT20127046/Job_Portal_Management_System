import React from 'react';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import RecruiterView from './RecruiterView';
import JobSeekerView from './JobSeekerView';

export default function ApplicationDetails() {

  let { id } = useParams();
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
      <br />
      <h1 style={{ textAlign: "center" }}> Application Details </h1>
      {
        userType === 'Job Recruiter' && (
          RecruiterView(id)
        )
      }
      {
        userType === 'Job Seeker' && (
          JobSeekerView(id)
        )
      }

    </div>
  )
}
