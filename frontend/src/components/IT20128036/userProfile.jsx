import React, { useState, useEffect, set } from "react";
import axios from "axios";
import swal from "sweetalert";
import jwt_decode from "jwt-decode";
import "./contactUs.css";
import NavBar from "./NavBar";

function UpdateProfile() {
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setfile] = useState("");
  const [type, setType] = useState("");
  const [website, setWebsite] = useState("");
  const [csize, setCsize] = useState("");
  const [founded, setFounded] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    const usertoken = localStorage.userToken;
    const decoded = jwt_decode(usertoken);

    setUid(decoded._id);
    setName(decoded.name);
    setEmail(decoded.email);
    setType(decoded.type);

    axios.get(`http://localhost:5000/user/${uid}`).then((res) => {
      setWebsite(res.data.user.website);
      setCsize(res.data.user.csize);
      setFounded(res.data.user.founded);
      setDob(res.data.user.dob);
      setSex(res.data.user.sex);
      setAbout(res.data.user.about);
    });
  }, [uid]);

  const onChangeFile = (e) => {
    setfile(e.target.files[0]);
  };

  const onChangeClick = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("file", file);
    formdata.append("website", website);
    formdata.append("csize", csize);
    formdata.append("founded", founded);
    formdata.append("dob", dob);
    formdata.append("sex", sex);
    formdata.append("about", about);

    axios
      .put(`http://localhost:5000/profile/${uid}`, formdata)
      .then((res) => {
        swal("Updated successfully!", "", "success").then((value) => {
          if (value) {
            window.location = "/userprofile/view";
          }
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="inq_container">
      <NavBar />
      <div className="container bg-light border border-light rounded shadow mt-4 ">
        <div className="mt-4 mb-4 mx-4 my-4">
          <div
          // style={{
          //   margin: "20px 50px 50px 0px",
          //   padding: "50px",
          //   backgroundColor: "",
          //   border: "2px solid gray",
          //   borderRadius: "10px",
          // }}
          >
            {/* <center>
          <h4 style={set}>Update Profile</h4>
        </center> */}
            <br />
            <form onSubmit={onChangeClick} encType="multipart/form-data">
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  {" "}
                  <strong> Profile Picture</strong>{" "}
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="file"
                  filename="file"
                  onChange={onChangeFile}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputText1" class="form-label">
                  <strong> About Me</strong>
                </label>
                <textarea
                  rows="10"
                  cols="50"
                  class="form-control"
                  id="about"
                  name="about"
                  value={about}
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <div class="mb-3">
                    <label for="exampleInputText1" class="form-label">
                      <strong> Website</strong>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="website"
                      name="website"
                      value={website}
                      onChange={(e) => {
                        setWebsite(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-sm-4">
                  {type === "Job Recruiter" && (
                    <span>
                      <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">
                          <strong> Company Size</strong>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="csize"
                          name="csize"
                          value={csize}
                          onChange={(e) => {
                            setCsize(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </span>
                  )}

                  {type === "Job Seeker" && (
                    <span>
                      <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">
                          <strong> Date Of Birth</strong>
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="dob"
                          name="dob"
                          value={dob}
                          onChange={(e) => {
                            setDob(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </span>
                  )}
                </div>

                <div className="col-sm-4">
                  {type === "Job Recruiter" && (
                    <span>
                      <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">
                          <strong> Founded</strong>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="founded"
                          name="founded"
                          value={founded}
                          onChange={(e) => {
                            setFounded(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </span>
                  )}

                  {type === "Job Seeker" && (
                    <span>
                      <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">
                          <strong> Sex</strong>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="sex"
                          name="sex"
                          value={sex}
                          onChange={(e) => {
                            setSex(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </span>
                  )}
                </div>
              </div>

              <center>
                <button type="submit" class="btn btn-primary">
                  {" "}
                  <i class="fa fa-edit" aria-hidden="true">
                    {" "}
                    &nbsp;<strong>Update</strong>
                  </i>
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateProfile;
