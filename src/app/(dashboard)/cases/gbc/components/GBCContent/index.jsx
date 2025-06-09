import React from "react";
import GBCOverview from "../GBCOverview";
import CasesSlider from "../../../components/CasesSlider";
import GBCSolutions from "../GBCSolutions";
import GBCRewards from "../GBCRewards";
import { gbcSlides, gbcSolutions, gbcTeam } from "../../utils/constants";
import GBCSlider from "../GBCSlider";
import GBCWhatWeDid from "../GBCWhatWeDid";
import TeamBehind from "../../../components/TeamBehind";
import MoreProjects from "../../../components/MoreProjects";
import Contact from "@/components/Contact";
import { relatedGBCProjects } from "../../../data";

const GBCContent = () => {
  return (
    <>
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
      <MoreProjects projects={relatedGBCProjects} isReversed={true} />
      <Contact
        className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        descriptionClasses={"hidden md:block"}
        titleClasses={"mb-8 md:mb-0"}
      />
    </>
  );
};

export default GBCContent;
