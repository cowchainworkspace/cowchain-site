import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CasesSolutions from "../components/CasesSolutions";
import MoreProjects from "../components/MoreProjects";
import ProjectOverview from "../components/ProjectOverview";
import TeamBehind from "../components/TeamBehind";
import { relatedHybridProjects } from "../data";
import BannerTitle from "./components/BannerTitle";
import HeroScreenContainer from "./components/HeroScreenContainer";
import HybridWhatWeDid from "./components/HybridWhatWeDid";

import { setBreadcrumbSchema } from "@/lib/utils";
import {
  hybridSlides,
  hybridSolutions,
  hybridTeam,
  overviewHybridItems
} from "./utils/constants";
import { metadata } from "./utils/hybridMetaData";

export { metadata };

const Hybrid = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "Hybrid",
    "hybrid"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <section className="w-full">
        <HeroScreenContainer />
        <Banner
          img={"/cases/hybrid/cases-hybrid-banner.webp"}
          classes={"h-[151px] md:h-[200px] lg:h-[300px] xl:h-[540px]"}
          imgDesc={"hybrid banner image"}
          decorationElement={
            <>
              <Image
                height={700}
                width={743}
                src={"/cases/hybrid/cases-hybrid-atlas.webp"}
                className="absolute -top-[45%] left-0 z-10 hidden h-[400px] w-[273px] md:block  lg:h-[600px]  lg:w-[443px] xl:hidden"
              />
              <Image
                height={177}
                width={181}
                className="absolute left-0 top-0 z-10 md:hidden"
                src={"/cases/hybrid/hybrid-atlas-mobile.png"}
              />
              <Image
                height={700}
                width={743}
                src={"/cases/hybrid/cases-hybrid-atlas.webp"}
                className="absolute -top-[60%] left-0 z-10 hidden xl:block"
              />
            </>
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
              <br className="hidden custom1430:block" /> scalability with the
              MoE framework, the platform provides blockchain
              <br className="hidden custom1430:block" /> application examples
              that redefine AI-driven solutions. Its cutting-edge
              <br className="hidden custom1430:block" /> architecture and
              user-focused tools position Hybrid as a premier blockchain
              <br className="hidden custom1430:block" /> supply chain platform
              for AI data flow and monetization.
            </>
          }
          webSiteLink={"https://agents.buildonhybrid.com/"}
          sectionClasses={"xl:pt-[119px] xl:pl-[103px] xl:pb-[120px]"}
          overviewClasses={"xl:gap-[176px]"}
        />
        <CasesSlider
          images={hybridSlides}
          decorationElement={
            <>
              <Image
                src={"/cases/hybrid/cases-hybrid-scroll-ellipse.webp"}
                width={"933"}
                height={"251"}
                alt="decoration ellipse"
                className="absolute  hidden h-full w-full scale-y-150 md:block"
              />
              <Image
                width={349}
                height={94}
                src={"/cases/hybrid/hybrid-ellipse-mobile.webp"}
                alt="decoration ellipse"
                className="absolute  h-full w-full scale-y-150 md:hidden"
              />
            </>
          }
          sectionClasses={"h-[226px] py-5 lg:py-0 lg:h-[522px]"}
          itemClasses={"pl-0 ml-[13px] md:ml-7"}
          isHybrid={true}
        />
        <CasesSolutions solutions={hybridSolutions} />
        <HybridWhatWeDid />
        <TeamBehind team={hybridTeam} descClasses={"font-medium"} />
        <MoreProjects projects={relatedHybridProjects} />
        <Contact
          className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
          descriptionClasses={"hidden md:block"}
          titleClasses={"mb-8 md:mb-0"}
        />
      </section>
    </>
  );
};

export default Hybrid;
