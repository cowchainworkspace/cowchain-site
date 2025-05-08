"use client";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import CaseHeroScreen from "../../../components/HeroScreen";
import { mobileTenetTagData, tenetTags } from "../../utils/constants";

const HeroScreenContainer = () => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  const currentData = isMoreThan768 ? tenetTags : mobileTenetTagData;

  return (
    <div className="w-full">
      <CaseHeroScreen
        headerClasses="font-roc text-[36px] text-center
   leading-[42px] xl:text-[60px] xl:leading-[64px]"
        tags={currentData}
        tagContainerClasses="max-w-[320px] md:max-w-[640px] flex-wrap justify-center"
        pageTitle={
          "Tenet: Redefining Liquid Staking with Cosmos-Based Innovation"
        }
        heroDescription={
          "Tenet is a Cosmos-based Layer-1 blockchain designed to validate networks using LSD/LRT assets. By integrating LayerZero technology, Tenet enables cross-chain liquidity, governance participation, and diversified staking opportunities across Ethereum, BNB, Polygon, Avalanche, and more."
        }
        containerClasses="max-w-[940px]"
        descriptionClasses="max-w-[587px] font-manrope"
      />
    </div>
  );
};

export default HeroScreenContainer;
