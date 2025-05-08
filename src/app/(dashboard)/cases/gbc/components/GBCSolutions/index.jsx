"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import GBCSolutionCard from "../GBCSolutionCard";

const GBCSolutions = ({ solutions, classes }) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <section className="py-[50px] xl:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:pl-[138px] xl:pr-[136px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium uppercase leading-90 text-white xl:mb-0 xl:text-[50px]">
          solutions
        </h2>
        <div className="md:ga-5 grid w-full gap-14 md:grid-cols-2  xl:grid-cols-1 xl:gap-20">
          {solutions.map(({ id, title, desc, img, textBlockWidth }, index) => (
            <div
              key={id}
              className={cn(
                "flex w-full flex-col-reverse items-center gap-4 xl:flex-row xl:justify-between xl:last:-mt-[55px]",
                (index + 1) % 2 === 0 && "xl:flex-row-reverse",
                classes
              )}
            >
              {/* Text Block */}
              <div
                className={cn(
                  "flex  flex-col gap-4 xl:gap-[30px]",
                  (index + 1) % 2 === 0 && "xl:items-end"
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
                    "font-manrope text-xs font-medium leading-5 text-white xl:text-xl xl:leading-[27.62px]",
                    (index + 1) % 2 === 0 && "xl:text-right"
                  )}
                >
                  {desc}
                </p>
              </div>
              {!img ? (
                <div className="flex h-full items-center py-7 xl:py-0">
                  <GBCSolutionCard />
                </div>
              ) : (
                <Image
                  width={isLargerThan1280 ? img.width : img.mobileWidth}
                  height={isLargerThan1280 ? img.height : img.mobileHeight}
                  src={isLargerThan1280 ? img.href : img.mobileHref}
                  alt={img.info}
                  className={img.leftMargin}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GBCSolutions;
