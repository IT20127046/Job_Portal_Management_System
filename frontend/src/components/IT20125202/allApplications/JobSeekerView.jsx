import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function JobSeekerView() {

    let navigate = useNavigate();

    const [applicantId, setApplicantId] = React.useState('');
    const [applications, setApplications] = React.useState([]);
    const [allApplications, setAllApplications] = React.useState([]);
    const [search, setSearch] = React.useState('');

    useEffect(() => {
        document.title = "All Application";
        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);

        setApplicantId(decoded._id);
        // console.log(applicantId);
        axios.get(`http://localhost:5000/applications/submitted/${applicantId}`).then(res => {
            if (res.data.success) {
                setApplications(res.data.exsitingApplications);
                setAllApplications(res.data.exsitingApplications);
            }
            // console.log(applications);
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log(error.request);
                } else if (error.message) {
                    console.log(error.message);
                }
            })
    }, [applicantId]);

    // for searching
    const handleSearchArea = (e) => {
        // console.log(e.currentTarget.value)
        setSearch(e)

        if (search.length > 0) {
            if (applications.length > 0) {
                setApplications(allApplications);
                filterData(applications, search);
            }
        }
        else {
            //window.location.reload();
            setApplications(allApplications);
        }
    }

    const filterData = (records, searchKey) => {
        const searchResult = records.filter((application) =>
            application.companyName.toLowerCase().includes(searchKey) ||
            application.jobTitle.toLowerCase().includes(searchKey) ||
            application.status.toLowerCase().includes(searchKey) ||

            application.companyName.toUpperCase().includes(searchKey) ||
            application.jobTitle.toUpperCase().includes(searchKey) ||
            application.status.toUpperCase().includes(searchKey) ||

            application.companyName.includes(searchKey) ||
            application.jobTitle.includes(searchKey) ||
            application.status.includes(searchKey)
        )

        setApplications(searchResult);
    }

    return (
        <div>
            <br />
            <h1 style={{ textAlign: "center" }}> All Submitted Applications </h1>
            <div className='col-lg-3 mt-2 mb-2'>
                <input
                    className='form-control'
                    type="search"
                    value={search}
                    placeholder="Search..."
                    name="searchQuery"
                    onChange={(e) => handleSearchArea(e.target.value)}>
                </input>
            </div>
            <hr />
            <table className="table table-hover" style={{ border: '1px solid lightgray' }}>
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
                                <td>
                                    {application.status === "Pending" && <span style={{ color: 'black' }}>{application.status}</span>}
                                    {application.status === "Accepted" && <span style={{ color: 'green' }}>{application.status}</span>}
                                    {application.status === "Rejected" && <span style={{ color: 'red' }}>{application.status}</span>}
                                    {/* {application.status} */}
                                </td>
                                <td> <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/application_details/${application._id}`)}><i className="fa fa-eye" />&nbsp;View</button> </td>
                            </tr>
                        ))}

                    </tbody>
                }
            </table>
        </div>
    )
}
