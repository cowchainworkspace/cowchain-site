"use client";

import React from "react";
import { ExpertiseBlock } from "./components/expertise";
import { cn } from "@/lib/utils";
import { useGetItems } from "@/hooks/use-strapi";
import dexStackBg from "@/assets/bg/dexStackBg.svg";
import Image from "next/image";

import { expertiseData } from "./data";

export function ServiceStack({ margin = "mt-[calc(35vh_+_1.5625vh)]", home }) {
  const { data } = useGetItems("services-contents");

  return (
    <section
      id="expertise"
      className={cn("relative px-[88px] py-[127px] md:mt-0", margin)}
    >
      {!home && (
        <Image alt="" className="absolute -top-24 left-0 " src={dexStackBg} />
      )}
      <div className="relative z-20 mx-auto grid  max-w-[1440px] grid-cols-3 gap-y-[50px]">
        <div className="relative col-span-1 row-span-3 max-w-[284px]">
          <div className="mx-auto mb-16   flex max-w-[284px] flex-col items-center justify-center text-left    text-white ">
            <div className="col-span-2 row-span-1 flex flex-col items-start gap-[26px] md:justify-start">
              <h2 className="whitespace-pre-line text-center text-[36px] uppercase md:text-start md:text-[60px]">
                Tech Stack We UsE
              </h2>

              <p className="leading-22px text-[16px] text-[#BBBBBB]">
                To achieve high performance in decentralized exchange software
                development, we rely on the following tech stack
              </p>
            </div>
          </div>
        </div>
        {expertiseData.map((expertise, index) => (
          <ExpertiseBlock key={index * 2} {...expertise} />
        ))}
      </div>
    </section>
  );
}
