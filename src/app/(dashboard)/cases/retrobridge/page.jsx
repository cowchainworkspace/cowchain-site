import Contact from "@/components/Contact";
import React from "react";
import CaseHeroScreen from "../components/HeroScreen";
import { retroBridgeTags } from "./utils/constants";
import Banner from "../components/Banner";
import RetroBridgeOverview from "./components/RetroBridgeOverview";
import CasesSlider from "../components/CasesSlider";
import { retroBridgeSlides } from "./utils/constants";

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
        headerClasses="text-center max-w-[566px] uppercase"
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
      <CasesSlider images={retroBridgeSlides} />

      <Contact className={"pb-[138px] pt-40"} />
    </section>
  );
};

export default RetroBridge;
