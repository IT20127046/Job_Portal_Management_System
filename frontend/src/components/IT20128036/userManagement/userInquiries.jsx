
import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from '../admin/AdminNavBar';
import swal from 'sweetalert';
import RightSidePanel from '../admin/slideBar';



export default class UserInquiries extends Component {

  constructor(props) {
    super(props);

    this.state = {
        inquiries: []
    };
  }

  componentDidMount() {
    document.title = "User Inquiries"

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
    this.retrieveInquiries();
  }

  retrieveInquiries() {
    
    axios.get("http://localhost:5000/inquiries/getAll").then(res => {
      if (res.data.success) {
        this.setState({
            inquiries: res.data.exsitingInquiries
            
        });

        console.log(this.state.inquiries);
      }
    });
  }

  onDelete = (id) => {
    //with a confirmation 
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this details",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`http://localhost:5000/inquiries/delete/${id}`).then((res) => {
            swal("Inquiry Deleted Permanently!", "", "success")
              .then((value) => {
                if (value) {
                  this.retrieveInquiries();
                }

              });
          })

        } else {
          swal("Cancelled. The user details are safe!");
        }
      });
  }

//   handleSearchArea = (e) => {
//     // console.log(e.currentTarget.value)

//     const searchKey = e.currentTarget.value;

//     axios.get('http://localhost:5000/inquiries/getAll').then(res => {
//       if (res.data.success) {

//         this.filterData(res.data.exsitingInquiries, searchKey);
//       }
//     });

//   }

//   filterData(Inquiries, searchKey) {
//     const searchResult = Inquiries.filter((inquirie) =>
   
//     inquirie.name.toLowerCase().includes(searchKey) ||

     
//     inquirie.name.toUpperCase().includes(searchKey) ||

   
//     inquirie.name.includes(searchKey)
//     )

//     this.setState({
//         inquiries: searchResult
//     })
//   }

  render() {
    return (
      <div className='container'>
        <br />
        <AdminNavBar />
        
        <br />

        <div className="container">
            <div className='row'>
                <div className='col-sm-3'>
<RightSidePanel/>

                </div>

                <div className='col-sm-9'>
          <div className='row'>
            <div className='col-lg-9 mt-2 mb-2'>
              <h4>Inquiries</h4>
            </div>
            {/* <div className='col-lg-3 mt-2 mb-2'>
              <input
                className='form-control'
                type="search"
                placeholder="Search Inquiries"
                name="searchQuery"
                onChange={this.handleSearchArea}>
              </input>
            </div> */}
            <hr /><br />
          </div>
         
        
          <table className="table">
            <thead>
              <tr>
                <th scope='col'> # </th>
              
                <th scope='col'> Name </th>
              
                <th scope='col'> Subject </th>
                <th scope='col'> Message</th>
                <th scope='col'> Reply</th>
        
            
                {/* <th scope='col'> Registered Date </th> */}
                
                {/* <th scope='col'> Password </th> */}
              </tr>
            </thead>

            <tbody>
              {this.state.inquiries.map((Inquiries, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>
                    {/* <a href={`/admin/user/${users._id}`} style={{ textDecoration: 'none' }}> */}
                      {Inquiries.name}
                    {/* </a> */}
                  </td>
            
                  <td>{Inquiries.title}</td>
                  <td>{Inquiries.msg}</td>
                  <td>{Inquiries.reply}</td>
                
            
                 
                  {/* <td>{users.dateRegistered}</td> */}
                  {/* <td>{users.password}</td> */}
                  <td>
                    <a className='btn btn-outline-success' href={`/admin/inquiries/reply/${Inquiries._id}`}>
                      <i className='fas fa-edit'></i> &nbsp;Reply
                    </a>
                    &nbsp;
                    <a className='btn btn-outline-danger' href="#" onClick={() => this.onDelete(Inquiries._id)}>
                      <i className='fas fa-trash'></i> &nbsp;Delete
                    </a>
                  
                  </td>
                </tr>

              ))}
            </tbody>
          </table>
          {/* <button className='btn btn-success'> <a href='/add' style={{ textDecoration: 'none', color: 'white' }}> Create New Post  </a></button> */}
        </div>
      </div>
      
      </div>
      </div>
    )
  }
}

