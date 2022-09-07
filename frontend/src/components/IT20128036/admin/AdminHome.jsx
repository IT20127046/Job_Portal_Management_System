import { useState, useEffect,React } from "react";
import axios from "axios";
import AdminNavBar from './AdminNavBar';
import swal from 'sweetalert';
import RightSidePanel from './slideBar';
import { PieChart, Pie, BarChart, Bar,XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend } from "recharts";



export default function AdminHome () {



  const [users, setUsers] = useState([]);
  const [recruiters, setRecruiters] = useState(0);
  const [jobseekers, setJobseekers] = useState(0);
  const [all, setAll] = useState(0);





  useEffect(() => {

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








  }, []);





    axios.get("http://localhost:5000/users").then((res) => {
      setUsers(res.data.existingUsers);

      let all = 0;
      let recruiters = 0;
      let jobseekers = 0;
      users.forEach(user => {
        if (user.type === "Job Recruiter" ) {
          recruiters = recruiters + 1;
        }
        else if (user.type === "Job Seeker") {
          jobseekers = jobseekers + 1;
        }
      
        all = all + 1;
      });



setAll(all);
  setJobseekers(jobseekers);
  setRecruiters(recruiters);

  console.log(recruiters);
  

   
    });










  
const data = [
  {
    name: "September",
    JobRecruiters: recruiters,
    JobSeekers: jobseekers,
    amt: 2
  },
  {
    name: "Octorber",
    JobRecruiters: 0,
    JobSeekers: 0,
    amt: 2
  },
  {
    name: "November",
    JobRecruiters: 0,
    JobSeekers: 0,
    amt: 2
  },
  {
    name: "December",
    JobRecruiters: 0,
    JobSeekers: 0,
    amt: 2
  },
  
];


const data2 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

  
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
          <div className="container">
          <div className="row">
            <div className="col-sm-8 ">

        <div>

          <h5>Analysis</h5>



        <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="JobRecruiters" fill="#8884d8" />
      <Bar dataKey="JobSeekers" fill="#82ca9d" />
    </BarChart>






  
     
    </div>
    </div>


    <div className="col-sm-4  ">
    <h5 className="mt-5">Registered Users</h5>
    <a href="/admin/userroles" class="btn btn-dark btn mt-2">All - {all}</a><br/>
    <a href="/admin/user/recruiter" class="btn btn-dark btn mt-2">Job Recruiters - {recruiters}</a><br/>
    <a href="/admin/user/seeker" class="btn btn-dark btn mt-2">Job Seekers - {jobseekers}</a>
    

    


    </div>

    </div>
    </div>


    


    

        {/* Functions */}
        <div className="mt-3">
          <div className='row' style={{ height: "150px" }}>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-user" aria-hidden="true"></i>
                <h6>User Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/admin/userroles'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
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
