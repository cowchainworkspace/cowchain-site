import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import GBCSolutionCard from "../GBCSolutionCard";

const GBCSolutions = ({ solutions, classes }) => {
  return (
    <section className="py-[120px]">
      <div className="mx-auto max-w-[1440px] pl-[90px] pr-[130px]">
        <h2 className="font-roc text-[50px] font-medium uppercase leading-90 text-white">
          solutions
        </h2>
        <div className="flex w-full flex-col gap-20">
          {solutions.map(({ id, title, desc, img, textBlockWidth }, index) => (
            <div
              key={id}
              className={cn(
                "flex w-full items-center justify-between last:-mt-[55px]",
                (index + 1) % 2 === 0 && "flex-row-reverse",
                classes
              )}
            >
              {/* Text Block */}
              <div
                className={cn(
                  "flex  flex-col gap-[30px]",
                  (index + 1) % 2 === 0 && "items-end"
                )}
                style={{
                  width: `${textBlockWidth}px`
                }}
              >
                <h3 className="font-manrope text-xs uppercase leading-[19px] tracking-[2px] text-secondary">
                  {title}
                </h3>
                <p
                  className={cn(
                    "text-[19px] font-medium leading-[28px] text-white",
                    (index + 1) % 2 === 0 && "text-right"
                  )}
                >
                  {desc}
                </p>
              </div>
              {!img ? (
                <GBCSolutionCard />
              ) : (
                <div
                  className={cn("relative flex-shrink-0", img.leftMargin)}
                  style={{
                    width: `${img.width}px`,
                    height: `${img.height}px`
                  }}
                >
                  <Image
                    src={img.href}
                    alt={img.info}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GBCSolutions;
