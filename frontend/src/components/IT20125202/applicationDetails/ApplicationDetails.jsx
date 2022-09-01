import React from 'react';
import { useParams } from 'react-router-dom';
import RecruiterView from './RecruiterView';
import JobSeekerView from './JobSeekerView';

export default function ApplicationDetails() {

  let { id } = useParams();
  const userType = 'recruiter'; //need to get from the session
  // const userType = 'jobseeker';

  React.useEffect(() => {
    document.title = "All Application";
    // console.log(id);

  }, []);

  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}> Application Details </h1>
      {
        userType === 'recruiter' && (
          RecruiterView(id)
        )
      }
      {
        userType === 'jobseeker' && (
          JobSeekerView(id)
        )
      }

    </div>
  )
}
