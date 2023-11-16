import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "./blocks/Header";
import Benefits from "./blocks/Benefits";
import Expertise from "./blocks/Expertise";
import Clients from "./blocks/Clients";
import Projects from "./blocks/Projects";
import Team from "./blocks/Team";
import Blog from "./blocks/Blog";
import FAQ from "./blocks/FAQ";
import Contact from "components/Contact";
import Footer from "components/Footer";
import "./home.css";
import Parallax from "./blocks/Parallax";

const Home = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";

  return (
    <section id="home-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <Header />
        <Benefits />
        <Parallax />
        <Expertise />
        <Clients />
        <Projects />
        <Team />
        <Blog />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
