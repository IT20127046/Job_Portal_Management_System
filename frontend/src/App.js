import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationPage from "./components/IT20125202/application/ApplicationPage";
import AllApplications from "./components/IT20125202/allApplications/AllApplications";
import ApplicationDetails from "./components/IT20125202/applicationDetails/ApplicationDetails";
import CreateUser from "./components/IT20128036/UserRegistration";
import UserLogin from "./components/IT20128036/UserLogin";
import LandingPage from "./components/IT20128036/LandingPage";
import NavBar from "./components/IT20128036/NavBar";
import AdminHome from "./components/IT20128036/admin/AdminHome";
import AdminLogin from "./components/IT20128036/admin/AdminLogin";
import UserRoles from "./components/IT20128036/userManagement/userRoles";
import EditUser from "./components/IT20128036/userManagement/editUsers";
import UserRoles_JonRecruiter from "./components/IT20128036/userManagement/userRole_JobRecruiter";
import UserRoles_JobSeeker from "./components/IT20128036/userManagement/userRole_JobSeeker";
import CreateVacancy from "./components/IT20131456/Company/CreateVacancy";
import UpdateVacancy from "./components/IT20131456/Company/UpdateVacancy";
import ViewVacancy from "./components/IT20131456/Company/ViewVacancy";


// import Demo from "./components/IT20128036/userManagement/barChartSample";







function App() {
  return (
   
  
  
    <BrowserRouter>
  <Routes>
     {/* ---------------Admin--------------- */}
    <Route path="/admin/home" element={<AdminHome />} />
    <Route path="/admin/login" element={<AdminLogin/>} />
    <Route path="/admin/userroles" element={<UserRoles/>} />
    <Route path="/admin/edituser/:id" element={<EditUser/>} />
    <Route path="/admin/user/recruiter" element={<UserRoles_JonRecruiter/>} />
    <Route path="/admin/user/seeker" element={<UserRoles_JobSeeker/>} />


    


    
    </Routes>

 
    <NavBar/>
      <Routes>
      {/* ---------------Job Recruters / Job Seekers --------------- */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/application" element={<ApplicationPage/>} />
        <Route path="/all_applications" element={<AllApplications/>} />
        <Route path="/application_details/:id" element={<ApplicationDetails/>} />
        <Route path="/user/registration" element={<CreateUser/>} />
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path="/create/vacancy" element={<CreateVacancy />} />
        <Route path="/view/vacancy" element={<ViewVacancy />} />
        <Route path="/update/vacancy/:id" element={<UpdateVacancy />} /> 

    
      </Routes>


      

      
    
    </BrowserRouter>
  );
}

export default App;
