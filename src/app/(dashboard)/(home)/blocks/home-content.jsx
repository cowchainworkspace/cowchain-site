"use client";

import Benefits from "./Benefits";
import BenefitsMobiles from "./BenefitMobiles";
import Cases from "./Cases";
import Clients from "./Clients";
import Contact from "@/components/Contact";
import FAQ from "./FAQ";
import Stack from "@/components/stack";
import Team from "./Team";
import CasesMobile from './CasesMobile.jsx'

export default function HomeContent() {

  return (
    <>
      {/* <Benefits /> */}
      {/* <BenefitsMobiles /> */}
      <Stack title={"Our\nExpertise"} />
      <Clients />
      <Cases />
      <CasesMobile />
      <Team />
      <FAQ />
      <Contact className="py-[159px] px-[64px] md:pt-[169px] md:pb-[127px]" />
    </>
  );
}
