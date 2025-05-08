import React from "react";
import Image from "next/image";
import { photos } from "../../casesData/data";

export const CaseGallery = () => {
  return (
    <div className=" 4xl:px-16 mt-9 flex max-w-[110%] touch-pan-x scroll-m-2 items-start justify-start gap-2 overflow-x-scroll px-5  md:items-center   lg:max-w-full  lg:justify-between">
      {photos.map((imgSrc, index) => (
        <Image
          src={imgSrc}
          className="h-[420px] w-[180px] lg:h-[568px] lg:w-[248px]"
          alt="Wallet App Case"
          key={index}
        />
      ))}
    </div>
  );
};
