import dexStackBg from "@/assets/bg/dexStackBg.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ExpertiseBlock } from "./components/expertise";

import { expertiseData } from "./data";

export function ServiceStack({
  margin = "lg:mt-[calc(35vh_+_1.5625vh)]",
  home,
  lopngDesc = false,
  twoColumns = false,
  data = expertiseData,
  title,
  desc = "To achieve high performance in decentralized exchange softwaredevelopment, we rely on the following tech stack",
  isMarginRight = false,
  noMarginBottom = false
}) {
  return (
    <section
      id="expertise"
      className={cn("relative py-[60px] md:mt-0 md:py-[126px]")}
    >
      {!home && (
        <Image alt="" className="absolute -top-24 left-0" src={dexStackBg} />
      )}
      <div
        className={`relative z-20 mx-auto flex max-w-[1440px] flex-col sm:grid ${twoColumns ? "grid-cols-2" : "grid-cols-[265px_1fr] lg:grid-cols-[264px_1fr_1fr]"}
         gap-x-[70px] gap-y-[44px] px-[20px] md:gap-y-[50px] md:pl-[88px] md:pr-[46px]`}
      >
        <div
          className={`relative  col-span-1 ${twoColumns ? "row-span-1" : lopngDesc ? "row-span-4" : "row-span-6 lg:row-span-3"}`}
        >
          <div
            className={cn(
              "mx-auto flex flex-col items-start md:items-center justify-center text-left text-white md:mb-16",
              {
                "!mb-0": noMarginBottom
              }
            )}
          >
            <div
              className={cn(
                "col-span-2 flex flex-col items-start gap-[26px]  md:justify-start",
                {
                  "md:mr-[83px]": isMarginRight
                }
              )}
            >
              <h2 className=" text-[36px] uppercase sm:text-center md:text-start md:text-[60px]">
                {title ? (
                  title
                ) : (
                  <p className="whitespace-nowrap text-left text-[36px] font-[500] uppercase leading-[36px] md:text-start md:text-[60px] md:leading-[53px]">
                    Tech <br className="hidden md:block" /> Stack <br /> We UsE
                  </p>
                )}
              </h2>

              <p className="hidden sm:block leading-22px text-[16px] text-[#BBBBBB]">{desc}</p>
              <p className="block sm:hidden leading-22px text-[16px] text-[#BBBBBB]">We offer a full range of services to take your <br /> project from an idea to a working solution</p>
            </div>
          </div>
        </div>
        {data.map((expertise, index) => (
          <ExpertiseBlock key={index * 2} {...expertise} />
        ))}
      </div>
    </section>
  );
}
