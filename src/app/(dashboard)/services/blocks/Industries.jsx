"use client";

import React, { useState } from "react";
import Link from "next/link";
import arrow from "@/assets/arrow_right.svg";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Healthcare",
    description:
      "Smart contracts increase the transparency and efficiency of public services. They create secure electronic voting systems and automate the distribution of public funds. Smart contracts ensure transparency in public procurement and maintain immutable registers of property, companies, and licenses.",
    link: "/"
  },
  {
    title: "Healthcare",
    description:
      "Smart contracts increase the transparency and efficiency of public services. They create secure electronic voting systems and automate the distribution of public funds. Smart contracts ensure transparency in public procurement and maintain immutable registers of property, companies, and licenses.",
    link: "/"
  },
  {
    title: "Healthcare",
    description:
      "Smart contracts increase the transparency and efficiency of public services. They create secure electronic voting systems and automate the distribution of public funds. Smart contracts ensure transparency in public procurement and maintain immutable registers of property, companies, and licenses.",
    link: "/"
  },
  {
    title: "Healthcare",
    description:
      "Smart contracts increase the transparency and efficiency of public services. They create secure electronic voting systems and automate the distribution of public funds. Smart contracts ensure transparency in public procurement and maintain immutable registers of property, companies, and licenses.",
    link: "/"
  }
];

export const Industries = () => {
  const [caseIndex, setCaseIndex] = useState(0);
  return (
    <section
      id="view_more"
      className="relative z-10 hidden border-b  border-b-th-fade md:block"
    >
      <div className="relative grid grid-cols-1">
        <div className="mx-auto mb-16 flex max-w-[870px] flex-col items-center justify-center gap-y-8 px-4 text-center    text-white ">
          <h3 className="mx-auto mt-20 cursor-default text-center font-roc text-2xl  uppercase leading-none md:text-[42px]">
            Key industries for the application of smart contracts
          </h3>
          <span className="max-w-[500px] text-secondary">
            Our blockchain smart contract development agency has expertise in a
            variety of industries, including:
          </span>
          <div className="flex gap-4 uppercase">
            <button
              onClick={() => setCaseIndex(0)}
              className={cn("uppercase", {
                "text-[#CF93FF]": caseIndex === 0
              })}
            >
              healthcare
            </button>
            <button
              onClick={() => setCaseIndex(1)}
              className={cn("uppercase", {
                "text-[#CF93FF]": caseIndex === 1
              })}
            >
              Government
            </button>
            <button
              onClick={() => setCaseIndex(2)}
              className={cn("uppercase", {
                "text-[#CF93FF]": caseIndex === 2
              })}
            >
              real estate
            </button>
            <button
              onClick={() => setCaseIndex(3)}
              className={cn("uppercase", {
                "text-[#CF93FF]": caseIndex === 3
              })}
            >
              Energy
            </button>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 border-t border-t-th-fade">
        <div className="flex flex-col items-start justify-center border-r border-r-th-fade p-8 text-white">
          <div className="mx-auto flex flex-col items-start justify-center">
            <span className="mb-5 font-roc text-xl  uppercase">
              {data[caseIndex].title}
            </span>
            <span className="mb-5 max-w-[430px] text-secondary ">
              {data[caseIndex].description}
            </span>
            <Link
              className="flex gap-2 text-base  uppercase underline"
              href={data[caseIndex].link}
            >
              see case study
              <img className="h-6 w-6" src={arrow.src} alt="" />
            </Link>
          </div>
        </div>

        <img
          className="w-full grid-cols-1 object-cover object-center"
          src="/assets/services/mobile_splash.png"
          alt=""
        />
      </div>
    </section>
  );
};
