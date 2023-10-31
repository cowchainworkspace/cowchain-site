import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Clients from "./pages/Clients/Clients";
import CaseStudies from "./pages/case-studies";
import Cases from "./pages/cases";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/case_study" element={<CaseStudies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
