import React, { Component } from 'react'
import swal from 'sweetalert';

export default class AdminNavBar extends Component {
  onlogout = (e) => {
    swal({
      title: "Are you sure you want to log out?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willLogout) => {
        if (willLogout) {
          swal("Logout successfully!", "", "success")
            .then((value) => {
              if (value) {
                window.history.forward();
                window.location = "/admin/login";
              }
            });
        } else {
          swal("Redirecting...");
        }
      });
    e.preventDefault();
    

  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/admin/home">JOB4ME - Admin</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
                

                 
                                
               
                         

              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

              <div className="btn-group dropstart">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="btn btn-outline-dark btn-sm" aria-current="page" onClick={this.onlogout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </nav >
      </div >
    )
  }
}
