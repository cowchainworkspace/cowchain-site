import Contact from "@/components/Contact";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedTenetProjects } from "../data";
import HeroScreenContainer from "./components/HeroScreenContainer";
import TenetOverview from "./components/TenetOverview";
import TenetSolutions from "./components/TenetSolutions";
import TenetWhatWeDid from "./components/TenetWhatWeDid";
import { metadata } from "./utils/tenetMetadata";

import { tenetSlides, tenetSolutions, tenetTeam } from "./utils/constants";

export { metadata };

const Tenet = () => {
  return (
    <section>
      <HeroScreenContainer />
      <Banner
        img={"/cases/tenet/tenet-banner-img.webp"}
        classes={
          "h-[180px] overflow-visible md:h-[400px] lg:h-[470px] xl:h-[535px] md:-mt-[50px] lg:-mt-[153px] xl:-mt-[173px] custom-1700:h-[750px]   custom1430:h-[600px] custom1700:h-[750px]"
        }
        imgDesc={"Tenet banner"}
      />
      <TenetOverview />
      <CasesSlider
        sectionClasses={"h-[174px]  md:py-0 lg:h-[469px]"}
        images={tenetSlides}
        itemClasses={"pl-0 ml-[13px] lg:ml-[30px]"}
        isHybrid={true}
      />
      <TenetSolutions solutions={tenetSolutions} />
      <Banner
        img={"/cases/tenet/tenet-img-banner-two.webp"}
        classes={
          "h-[173px] md:h-[360px]  lg:h-[450px] xl:h-[670px]  custom-1700:h-[750px]"
        }
        imgDesc={"Tenet banner"}
      />
      <TenetWhatWeDid />
      <TeamBehind team={tenetTeam} />
      <MoreProjects projects={relatedTenetProjects} />
      <Contact
        className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        descriptionClasses={"hidden md:block"}
        titleClasses={"mb-8 md:mb-0"}
      />
    </section>
  );
};

export default Tenet;
