"use client";

import Contact from "@/components/Contact";
import Stack from "@/components/stack";
import { HeroSection } from "./blocks/HeroSection";
import { Products } from "./blocks/Products";
import { ViewMoreSection } from "./blocks/ViewMore";

const Services = () => {
  return (
    <section>
      <HeroSection />
      <ViewMoreSection />
      <Products />
      <Stack title={"Our tech stack"} margin={""} />
      <Contact />
    </section>
  );
};

export default Services;
