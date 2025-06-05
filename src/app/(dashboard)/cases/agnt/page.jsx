import Contact from "@/components/Contact";
import { setBreadcrumbSchema } from "@/lib/utils";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedAgntProjects } from "../data";
import AgntProjectOverView from "./components/AgntProjectOverView";
import AgntSolution from "./components/AgntSolution";
import AgntWhatWeDid from "./components/AgntWhatWeDid";
import { metadata } from "./utils/agntMetadata";

import {
  agntSlides,
  agntSolutions,
  agntTags,
  agntTeam
} from "./utils/constants";
import Head from "next/head";

export { metadata };

const Agnt = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "AGNT.Hub",
    "agnt"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <section>
        <CaseHeroScreen
          tags={agntTags}
          pageTitle={"AGNT.Hub: Bringing AI Agents to Web3 and X"}
          tagContainerClasses="flex-wrap justify-center"
          heroDescription={
            <>
              AGNT.Hub is the first omnichain ecosystem for AI agents in Web3,
              also integrated into X. By combining AI automation, Web3
              analytics, and cross-chain execution, the platform
              <br className="hidden custom1430:block" /> enables users to
              create, deploy, and monetize AI-driven solutions. As part of the
              DeFAI
              <br className="hidden custom1430:block" /> sector, AGNT.Hub
              connects AI market strategies with blockchain infrastructure,
              setting
              <br className="hidden custom1430:block" /> a new standard for
              decentralized AI.
            </>
          }
          headerClasses="font-medium text-[36px] max-w-[340px] md:max-w-full  font-roc text-center leading-[42px] xl:text-[60px] xl:leading-[64px]"
          containerClasses="max-w-[769px] text-center"
          descriptionClasses="md:max-w-[615px] custom1430:max-w-full text-xs text-balance tracking-[0] xl:tracking-wider leading-5 xl:text-sm xl:leading-6 font-manrope"
          sectionClasses={"xl:pt-[102px] xl:pb-[120px]"}
        />
        <Banner
          img={"/cases/agnt/banner-image.webp"}
          classes={"h-[140px] md:h-[200px] lg:h-[300px] xl:h-[500px] w-full"}
        />
        <AgntProjectOverView />
        <CasesSlider
          sectionClasses={"h-[240px] py-5 md:py-0 lg:h-[586px]"}
          itemClasses={"ml-[6px] xl:ml-5"}
          isAgnt={true}
          isHybrid={true}
          images={agntSlides}
        />
        <AgntSolution solutions={agntSolutions} />
        <Banner
          img={"/cases/agnt/agent-line.webp"}
          classes={"h-[35px] md:h-[50px] xl:h-[73px] w-full"}
        />
        <AgntWhatWeDid />
        <TeamBehind
          team={agntTeam}
          headerClasses={"text-xs leading-5 tracking-[2px]"}
          descClasses={"xl:text-[18.41px] xl:leading-[27.62px]"}
          classes={"xl:pl-[147px] xl:pr-[133px]"}
          titleClasses={"xl:text-[55.24px]"}
          containerClasses={"md:grid-cols-2 xl:grid-cols-[1fr_568px]"}
        />
        <MoreProjects
          projects={relatedAgntProjects}
          headerClasses="font-roc text-[32px] xl:text-[42px] font-medium leading-90"
        />
        <Contact
          descriptionClasses={"hidden md:block"}
          titleClasses={"mb-8 md:mb-0"}
          className={"px-5 py-[50px] md:px-0 xl:pb-[163px] xl:pt-[122px]"}
        />
      </section>
    </>
  );
};

export default Agnt;
