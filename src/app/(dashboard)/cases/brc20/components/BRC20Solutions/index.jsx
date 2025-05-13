"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const BRC20Solutions = ({ solutions, classes }) => {
  return (
    <section className="overflow-hidden py-[50px] xl:pb-[26px] xl:pt-[120px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 xl:px-[100px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium uppercase leading-90 text-white xl:hidden">
          solutions
        </h2>
        <div className="grid w-full gap-14 md:grid-cols-2  xl:grid-cols-1  xl:gap-[100px] ">
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
                  "flex w-full flex-col-reverse items-center gap-4 rounded-[10.42px] xl:h-[336px] xl:flex-row xl:justify-between xl:gap-0 xl:bg-[#111215] xl:px-[90px]",
                  (index + 1) % 2 === 0 && "xl:flex-row-reverse",
                  classes
                )}
              >
                {/* Text Block */}
                <div
                  className={cn(
                    "flex  flex-col gap-4 xl:gap-[28px]",
                    (index + 1) % 2 === 0 && "xl:items-end",
                    blockClasses
                  )}
                  style={{
                    maxWidth: `${textBlockWidth}px`
                  }}
                >
                  {index === 0 && (
                    <h2 className="-mt-[27px] hidden font-roc text-[32px] font-medium uppercase leading-90 text-white xl:mb-1 xl:block xl:text-[54px]">
                      solutions
                    </h2>
                  )}
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
                <div
                  className={cn(
                    "flex  w-full justify-start xl:hidden",
                    index === 1 &&
                      "h-[165px] justify-center  bg-[#0D0E12] py-1 "
                  )}
                >
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

export default BRC20Solutions;
