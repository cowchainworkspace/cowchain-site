import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CasesSolutions from "../components/CasesSolutions";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import ProjectOverview from "../components/ProjectOverview";
import TeamBehind from "../components/TeamBehind";
import BannerTitle from "./components/BannerTitle";
import HybridWhatWeDid from "./components/HybridWhatWeDid";
import {
  hybridProjects,
  hybridSlides,
  hybridSolutions,
  hybridTags,
  hybridTeam,
  overviewHybridItems
} from "./utils/constants";
import { metadata } from "./utils/hybridMetaData";

export { metadata };

const Hybrid = () => {
  return (
    <section className="w-full">
      <CaseHeroScreen
        tags={hybridTags}
        pageTitle={"Hybrid: Revolutionizing Blockchain and AI Integration"}
        heroDescription={
          <>
            Hybrid is a Layer 2 blockchain on Arbitrum Nitro, integrating the
            Mixture of Experts (MoE)
            <br className="hidden custom1430:block" /> framework to power
            specialized AI agents. By enabling real-time AI execution on-chain,
            it bridges blockchain and AI-driven solutions. With Atlas – The Web3
            Copilot, Hybrid simplifies market research, data tracking, and AI
            monetization, solidifying its role in blockchain innovation.
          </>
        }
        descriptionClasses="w-[670px]"
        headerClasses="uppercase font-roc text-center font-medium text xl:leading-[64px]"
        containerClasses="max-w-[853px]"
        sectionClasses="pb-[125px]"
      />
      <Banner
        img={"/cases/hybrid/cases-hybrid-banner.webp"}
        classes={"h-[540px] w-full"}
        imgDesc={"hybrid banner image"}
        decorationElement={
          <Image
            height={700}
            width={743}
            src={"/cases/hybrid/cases-hybrid-atlas.webp"}
            className="absolute -top-[60%] left-0 z-10"
          />
        }
        bannerTitle={<BannerTitle />}
      />
      <ProjectOverview
        projectTitle={"project overview"}
        overviewItems={overviewHybridItems}
        projectDescription={
          <>
            Hybrid aims to bridge blockchain and AI technologies, offering
            unparalleled
            <br className="hidden custom1430:block" /> opportunities for
            developers and businesses, while showcasing diverse
            <br className="hidden custom1430:block" /> blockchain use cases in
            AI-driven innovation. By combining Ethereum’s
            <br className="hidden custom1430:block" /> scalability with the MoE
            framework, the platform provides blockchain
            <br className="hidden custom1430:block" /> application examples that
            redefine AI-driven solutions. Its cutting-edge
            <br className="hidden custom1430:block" /> architecture and
            user-focused tools position Hybrid as a premier blockchain
            <br className="hidden custom1430:block" /> supply chain platform for
            AI data flow and monetization.
          </>
        }
        webSiteLink={"#"}
        sectionClasses={"pt-[119px] pl-[103px] pb-[120px]"}
        overviewClasses={"gap-[176px]"}
      />
      <CasesSlider
        images={hybridSlides}
        decorationElement={
          <Image
            src={"/cases/hybrid/cases-hybrid-scroll-ellipse.webp"}
            width={"933"}
            height={"251"}
            alt="decoration ellipse"
            className="absolute  h-full w-full scale-y-150"
          />
        }
        isHybrid={true}
      />
      <CasesSolutions solutions={hybridSolutions} />
      <HybridWhatWeDid />
      <TeamBehind
        team={hybridTeam}
        descClasses={"font-medium"}
        blockClasses={"last:pb-8 last:border-b-[0.5px]"}
      />
      <MoreProjects projects={hybridProjects} />
      <Contact className={"pb-[138px] pt-[194px]"} />
    </section>
  );
};

export default Hybrid;
