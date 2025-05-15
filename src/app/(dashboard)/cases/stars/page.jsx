import Contact from "@/components/Contact";
import React from "react";
import Banner from "../components/Banner";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { hybrid, reflect, tenet } from "../data";
import SliderContainer from "./components/SliderContainer";
import StarsOverview from "./components/StarsOverview";
import StarsSolutions from "./components/StarsSolutions";
import StarsWhatWeDid from "./components/StarsWhatWeDid";
import { starsTags, starsTeam } from "./utils/constants";
import { metadata } from "./utils/starsMetadata";
export { metadata };

const Stars = () => {
  return (
    <section>
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
        img={"/cases/stars/stars-banner-img.webp"}
        classes={
          "h-[140px] md:h-[200px] lg:h-[300px] xl:h-[500px] custom-1700:h-[700px]"
        }
        imgDesc={"GBC banner"}
      />
      <StarsOverview />
      <SliderContainer />
      <StarsSolutions />
      <StarsWhatWeDid />
      <TeamBehind
        team={starsTeam}
        headerClasses={"text-xs leading-5 tracking-[2px]"}
        descClasses={"xl:text-xl xl:leading-[30px]"}
        classes={"xl:px-[97px]"}
        titleClasses={"xl:text-[55.24px]"}
        containerClasses={"md:grid-cols-2 custom1430:grid-cols-[1fr_600px]"}
      />
      <MoreProjects projects={[reflect, tenet, hybrid]} />
      <Contact
        titleClasses={"mb-8 md:mb-0"}
        className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
      />
    </section>
  );
};

export default Stars;
