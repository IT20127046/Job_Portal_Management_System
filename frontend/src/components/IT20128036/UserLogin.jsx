import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from "react-router-dom";

import styles from "./styles.module.css";


export default class UserLogin extends Component {
    componentDidMount() {
        localStorage.removeItem('userToken');
        document.title = "User Login"
    }

    constructor() {
        super();

        this.state = {
            name: '',
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
            password: this.state.password
        }

        // validations----------------------------------------------------
        let validated = true;
        if (user.name === '') {
            validated = false;
            swal({
                title: "",
                text: "Please enter your user name",
                icon: "warning",
            });
        }
        else if (user.password === '') {
            validated = false;
            swal({
                title: "",
                text: "Please enter your password",
                icon: "warning",
            });
        }

        if (validated) {
            axios.post('http://localhost:5000/user/login', {
                name: user.name,
                password: user.password
            }).then(res => {
                swal("Login successful!", "", "success")
                    .then((value) => {
                        if (value) {
                            localStorage.setItem('userToken', res.data)
                            // this.props.history.push(`/`)
                            // window.location.reload();
                            window.location = '/'
                        }

                    });
            }).catch(err => {
                console.log(err);
                swal({
                    title: "",
                    text: "Please check your username and password",
                    icon: "warning",
                });
            })
        }
    }


    render() {
        return (
            //  <div>
            //     <div className="container" style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft: '200px', paddingRight: '200px', height: '800px' }}>
               

    


            //         <div className="col-md-8 mt-4 mx-auto">
                        
            //             <h3 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}>User Login</h3>
            //             <br />
            //             <form className="needs-validation" noValidate>
            //                 <div className="form-group" style={{ marginBottom: '15px' }}>
            //                     <label style={{ marginBottom: '5px' }}><b>User Name</b></label>
            //                     <input
            //                         type="text"
            //                         className="form-control"
            //                         name="name"
            //                         placeholder="Please enter your user name"
            //                         required
            //                         value={this.state.name}
            //                         onChange={this.onChange}
            //                     />

            //                 </div>
            //                 <div className="form-group" style={{ marginBottom: '15px' }}>
            //                     <label style={{ marginBottom: '5px' }}><b>Password</b></label>
            //                     <input
            //                         type="password"
            //                         className="form-control"
            //                         name="password"
            //                         placeholder="Please enter the password"
            //                         required
            //                         value={this.state.password}
            //                         onChange={this.onChange}
            //                     />

            //                 </div>


            //                 <div className="d-grid gap-2">
            //                     <button
            //                         className="btn btn-outline-dark"
            //                         type="submit"
            //                         style={{ marginTop: '15px', width: 'cover'}}
            //                         onClick={this.onSubmit}
            //                     ><b>
            //                         Login
            //                     </b>
            //                     </button>
            //                 </div>
            //             </form>
            //         </div>






      
            //     </div>
            //  </div>




            <div className={styles.login_container}>
                <div className='mt-4'>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h3><strong>Sign-In</strong></h3>
						

                          <div
                            className="form-group"
                            style={{ marginBottom: "15px",marginTop: "15px" }}
                          >
                        
                        <input
							type="name"
							placeholder="Username"
							name="name"
							onChange={this.onChange}
							value={this.state.name}
							required
                            className="form-control"
						/>
                          </div>

                          <div
                            className="form-group"
                            style={{ marginBottom: "15px" }}
                          >

						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={this.onChange}
							value={this.state.password}
							required
                            className="form-control"
						/>

                        </div>
						
						<button type="submit" onClick={this.onSubmit} className={styles.green_btn}>
							Submit
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h5>Are you new here ?</h5>
                    <Link to="/user/registration">
						<button type="button" className={styles.white_btn}>
							 Sign Up
						</button>
					</Link>
				</div>
			</div>
            </div>
		</div>
        
        )
    }
}
