import Image from "next/image";
import React from "react";
import HybridSvg from "../../../../../../../public/svgIcons/HybridSvg";

const BannerTitle = () => {
  return (
    <div className="absolute left-[139px] top-[201px] z-[100]">
      <HybridSvg />
      <p className="z-20 font-manrope text-xl leading-6 text-white">
        Layer 2 blockchain with AI integration
      </p>
    </div>
  );
};

export default BannerTitle;
