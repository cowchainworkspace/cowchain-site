import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CasesSolutions = ({ solutions, classes }) => {
  return (
    <section className="py-[120px]">
      <div className="mx-auto max-w-[1440px] px-[176px]">
        <h2 className="mb-1 font-roc text-[54px] font-medium uppercase leading-90 text-white">
          solutions
        </h2>
        <div className="flex w-full flex-col gap-4">
          {solutions.map(({ id, title, desc, img, textBlockWidth }, index) => (
            <div
              key={id}
              className={cn(
                "flex w-full items-center justify-between",
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
                <h3 className="font-manrope text-xs uppercase leading-5 tracking-[2px] text-secondary">
                  {title}
                </h3>
                <p
                  className={cn(
                    "text-xl font-medium leading-[30px] text-white",
                    (index + 1) % 2 === 0 && "text-right"
                  )}
                >
                  {desc}
                </p>
              </div>

              <div
                className="relative flex-shrink-0"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSolutions;
