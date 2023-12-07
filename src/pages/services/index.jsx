import React from "react";
import { Navbar } from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import { Footer } from "components/Footer";
import { Contact } from "components/Contact";
import { Products } from "./blocks/Products";
import { ViewMoreSection } from "./blocks/ViewMore";
import { Stack } from "components/stack";

export const Services = ({ setBurgerOpen }) => {
  return (
    <section>
      <div className="relative overflow-x-hidden bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <HeroSection />
        <ViewMoreSection />
        <Products />
        <Stack title={"Our tech stack"} />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};
