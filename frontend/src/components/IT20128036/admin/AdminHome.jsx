import React, { Component } from 'react'
import AdminNavBar from './AdminNavBar';
import swal from 'sweetalert';
import RightSidePanel from './slideBar';

export default class AdminHome extends Component {
  componentDidMount() {

    document.title = "Admin Home"

    // redirect to the login page if the user is not logged in
    if (!localStorage.token) {
      swal("Please login first", "", "warning")
        .then((value) => {
          if (value) {
            this.props.history.push(`/admin/login`)
            window.location.reload();
          }

        });

    }
  }

  render() {
    return (
      <div className='container'>
        <br />
        <AdminNavBar />
        <br />

       <div className='row'>
        <div className='col-sm-3'>
        <RightSidePanel/>
        </div>
        <div className='col-sm-9' >



        {/* Functions */}
        <div>
          <div className='row' style={{ height: "150px" }}>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-user" aria-hidden="true"></i>
                <h6>User Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/admin/users'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-users" aria-hidden="true"></i>
                <h6>Vacancies Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/student/groups/view'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-book" aria-hidden="true"></i>
                <h6>Application Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/admin/topiclist'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
          </div>

          <div className='row' style={{ height: "150px" }}>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                <h6>Assesment Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/submitiontype/add'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-file-text" aria-hidden="true"></i>
                <h6>Interview Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/documentTemp'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-table" aria-hidden="true"></i>
                <h6>Generate Report</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/view/marking'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
          </div>

         
          <br />
        </div>
        </div>
        </div>
     
      </div>
      
    )
  }
}
