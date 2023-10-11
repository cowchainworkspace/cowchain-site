import React, { useState } from "react";
import "./clients.css";
import Navbar from "../../components/Navbar";
import Header from "./blocks/Header";
import Projects from "./blocks/Projects";
import Feedback from "./blocks/Feedback";
import Credo from "./blocks/Credo";
import Cases from "./blocks/Cases";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Clients = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";

  return (
    <section id="clients-wrapper">
      <div className="bg-black relative">
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

export default Clients;
