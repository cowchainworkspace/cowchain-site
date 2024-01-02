import React, { Suspense, lazy } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "./blocks/Header";
import { Benefits } from "./blocks/Benefits";
import { Team } from "./blocks/Team";
import { Footer } from "components/Footer";
import "./home.css";
import { BenefitsMobiles } from "./blocks/BenefitMobiles";
import { Loading } from "components/loader/Loading";

const Clients = lazy(() => import("./blocks/Clients"));
const Stack = lazy(() => import("components/stack"));
const Projects = lazy(() => import("./blocks/Projects"));
const FAQ = lazy(() => import("./blocks/FAQ"));
const Contact = lazy(() => import("components/Contact"));

const Home = ({ setBurgerOpen }) => {
  return (
    <section id="home-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <Header />
        <Benefits />
        <BenefitsMobiles />
        <Suspense loading={<Loading />}>
          <Stack title={"Our Expertise"} />
          <Clients />
          <Projects />
          <Team />
          <FAQ />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
