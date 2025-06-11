import React from "react";
import MemelutOverview from "../MemelutOverview";
import CasesSlider from "../../../components/CasesSlider";
import {
  memelutSlides,
  memelutSolutions,
  memelutTeam
} from "../../utils/constants";
import MemelutWhatWeDid from "../MemelutWhatWeDid";
import coinsImg from "@/assets/cases/memelut/memelut-coins-banner.webp";
import TeamBehind from "../../../components/TeamBehind";
import MoreProjects from "../../../components/MoreProjects";
import { relatedMemelutProjects } from "../../../data";
import Contact from "@/components/Contact";
import MemelutSolutions from "../MemelutSolutions";
import Image from "next/image";

const MemelutContent = () => {
  return (
    <>
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

      <MemelutWhatWeDid />

      <Image
        width={1349}
        height={269}
        src={coinsImg}
        className="mx-auto h-auto w-[calc(100vw-6px)] max-w-[1349px]"
        loading="lazy"
        priority={false}
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
    </>
  );
};

export default MemelutContent;
