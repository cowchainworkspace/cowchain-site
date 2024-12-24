"use client";

import React, { useState, createElement } from "react";
import Tag from "@/components/ui/tag";
import { useRef, useEffect } from "react";
import ContactForm from "@/components/utils/ContactForm";
import Markdown from "markdown-to-jsx";
import { useGetItems } from "@/hooks/use-strapi";

export const HeroSection = () => {
  const { data } = useGetItems("services-contents");

  const [modalOpen, setModalOpen] = useState(false);

  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <section
      id="hero-services"
      className="scrollbar-none container relative w-full pt-20 md:pt-40 md:max-w-full "
    >
      <video
        ref={vidRef}
        className="absolute -top-24 left-0 z-[0] mx-auto h-[600px] w-full object-cover md:-top-16 md:right-0 md:h-[800px]"
        id="bg_vid_planet"
        playsInline
        muted
        loop
        controls=""
        src={"/assets/services/planet.mp4"}
        preload="auto"
      ></video>
      <div className="relative z-10  flex cursor-default flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-[76px] lg:px-16 xl:px-24">
        <Tag title={"services"} className={"mb-4 text-base md:mb-8"} />
        <h1 className=" mb-[16px] max-w-[570px] text-center text-4xl uppercase text-white md:max-w-[1000px] md:leading-none lg:mt-6   lg:text-[54px]">
          Blockchain Smart Contract Development Services
        </h1>
        <span className="max-w-lg text-center  text-sm text-[#bbb] md:max-w-[725px] md:text-base">

          Cowchain is a leading smart contract development service provider. Our
          team of experienced developers has in-depth knowledge of blockchain
          technology and programming languages to <br /> develop DApps.  <br />  We offer a
          full range of blockchain smart contract development services
          customized to meet your business needs.
        </span>
        <button
          onClick={() => setModalOpen(true)}
          className="btn-submit mx-auto mt-[32px] flex !min-w-[219px] md:!min-w-[287px]"
        >
          Get a free quote
        </button>
      </div>

      <div className=" block md:hidden container z-40 mt-[50px]  max-w-[360px] md:max-w-[1300px]">
        <div className="items-center justify-center gap-16 md:flex">
          <p className="my-8 flex flex-col items-center justify-center">
            <span className="font-roc text-3xl font-medium">$7,18B</span>
            <span className="max-w-[228px] text-center text-base text-[#bbb]">
              Global blockchain market value in 2022
            </span>
          </p>
          <p className="my-8 flex flex-col items-center justify-center">
            <span className="font-roc text-3xl font-medium">$163.83B</span>
            <span className="max-w-[228px] text-center text-base text-[#bbb]">
              Expected global blockchain market value by 2029
            </span>
          </p>
          <p className="my-8 flex flex-col items-center justify-center">
            <span className="font-roc text-3xl font-medium">86.2%</span>
            <span className="max-w-[228px] text-center text-base text-[#bbb]">
              US Blockchain market CAGR, 2023-2029
            </span>
          </p>
        </div>
      </div>
      
      <ContactForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  );
};
