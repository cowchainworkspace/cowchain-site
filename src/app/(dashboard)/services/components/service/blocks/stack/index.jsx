import React from "react";
import { ExpertiseBlock } from "./components/expertise";
import { cn } from "@/lib/utils";
import dexStackBg from "@/assets/bg/dexStackBg.svg";
import Image from "next/image";

import { expertiseData } from "./data";

export function ServiceStack({
  margin = "mt-[calc(35vh_+_1.5625vh)]",
  home,
  lopngDesc = false,
  twoColumns = false,
  data = expertiseData,
  title = "Tech Stack We UsE",
  desc = "To achieve high performance in decentralized exchange softwaredevelopment, we rely on the following tech stack"
}) {
  return (
    <section
      id="expertise"
      className={cn("relative py-[127px] md:mt-0", margin)}
    >
      {!home && (
        <Image alt="" className="absolute -top-24 left-0" src={dexStackBg} />
      )}
      <div
        className={`relative z-20 mx-auto grid max-w-[1440px] ${twoColumns ? "grid-cols-2" : "grid-cols-3"} gap-x-[226px] gap-y-[50px] px-[96px]`}
      >
        <div className={`relative col-span-1 ${twoColumns ? "row-span-1" : lopngDesc ? "row-span-4" : "row-span-3"}`}>
          <div className="mx-auto mb-16 flex flex-col items-center justify-center text-left text-white">
            <div className="col-span-2 flex flex-col items-start gap-[26px] md:justify-start">
              <h2 className="whitespace-pre-line text-center text-[36px] uppercase md:text-start md:text-[60px]">
                {title}
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
