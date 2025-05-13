"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const AgntSolution = ({ solutions, classes }) => {
  const [isMoreThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <section className="py-[50px] xl:pb-[114px] xl:pt-[155px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 xl:px-[97px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium uppercase leading-90 text-white xl:mb-1 xl:text-[54px]">
          solutions
        </h2>
        <div className="grid w-full gap-[56px] md:grid-cols-2  xl:grid-cols-1 xl:gap-[100px]">
          {solutions.map(
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
                  "flex w-full flex-col-reverse gap-4 xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:gap-6",
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
                      "font-manrope text-xs font-medium leading-5 text-white xl:text-xl xl:leading-[30px]",
                      (index + 1) % 2 === 0 && "xl:text-right"
                    )}
                  >
                    {desc}
                  </p>
                </div>
                <div className="flex w-full justify-center xl:w-fit xl:justify-normal">
                  <div
                    className={cn("relative flex-shrink-0 ", imageClasses)}
                    style={{
                      width: `${isMoreThan1280 ? img.width : img.mobileWidth}px`,
                      height: `${isMoreThan1280 ? img.height : img.mobileHeight}px`
                    }}
                  >
                    <Image
                      src={isMoreThan1280 ? img.href : img.mobileHref}
                      alt={img.info}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AgntSolution;
