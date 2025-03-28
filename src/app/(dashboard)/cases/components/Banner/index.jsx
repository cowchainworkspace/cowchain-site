import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Banner = ({ img, imgDesc, classes }) => {
  return (
    <div className={cn(`relative ${classes}`)}>
      <Image src={img} fill objectFit="cover" alt={imgDesc} />
    </div>
  );
};

export default Banner;
