"use client";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

const MemelutBannerContainer = () => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  const currentBanner = isMoreThan768
    ? "/cases/memelut/memelut-banner.webp"
    : "/cases/memolut-banner-mob.png";

  return (
    <Banner
      img={currentBanner}
      classes={"h-[104px] md:h-[200px] lg:h-[300px] xl:h-[402px]"}
      imgDesc={"Memelut banner"}
    />
  );
};

export default MemelutBannerContainer;
