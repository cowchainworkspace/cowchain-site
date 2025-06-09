"use client";
import React from "react";
import bannerImg from "@/assets/cases/gbc/gbc-banner.webp";
import bannerImgMobile from "@/assets/cases/gbc/gbc-banner-mobile.webp";
import leftDecorImage from "@/assets/cases/gbc/candy-one.png";
import rightDecorImage from "@/assets/cases/gbc/candy-two.png";
import Banner from "../../../components/Banner";
import CaseHeroScreen from "../../../components/HeroScreen";
import Image from "next/image";
import { gbcTags } from "../../utils/constants";
import { useMediaQuery } from "@chakra-ui/react";

const GBCHeaderContainer = () => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  const currentBannerImg = isMoreThan768 ? bannerImg : bannerImgMobile;
  return (
    <>
      <CaseHeroScreen
        pageTitle={"GMX Blueberry Club"}
        tags={gbcTags}
        descriptionClasses="max-w-[660px] font-manrope"
        heroDescription={
          <span className="text-center font-manrope text-xs font-[450] leading-5 tracking-wider text-white-70 md:text-sm md:leading-[22.1px]">
            GMX Blueberry Club (GBC) is a next-generation NFT platform that
            combines customization, trading, and gamification. It allows users
            to collect and personalize GBC NFTs, trade assets, earn Sweet
            Points, and participate in competitions and interactive quests.
          </span>
        }
        containerClasses="relative"
        headerClasses="font-roc text-[36px] text-center leading-[42px] xl:text-[64px] xl:leading-[64px]"
        bgDecoration={
          <>
            <Image
              width={56}
              height={56}
              src={leftDecorImage}
              className="absolute -left-10 top-[35%] hidden scale-150 lg:block"
              alt={"lollipop"}
            />
            <Image
              width={78}
              height={79}
              src={rightDecorImage}
              className="absolute -right-10 bottom-0 hidden scale-150 lg:block"
              alt={"lollipop"}
            />
          </>
        }
      />
      <Banner
        img={currentBannerImg}
        classes={"h-[140px] md:h-[200px] lg:h-[300px] xl:h-[500px]"}
        imgDesc={"GBC banner"}
      />
    </>
  );
};

export default GBCHeaderContainer;
