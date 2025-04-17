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
  imgInfo
}) => {
  console.log(imgSrc, imgInfo);
  return (
    <article
      className={cn(
        "flex w-full items-center justify-between rounded-[70px] bg-[#FFFFFF1C] py-10 pl-20 pr-6",
        isReverse && "flex-row-reverse bg-transparent"
      )}
    >
      <div
        className={cn("flex  flex-col gap-[30px]", isReverse && "items-end")}
        style={{
          width: `${textBlockWidth}px`
        }}
      >
        <h3 className="font-manrope text-xs uppercase leading-[18.41px] tracking-[1.84px] text-secondary">
          {title}
        </h3>
        <p
          className={cn(
            "font-manrope text-xl font-medium leading-[27.62px] text-white",
            isReverse && "text-right"
          )}
        >
          {desc}
        </p>
      </div>
      <div className="relative overflow-visible">
        {/* Floating image that overflows the card */}
        {/* <Image
          width={imgWidth}
          height={imgHeight}
          src={imgSrc}
          alt={imgInfo}
          className="relative -right-10 -top-10 z-20"
          style={{
            width: `${imgWidth}px`,
            height: `${imgHeight}px`
          }}
        /> */}
        <div
          className="absolute z-20"
          style={{
            width: `${imgWidth}px`,
            height: `${imgHeight}px`,
            backgroundImage: `url(${imgSrc.href})`,
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
