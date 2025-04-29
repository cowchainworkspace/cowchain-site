import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TenetSolutionImage = ({ isFirst = false, img, isMobile = false }) => {
  return (
    <div className={"relative flex w-fit flex-shrink-0"}>
      <div className="z-20 flex h-[157px] w-full items-center justify-center xl:h-auto xl:w-[497px] xl:items-start">
        <Image
          className="relative z-20"
          src={img.href}
          alt={img.info}
          width={isMobile ? img.mobileWidth : img.width}
          height={isMobile ? img.mobileHeight : img.height}
        />
      </div>
      <div
        className="absolute z-10"
        style={{
          top: `${50}%`,
          left: `${50}%`,
          transform: "translate(-50%, -50%)",
          width: `${isMobile ? 400 : 700}px`,
          height: `${isMobile ? 250 : 550}px`,
          backgroundImage: `url(${isMobile ? img.ellipseMobile.src : img.ellipse.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
  );
};

export default TenetSolutionImage;
