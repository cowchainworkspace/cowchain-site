import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CasesSolutions from "../components/CasesSolutions";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import Quote from "./components/Quote";
import RetroBridgeOverview from "./components/RetroBridgeOverview";
import RetroBridgeWhatWeDid from "./components/RetroBridgeWhatWeDid";
import {
  retroBridgeProjects,
  retroBridgeSlides,
  retroBridgeSolutions,
  retroBridgeTags,
  retroBridgeTeam
} from "./utils/constants";
import { metadata } from "./utils/retroBridgeMetadata";
export { metadata };

const RetroBridge = () => {
  return (
    <section>
      <CaseHeroScreen
        pageTitle={"Retrobridge"}
        tags={retroBridgeTags}
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
      <Banner
        img={"/cases/RetroBridge/case-banner-retrobridge.webp"}
        imgDesc={"banner RetroBridge with with RetroBridge logo"}
        classes={"h-[140px] md:h-[200px] lg:h-[300px] xl:h-[500px]"}
      />
      <RetroBridgeOverview
        projectTitle={"project overview"}
        webSiteLink={"#"}
        projectDescription={
          "RetroBridge was designed to address the growing need for reliable multichain solutions in the blockchain ecosystem. Supporting over 42 blockchain networks, including EVM Layer 2 chains and others like StarkNet, Aptos, and Cosmos, RetroBridge serves as a dynamic blockchain supply chain platform for digital assets."
        }
      />
      <CasesSlider
        images={retroBridgeSlides}
        decorationElement={
          <>
            <Image
              src={"/cases/RetroBridge/cases-retrobridge-ellipse-decr.webp"}
              width={933}
              height={251}
              alt="decoration ellipse"
              className="absolute hidden h-full w-full scale-y-150 lg:block"
            />
            <Image
              src={"/cases/RetroBridge/retrobridge-ellipse-slider-bg.webp"}
              width={471}
              height={64}
              alt="decoration ellipse"
              className="absolute h-full w-full scale-y-150 lg:hidden"
            />
          </>
        }
        sectionClasses={"h-[226px] py-5 lg:py-0 lg:h-[539px]"}
        itemClasses={"pl-0 ml-[13px] md:ml-7"}
        isHybrid={true}
      />
      <CasesSolutions
        solutions={retroBridgeSolutions}
        classes={"xl:-mt-[70px]  xl:last:mt-0"}
        isRetroBridge={true}
      />
      <RetroBridgeWhatWeDid />
      <TeamBehind descClasses={"font-bold"} team={retroBridgeTeam} />
      <Quote />
      <MoreProjects
        isReversed
        autoMargin={true}
        projects={retroBridgeProjects}
      />
      <Contact
        className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        descriptionClasses={"hidden md:block"}
        titleClasses={"mb-8 md:mb-0"}
      />
    </section>
  );
};

export default RetroBridge;
