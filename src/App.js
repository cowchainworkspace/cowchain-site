import { useState, useEffect, lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Clients } from "pages/clients";
import { CaseStudiesMarsan } from "pages/case-studies/marsan";
import { CaseStudiesEva } from "pages/case-studies/eva";
import { CaseStudiesTriend } from "pages/case-studies/triend";
import { CaseStudiesFinance } from "pages/case-studies/finance";
import { CaseStudiesStep } from "pages/case-studies/step";
import { CaseStudiesRetroBridge } from "pages/case-studies/retrobridge";
import { Cases } from "pages/cases";
import { Blog } from "pages/blog";
import Home  from "pages/home";
import { Services } from "pages/services";
import { Article } from "pages/article";
import { Team } from "pages/team";
import { ScrollToTop } from "components/ScrollToTop";
import { Loading } from "components/loader/Loading";
import { ParallaxProvider } from "react-scroll-parallax";


function App() {
  const [loading, setLoading] = useState(true);
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <ParallaxProvider>
          <HashRouter>
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={<Home setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/clients"
                element={<Clients setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases"
                element={<Cases setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/payment"
                element={<CaseStudiesMarsan setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/wallet"
                element={<CaseStudiesEva setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/hotel"
                element={<CaseStudiesTriend setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/finance"
                element={<CaseStudiesFinance setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/step"
                element={<CaseStudiesStep setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/retrobridge"
                element={
                  <CaseStudiesRetroBridge setBurgerOpen={setBurgerOpen} />
                }
              />
              <Route
                path="/blog"
                element={<Blog setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/blog/article"
                element={<Article setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/services"
                element={<Services setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/team"
                element={<Team setBurgerOpen={setBurgerOpen} />}
              />
            </Routes>
          </HashRouter>
        </ParallaxProvider>
      </Suspense>
    </div>
  );
}

export default App;
