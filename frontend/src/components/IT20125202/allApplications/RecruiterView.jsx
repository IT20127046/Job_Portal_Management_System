import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function RecruiterView() {

    let navigate = useNavigate();

    const [companyId, setCompanyId] = React.useState('');
    const [applications, setApplications] = React.useState([]);

    useEffect(() => {
        document.title = "All Application";
        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);

        setCompanyId(decoded._id);

        axios.get(`http://localhost:5000/applications/received/${companyId}`).then(res => {
            if (res.data.success) {
                setApplications(res.data.exsitingApplications);
            }
            // console.log(applications);
        })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <br />
            <h1 style={{ textAlign: "center" }}> All Received Applications </h1>
            <hr />
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Vacancy No.</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Received Date</th>
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
                                <td>{application.jobTitle}</td>
                                <td>{application.applicantFirstName}</td>
                                <td>{application.applicantLastName}</td>
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
