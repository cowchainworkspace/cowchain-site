import Contact from "@/components/Contact";
import { getCaseSchema, setBreadcrumbSchema } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import CasesSlider from "../components/CasesSlider";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedBRC20Projects } from "../data";
import BRC20Overview from "./components/BRC20Overview";
import BRC20Solutions from "./components/BRC20Solutions";
import BRC20WhatWeDid from "./components/BRC20WhatWeDid";
import { metadata } from "./utils/brc20Metadata";
import {
  brc20Slides,
  brc20Solutions,
  brc20Tags,
  brc20Team
} from "./utils/constants";
export { metadata };

const BRC20 = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "BRC20",
    "brc20"
  );
  const caseSchema = getCaseSchema("BRC20", "brc20", metadata?.description);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      {caseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
        />
      )}
      <section>
        <CaseHeroScreen
          pageTitle={"BRC20: Pioneering Ordinals Launchpad Innovation"}
          tags={brc20Tags}
          descriptionClasses="max-w-[320px] md:max-w-[660px] font-manrope"
          heroDescription={
            "BRC20 is the first Launchpad built for the Ordinals ecosystem, redefining how Bitcoin-based assets are distributed and traded."
          }
          containerClasses="relative"
          headerClasses="font-roc text-[36px] text-center leading-[42px] xl:text-[60px] xl:leading-[64px]"
        />
        <Banner
          img={"/cases/brc20/banner-brc-20.webp"}
          classes={"h-[140px] md:h-[200px] lg:h-[300px] xl:h-[500px]"}
          imgDesc={"BRC20 banner"}
        />
        <BRC20Overview />
        <CasesSlider
          images={brc20Slides}
          decorationElement={
            <>
              <Image
                src={"/cases/hybrid/cases-hybrid-scroll-ellipse.webp"}
                width={"933"}
                height={"251"}
                alt="decoration ellipse"
                className="absolute  hidden h-full w-full scale-y-150 md:block"
                loading="lazy"
                priority={false}
              />
              <Image
                width={361}
                height={80}
                src={"/cases/hybrid/hybrid-ellipse-mobile.webp"}
                alt="decoration ellipse"
                className="absolute  top-0 h-full w-full scale-y-125 md:hidden"
                loading="lazy"
                priority={false}
              />
            </>
          }
          sectionClasses={"h-[195px] py-5  lg:py-0 lg:h-[534px]"}
          itemClasses={"pl-0 ml-[13px] md:ml-7"}
          isHybrid={true}
        />
        <BRC20Solutions solutions={brc20Solutions} />
        <Banner
          img={"/cases/brc20/brc20-banner-img-two.webp"}
          classes={"h-[140px] md:h-[200px] lg:h-[300px] xl:h-[685px]"}
          imgDesc={"BRC20 banner"}
          isHighPriority={false}
        />
        <BRC20WhatWeDid />
        <TeamBehind
          team={brc20Team}
          headerClasses={"text-xs leading-5 tracking-[2px]"}
          descClasses={"xl:text-xl xl:leading-[30px]"}
          classes={"xl:px-[97px]"}
          titleClasses={"xl:text-[55.24px]"}
          containerClasses={"md:grid-cols-2 xl:grid-cols-[1fr_600px]"}
        />
        <MoreProjects projects={relatedBRC20Projects} />
        <Contact
          descriptionClasses={"hidden md:block"}
          titleClasses={"mb-8 md:mb-0"}
          className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        />
      </section>
    </>
  );
};

export default BRC20;
