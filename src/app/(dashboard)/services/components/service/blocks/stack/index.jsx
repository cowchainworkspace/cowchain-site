import React from "react";
import { ExpertiseBlock } from "./components/expertise";
import { cn } from "@/lib/utils";
import dexStackBg from "@/assets/bg/dexStackBg.svg";
import Image from "next/image";

import { expertiseData } from "./data";

export function ServiceStack({
  margin = "lg:mt-[calc(35vh_+_1.5625vh)]",
  home,
  lopngDesc = false,
  twoColumns = false,
  data = expertiseData,
  title,
  desc = "To achieve high performance in decentralized exchange softwaredevelopment, we rely on the following tech stack"
}) {
  return (
    <section
      id="expertise"
      className={cn("relative py-[60px] md:py-[127px] md:mt-0")}
    >
      {!home && (
        <Image alt="" className="absolute -top-24 left-0" src={dexStackBg} />
      )}
      <div
        className={`relative z-20 mx-auto flex flex-col sm:grid max-w-[1440px] ${twoColumns ? "grid-cols-2" : "grid-cols-[265px_1fr] lg:grid-cols-[265px_1fr_1fr]"}
         gap-x-[70px] gap-y-[44px] md:gap-y-[50px] px-[20px] md:px-[96px]`}
      >
        <div className={`relative col-span-1 ${twoColumns ? "row-span-1" : lopngDesc ? "row-span-4" : "row-span-6 lg:row-span-3"}`}>
          <div className="mx-auto md:mb-16 flex flex-col items-center justify-center text-left text-white">
            <div className="col-span-2 flex flex-col items-start gap-[26px] md:mr-[83px] md:justify-start">
              <h2 className=" sm:text-center text-[36px] uppercase md:text-start md:text-[60px]">
                {title ? title : (
                  <p className="whitespace-nowrap font-[500] text-left text-[36px] leading-[36px] md:leading-[53px] uppercase md:text-start md:text-[60px]">
                  Tech <br /> Stack <br /> We UsE
                  </p>
                )}
              </h2>

              <p className="leading-22px text-[16px] text-[#BBBBBB]">{desc}</p>
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
