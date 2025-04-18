import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const StepAppSolutionCard = ({
  isReverse,
  textBlockWidth,
  title,
  desc,
  imgWidth,
  imgHeight,
  imgSrc,
  top,
  left
}) => {
  return (
    <article
      className={cn(
        "flex w-full items-center justify-between rounded-[70px] bg-[#FFFFFF1C] py-10 pl-20 pr-[65px]",
        isReverse && "flex-row-reverse bg-transparent"
      )}
    >
      <div
        className={cn("flex  flex-col gap-[30px]", isReverse && "items-end")}
        style={{
          width: `${textBlockWidth}px`
        }}
      >
        <h3 className="font-manrope text-xs uppercase leading-[20px] tracking-[2px] text-secondary">
          {title}
        </h3>
        <p
          className={cn(
            "font-manrope text-xl font-medium leading-[30px] text-white",
            isReverse && "text-right"
          )}
        >
          {desc}
        </p>
      </div>
      <div className="relative overflow-visible">
        <div
          className="absolute z-20"
          style={{
            top: `${top || 50}%`,
            left: `${left || 50}%`,
            transform: "translate(-50%, -50%)",
            width: `${imgWidth}px`,
            height: `${imgHeight}px`,
            backgroundImage: `url(${imgSrc.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        {/* Clipped decorative card */}
        <div className="relative z-10 size-[300px] overflow-hidden rounded-[66px]">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/cases/step-app/solution-card-bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default StepAppSolutionCard;
