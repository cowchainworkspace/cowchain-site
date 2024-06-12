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
      className="scrollbar-none container  relative mb-2 w-full  pt-10 md:mb-[100px]  md:max-w-full lg:pt-[120px]"
    >
      <video
        ref={vidRef}
        className="absolute -top-24 left-0 z-10 mx-auto h-[500px] w-full object-cover md:-top-16 md:right-0 md:h-[700px]"
        id="bg_vid_planet"
        playsInline
        muted
        loop
        controls=""
        src={"/assets/services/planet.mp4"}
        preload="auto"
      ></video>
      <div className="relative z-10 mt-20 flex cursor-default flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag title={"services"} className={"mb-4 text-base md:mb-8"} />
        <h1 className=" mb-10 max-w-[570px] text-center text-4xl uppercase text-white md:max-w-[1000px] md:leading-none lg:mt-6   lg:text-[54px]">
          Blockchain Smart Contract Development Services
        </h1>
        <span className="max-w-lg text-center   text-sm text-[#bbb] md:max-w-2xl md:text-base">
          <Markdown
            children={data?.data[0].attributes.main_text}
            options={{
              createElement(type, props, children) {
                return (
                  <div className="parent markdown">
                    {createElement(type, props, children)}
                  </div>
                );
              }
            }}
          />
        </span>
        <button
          onClick={() => setModalOpen(true)}
          className="btn-submit mx-auto mt-12 flex w-[200px] md:min-w-[280px]"
        >
          Get a free quote
        </button>
      </div>
      <div className="container z-40 mt-2  max-w-[360px] md:max-w-[1300px]">
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
