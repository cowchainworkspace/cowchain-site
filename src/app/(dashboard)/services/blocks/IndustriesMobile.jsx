"use client";

import React from "react";
import Link from "next/link";
import arrow from "@/assets/arrow_right.svg";

export const IndustriesMobile = () => {
  return (
    <section
      id="view_more"
      className="relative z-10 border-y border-y-th-fade md:hidden  lg:my-[120px]"
    >
      <div className="relative grid grid-cols-1">
        <div className="mb-16 flex flex-col items-center justify-center gap-y-8 px-4 text-center   text-white ">
          <h3 className="mx-auto mt-10 cursor-default text-center font-roc text-2xl   uppercase md:text-[54px]">
            Key industries for the application of smart contracts
          </h3>
          <span className="text-secondary ">
            Our blockchain smart contract development agency has expertise in a
            variety of industries, including:
          </span>
        </div>
      </div>

      <div className="w-full border-t border-t-th-fade">
        <img
          className="w-full"
          src="/assets/services/mobile_splash.png"
          alt=""
        />
        <div className="flex flex-col items-start p-8 text-white">
          <span className="mb-5 font-roc text-xl  uppercase">Healthcare</span>
          <span className="mb-5 text-secondary">
            Smart contracts increase the transparency and efficiency of public
            services. They create secure electronic voting systems and automate
            the distribution of public funds. Smart contracts ensure
            transparency in public procurement and maintain immutable registers
            of property, companies, and licenses.
          </span>
          <Link
            className="flex gap-2 text-base  uppercase underline"
            href={"/"}
          >
            see case study
            <img className="h-6 w-6" src={arrow.src} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};
