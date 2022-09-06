import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
    <div>
      <div className="container px-5">
        <div className="row">
          <div className="float-left col-lg-9 mt-2 mb-2">
            &nbsp;
            <h2>
              Hot Jobs <span className="fs-4">, Find your dream job here</span>
            </h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            &nbsp;
            <input
              className="form-control border border-dark"
              type="search"
              placeholder="Search"
              onChange={(e) => searchItems(e.target.value)}
            ></input>
          </div>
          <hr />
        </div>
      </div>
      <div className="cardContainer mx-2">
        <Row xs={1} md={4} className="g-4 mt-2 mx-2">
          {searchInput.length > 1
            ? filteredResults.map((item, index) => {
                return (
                  <Col key="index">
                    <Card className="col-md-10 my-3 mx-5 shadow">
                      <Card.Img
                        style={{ height: "43vh", width: "100%" }}
                        src={require(`../../../images/vacancy/${item.image}`)}
                        className="CardImg"
                        />
                      <Card.Body>
                        <h4>{item.jobTitle} </h4>
                        <h5>{item.company} </h5>
                        <h6>No of Vacancy: {item.noOfVacancy}</h6>
                        <h6>Closing Date: {item.closingDate}</h6>
                        <div className="text-center ">
                          <button className="btn btn-primary col-md-6 my-3">
                            Apply
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : vacancy.map((item, index) => {
                return (
                  <Col key="index">
                    <Card className="col-md-10 my-3 mx-5 shadow">
                      <Card.Img
                        style={{ height: "43vh", width: "100%" }}
                        src={require(`../../../images/vacancy/${item.image}`)}
                        className="CardImg p-2"
                      />
                      <Card.Body>
                        <h4>{item.jobTitle} </h4>
                        <h5>{item.company} </h5>
                        <h6>No of Vacancy: {item.noOfVacancy}</h6>
                        <h6>Closing Date: {item.closingDate}</h6>
                        <div className="text-center ">
                          <button className="btn btn-primary col-md-6 my-3">
                            Apply
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
        </Row>
      </div>
    </div>
  );
}
