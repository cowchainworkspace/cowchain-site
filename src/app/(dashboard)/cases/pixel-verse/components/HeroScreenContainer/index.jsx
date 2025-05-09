"use client";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import CaseHeroScreen from "../../../components/HeroScreen";
import { pixelVerseTags, pixelVerseMobileTags } from "../../utils/constants";

const HeroScreenContainer = () => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  const currentData = isMoreThan768 ? pixelVerseTags : pixelVerseMobileTags;

  return (
    <div className="w-full">
      <CaseHeroScreen
        tagContainerClasses="flex-wrap lg:flex-nowrap justify-center"
        tags={currentData}
        pageTitle={"Pixelverse: Scaling GameFi with Telegram Mini-Apps"}
        heroDescription={
          "Pixelverse bridges Web2 and Web3 gaming with Telegram Mini-Apps like PixelTap, achieving 45 million monthly active users (MAU). Through strategic use of Telegram’s user base, it became a leader in GameFi innovation and engagement."
        }
        containerClasses="max-w-[800px]"
        descriptionClasses="max-w-[660px]"
        headerClasses="font-roc text-[36px] leading-[42px] xl:text-[60px] xl:leading-[64px] text-center"
      />
    </div>
  );
};

export default HeroScreenContainer;
