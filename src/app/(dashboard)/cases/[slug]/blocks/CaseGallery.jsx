import React from "react";
import Image from "next/image";

export const CaseGallery = ({ photos }) => {
  console.log(photos, "case_photos");
  return (
    <div className=" 4xl:px-16 mt-9 flex max-w-[110%] touch-pan-x scroll-m-2 items-start justify-start gap-2 overflow-x-scroll px-5  md:items-center   lg:max-w-full  lg:justify-between">
      {photos &&
        photos.map((imgSrc, index) => (
          <Image
            src={imgSrc.attributes.url}
            width={imgSrc.attributes.width}
            height={imgSrc.attributes.height}
            className="h-[420px] w-[180px] lg:h-[568px] lg:w-[248px]"
            alt=""
            key={index}
          />
        ))}
    </div>
  );
};
