import { SocialLinks } from "@/components/SocialLinks";
import React from "react";
import { ArrowForward } from "../../../../assets/svgComponents/ArrowForward";
import Link from "next/link";
import { servicesBlocksData, servicesBlocksOtherData } from "../homeData/data";

export const ServicesAndTechnologies = () => {
  return (
    <div className="absolute top-[64px] z-[300] hidden h-[423px] w-full border-b border-b-th-fade bg-black text-white lg:flex">
      <div className="pointer-events-none flex h-[423px] w-[112px] items-center justify-center">
        <span
          className="violet-gradient-text -rotate-90 transform whitespace-nowrap text-left
    text-[34px] font-bold uppercase tracking-wide"
        >
          SERVICES <br /> & TECHNOLOGIES
        </span>
      </div>

      {servicesBlocksData.map((block, index) => (
        <div
          key={index}
          className="flex w-[252px] flex-col border-l border-l-th-fade"
        >
          <div className="flex h-[73px] items-center border-b border-b-th-fade font-bold">
            <span className="pl-[32px]">{block.title}</span>
          </div>
          <ul className="mt-4 space-y-2 pl-[32px]">
            {block.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex cursor-pointer items-center text-[12px] opacity-70 hover:text-purple-400"
              >
                <ArrowForward className="mr-[6px]" />
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-1 flex-col border-l border-l-th-fade">
        <div className="flex min-h-[73px] w-[252px] items-center border-b border-r border-b-th-fade border-r-th-fade  font-bold">
          <span className="pl-[32px]">OTHER</span>
        </div>
        <ul className="mt-4 space-y-2 pl-[32px]">
          {servicesBlocksOtherData.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="flex cursor-pointer items-center text-[12px] opacity-70 hover:text-purple-400"
            >
              <ArrowForward className="mr-[6px]" />
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex h-full w-full items-end justify-end p-[30px]">
          <SocialLinks isMenu />
        </div>
      </div>
    </div>
  );
};
