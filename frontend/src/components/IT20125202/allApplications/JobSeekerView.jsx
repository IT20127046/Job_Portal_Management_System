import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function JobSeekerView() {

    let navigate = useNavigate();

    const [applicantId, setApplicantId] = React.useState('');
    const [applications, setApplications] = React.useState([]);

    useEffect(() => {
        document.title = "All Application";
        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);

        setApplicantId(decoded._id);
        // console.log(applicantId);
        axios.get(`http://localhost:5000/applications/submitted/${applicantId}`).then(res => {
            if (res.data.success) {
                setApplications(res.data.exsitingApplications);
            }
            // console.log(applications);
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response);
            } else if (error.request){
                console.log(error.request);
            } else if (error.message) {
                console.log(error.message);
            }
        })
    }, [applicantId]);

    return (
        <div>
            <br />
            <h1 style={{ textAlign: "center" }}> All Submitted Applications </h1>
            <hr />
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Vacancy No.</th>
                        <th scope="col">Company</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Applied Date</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {applications.length > 0 &&
                    <tbody>
                        {applications.map((application, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{application.vacancyNo}</td>
                                <td>{application.companyName}</td>
                                <td>{application.jobTitle}</td>
                                <td>{application.appliedDate}</td>
                                <td>{application.status}</td>
                                <td> <button type="button" className="btn btn-outline-info" onClick={() => navigate(`/application_details/${application._id}`)}>View</button> </td>
                            </tr>
                        ))}

                    </tbody>
                }
            </table>
        </div>
    )
}
