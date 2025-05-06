"use client";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import CaseHeroScreen from "../../../components/HeroScreen";
import { hybridTags, mobileTags } from "../../utils/constants";

const HeroScreenContainer = () => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  const currentData = isMoreThan768 ? hybridTags : mobileTags;

  return (
    <div className="w-full">
      <CaseHeroScreen
        tags={currentData}
        pageTitle={"Hybrid: Revolutionizing Blockchain and AI Integration"}
        heroDescription={
          <>
            Hybrid is a Layer 2 blockchain on Arbitrum Nitro, integrating the
            Mixture of Experts (MoE)
            <br className="hidden custom1430:block" /> framework to power
            specialized AI agents. By enabling real-time AI execution on-chain,
            it bridges blockchain and AI-driven solutions. With Atlas – The Web3
            Copilot, Hybrid simplifies market research, data tracking, and AI
            monetization, solidifying its role in blockchain innovation.
          </>
        }
        tagContainerClasses={
          "flex-wrap justify-center max-w-[320px] xl:max-w-full"
        }
        descriptionClasses="md:w-[670px]"
        headerClasses="font-roc text-center font-medium text-[36px] leading-[42px] xl:text-[60px] xl:leading-[64px]"
        containerClasses="max-w-[769px]"
        sectionClasses="pb-[50px] xl:pb-[125px]"
      />
    </div>
  );
};

export default HeroScreenContainer;
