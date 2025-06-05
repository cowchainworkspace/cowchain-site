import React from "react";
import AgntProjectOverView from "../AgntProjectOverView";
import AgntWhatWeDid from "../AgntWhatWeDid";
import AgntSolution from "../AgntSolution";
import CasesSlider from "../../../components/CasesSlider";
import TeamBehind from "../../../components/TeamBehind";
import MoreProjects from "../../../components/MoreProjects";

import { agntSlides, agntSolutions, agntTeam } from "../../utils/constants";
import { relatedAgntProjects } from "../../../data";
import Banner from "../../../components/Banner";
import Contact from "@/components/Contact";

const AgntContent = () => {
  return (
    <>
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
    </>
  );
};

export default AgntContent;
