"use client";
import React from "react";
import CaseHeroScreen from "../../../components/HeroScreen";
import Banner from "../../../components/Banner";
import { reflectTags } from "../../utils/constants";
import bannerImg from "@/assets/cases/reflect/reflect-banner.webp";

const ReflectHeaderContainer = () => {
  return (
    <>
      <CaseHeroScreen
        pageTitle={"Reflect: DeFAI Automation for Droms"}
        tags={reflectTags}
        descriptionClasses="max-w-[640px] font-manrope"
        heroDescription={
          <span className="text-center font-manrope text-xs font-[450] leading-5 tracking-wider text-white-70 md:text-sm md:leading-[22.1px]">
            Reflect is an AI agent designed to streamline DeFi interactions
            across Velodrome, Aerodrome, and 10+ additional chains. By enabling
            users to manage liquidity, execute swaps, stake assets, and vote on
            governance proposals directly through chat commands, Reflect
            enhances simplicity and accessibility in DeFAI.
          </span>
        }
        containerClasses="relative"
        sectionClasses="lg:pb-[50px]"
        headerClasses="font-roc text-[36px] text-center leading-[42px] xl:text-[60px] xl:leading-[64px]"
      />

      <Banner
        img={bannerImg}
        classes={"h-[145px] md:h-[300px] lg:h-[400px] xl:h-[560px]"}
        imgDesc={"Reflect banner"}
      />
    </>
  );
};

export default ReflectHeaderContainer;
