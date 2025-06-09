"use client";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Banner from "../../../components/Banner";
import bannerImg from "@/assets/cases/memelut/memelut-banner.webp";
import bannerImgMobile from "@/assets/cases/memelut/memolut-banner-mob.png";

const MemelutBannerContainer = () => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  const currentBanner = isMoreThan768 ? bannerImg : bannerImgMobile;

  return (
    <Banner
      img={currentBanner}
      classes={"h-[104px] md:h-[200px] lg:h-[300px] xl:h-[402px]"}
      imgDesc={"Memelut banner"}
    />
  );
};

export default MemelutBannerContainer;
