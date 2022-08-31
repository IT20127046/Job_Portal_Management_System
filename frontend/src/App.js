import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import ApplicationPage from "./components/IT20125202/application/ApplicationPage";
import AllApplications from "./components/IT20125202/allApplications/AllApplications";
import ApplicationDetails from "./components/IT20125202/applicationDetails/ApplicationDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/application" element={<ApplicationPage/>} />
        <Route path="/all_applications" element={<AllApplications/>} />
        <Route path="/application_details/:id" element={<ApplicationDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
