import React, { Component } from 'react'
// import { useLocation,useNavigate,useParams } from 'react-router-dom';
// import { withRouter } from "react-router";
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';

// function withRouter(Component){
//   function ComponentWithRouterProp(props){
//     let location= useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return(
//       <Component
//       {...props}
//       router ={{location, navigate,params}}
//       />
//     );
//   }
//   return ComponentWithRouterProp;
// }


import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


class NavBar extends Component {

  constructor() {
    super();
    this.state = {
      type: '',
    }
  }

  componentDidMount() {
    document.title = "NavBar"
    if (localStorage.userToken) {
      const usertoken = localStorage.userToken;
      const decoded = jwt_decode(usertoken);
      this.setState({
        // type: decoded.type.toString(),
        type: decoded.type,

      })
    }
  }

  logOut(e) {
    e.preventDefault();
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
                localStorage.removeItem('userToken');
                // this.props.history.push(`/user/login`)
                // window.location.reload();
                window.location = '/user/login'
              }
            });
        } else {
          swal("Redirecting...");
        }
      });


  }

  render() {

    const loginRegLink = (
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a className="nav-link bg-dark" aria-current="page" href="/user/login" style={{ textDecoration: 'none', color: 'white' }}>Sign In</a>
        </li>
        <li className='nav-item'>
          <a className="nav-link" aria-current="page" href="/user/registration" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</a>
        </li>
      </ul>
    )

    let userLink;

    // NavBar Links for students
    if (this.state.type === 'Job Seeker') {
      userLink = (
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Companies</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Vacancies</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Assessments and Interviews</a>
          </li>

          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>My Applications</a>
          </li>

          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Profile</a>
          </li>

        {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'white' }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
            Item
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">drop1</a></li>
                <li><a className="dropdown-item" href="#">drop2</a></li>
            </ul>
          </li>  */}

          <li className='nav-item'>
            <a href='/user/login' onClick={this.logOut.bind(this)} className="nav-link bg-dark" style={{ textDecoration: 'none', color: 'white' }}>
             Log out
            </a>
          </li>
        </ul>
      )
    }

    // NavBar Links for Job Recruters
    else if (this.state.type === 'Job Recruiter') {
      userLink = (
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Applications </a>
          </li>

          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Assessments and Interviews</a>
          </li>

          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Vacancies</a>
          </li>

          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'black' }}>Profile</a>
          </li>
          
             {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" aria-current="page" href="#" style={{ textDecoration: 'none', color: 'white' }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
            Item
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">drop1</a></li>
                <li><a className="dropdown-item" href="#">drop2</a></li>
            </ul>
          </li>  */}


          <li className='nav-item'>
            <a href='/user/login' onClick={this.logOut.bind(this)} className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>
              Log out
            </a>
          </li>
        </ul>
      )
    }

    


    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#FFFFFF' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{ color: 'black' }}><strong>JOB4ME</strong></a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">

              </span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarSupportedContent"
            >
              {/* <div className='navbar-nav ms-auto mb-2 mb-lg-0'></div> */}
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              </ul>
              {localStorage.userToken ? userLink : loginRegLink}

            </div>
          </div>
        </nav>
      </div>
    )
  }
}


export default withRouter(NavBar);