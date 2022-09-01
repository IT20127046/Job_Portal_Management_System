//user registration
import React, { Component } from 'react';
import { userRegister } from './UserFunctions';
import swal from 'sweetalert';
import styles from "./userStyle/styles.module.css";
import { Link } from "react-router-dom";

// email pattern ->  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// mobile pattern ->  /^(\+\d{1,3}[- ]?)?\d{10}$/
//                ->  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/

export default class CreateUser extends Component {

  componentDidMount() {
    localStorage.removeItem('userToken');
    document.title = "User Registration"
  }

  constructor() {
    super();

    this.state = {
  
      name: '',
      email: '',
      mobile: '',
      field: '',
      address: '',
      type: '',
      password: ''
    }

    //to handle the state changes
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      field: this.state.field,
      address: this.state.address,
      type: this.state.type,
      password: this.state.password
    }

    // validations----------------------------------------------------
    let validated = true;
    if (user.name === '') {
      validated = false;
      swal({
        title: "",
        text: "Please enter a valid user name",
        icon: "warning",
      });
    }
    else if (user.name.length < 5) {
      validated = false;
      swal({
        title: "",
        text: "Please enter a valid name",
        icon: "warning",
      });
    }
    else if (!user.email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
      validated = false;
      swal({
        title: "",
        text: "Please enter a valid email",
        icon: "warning",
      });
    }
    else if (!user.mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
      validated = false;
      swal({
        title: "",
        text: "Please enter a valid mobile number",
        icon: "warning",
      });
    }
    else if (user.type === '') {
      validated = false;
      swal({
        title: "",
        text: "Please select a user type",
        icon: "warning",
      });
    }
    else if (user.password === '' || user.password.length < 8) {
      validated = false;
      swal({
        title: "",
        text: "Password should contain at least 8 characters",
        icon: "warning",
      });
    }

    if (validated === true) {
      userRegister(user).then(res => {

        if (res) {
          swal("Registered successfully!", "", "success")
            .then((value) => {
              if (value) {
                // this.props.history.push(`/user/login`)
                // window.location.reload();
                window.location = '/user/login'
              }

            });
        }
      })
    }
  }

  render() {
    return (
      // <div>
      //   <div className="container" style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px', height: '800px' }}>
      //     <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Job Portal Management System</h1>
      //     <hr />
      //     <div className="col-md-8 mt-4 mx-auto">
      //       <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: 'center' }}>User Registration</h1>
      //       <br />
      //       <form className='needs-validation' noValidate>
           

      //         <div className='form-group' style={{ marginBottom: '15px' }}>
      //           <label style={{ marginBottom: '5px' }}><b>User Name</b></label>
      //           <input
      //             type="text"
      //             className='form-control'
      //             name="name"
      //             placeholder="Enter your username"
      //             value={this.state.name}
      //             onChange={this.onChange}
      //             required
      //           />
      //         </div>

      //         <div className='form-group' style={{ marginBottom: '15px' }}>
      //           <label style={{ marginBottom: '5px' }}><b>Email</b></label>
      //           <input
      //             type="email"
      //             className='form-control'
      //             name="email"
      //             placeholder="Enter a email address that you are currently using"
      //             value={this.state.email}
      //             onChange={this.onChange}
      //             required
      //           />
      //         </div>

      //         <div className='form-group' style={{ marginBottom: '15px' }}>
      //           <label style={{ marginBottom: '5px' }}><b>Mobile Number</b></label>
      //           <input
      //             type="text"
      //             className='form-control'
      //             name="mobile"
      //             placeholder="Enter your mobile number"
      //             value={this.state.mobile}
      //             onChange={this.onChange}
      //             required
      //           />
      //         </div>


      //         <div className='form-group' style={{ marginBottom: '15px' }}>
      //           <label style={{ marginBottom: '5px' }}><b>Field of interest</b></label>
      //           <input
      //             type="text"
      //             className='form-control'
      //             name="field"
      //             placeholder="Enter your field of interest"
      //             value={this.state.field}
      //             onChange={this.onChange}
      //             required
      //           />
      //         </div>


      //         <div className='form-group' style={{ marginBottom: '15px' }}>
      //           <label style={{ marginBottom: '5px' }}><b>Address</b></label>
      //           <textarea
                 
      //             className='form-control'
      //             name="address"
      //             placeholder="Enter your address"
      //             value={this.state.address}
      //             onChange={this.onChange}
      //             required
      //           />
      //         </div>

      //         <div className='form-group' style={{ marginBottom: '15px' }}>
      //           <label style={{ marginBottom: '5px' }}><b>Type</b></label>
      //           <select name="type" value={this.state.type} onChange={this.onChange} className="form-select" required>
      //             <option value="" >Select...</option>
      //             <option value="Job Seeker" >Job Seeker</option>
      //             <option value="Job Recruiter">Job Recruiter</option>
                
      //           </select>
      //         </div>

      //         <div className='form-group' style={{ marginBottom: '15px' }}>
      //           <label style={{ marginBottom: '5px' }}><b>Password</b></label>
      //           <input
      //             type="password"
      //             className='form-control'
      //             name="password"
      //             placeholder="Enter a new password"
      //             value={this.state.password}
      //             onChange={this.onChange}
      //             required
      //           />
      //         </div>

      //         <div className="d-grid gap-2">
      //           <button className="btn btn-outline-dark" type="submit" style={{ marginTop: '15px', width: 'cover' }} onClick={this.onSubmit}>
      //             <b><i className='far fa-check-square'></i>
      //             &nbsp; Register</b>
      //           </button>
      //         </div>

      //       </form>
      //     </div>
      //   </div>
      // </div>

<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h5>Already have an account ?</h5>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign-in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container}>
						<h3>Create Account</h3>

                    
						<input
							type="text"
							placeholder="User Name"
							name="name"
							onChange={this.onChange}
							value={this.state.name}
							required
							className="form-control mt-2 mb-2"
						/>
          

         
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							onChange={this.onChange}
							value={this.state.email}
							required
							className="form-control mt-2 mb-2"
						/>

          

        
						<input
							type="text"
							placeholder="Mobile Number"
							name="mobile"
							onChange={this.onChange}
							value={this.state.mobile}
							required
							className="form-control mt-2 mb-2"
						/>
           
            	
           
                          <select
                              className="form-select mt-2 mb-2"
                              name="field"
                              value={this.state.field}
                              onChange={this.onChange}
                              required
                            >
                              <option
                                fieldofinterest="not selected yet"
                                selected
                              >
                                Field of Interest
                              </option>
                              <option fieldofinterest="Science and technology">
                              Science and technology
                              </option>
                              <option fieldofinterest="Architecture and engineering">
                              Architecture and engineering
                              </option>
                              <option fieldofinterest="Arts, culture and entertainment">
                              Arts, culture and entertainment
                              </option>
                              <option fieldofinterest="Community and social services">
                              Community and social services
                              </option>
                            </select>

                        



                    
						<textarea
							placeholder="Address"
							name="address"
							onChange={this.onChange}
							value={this.state.address}
							required
							className="form-control mt-2 mb-2"
						/>
          
           
           
                         <select
                              className="form-select mt-2 mb-2"
                              name="type"
                              value={this.state.type}
                              onChange={this.onChange}
                              required
                            >
                              <option
                                type="not selected yet"
                                selected
                              >
                                 Type
                              </option>
                              <option type="Job Seeker">
                              Job Seeker
                              </option>
                              <option type="Job Recruiter">
                              Job Recruiter
                              </option>
                          
                            </select>


                
            	<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={this.onChange}
							value={this.state.password}
							required
							className="form-control mt-2 mb-2"
						/>

            
				
						<button type="submit" onClick={this.onSubmit} className={styles.green_btn}>
							Sign-Up
						</button>
					</form>
				</div>
			</div>
		</div>

      
    )
  }
}