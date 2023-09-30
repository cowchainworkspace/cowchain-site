import React from "react";
import Navbar from "../../components/Navbar";
import bg_top from "../../assets/bg/navbar_top.png";
import Header from "./blocks/Header";
import Benefits from "./blocks/Benefits";
import Expertise from "./blocks/Expertise";
import Clients from "./blocks/Clients";
import Projects from "./blocks/Projects";
import Team from "./blocks/Team";

const Home = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-black relative">
        <img alt="" src={bg_top} className="absolute top-0 left-0 w-full"></img>
        <Navbar />
        <Header />
        <Benefits />
        <Expertise />
        <Clients />
        <Projects />
        <Team />
      </div>
    </section>
  );
};

export default Home;
