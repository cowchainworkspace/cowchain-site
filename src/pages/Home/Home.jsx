import React from "react";
import Navbar from "../../components/Navbar";
import bg_top from "../../assets/bg/navbar_top.png";
import Header from "./blocks/Header";
import Benefits from "./blocks/Benefits";
import Expertise from "./blocks/Expertise";
import Clients from "./blocks/Clients";
import Projects from "./blocks/Projects";
import Team from "./blocks/Team";
import Blog from "./blocks/Blog";
import FAQ from "./blocks/FAQ";
import Contact from "./blocks/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-black relative">
        <Navbar />
        <Header />
        <Benefits />
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
