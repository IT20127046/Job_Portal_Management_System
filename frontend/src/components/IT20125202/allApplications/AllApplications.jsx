import React from 'react'
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import JobSeekerView from './JobSeekerView';
import RecruiterView from './RecruiterView';
import NavBar from '../../IT20128036/NavBar';
import image from "../../../images/back1.jpg";

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
            <div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px', paddingTop: '10px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '0px 0px 0px 0px', overflowY: 'scroll', height: '100vh', borderTop: '5px solid black' }}>
                <div className='jumbotron' style={{ background: 'white', minHeight: '100vh' }}>
                    <br />
                    {userType === 'Job Recruiter' && (
                        <RecruiterView />
                    )}
                    {userType === 'Job Seeker' && (
                        <JobSeekerView />
                    )}

                </div>
            </div>
        </div>
    )
}
