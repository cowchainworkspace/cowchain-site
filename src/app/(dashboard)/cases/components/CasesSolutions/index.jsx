"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import SolutionCardImage from "../SolutionCardImage";

const CasesSolutions = ({ solutions, classes, isRetroBridge }) => {
  return (
    <section className="overflow-hidden py-[50px] xl:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 xl:px-[176px]">
        <h2 className="z-[100] mb-6 font-roc text-[32px] font-medium uppercase leading-90 text-white xl:mb-1 xl:text-[54px]">
          solutions
        </h2>
        <div className="grid w-full gap-14 md:grid-cols-2  xl:grid-cols-1  xl:gap-4 ">
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
                {isRetroBridge ? (
                  <SolutionCardImage
                    mobileWidth={img.mobileWidth}
                    imgSrc={img.href}
                    mobileHeight={img.mobileHeight}
                    top={img.top}
                  />
                ) : (
                  <Image
                    width={img.mobileWidth}
                    height={img.mobileHeight}
                    src={img.href}
                    alt={img.info}
                    className={"xl:hidden"}
                  />
                )}
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

export default CasesSolutions;
