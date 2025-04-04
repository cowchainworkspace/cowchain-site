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
import { metadata } from "./utils/retroBridgeMetadata";
import {
  retroBridgeProjects,
  retroBridgeSlides,
  retroBridgeSolutions,
  retroBridgeTags,
  retroBridgeTeam
} from "./utils/constants";
export { metadata };

const RetroBridge = () => {
  return (
    <section>
      <CaseHeroScreen
        pageTitle={"Cross-chain transfer bridge"}
        tags={retroBridgeTags}
        heroDescription={
          <>
            RetroBridge is a blockchain-powered platform enabling seamless
            cross-chain asset transfers.
            <br className="hidden custom1430:block" /> With $200M in bridged
            volume and 1M+ successful transactions, it demonstrates the growing
            demand for interoperability in Web3.
          </>
        }
        headerClasses="text-center max-w-[566px] uppercase font-foc font-medium leading-90"
        containerClasses="max-w-[641px]"
        descriptionClasses="text-center"
      />
      <Banner
        img={"/cases/RetroBridge/case-banner-retrobridge.webp"}
        imgDesc={"banner RetroBridge with with RetroBridge logo"}
        classes={"w-full h-[499px]"}
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
          <Image
            src={"/cases/RetroBridge/cases-retrobridge-ellipse-decr.webp"}
            width={"933"}
            height={"251"}
            alt="decoration ellipse"
            className="absolute h-full w-full scale-y-150"
          />
        }
        sectionClasses={"h-[539px]"}
      />
      <CasesSolutions
        solutions={retroBridgeSolutions}
        classes={"-mt-[70px]  last:mt-0"}
      />
      <RetroBridgeWhatWeDid />
      <TeamBehind descClasses={"font-bold"} team={retroBridgeTeam} />
      <Quote />
      <MoreProjects projects={retroBridgeProjects} />
      <Contact className={"pb-[138px] pt-40"} />
    </section>
  );
};

export default RetroBridge;
