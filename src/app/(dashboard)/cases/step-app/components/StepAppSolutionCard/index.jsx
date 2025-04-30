"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@chakra-ui/react";
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
  left,
  mobileHeight,
  mobileWidth,
  topMobile,
  leftMobile
}) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <article
      className={cn(
        " flex w-full flex-col-reverse  gap-4 overflow-hidden rounded-[26px] bg-[#FFFFFF1C] p-4 md:px-[18px] lg:px-6 xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:overflow-visible xl:rounded-[70px] xl:py-10 xl:pl-20 xl:pr-[65px]",
        isReverse && "xl:flex-row-reverse xl:bg-transparent"
      )}
    >
      <div
        className={cn(
          "flex  flex-col gap-4 xl:gap-[30px]",
          isReverse && "xl:items-end"
        )}
        style={{
          maxWidth: `${textBlockWidth}px`
        }}
      >
        <h3 className=" lg:trcking-[2px] font-manrope text-xs font-normal uppercase leading-5 tracking-[1.8px] text-secondary">
          {title}
        </h3>
        <p
          className={cn(
            "font-manrope text-xs font-medium leading-5 text-white xl:text-xl xl:leading-[30px]",
            isReverse && "xl:text-right"
          )}
        >
          {desc}
        </p>
      </div>
      <div className="relative overflow-visible">
        <div
          className="absolute z-20"
          style={{
            top: isLargerThan1280 ? `${top || 50}%` : `${topMobile || 50}%`,
            left: isLargerThan1280 ? `${left || 50}%` : `${leftMobile || 50}%`,
            transform: "translate(-50%, -50%)",
            width: `${isLargerThan1280 ? imgWidth : mobileWidth}px`,
            height: `${isLargerThan1280 ? imgHeight : mobileHeight}px`,
            backgroundImage: `url(${imgSrc.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        {/* Clipped decorative card */}
        <div className="step-app-solution-card relative z-10 h-[140px] w-full  overflow-hidden xl:size-[300px] xl:rounded-[16px] xl:rounded-[66px]">
          <div
            className="absolute inset-0 z-0 rounded-[16px] xl:rounded-[66px]"
            style={{
              backgroundImage: isLargerThan1280
                ? 'url("/cases/step-app/solution-card-ellipse.png")'
                : 'url("/cases/step-app/step-solution-mob-card.png")',
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
