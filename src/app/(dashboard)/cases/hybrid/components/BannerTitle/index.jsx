import Image from "next/image";
import React from "react";
import HybridSvg from "../../../../../../../public/svgIcons/HybridSvg";

const BannerTitle = () => {
  return (
    <div className="absolute left-[50px] top-[57px] z-[100] md:left-[80px] md:top-[110px] lg:left-[80px] lg:top-[100px] xl:left-[139px] xl:top-[201px]">
      <HybridSvg
        props={{ className: "w-[65px] h-[27px] lg:w-[251px] lg:h-[103px]" }}
      />
      <p className="z-20 font-manrope text-[5.17px] leading-6 leading-[6.2px] text-white lg:text-xl lg:leading-6">
        Layer 2 blockchain with AI integration
      </p>
    </div>
  );
};

export default BannerTitle;
