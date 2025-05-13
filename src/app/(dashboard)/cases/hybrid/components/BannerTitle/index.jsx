import Image from "next/image";
import React from "react";
import HybridSvg from "../../../../../../../public/svgIcons/HybridSvg";

const BannerTitle = () => {
  return (
    <div className="absolute left-[40px] top-[57px] z-[100] md:left-[80px] md:top-[110px] lg:left-[80px] lg:top-[100px] xl:left-[139px] xl:top-[201px]">
      <HybridSvg
        props={{ className: "w-[65px] h-[27px] lg:w-[251px] lg:h-[103px]" }}
      />
      <p className="z-20 font-manrope text-xs leading-4  text-white lg:text-xl lg:leading-6">
        Layer 2 blockchain with
        <br className="md:hidden" /> AI integration
      </p>
    </div>
  );
};

export default BannerTitle;
