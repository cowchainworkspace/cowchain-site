"use client"

import React from "react";
const Video = dynamic(() => import("./Video"));
import dynamic from "next/dynamic";

import ProjectsLine from "./ProjectsLine";
import HeroScreenItems from "./HeroScreenItems";
import ProjectsLineMobile from "./ProjectsLineMobile";

export default function HeaderContent() {

  return (
    <>
      <div className=" lg:mt-[83px] lg:grid lg:grid-cols-[2fr_1fr]  w-full mx-auto px-5 xl:!px-[79px] max-md:mb-[276px] max-lg:mb-[376px]">
        <div className="relative mb-[24px] max-lg:pt-[83px] lg:items flex max-md:gap-3 gap-6 max-md:flex-col-reverse flex-col md:mb-0 md:gap-x-1 custom1200:max-w-[823px]">
          <p className="font-semibold leading-[18px] max-md:text-sm max-md:max-w-[200px] !text-[#BBBBBB] text-base z-[22]">Stop Managing Developers. Start Shipping Products.</p>
          <h1 className="uppercase relative z-[22] font-[500] text-[24px] custom1200:text-[40px] custom1200:leading-[0.9]">
            The proactive engineering partner for ambitious Web3 & FinTech founders.
            We rescue stalled projects and accelerate launches.
          </h1>
          <Video className="w-[500px] lg:hidden h-auto -right-[89px] max-md:w-[450px] max-xl:left-1/2 top-1/2 max-xl:-translate-x-1/2" />

        </div>
        <div className="relative w-full max-lg:hidden">
          <Video className="xl:w-[34.72vw] w-[500px] -top-[100%] xl:-top-[9vw] h-auto -right-[89px]" />
        </div>
      </div>
      <ProjectsLineMobile keyPrefix="mobile-" />


      <HeroScreenItems />
      <ProjectsLine keyPrefix="desktop-" />
    </>
  );
}
