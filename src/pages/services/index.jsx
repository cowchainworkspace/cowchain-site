import React, { useState } from "react";
import "./case-studies.css";
import Navbar from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import Footer from "components/Footer";
import Contact from "components/Contact";
import { Stack } from "./blocks/Stack";
import { Products } from "./blocks/Products";

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

const ViewMoreSection = () => {
  return (
    <section
      id="view_more"
      className="relative z-10 mb-10 mt-16  lg:my-[120px]"
    >
      <div className="relative grid grid-cols-1">
        <div className="mb-16 flex flex-col items-center justify-center gap-y-8 px-4 text-center   text-white ">
          <h3 className="mx-auto text-center font-roc text-2xl text-[32px] uppercase md:text-[54px]">
            You name it, we code it.
          </h3>
          <span className=" text-base font-thin">
            Drop us a line about your product idea, and we’ll <br /> schedule a
            call within 24 hours
          </span>
          <button type="submit" className="btn-submit uppercase xl:px-12">
            get in touch
          </button>
        </div>
      </div>
    </section>
  );
};
