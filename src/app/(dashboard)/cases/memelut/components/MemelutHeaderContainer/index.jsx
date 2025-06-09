import React from "react";
import CaseHeroScreen from "../../../components/HeroScreen";
import MemelutBannerContainer from "../MemelutBannerContainer";
import { memeluteTags } from "../../utils/constants";

const MemelutHeaderContainer = () => {
  return (
    <div>
      <CaseHeroScreen
        pageTitle={"Memelut: The Tinder of Memecoins"}
        tags={memeluteTags}
        descriptionClasses="max-w-[640px] font-manrope"
        heroDescription={
          <span className="text-center font-manrope text-xs font-[450] leading-5 tracking-wider text-white-70 md:text-sm md:leading-[22.1px]">
            Memelut is an all-in-one app that simplifies exploring, trading, and
            storing memecoins. Designed for the growing $1.5T annual memecoin
            market, it eliminates the need for multiple apps by integrating a
            swipe-to-trade experience, social feeds, and secure storage into a
            single platform.
          </span>
        }
        containerClasses="relative"
        sectionClasses="lg:pb-[50px]"
        headerClasses="font-roc text-[36px] text-center leading-[42px] xl:text-[60px] xl:leading-[64px]"
      />
      <MemelutBannerContainer />
    </div>
  );
};

export default MemelutHeaderContainer;
