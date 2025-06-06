"use client";

import React from "react";
import CaseHeroScreen from "../../../components/HeroScreen";
import bannerImg from "@/assets/cases/stars/stars-banner-img.webp";
import bannerImgMob from "@/assets/cases/stars/stars-banner-mobile.webp";

import Banner from "../../../components/Banner";
import { starsTags } from "../../utils/constants";
import { useMediaQuery } from "@chakra-ui/react";

const StarsHeaderContainer = () => {
  const [isMoreThan786px] = useMediaQuery("(min-width: 768px");
  const currentBanner = isMoreThan786px ? bannerImg : bannerImgMob;

  return (
    <>
      <CaseHeroScreen
        pageTitle={"Stars: Scaling Community Engagement with a Mini App"}
        tagContainerClasses="flex-wrap justify-center"
        tags={starsTags}
        descriptionClasses="max-w-[660px] font-manrope"
        heroDescription={
          "Stars is a Telegram mini app where users earn points by completing simple, community-focused tasks. Built for mass onboarding, Stars combines game-like simplicity with powerful mechanics that keep users engaged."
        }
        containerClasses="relative max-w-[790px]"
        headerClasses="font-roc max-w-[790px] text-[36px] text-center leading-[42px] xl:text-[60px] xl:leading-[64px]"
      />
      <Banner
        img={currentBanner}
        classes={
          "h-[140px] md:h-[200px] lg:h-[300px] xl:h-[500px] custom-1700:h-[700px]"
        }
        imgDesc={"GBC banner"}
      />
    </>
  );
};

export default StarsHeaderContainer;
