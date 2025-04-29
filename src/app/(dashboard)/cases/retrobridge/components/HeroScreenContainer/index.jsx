"use client";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import CaseHeroScreen from "../../../components/HeroScreen";
import { retroBridgeTags, retroBridgeMobileTags } from "../../utils/constants";

const HeroScreenContainer = () => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  const currentData = isMoreThan768 ? retroBridgeTags : retroBridgeMobileTags;

  return (
    <div className="w-full">
      <CaseHeroScreen
        pageTitle={"Retrobridge"}
        tags={currentData}
        heroDescription={
          <>
            RetroBridge is a blockchain-powered platform enabling seamless
            cross-chain asset transfers. With $200M in bridged volume and 1M+
            successful transactions, it demonstrates the growing demand for
            interoperability in Web3.
          </>
        }
        headerClasses="text-center max-w-[566px] text-[36px] leading-[42px] xl:text-[60px] xl:leading-[64px] uppercase font-foc font-medium"
        containerClasses="max-w-[671px]"
        descriptionClasses="text-center max-w-[671px]"
        tagContainerClasses="flex-wrap md:flex-nowrap justify-center max-w-[299px] md:max-w-fit"
      />
    </div>
  );
};

export default HeroScreenContainer;
