"use client";

import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import CasesSlider from "../../../components/CasesSlider";
import { starsMobileSlides, starsSlides } from "../../utils/constants";

const SliderContainer = () => {
  const [isMoreThan] = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <CasesSlider
        itemClasses={"pl-0 ml-[11px] md:ml-7"}
        sectionClasses={"h-[209px] md:h-[646px]"}
        images={isMoreThan ? starsSlides : starsMobileSlides}
      />
    </div>
  );
};

export default SliderContainer;
