"use client";

import React, { useState, createElement } from "react";
import { cn } from "@/lib/utils";
import Markdown from "markdown-to-jsx";
import { useGetItems } from "@/hooks/use-strapi";
import Image from "next/image";
import bg from "./../../../../../assets/services/IndustriesBgIcon.svg";

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
  const { data: textData } = useGetItems("services-contents");
  const { data: inData } = useGetItems("services-industries");

  const [caseIndex, setCaseIndex] = useState(0);
  return (
    <section
      id="view_more"
      className="relative z-10 hidden border-b  border-t border-b-th-fade border-t-th-fade md:block"
    >
      <div
        style={{ pointerEvents: "none" }}
        className="absolute -top-[480px] bottom-0 left-0 right-0 z-[-3] overflow-hidden"
      >
        <Image
          alt=""
          width={1380}
          height={1330}
          style={{ pointerEvents: "none" }}
          className="absolute -right-[650px] -z-10 min-h-[1330px] min-w-[900px]"
          src={bg}
        />
      </div>
      <div className="relative grid grid-cols-1">
        <div className="mx-auto my-[101px] flex max-w-[870px] flex-col items-center justify-center gap-y-8 px-4 text-center    text-white ">
          <h3 className="mx-auto cursor-default text-center font-roc text-2xl  uppercase leading-none md:text-[42px]">
            Key industries for the application of smart contracts
          </h3>
          <span className="max-w-[500px] text-secondary">
            {
              <Markdown
                children={textData?.data[0].attributes.key_industries_text}
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
            }
          </span>

          <div className="flex gap-[68px] text-[20px] uppercase">
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
            <span className="mb-5 font-roc text-[42px]  uppercase">
              {inData?.data[caseIndex].attributes.title}
            </span>
            <span className="mb-5 max-w-[430px] text-secondary ">
              {inData?.data[caseIndex].attributes.text}
            </span>
          </div>
        </div>

        <img
          className="w-full grid-cols-1 object-cover object-center"
          src={inData?.data[caseIndex].attributes.img.data.attributes.url}
          alt=""
        />
      </div>
    </section>
  );
};
