import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Clients from "./pages/Clients/Clients";
import { CaseStudies } from "./pages/case-studies";
import { Cases } from "./pages/cases";
import { Blog } from "./pages/blog";
import { Services } from "./pages/services";
import { Article } from "pages/article";
import { Team } from "pages/team";
import { ScrollToTop } from "components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/case_study" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article" element={<Article />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
