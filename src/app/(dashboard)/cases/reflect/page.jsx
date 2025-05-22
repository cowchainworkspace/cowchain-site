import Contact from "@/components/Contact";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedReflectProjects } from "../data";
import ReflectOverview from "./components/ReflectOverview";
import ReflectSolutions from "./components/ReflectSolutions";
import ReflectWhatWeDid from "./components/ReflectWhatWeDid";

import { metadata } from "./utils/reflectMetadata";

import {
  reflectSlides,
  reflectSolutions,
  reflectTeam,
  reflectTags
} from "./utils/constants";
export { metadata };

const Reflect = () => {
  return (
    <section>
      <CaseHeroScreen
        pageTitle={"Reflect: DeFAI Automation for Droms"}
        tags={reflectTags}
        descriptionClasses="max-w-[640px] font-manrope"
        heroDescription={
          <p className="text-center font-manrope text-xs font-[450] leading-5 tracking-wider text-white-70 md:text-sm md:leading-[22.1px]">
            Reflect is an AI agent designed to streamline DeFi interactions
            across Velodrome, Aerodrome, and 10+ additional chains. By enabling
            users to manage liquidity, execute swaps, stake assets, and vote on
            governance proposals directly through chat commands, Reflect
            enhances simplicity and accessibility in DeFAI.
          </p>
        }
        containerClasses="relative"
        sectionClasses="lg:pb-[50px]"
        headerClasses="font-roc text-[36px] text-center leading-[42px] xl:text-[60px] xl:leading-[64px]"
      />

      <Banner
        img={"/cases/reflect/reflect-banner.webp"}
        classes={"h-[145px] md:h-[300px] lg:h-[400px] xl:h-[560px]"}
        imgDesc={"Reflect banner"}
      />
      <ReflectOverview containerClasses="pb-[22px] md:pb-[120px]" />

      <CasesSlider
        sectionClasses={"h-[157px] mb-0 md:mb-[63px]  md:h-[492px]"}
        images={reflectSlides}
        itemClasses={"pl-0 ml-[13px] md:ml-7"}
      />

      <div className="mx-auto w-full max-w-[1246px] px-4 md:px-10 xl:px-0">
        {" "}
        <ReflectSolutions
          solutions={reflectSolutions}
          classes="md:gap-[69px] xl:last:-mt-0"
          containerClasses="w-full"
          gridClass="xl:gap-0"
        />
      </div>
      <img
        className="mx-auto hidden h-auto w-full max-w-[1440px] sm:block"
        src="/cases/reflect/reflect-second-banner.webp"
        alt="Reflect banner"
      />

      <img
        width={375}
        height={170}
        className={"mx-auto block h-[170px] max-w-[375px] sm:hidden "}
        src="/cases/reflect/mob-reflect-second-banner.webp"
      />
      <ReflectWhatWeDid />
      <TeamBehind
        headerClasses={"xl:leading-[18.41px] xl:tracking-[1.84px]"}
        team={reflectTeam}
        classes={"pt-0 xl:pt-[60px]"}
      />
      <MoreProjects projects={relatedReflectProjects} isReversed={true} />
      <Contact
        className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        descriptionClasses={"hidden md:block"}
        titleClasses={"mb-8 md:mb-0"}
      />
    </section>
  );
};

export default Reflect;
