import React from 'react'
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import JobSeekerView from './JobSeekerView';
import RecruiterView from './RecruiterView';
import NavBar from '../../IT20128036/NavBar';

export default function AllApplications() {
    const [userType, setUserType] = React.useState('');

    useEffect(() => {
        document.title = "All Application";

        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);

        setUserType(decoded.type);       
    }, []);

    return (
        <div>
            <NavBar />
            {userType === 'Job Recruiter' && (
                <RecruiterView/>           
            )}
            {userType === 'Job Seeker' && (
                <JobSeekerView/>           
            )}

        </div>
    )
}
