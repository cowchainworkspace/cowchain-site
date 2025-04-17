import React from "react";
import CaseHeroScreen from "../components/HeroScreen";
import {
  stepAppTags,
  stepAppSlides,
  stepAppSolutions
} from "./utils/constants";
import Banner from "../components/Banner";
import StepAppProjectOverView from "./components/StepAppProjectOverView";
import CasesSlider from "../components/CasesSlider";
import StepAppSolutions from "./components/StepAppSolutions";

const StepApp = () => {
  return (
    <section>
      <CaseHeroScreen
        tags={stepAppTags}
        pageTitle={"Step App"}
        heroDescription={
          <>
            StepApp is an innovative Move-to-Earn platform that rewards users
            for physical movement. With over 300,000 active users, 9M unique
            wallets and a presence in 100+ countries, the project exemplifies
            the intersection of fitness and blockchain innovation.
          </>
        }
        tagContainerClasses="flex-wrap justify-center max-w-[484px]"
        descriptionClasses="max-w-[595px]"
      />
      <Banner
        img={"/cases/step-app/banner-step-app.webp"}
        classes={"h-[500px] w-full"}
        imgDesc={"Step-app banner image"}
      />
      <StepAppProjectOverView />
      <CasesSlider
        itemClasses={"pl-0 ml-7"}
        sectionClasses={"h-[538px]"}
        images={stepAppSlides}
      />
      <StepAppSolutions solutions={stepAppSolutions} />
    </section>
  );
};

export default StepApp;
