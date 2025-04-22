import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import GBCOverview from "./components/GBCOverview";
import GBCRewards from "./components/GBCRewards";
import GBCSlider from "./components/GBCSlider";
import GBCSolutions from "./components/GBCSolutions";
import GBCWhatWeDid from "./components/GBCWhatWeDid";
import { metadata } from "./utils/gbcMetadata";

import {
  gbcProjects,
  gbcSlides,
  gbcSolutions,
  gbcTags,
  gbcTeam
} from "./utils/constants";
export { metadata };

const GBC = () => {
  return (
    <section>
      <CaseHeroScreen
        pageTitle={"GMX Blueberry Club"}
        tags={gbcTags}
        descriptionClasses="max-w-[640px] font-manrope"
        heroDescription={
          <p className="text-center font-manrope text-xs font-[450] leading-5 tracking-wider text-white-70 md:text-sm md:leading-[22.1px]">
            GMX Blueberry Club (GBC) is a next-generation NFT platform that
            combines customization, trading, and gamification. It allows users
            to collect and personalize GBC NFTs, trade assets, earn Sweet
            Points, and participate in competitions and interactive quests.
          </p>
        }
        containerClasses="relative"
        headerClasses="font-montserrat text-[36px] text-center leading-[42px] xl:text-[64px] xl:leading-[64px]"
        bgDecoration={
          <>
            <Image
              width={56}
              height={56}
              src={"/cases/gbc/candy-one.png"}
              className="absolute -left-10 top-[35%] hidden scale-150 lg:block"
              alt={"lollipop"}
            />
            <Image
              width={78}
              height={79}
              src={"/cases/gbc/candy-two.png"}
              className="absolute -right-10 bottom-0 hidden scale-150 lg:block"
              alt={"lollipop"}
            />
          </>
        }
      />
      <Banner
        img={"/cases/gbc/gbc-banner.webp"}
        classes={"h-[140px] md:h-[200px] lg:h-[300px] xl:h-[500px]"}
        imgDesc={"GBC banner"}
      />
      <GBCOverview />
      <CasesSlider
        sectionClasses={"h-[226px] py-5 md:py-0 md:h-[443px]"}
        images={gbcSlides}
        itemClasses={"pl-0 ml-[13px] md:ml-7"}
      />
      <GBCSolutions solutions={gbcSolutions} />
      <GBCRewards />
      <GBCWhatWeDid />
      <GBCSlider />
      <TeamBehind
        headerClasses={"xl:leading-[18.41px] xl:tracking-[1.84px]"}
        team={gbcTeam}
        classes={"pt-[50px] xl:pt-30"}
      />
      <MoreProjects projects={gbcProjects} />
      <Contact
        className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        descriptionClasses={"hidden md:block"}
        titleClasses={"mb-8 md:mb-0"}
      />
    </section>
  );
};

export default GBC;
