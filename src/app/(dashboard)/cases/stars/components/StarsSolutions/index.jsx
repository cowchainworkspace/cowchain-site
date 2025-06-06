"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { starsSolutions } from "../../utils/constants";

const StarsSolutions = ({ classes }) => {
  return (
    <section className="overflow-hidden py-[50px] xl:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 xl:px-[97px]">
        <h2 className="mx-auto mb-6 max-w-[343px] font-roc text-[32px] font-medium uppercase leading-90 text-white md:mx-0 md:max-w-full xl:mb-[58px] xl:text-center xl:text-[54px]">
          Custom Telegram Mini App Development
        </h2>
        <div className=" hidden w-full justify-center xl:mb-[100px] xl:flex">
          <p className="max-w-[658px] text-center font-manrope text-xl font-medium leading-[30px] text-white ">
            Stars was designed to make Web3 accessible without cold starts, long
            sign-ups, or wallet hurdles. The mini app serves as both a mission
            engine and a community layer, enabling teams to drive campaigns,
            reward engagement, and maintain activity with minimal friction.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[343px]  gap-14 md:mx-0 md:max-w-full md:grid-cols-2 xl:grid-cols-1  xl:gap-[100px] ">
          {starsSolutions.map(
            (
              {
                id,
                title,
                desc,
                img,
                textBlockWidth,
                blockClasses,
                imageClasses
              },
              index
            ) => (
              <div
                key={id}
                className={cn(
                  "flex w-full flex-col-reverse items-center gap-4 xl:flex-row xl:justify-between xl:gap-0",
                  (index + 1) % 2 === 0 && "xl:flex-row-reverse",
                  classes
                )}
              >
                {/* Text Block */}
                <div
                  className={cn(
                    "flex  flex-col gap-4 xl:gap-[30px]",
                    (index + 1) % 2 === 0 && "xl:items-end",
                    blockClasses
                  )}
                  style={{
                    maxWidth: `${textBlockWidth}px`
                  }}
                >
                  <h3 className="font-manrope text-xs uppercase leading-5 tracking-[2px] text-secondary">
                    {title}
                  </h3>
                  <p
                    className={cn(
                      "text-xs font-medium leading-5 text-white xl:text-xl xl:leading-[30px]",
                      (index + 1) % 2 === 0 && "xl:text-right"
                    )}
                  >
                    {desc}
                  </p>
                </div>
                <div className="flex h-fit w-full justify-start xl:hidden">
                  <Image
                    width={img.mobileWidth}
                    height={img.mobileHeight}
                    src={img.mobileHref}
                    alt={img.info}
                  />
                </div>

                <div
                  className={cn(
                    "relative hidden flex-shrink-0 xl:block",
                    imageClasses
                  )}
                  style={{
                    width: `${img.width}px`,
                    height: `${img.height}px`
                  }}
                >
                  <Image src={img.href} fill className="object-contain" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StarsSolutions;
