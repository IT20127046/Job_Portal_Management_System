import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import ApplicationPage from "./components/IT20125202/application/ApplicationPage";
import AllApplications from "./components/IT20125202/allApplications/AllApplications";
import ApplicationDetails from "./components/IT20125202/applicationDetails/ApplicationDetails";
import ViewInterviews from './components/IT20127046/Interview/ViewInterviews';
import RecruiterView from './components/IT20127046/Interview/Recruiter/RecruiterView';
import JobSeekerView from './components/IT20127046/Interview/JobSeeker/JobSeekerView';
import ScheduleInterview from './components/IT20127046/Interview/Recruiter/ScheduleInterview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/application" element={<ApplicationPage/>} />
        <Route path="/all_applications" element={<AllApplications/>} />
        <Route path="/application_details/:id" element={<ApplicationDetails/>} />

        /** Interview */
        <Route path="/interview" element={<ViewInterviews/>} />
        <Route path="/interview/recruiter" element={<RecruiterView/>} />
        <Route path="/interview/jobseeker" element={<JobSeekerView/>} />
        <Route path="/interview/schdule" element={<ScheduleInterview/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
