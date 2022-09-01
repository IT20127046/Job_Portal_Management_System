import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import ApplicationPage from "./components/IT20125202/application/ApplicationPage";
import AllApplications from "./components/IT20125202/allApplications/AllApplications";
import ApplicationDetails from "./components/IT20125202/applicationDetails/ApplicationDetails";
import CreateUser from "./components/IT20128036/UserRegistration";
import UserLogin from "./components/IT20128036/UserLogin";
import LandingPage from "./components/IT20128036/LandingPage";
import NavBar from "./components/IT20128036/NavBar";
import AdminHome from "./components/IT20128036/admin/AdminHome";
import AdminLogin from "./components/IT20128036/admin/AdminLogin";


function App() {
  return (
   
  
  
    <BrowserRouter>
  <Routes>
    <Route path="/admin/home" element={<AdminHome />} />
    <Route path="/admin/login" element={<AdminLogin/>} />
    </Routes>

 

    <NavBar/>
      <Routes>
     
        <Route path="/" element={<LandingPage />} />
        <Route path="/application" element={<ApplicationPage/>} />
        <Route path="/all_applications" element={<AllApplications/>} />
        <Route path="/application_details/:id" element={<ApplicationDetails/>} />
        <Route path="/user/registration" element={<CreateUser/>} />
        <Route path="/user/login" element={<UserLogin/>} />
    
      </Routes>


      

      
    
    </BrowserRouter>
  );
}

export default App;
