"use client";
import React from "react";
import CaseHeroScreen from "../../../components/HeroScreen";
import bannerImg from "@/assets/agnt/banner-image.webp";
import { agntTags } from "../../utils/constants";
import dynamic from "next/dynamic";
import bannerImgMobile from "@/assets/agnt/agnt-mobile.webp";
import { useMediaQuery } from "@chakra-ui/react";

const Banner = dynamic(() => import("../../../components/Banner"));

const AgntHeader = () => {
  const [isMoreThan724] = useMediaQuery("(min-width: 724px)");

  return (
    <>
      <CaseHeroScreen
        tags={agntTags}
        pageTitle={"AGNT.Hub: Bringing AI Agents to Web3 and X"}
        tagContainerClasses="flex-wrap justify-center"
        heroDescription={
          <>
            AGNT.Hub is the first omnichain ecosystem for AI agents in Web3,
            also integrated into X. By combining AI automation, Web3 analytics,
            and cross-chain execution, the platform
            <br className="hidden custom1430:block" /> enables users to create,
            deploy, and monetize AI-driven solutions. As part of the DeFAI
            <br className="hidden custom1430:block" /> sector, AGNT.Hub connects
            AI market strategies with blockchain infrastructure, setting
            <br className="hidden custom1430:block" /> a new standard for
            decentralized AI.
          </>
        }
        headerClasses="font-medium text-[36px] max-w-[340px] md:max-w-full  font-roc text-center leading-[42px] xl:text-[60px] xl:leading-[64px]"
        containerClasses="max-w-[769px] text-center"
        descriptionClasses="md:max-w-[615px] custom1430:max-w-full text-xs text-balance tracking-[0] xl:tracking-wider leading-5 xl:text-sm xl:leading-6 font-manrope"
        sectionClasses={"xl:pt-[102px] xl:pb-[120px]"}
      />
      <Banner
        img={isMoreThan724 ? bannerImg : bannerImgMobile}
        classes={"h-[140px] md:h-[200px] lg:h-[300px] xl:h-[500px] w-full"}
      />
    </>
  );
};

export default AgntHeader;
