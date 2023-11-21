import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/home";
import {Clients} from "./pages/clients";
import { CaseStudies } from "./pages/case-studies";
import { Cases } from "./pages/cases";
import { Blog } from "./pages/blog";
import { Services } from "./pages/services";
import { Article } from "pages/article";
import { Team } from "pages/team";
import { ScrollToTop } from "components/ScrollToTop";
import { Loading } from "components/loader/Loading";

function App() {
  const [loading, setLoading] = useState(true)
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";
   useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])

    if (loading) {
        return <Loading/>
    }

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home setBurgerOpen={setBurgerOpen} />} />
          <Route path="/clients" element={<Clients setBurgerOpen={setBurgerOpen} />} />
          <Route path="/cases" element={<Cases setBurgerOpen={setBurgerOpen} />} />
          <Route path="/cases/case_study" element={<CaseStudies setBurgerOpen={setBurgerOpen} />} />
          <Route path="/blog" element={<Blog setBurgerOpen={setBurgerOpen} />} />
          <Route path="/blog/article" element={<Article setBurgerOpen={setBurgerOpen} />} />
          <Route path="/services" element={<Services setBurgerOpen={setBurgerOpen} />} />
          <Route path="/team" element={<Team setBurgerOpen={setBurgerOpen} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
