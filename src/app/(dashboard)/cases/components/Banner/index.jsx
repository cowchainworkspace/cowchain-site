import { cn } from "@/lib/utils";
import Image from "next/image";
import HybridSvg from "public/svgIcons/HybridSvg";
import React from "react";

const Banner = ({ img, imgDesc, classes, decorationElement, bannerTitle }) => {
  return (
    <div className={cn(`relative ${classes}`)}>
      {decorationElement}
      {bannerTitle}
      {bannerTitle && (
        <Image
          width={442}
          height={219}
          src={"/cases/hybrid/cases-hybrid-ellipse.webp"}
          className="absolute left-10 top-10 z-50 h-[56] w-[112px] md:left-[65px] md:top-[83px] lg:top-[140px] lg:h-[219px] lg:h-[219px] lg:w-[442px] lg:w-[442px] lg:scale-150 xl:left-[77px]"
          alt="background decoration ellipse"
        />
      )}
      <Image
        src={img}
        fill
        objectFit="cover"
        objectPosition="center"
        alt={imgDesc}
        priority
      />
    </div>
  );
};

export default Banner;
