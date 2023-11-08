import React, { useState } from "react";
import Navbar from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import Footer from "components/Footer";
import Contact from "components/Contact";
import { Stack } from "./blocks/Stack";
import { Products } from "./blocks/Products";
import { ViewMoreSection } from "./blocks/ViewMore";

export const Services = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";

  return (
    <section>
      <div className="relative overflow-x-hidden bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <HeroSection />
        <ViewMoreSection />
        <Products />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};
