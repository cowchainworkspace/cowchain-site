import React from "react";
import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import dexBg from "@/assets/bg/dex-ellipse-bg.webp";
import { metadata } from "./utils/icoPlatformMetadata";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";

import {
  icoPlatformBenefits,
  icoPlatformsFeatures,
  icoPlatformProcessData,
  icoPlatformFaqData,
  icoPlatformChooseData,
  icoPlatformServicesData,
  icoPlatformFaqBotData
} from "./utils/data";

import { Industries } from "../components/service/blocks/Industries/index";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { OtherServices } from "../components/service/blocks/OtherServices";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { CoreFeaturesRWAbg } from "@/assets/svgComponents/CoreFeaturesRWAbg";
import whiteLabelBg from "@/assets/bg/white-label-ellipse.webp";
import Image from "next/image";
import Contact from "@/components/Contact";

export { metadata };

const IcoPlatformDevelopment = () => {
  return (
    <section>
      <HeroSection
        title={"ICO Platform Development "}
        desc={
          "Expert ICO Platform Development Services for Your Blockchain Project"
        }
        descClasses={"md:justify-start"}
      />
      <Achievements
        tag={"What Are ICO Platform Development Services?"}
        desc={
          <>
            ICO platform development services provide a
            <br className="hidden custom1430:block" />{" "}
            <span className="violet-gradient-text">comprehensive solution</span>{" "}
            for launching blockchain-
            <br className="hidden custom1430:block" />
            based fundraising campaigns. These platforms enable
            <br className="hidden custom1430:block" /> startups and established
            companies to raise capital by
            <br className="hidden custom1430:block" /> offering tokens to
            investors in exchange for funding.
            <br className="hidden custom1430:block" /> Leveraging blockchain
            technology,{" "}
            <span className="violet-gradient-text">
              an ICO (Initial Coin
              <br className="hidden custom1430:block" /> Offering) platform
              ensures transparency, automation,
              <br className="hidden custom1430:block" /> and security
            </span>
            , streamlining the fundraising process while
            <br className="hidden custom1430:block" /> fostering trust between
            project teams and investors.
          </>
        }
        descClass={"lg:!text-[39px]"}
        containerClasses={"xl:pl-[88px] xl:pr-[106px]"}
      />
      <ExpertiseServices
        data={icoPlatformBenefits}
        title={
          <>
            Key Benefits
            <br /> of Using an ICO
            <br /> Platform for
            <br /> Your Project
          </>
        }
        sectionContainerClasses={"md:flex-row md:gap-5"}
        titleClasses="mb-6 md:mb-0 xl:text-[60px] xl:leading-90"
        containerClasses="xl:grid xl:gap-9"
        bg={
          <Image
            alt="background decoration"
            className="pointer-events-none absolute -top-[30%] left-0 hidden xl:block"
            src={whiteLabelBg}
          />
        }
      />
      <Industries
        title={
          <>
            Essential Features of
            <br /> a High-Performing ICO Platform
          </>
        }
        data={icoPlatformsFeatures}
        topBorder={false}
        customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[109px] xl:gap-x-[120px] xl:pl-[65px] !mt-0"
        itemContainerClasses={
          "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
        }
        containerClasses={"xl:gap-30 custom1430:pr-[143px] xl:py-[126px]"}
        itemTitleClasses={"text-xl max-w-full"}
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[90%] right-0 hidden h-auto w-[1100px] lg:block" />
        }
      />
      <ExpertiseServices
        data={icoPlatformProcessData}
        title={
          <>
            How ICO Development Services
            <br className="hidden xl:block" /> Help Your Project
          </>
        }
        topBorder={false}
        sectionContainerClasses="md:flex-col gap-6 xl:flex-col md:gap-10 xl:gap-[70px]"
        itemsClasses="grid md:grid-cols-2 gap-6 md:gap-10 xl:gap-x-[82px] min-w-full"
        titleClasses="xl:text-[60px] xl:leading-90"
        itemTitleClasses={"xl:text-[26px] xl:leading-90"}
        descClasses={"xl:leading-[1.2] mb-0"}
      />
      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Steps to <br className="hidden xl:block" /> Launch{" "}
              <br className="hidden xl:block" /> an ICO with{" "}
              <br className="hidden xl:block" /> a Professional{" "}
              <br className="hidden xl:block" /> Platform
            </>
          }
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          data={icoPlatformFaqData}
          itemsClasses={"md:py-[65px]"}
          isDoublePadding={true}
          itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line"}
        />
      </div>
      <ExpertiseServices
        title={
          <>
            Why Choose Blockchain <br className="hidden xl:block" /> ICO
            Platforms?
          </>
        }
        data={icoPlatformChooseData}
        sectionContainerClasses={"md:flex-row md:gap-5"}
        titleClasses="mb-6 md:mb-0 xl:text-[60px] xl:leading-90"
        containerClasses="grid md:gap-6 xl:gap-15"
      />
      <Feedback
        desc="Our clients know they can rely on Cowchain 
to deliver reliable, secure blockchain solutions. Here’s what they have to say"
        imageClasses="hidden md:block"
      />
      <div className="relative">
        <div className="w-full overflow-hidden">
          <OtherServices
            tag={"Other Blockchain Services"}
            title={
              <>
                In addition to <br />
                <span className="violet-gradient-text">
                  ICO platform <br />
                  development,
                </span>
                <br /> Cowchain offers <br />
                a variety <br /> of{" "}
                <span className="violet-gradient-text">
                  complementary <br /> services
                </span>
                <br />
              </>
            }
            data={icoPlatformServicesData}
            itemClasses="py-10 xl:!py-[72px]"
            topBorder={false}
          />
        </div>
      </div>
      <WhiteLabelCases hasNoDescription={true} title="Our Cases" />
      <Cases />
      <CasesMobile />

      <div className="relative w-full overflow-hidden">
        <Image
          src={dexBg}
          alt="decoration ellipse"
          className="pointer-events-none absolute -bottom-[10%] -top-[25%] left-0 hidden h-[1600px]  w-auto  md:block"
        />
        <FAQ noBg={true} data={icoPlatformFaqBotData} />
        <Contact
          titleClasses={
            "uppercase mb-6 md:mb-0 text-[32px§§§§§§§§§§§§§§§§§§§§§§§§§] xl:max-w-[994px] xl:text-[64px]"
          }
          title={"The Future of ICO Platforms for Fundraising"}
          desc={
            "ICO platform development services empower businesses to adopt blockchain technology for efficient and secure fundraising. By integrating advanced tools, smart contracts, and global accessibility, these platforms redefine how projects connect with investors. Ready to launch your crypto project? Contact us today to explore tailored ICO development services that align with your vision."
          }
          descriptionClasses={
            "xl:max-w-[828px] mb-6 md:mb-0 px-4 md:px-0 xl:text-base xl:font-normal xl:leading-6"
          }
          className={"py-[50px] xl:py-[119px]"}
        />
      </div>
    </section>
  );
};

export default IcoPlatformDevelopment;
