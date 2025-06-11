import Contact from "@/components/Contact";
import React from "react";
import CasesSlider from "../components/CasesSlider";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedReflectProjects } from "../data";
import ReflectOverview from "./components/ReflectOverview";
import ReflectSolutions from "./components/ReflectSolutions";
import ReflectWhatWeDid from "./components/ReflectWhatWeDid";
import BotBannerContainer from "./components/BotBannerContainer";
import { metadata } from "./utils/reflectMetadata";

import { setBreadcrumbSchema } from "@/lib/utils";
import {
  reflectSlides,
  reflectSolutions,
  reflectTeam
} from "./utils/constants";
import ReflectHeaderContainer from "./components/ReflectHeaderContainer";
export { metadata };

const Reflect = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "Reflect",
    "reflect"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <section>
        <ReflectHeaderContainer />
        <ReflectOverview containerClasses="pb-[22px] md:pb-[120px]" />

        <CasesSlider
          sectionClasses={"h-[157px] mb-0 md:mb-[63px]  md:h-[492px]"}
          images={reflectSlides}
          itemClasses={"pl-0 ml-[13px] md:ml-7"}
        />

        <div className="mx-auto w-full max-w-[1246px] px-4 md:px-10 xl:px-0">
          <ReflectSolutions
            solutions={reflectSolutions}
            classes="md:gap-[69px] xl:last:-mt-0"
            containerClasses="w-full"
            gridClass="xl:gap-0"
          />
        </div>
        <BotBannerContainer />
        <ReflectWhatWeDid />
        <TeamBehind
          headerClasses={"xl:leading-[18.41px] xl:tracking-[1.84px]"}
          team={reflectTeam}
          classes={"pt-0 xl:pt-[60px]"}
        />
        <MoreProjects projects={relatedReflectProjects} isReversed={true} />
        <Contact
          className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
          descriptionClasses={"hidden md:block"}
          titleClasses={"mb-8 md:mb-0"}
        />
      </section>
    </>
  );
};

export default Reflect;
