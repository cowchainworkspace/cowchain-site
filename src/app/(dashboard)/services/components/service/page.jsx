"use client";

import React from "react";
import "./case-studies.css";
import Contact from "@/components/Contact";
import { ParallaxProvider } from "react-scroll-parallax";
import { HeroSection } from "../../blocks/HeroSection";

const Service = () => {
  return (
    <section id="clients-wrapper">
      <ParallaxProvider>
        <div className="relative bg-black">
        <HeroSection />

          <Contact className="py-[159px] px-[64px] md:pt-[169px] md:pb-[127px]"/>
        </div>
      </ParallaxProvider>
    </section>
  );
};

export default Service;
