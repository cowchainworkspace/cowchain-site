import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const AgntSolution = ({ solutions, classes }) => {
  return (
    <section className="pb-[114px] pt-[155px]">
      <div className="mx-auto max-w-[1440px] px-[97px]">
        <h2 className="mb-1 font-roc text-[54px] font-medium uppercase leading-90 text-white">
          solutions
        </h2>
        <div className="flex w-full flex-col gap-[100px]">
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
                  "flex w-full items-center justify-between",
                  (index + 1) % 2 === 0 && "flex-row-reverse",
                  classes
                )}
              >
                {/* Text Block */}
                <div
                  className={cn(
                    "flex  flex-col gap-[30px]",
                    (index + 1) % 2 === 0 && "items-end",
                    blockClasses
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
                  className={cn("relative flex-shrink-0", imageClasses)}
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
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AgntSolution;
