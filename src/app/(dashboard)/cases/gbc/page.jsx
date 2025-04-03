import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import GBCOverview from "./components/GBCOverview";
import GBCRewards from "./components/GBCRewards";
import GBCSlider from "./components/GBCSlider";
import GBCSolutions from "./components/GBCSolutions";
import GBCWhatWeDid from "./components/GBCWhatWeDid";
import {
  gbcProjects,
  gbcSlides,
  gbcSolutions,
  gbcTags,
  gbcTeam
} from "./utils/constants";

const GBC = () => {
  return (
    <section>
      <CaseHeroScreen
        pageTitle={"GMX Blueberry Club"}
        heroDescription={
          <>
            GMX Blueberry Club (GBC) is a next-generation NFT platform that
            combines customization,
            <br className="hidden custom1430:block" /> trading, and
            gamification. It allows users to collect and personalize GBC NFTs,
            trade assets, earn Sweet Points, and participate in competitions and
            interactive quests.
          </>
        }
        tags={gbcTags}
        descriptionClasses="max-w-[590px] text-[12.89px] font-semiBold leading-[22px] !text-white-70"
        containerClasses="relative"
        bgDecoration={
          <>
            <Image
              width={56}
              height={56}
              src={"/cases/gbc/candy-one.png"}
              className="absolute left-0 top-[35%] scale-150"
              alt={"lollipop"}
            />
            <Image
              width={78}
              height={79}
              src={"/cases/gbc/candy-two.png"}
              className="absolute -right-2 bottom-0 scale-150"
              alt={"lollipop"}
            />
          </>
        }
      />
      <Banner
        img={"/cases/gbc/gbc-banner.webp"}
        classes={"h-[500px]"}
        imgDesc={"GBC banner"}
      />
      <GBCOverview />
      <CasesSlider sectionClasses={"h-[443px]"} images={gbcSlides} />
      <GBCSolutions solutions={gbcSolutions} />
      <GBCRewards />
      <GBCWhatWeDid />
      <GBCSlider />
      <TeamBehind team={gbcTeam} classes={"pt-30"} />
      <MoreProjects projects={gbcProjects} />
      <Contact className={" pb-[125px] pt-[121px]"} />
    </section>
  );
};

export default GBC;
