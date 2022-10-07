import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function RecruiterView() {

    let navigate = useNavigate();

    const [companyId, setCompanyId] = React.useState('');
    const [applications, setApplications] = React.useState([]);
    const [allApplications, setAllApplications] = React.useState([]);
    const [search, setSearch] = React.useState('');

    useEffect(() => {
        document.title = "All Application";
        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);

        setCompanyId(decoded._id);
        // console.log(companyId);
        axios.get(`http://localhost:5000/applications/received/${companyId}`).then(res => {
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
    }, [companyId]);

    // for searching
    const handleSearchArea = (e) => {
        //console.log(e)
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

        //if (applications.length > 0) {
        //    filterData(applications, search);
        //}
        //if (search == '') {
        //    setApplications(allApplications);
        //}
    }

    const filterData = (records, searchKey) => {
        const searchResult = records.filter((application) =>
            application.applicantFirstName.toLowerCase().includes(searchKey) ||
            application.jobTitle.toLowerCase().includes(searchKey) ||
            application.status.toLowerCase().includes(searchKey) ||

            application.applicantFirstName.toUpperCase().includes(searchKey) ||
            application.jobTitle.toUpperCase().includes(searchKey) ||
            application.status.toUpperCase().includes(searchKey) ||

            application.applicantFirstName.includes(searchKey) ||
            application.jobTitle.includes(searchKey) ||
            application.status.includes(searchKey)
        )

        setApplications(searchResult);
    }

    return (
        <div>
            <br />
            <h1 style={{ textAlign: "center" }}> All Received Applications </h1>
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
