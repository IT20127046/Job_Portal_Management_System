import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateVacancy from "./components/vacancy_management/Company/CreateVacancy";
import UpdateVacancy from "./components/vacancy_management/Company/UpdateVacancy";
import ViewVacancy from "./components/vacancy_management/Company/ViewVacancy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create/vacancy" element={<CreateVacancy />} />
        <Route path="/" element={<ViewVacancy />} />
        <Route path="/update/vacancy" element={<UpdateVacancy />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
