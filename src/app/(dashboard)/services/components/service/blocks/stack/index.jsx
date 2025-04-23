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
  noMarginBottom = false,
  typographyContainer = ""
}) {
  return (
    <section
      id="expertise"
      className={cn("relative pb-[30px] pt-[60px] md:mt-0 md:py-[126px]")}
    >
      {!home && (
        <Image
          alt=""
          className="absolute -top-24 left-0 hidden md:block"
          src={dexStackBg}
        />
      )}
      <div
        className={`relative z-20 mx-auto flex max-w-[1440px] flex-col sm:grid ${twoColumns ? "grid-cols-2" : "grid-cols-[265px_1fr] lg:grid-cols-[265px_1fr_1fr]"}
         gap-x-[200px] gap-y-[44px] px-[20px] md:gap-y-[50px] md:pl-8 md:pr-[46px] xl:pl-[88px]`}
      >
        <div
          className={`relative col-span-1 ${twoColumns ? "row-span-1" : lopngDesc ? "row-span-4" : "row-span-6  lg:row-span-3"}`}
        >
          <div
            className={cn(
              "flex flex-col justify-center text-left text-white md:mx-auto md:mb-16 md:items-start",
              {
                "!mb-0": noMarginBottom,
                "items-start": twoColumns
              },
              typographyContainer
            )}
          >
            <div
              className={cn(
                "col-span-2 flex flex-col gap-[26px] md:items-start  md:justify-start",
                {
                  "md:mr-[83px]": isMarginRight
                }
              )}
            >
              <h2 className="text-[36px] uppercase  md:text-start lg:text-[60px]">
                {title ? (
                  title
                ) : (
                  <p className="text-left text-[36px] font-[500] uppercase leading-[36px] md:whitespace-nowrap  md:leading-[53px] xl:text-[60px]">
                    Tech <br className="hidden xl:block" /> Stack{" "}
                    <br className="block" /> We UsE
                  </p>
                )}
              </h2>

              <p className="leading-[22px] text-[16px] text-[#BBBBBB]">{desc}</p>
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
