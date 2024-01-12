import React, { useState, Suspense, useEffect, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CaseStudiesStep } from "pages/case-studies/step";
import { CaseStudiesRetroBridge } from "pages/case-studies/retrobridge";
import { Cases } from "pages/cases";
import Home  from "pages/home";
import { Services } from "pages/services";
import { Article } from "pages/article";
import { Team } from "pages/team";
import { ScrollToTop } from "components/ScrollToTop";
import { Loading } from "components/loader/Loading";
import { ParallaxProvider } from "react-scroll-parallax";
import emailjs from "@emailjs/browser";

const  Clients = lazy(() => import('pages/clients'))
const  CaseStudiesMarsan = lazy(() => import('pages/case-studies/marsan') ) 
const  CaseStudiesEva = lazy(() => import('pages/case-studies/eva') )  
const  CaseStudiesTriend = lazy(() => import('pages/case-studies/triend') ) 
const  CaseStudiesFinance = lazy(() => import('pages/case-studies/finance') ) 


const assets = [
   {
    src:  '/homepage/video.mp4',
    type: 'video'
  },
  {
    src:  '/images/desktop.png',
    type: 'img'
  },
  {
    src:   '/images/eva-bg.png',
    type: 'img'
  },
  {
    src:   '/homepage/logo_light.svg',
    type: 'img'
  },
  {
    src:  '/homepage/home-mobile.png',
    type: 'img'
  },
]

function App() {
  const [loading, setLoading] = useState(true);
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";
   
  const cacheAssets = async (assets) => {
  const promises = await assets.map((asset) => {
    return new Promise((resolve, reject) => {
      if(asset.type === 'img') {
        const img = new Image();
        img.src = asset.src;
        img.onload = resolve();
        img.onerror = reject();
      }
      else {
         const source = document.createElement('source');
         source.srcset = asset;
         source.onload = resolve();
        source.onerror = reject();
      }
    })
  })
  await Promise.all(promises);

}

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    emailjs.init(process.env.REACT_APP_DEV_EMAILJS_PUBLIC_KEY)
    setTimeout(() => {setLoading(false)}, 2000);
    cacheAssets(assets)
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Suspense loading={<Suspense/>}>
          <ParallaxProvider>
          <HashRouter>
            <ScrollToTop />
            <Routes>

          <Route
                        path="/"
                        element={ <Suspense loading={<Loading/>} ><Home setBurgerOpen={setBurgerOpen} /></Suspense> }
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
                path="/cases/move"
                element={<CaseStudiesStep setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/bridge"
                element={
                  <CaseStudiesRetroBridge setBurgerOpen={setBurgerOpen} />
                }
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
