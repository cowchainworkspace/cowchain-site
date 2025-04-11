import Contact from "@/components/Contact";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import AgntProjectOverView from "./components/AgntProjectOverView";
import AgntSolution from "./components/AgntSolution";
import AgntWhatWeDid from "./components/AgntWhatWeDid";
import { metadata } from "./utils/agntMetadata";
import {
  agntProjects,
  agntSlides,
  agntSolutions,
  agntTags,
  agntTeam
} from "./utils/constants";
export { metadata };

const Agnt = () => {
  return (
    <section>
      <CaseHeroScreen
        tags={agntTags}
        pageTitle={"AGNT.Hub: Bringing AI Agents to Web3 and X"}
        heroDescription={
          <>
            AGNT.Hub is the first omnichain ecosystem for AI agents in Web3,
            also integrated into X. By combining AI automation, Web3 analytics,
            and cross-chain execution, the platform
            <br className="hidden custom1430:block" /> enables users to create,
            deploy, and monetize AI-driven solutions. As part of the DeFAI
            <br className="hidden custom1430:block" /> sector, AGNT.Hub connects
            AI market strategies with blockchain infrastructure, setting
            <br className="hidden custom1430:block" /> a new standard for
            decentralized AI.
          </>
        }
        headerClasses="font-[550] text-[60px] leading-[58.92px]"
        containerClasses="max-w-[769px] text-center"
        descriptionClasses="max-w-[615px] text-[14px] leading-[22.1px] font-manrope"
        sectionClasses={"pt-[102px] pb-[120px]"}
      />
      <Banner
        img={"/cases/agnt/banner-image.webp"}
        classes={"h-[500px] w-full"}
      />
      <AgntProjectOverView />
      <CasesSlider
        isAgnt={true}
        sectionClasses={"h-[586px]"}
        images={agntSlides}
      />
      <AgntSolution solutions={agntSolutions} />
      <Banner img={"/cases/agnt/agent-line.webp"} classes={"h-[73px] w-full"} />
      <AgntWhatWeDid />
      <TeamBehind
        team={agntTeam}
        headerClasses={"text-[11.05px] leading-[18.41px] tracking-[1.84px]"}
        descClasses={"text-[18.41px] leading-[27.62px]"}
        classes={"pl-[147px] pr-[133px]"}
        titleClasses={"text-[55.24px]"}
        containerClasses={"grid-cols-[1fr_568px]"}
      />
      <MoreProjects
        projects={agntProjects}
        headerClasses="font-roc text-[42px] font-medium leading-90"
      />
      <Contact className={"pb-[163px] pt-[122px]"} />
    </section>
  );
};

export default Agnt;
