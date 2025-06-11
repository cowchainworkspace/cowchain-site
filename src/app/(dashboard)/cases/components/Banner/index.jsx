import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Banner = ({
  img,
  imgDesc,
  classes,
  decorationElement,
  bannerTitle,
  decorationImage,
  isHighPriority = true
}) => {
  return (
    <div className={cn(`relative w-full ${classes}`)}>
      {decorationElement}
      {bannerTitle}
      {decorationImage}
      <Image
        src={img}
        fill
        objectFit="cover"
        objectPosition="center"
        alt={imgDesc}
        priority={isHighPriority}
      />
    </div>
  );
};

export default Banner;
