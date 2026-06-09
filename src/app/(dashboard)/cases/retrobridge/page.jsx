import Contact from "@/components/Contact";
import { getCaseSchema, setBreadcrumbSchema } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CasesSolutions from "../components/CasesSolutions";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedRetorbridgeProjects } from "../data";
import HeroScreenContainer from "./components/HeroScreenContainer";
import Quote from "./components/Quote";
import RetroBridgeOverview from "./components/RetroBridgeOverview";
import RetroBridgeWhatWeDid from "./components/RetroBridgeWhatWeDid";
import {
  retroBridgeSlides,
  retroBridgeSolutions,
  retroBridgeTeam
} from "./utils/constants";
import { metadata } from "./utils/retroBridgeMetadata";
export { metadata };

const RetroBridge = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "Retrobridge",
    "retrobridge"
  );
  const caseSchema = getCaseSchema("Retrobridge", "retrobridge", metadata?.description);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      {caseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
        />
      )}
      <section>
        <HeroScreenContainer />
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
                loading="lazy"
                priority={false}
              />
              <Image
                src={"/cases/RetroBridge/retrobridge-ellipse-slider-bg.webp"}
                width={471}
                height={64}
                alt="decoration ellipse"
                className="absolute h-full w-full scale-y-150 lg:hidden"
                loading="lazy"
                priority={false}
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
          projects={relatedRetorbridgeProjects}
        />
        <Contact
          className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
          descriptionClasses={"hidden md:block"}
          titleClasses={"mb-8 md:mb-0"}
        />
      </section>
    </>
  );
};

export default RetroBridge;
