import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavBar from "../../IT20128036/admin/AdminNavBar";
import RightSidePanel from "../../IT20128036/admin/slideBar";

export default function ViewVacancy() {
  const [vacancy, setVacancy] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/vacancy/getAll`).then((response) => {
      setVacancy(response.data.exsitingVacancy);
    });
  }, []);

  //search record

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = vacancy.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(vacancy);
    }
  };

  return (
    <div className="container">
      <br />
      <AdminNavBar />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <RightSidePanel />
          </div>

          <div className="col-sm-9">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h2>Vacancies Submitted For Approval</h2>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                  className="form-control border border-dark"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => searchItems(e.target.value)}
                ></input>
              </div>
              <hr />
              <br />
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Company</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Job Type</th>
                  <th scope="col">No of Vacancy</th>
                  <th scope="col">Closing Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {searchInput.length > 1
                  ? filteredResults.map((item, index) => {
                      return (
                        <tr>
                          <th>{index + 1}</th>
                          <td style={{ width: "15%" }}>{item.company}</td>
                          <td style={{ width: "15%" }}>{item.jobTitle}</td>
                          <td>{item.jobType}</td>
                          <td >{item.noOfVacancy}</td>
                          <td>{item.closingDate}</td>
                          <td
                            style={{ marginLeft: "20%", marginTop: "10%" }}
                            className={
                              item.adminStatus == "Pending"
                                ? "badge bg-warning text-dark"
                                : item.adminStatus == "Approve"
                                ? "badge bg-success text-white"
                                : item.adminStatus == "Decline"
                                ? "badge bg-danger text-white"
                                : ""
                            }
                          >
                            {item.adminStatus}
                          </td>
                          <td className="text-center">
                            <a className="btn btn-outline-primary" href={""}>
                              <i className="fa fa-eye"></i>&nbsp;View
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  : vacancy.map((item, index) => {
                      return (
                        <tr>
                          <th>{index + 1}</th>
                          <td style={{ width: "15%" }}>{item.company}</td>
                          <td style={{ width: "15%" }}>{item.jobTitle}</td>
                          <td>{item.jobType}</td>
                          <td >{item.noOfVacancy}</td>
                          <td>{item.closingDate}</td>
                          <td
                            style={{ marginLeft: "20%", marginTop: "10%" }}
                            className={
                              item.adminStatus == "Pending"
                                ? "badge bg-warning text-dark"
                                : item.adminStatus == "Approve"
                                ? "badge bg-success text-white"
                                : item.adminStatus == "Decline"
                                ? "badge bg-danger text-white"
                                : ""
                            }
                          >
                            {item.adminStatus}
                          </td>
                          <td className="text-center">
                            <a className="btn btn-outline-primary" href={""}>
                              <i className="fa fa-eye"></i>&nbsp;View
                            </a>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
