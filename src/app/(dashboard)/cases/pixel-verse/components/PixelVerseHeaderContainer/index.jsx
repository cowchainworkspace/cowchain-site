"use client";

import React from "react";
import HeroScreenContainer from "../HeroScreenContainer";
import Banner from "../../../components/Banner";
import bannerImg from "@/assets/cases/PixelVerse/pixel-verse-banner.webp";
import bannerImgMob from "@/assets/cases/PixelVerse/pixel-verse-banner-mob.webp";
import { useMediaQuery } from "@chakra-ui/react";

const PixelVerseHeaderContainer = () => {
  const [isMoreThan786px] = useMediaQuery("(min-width: 768px");
  const currentBanner = isMoreThan786px ? bannerImg : bannerImgMob;

  return (
    <>
      <HeroScreenContainer />
      <Banner
        img={currentBanner}
        imgDesc={"Screenshots from PixelVerse application"}
        classes={"w-full h-[114px] md:h-[200px] lg:h-[300px] xl:h-[437px]"}
      />
    </>
  );
};

export default PixelVerseHeaderContainer;
