import { useState, useEffect, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "components/ScrollToTop";
import { Loading } from "components/loader/Loading";
import { ParallaxProvider } from "react-scroll-parallax";
import emailjs from "@emailjs/browser";
import { PageNotFound } from "pages/404";
import { Suspense } from "react";

const Home = lazy(() => import("pages/home"));
const Clients = lazy(() => import("pages/clients"));
const Cases = lazy(() => import("pages/cases"));
const Services = lazy(() => import("pages/services"));
const Policy = lazy(() => import("pages/policy"));
const Team = lazy(() => import("pages/team"));
const CaseStudiesStep = lazy(() => import("pages/case-studies/step"));
const CaseStudiesRetroBridge = lazy(
  () => import("pages/case-studies/retrobridge")
);
const Article = lazy(() => import("pages/article"));

const CaseStudiesMarsan = lazy(() => import("pages/case-studies/marsan"));
const CaseStudiesEva = lazy(() => import("pages/case-studies/eva"));
const CaseStudiesTriend = lazy(() => import("pages/case-studies/triend"));
const CaseStudiesFinance = lazy(() => import("pages/case-studies/finance"));

function App() {
  const [loading, setLoading] = useState(true);
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";

  useEffect(() => {
    emailjs.init(import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs.init(import.meta.env.REACT_APP_DEV_EMAILJS_PUBLIC_KEY);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <ParallaxProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense>
                  {" "}
                  <Home setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />

            <Route
              path="/clients"
              element={
                <Suspense>
                  <Clients setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/cases"
              element={
                <Suspense>
                  <Cases setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/cases/payment"
              element={
                <Suspense>
                  <CaseStudiesMarsan setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/cases/wallet"
              element={
                <Suspense>
                  <CaseStudiesEva setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/cases/hotel"
              element={
                <Suspense>
                  <CaseStudiesTriend setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/cases/finance"
              element={
                <Suspense>
                  <CaseStudiesFinance setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/cases/move"
              element={
                <Suspense>
                  <CaseStudiesStep setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/cases/bridge"
              element={
                <Suspense>
                  <CaseStudiesRetroBridge setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />

            <Route
              path="/blog/article"
              element={
                <Suspense>
                  <Article setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense>
                  <Services setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/team"
              element={
                <Suspense>
                  <Team setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route
              path="/policy"
              element={
                <Suspense>
                  <Policy setBurgerOpen={setBurgerOpen} />
                </Suspense>
              }
            />
            <Route path="*" status={404} element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
