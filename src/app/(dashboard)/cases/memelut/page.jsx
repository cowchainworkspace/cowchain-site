import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedMemelutProjects } from "../data";
import MemelutOverview from "./components/MemelutOverview";
import MemelutSolutions from "./components/MemelutSolutions";
import MemelutWhatWeDid from "./components/MemelutWhatWeDid";

import { metadata } from "./utils/memelutMetadata";

import {
  memelutSlides,
  memelutSolutions,
  memelutTeam,
  memeluteTags
} from "./utils/constants";
export { metadata };

const Memelut = () => {
  return (
    <section>
      <CaseHeroScreen
        pageTitle={"Memelut: The Tinder of Memecoins"}
        tags={memeluteTags}
        descriptionClasses="max-w-[640px] font-manrope"
        heroDescription={
          <p className="text-center font-manrope text-xs font-[450] leading-5 tracking-wider text-white-70 md:text-sm md:leading-[22.1px]">
            Memelut is an all-in-one app that simplifies exploring, trading, and
            storing memecoins. Designed for the growing $1.5T annual memecoin
            market, it eliminates the need for multiple apps by integrating a
            swipe-to-trade experience, social feeds, and secure storage into a
            single platform.
          </p>
        }
        containerClasses="relative"
        sectionClasses="lg:pb-[50px]"
        headerClasses="font-roc text-[36px] text-center leading-[42px] xl:text-[60px] xl:leading-[64px]"
      />

      <Banner
        img={"/cases/memelut/memelut-banner.webp"}
        classes={"h-[104px] md:h-[200px] lg:h-[300px] xl:h-[402px]"}
        imgDesc={"Memelut banner"}
      />
      <MemelutOverview containerClasses="xl:pb-[120px]" />
      <CasesSlider
        sectionClasses={"h-[226px] md:mb-[120px] py-5 md:py-0 md:h-[443px]"}
        images={memelutSlides}
        itemClasses={"pl-0 ml-[13px]  md:ml-7"}
      />

      <div className="mx-auto w-full max-w-[1246px] px-4 md:px-10 xl:px-0">
        {" "}
        <MemelutSolutions
          solutions={memelutSolutions}
          classes="md:gap-[85px] xl:last:-mt-0"
          containerClasses="w-full"
          gridClass="xl:gap-[50px]"
        />
      </div>
      <Banner
        img={"/cases/memelut/memelut-second-banner.webp"}
        classes={"h-[113px] md:h-[200px] lg:h-[300px] xl:h-[452px] "}
        imgDesc={"Memelut banner"}
      />
      <MemelutWhatWeDid />

      <Image
        width={1349}
        height={269}
        src="/cases/memelut/memelut-coins-banner.webp"
        className="mx-auto h-auto w-[calc(100vw-6px)] max-w-[1349px]"
      />
      <TeamBehind
        headerClasses={"xl:leading-[18.41px] xl:tracking-[1.84px]"}
        team={memelutTeam}
        classes={"pt-0 xl:pt-[60px]"}
      />
      <MoreProjects projects={relatedMemelutProjects} isReversed={true} />
      <Contact
        className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        descriptionClasses={"hidden md:block"}
        titleClasses={"mb-8 md:mb-0"}
      />
    </section>
  );
};

export default Memelut;
