import React, { useState } from "react";
import "./clients.css";
import Navbar from "../../components/Navbar";
import Header from "./blocks/Header";
import Projects from "./blocks/Projects";
import Feedback from "./blocks/Feedback";


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
      </div>
    </section>
  );
};

export default Clients;
