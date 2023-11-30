import React from "react";
import "./clients.css";
import { Navbar } from "components/Navbar";
import Header from "./blocks/Header";
import Projects from "./blocks/Projects";
import Feedback from "./blocks/Feedback";
import Credo from "./blocks/Credo";
import Cases from "./blocks/Cases";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";

export const Clients = ({ setBurgerOpen }) => {
  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <Header />
        <Projects />
        <Feedback />
        <Credo />
        <Cases />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};
