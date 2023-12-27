import React from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "./blocks/Header";
import { Benefits } from "./blocks/Benefits";
import { Clients } from "./blocks/Clients";
import { Projects } from "./blocks/Projects";
import { Team } from "./blocks/Team";
import { Blog } from "./blocks/Blog";
import { FAQ } from "./blocks/FAQ";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";
import "./home.css";
import { Stack } from "components/stack";
import { BenefitsMobiles } from "./blocks/BenefitMobiles";

const Home = ({ setBurgerOpen }) => {
  return (
    <section id="home-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <Header />
        <Benefits />
        <BenefitsMobiles />
        <Stack title={"Our Expertise"} />
        <Clients />
        <Projects />
        <Team />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
