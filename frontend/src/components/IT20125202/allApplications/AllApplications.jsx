import React from 'react'
import { useEffect } from 'react';
import JobSeekerView from './JobSeekerView';
import RecruiterView from './RecruiterView';

export default function AllApplications() {
    const [userType, setUserType] = React.useState('');

    useEffect(() => {
        document.title = "All Application";
        setUserType('recruiter');      //need to get from the session
        // setUserType('jobseeker');   
    }, []);

    return (
        <div>
            {userType === 'recruiter' && (
                <RecruiterView/>           
            )}
            {userType === 'jobseeker' && (
                <JobSeekerView/>           
            )}

        </div>
    )
}
