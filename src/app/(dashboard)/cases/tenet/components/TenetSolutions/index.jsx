"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import TenetSolutionImage from "../TenetSolutionImage";

const TenetSolutions = ({ solutions, classes }) => {
  const [isMoreThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <section className=" overflow-hidden py-[50px] xl:overflow-visible xl:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-[97px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium uppercase leading-90 text-white xl:mb-15 xl:text-[50px]">
          solutions
        </h2>
        <div className="md:ga-5 grid w-full gap-14 md:grid-cols-2  xl:grid-cols-1 xl:gap-[100px]">
          {solutions.map(({ id, title, desc, img, textBlockWidth }, index) => (
            <div
              key={id}
              className={cn(
                "flex w-full flex-col-reverse items-center gap-4 xl:flex-row xl:justify-between ",
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
                    "font-manrope text-xs font-medium leading-5 text-white xl:text-xl xl:leading-[30px]",
                    (index + 1) % 2 === 0 && "xl:text-right"
                  )}
                >
                  {desc}
                </p>
              </div>
              <TenetSolutionImage
                img={img}
                isFirst={index === 0}
                isMobile={!isMoreThan1280}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TenetSolutions;
