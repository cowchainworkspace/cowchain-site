import Contact from "@/components/Contact";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import StepAppProjectOverView from "./components/StepAppProjectOverView";
import StepAppSolutions from "./components/StepAppSolutions";
import StepAppWhatWeDid from "./components/StepAppWhatWeDid";

import {
  stepAppProjects,
  stepAppSlides,
  stepAppSolutions,
  stepAppTags,
  stepAppTeam
} from "./utils/constants";

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
        headerClasses="font-roc text-[36px] leading-[42px] xl:text-[60px] xl:leading-[64px]"
        tagContainerClasses="flex-wrap justify-center max-w-[484px]"
        descriptionClasses="max-w-[595px]"
      />
      <Banner
        img={"/cases/step-app/banner-step-app.webp"}
        classes={"h-[131px] md:h-[250px] lg:h-[350px] xl:h-[500px] w-full"}
        imgDesc={"Step-app banner image"}
      />
      <StepAppProjectOverView />
      <CasesSlider
        itemClasses={"pl-0 ml-[11px] md:ml-7"}
        sectionClasses={"h-[229px] py-5 md:py-0 md:h-[538px]"}
        images={stepAppSlides}
      />
      <StepAppSolutions solutions={stepAppSolutions} />
      <StepAppWhatWeDid />
      <TeamBehind titleClasses={"xl:text-[55.24px]"} team={stepAppTeam} />
      <MoreProjects
        headerClasses="xl:text-[42px] font-medium font-roc leading-90"
        projects={stepAppProjects}
      />
      <Contact
        className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        descriptionClasses={"hidden md:block"}
        titleClasses={"mb-8 md:mb-0"}
      />
    </section>
  );
};

export default StepApp;
