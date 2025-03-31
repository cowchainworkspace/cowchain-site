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
          className="absolute left-[77px] top-[140px] z-50 scale-150"
          alt="background decoration ellipse"
        />
      )}
      <Image src={img} fill objectFit="cover" alt={imgDesc} />
    </div>
  );
};

export default Banner;
