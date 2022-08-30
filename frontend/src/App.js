import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import ApplicationPage from "./components/IT20125202/application/ApplicationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/application" element={<ApplicationPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
