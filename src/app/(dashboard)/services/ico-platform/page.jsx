import React from "react";
import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import { Industries } from "../components/service/blocks/Industries/index";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white-label-solutions/blocks/WhiteLabelCases";
import Contact from "@/components/Contact";
import { metadata } from "./utils/icoPlatformMetadata";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";

import {
  icoPlatformSteps,
  icoPlatformsBenefits,
  icoPlatformChallenges,
  icoPlatformsInsights,
  icoPlatformExpert,
  icoPlatformFaqData,
  faqData
} from "./utils/data";
import {
  getFaqSchema,
  getServiceSchema,
  setBreadcrumbSchemaServices
} from "@/lib/utils";
import { icoPlatformSchema } from "@/lib/constants/servicesSchemas";

export { metadata };

const ICOPlatform = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "ICO Platform",
    "ico-platform"
  );
  const serviceSchema = getServiceSchema(icoPlatformSchema);
  const faqSchema = getFaqSchema(icoPlatformFaqData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
            {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section>
        <HeroSection
          title={"Start Your ICO Journey with Professional Platform Solutions"}
        />
        <Achievements
          tag={"What Is an ICO Platform?"}
          desc={
            <>
              An ICO platform is{" "}
              <span className="violet-gradient-text">
                an all-in-one solution
              </span>{" "}
              for <br className="hidden custom1430:block" /> managing every
              aspect of an Initial Coin Offering,{" "}
              <br className="hidden custom1430:block" /> from{" "}
              <span className="violet-gradient-text">
                token creation and sales
              </span>{" "}
              to
              <span className="violet-gradient-text">
                investor relations <br className="hidden custom1430:block" />{" "}
                and compliance
              </span>
              . By leveraging a robust platform,{" "}
              <br className="hidden custom1430:block" />
              you can streamline token issuance, monitor{" "}
              <br className="hidden custom1430:block" /> fundraising progress,
              and execute marketing <br className="hidden custom1430:block" />{" "}
              campaigns with ease
            </>
          }
          descClass={"lg:!text-[42px]"}
          containerClasses={"xl:pl-[88px] xl:pr-[106px]"}
          sub={
            "For startups and enterprises in the blockchain industry, an ICO platform simplifies complex processes, providing tools for tracking token performance, managing investor engagement, and ensuring secure transactions. A professional platform helps bridge the gap between your vision and investor confidence, making it essential for a cryptocurrency ICO launch"
          }
          subClasses="max-w-[880px]"
        />
        <ExpertiseServices
          data={icoPlatformSteps}
          title={
            <>
              Key Steps to <br /> Launch Your <br />
              ICO Platform
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
          titleClasses="md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid xl:gap-9"
          itemTitleClasses={"md:text-[20px] leading-90"}
        />
        <Industries
          title={"Benefits of Expert ICO Solutions"}
          data={icoPlatformsBenefits}
          topBorder={false}
          customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[109px] xl:gap-x-[120px] xl:pl-[65px] !mt-0"
          itemContainerClasses={
            "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
          }
          containerClasses={"xl:gap-30 custom1430:pr-[143px] xl:py-[126px]"}
          itemTitleClasses={"md:text-lg max-w-full"}
        />
        <KeyFeatures
          title={
            "How ICO Fundraising Platforms Help You Achieve Remarkable Results"
          }
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15"
          desc={
            "Launching a cryptocurrency ICO platform involves more than just technology; it’s about building trust and fostering engagement with your audience. Advanced fundraising tools simplify investor onboarding, provide transparent reporting, and support ongoing interaction through community management features."
          }
          isOneBlock={true}
          imageClasses="-bottom-[115%]"
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
        />
        <ExpertiseServices
          data={icoPlatformChallenges}
          title={
            <>
              Common
              <br /> Challenges <br />
              in ICO Launches
              <br /> and How to
              <br /> Overcome Them
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 xl:pr-[134px]"}
          titleClasses="md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid xl:gap-14"
          itemTitleClasses={"md:text-[20px] leading-90"}
          descClasses="max-w-[500px]"
        />
        <KeyFeatures
          title={"Integrating Advanced Marketing Tools for Wider Reach"}
          noBg={true}
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15"
          desc={
            "Modern ICO platforms integrate advanced marketing tools to help you reach a broader audience and maximize your fundraising efforts. Features such as automated email campaigns and community management solutions streamline the process of attracting investors. These tools enable effective promotion, foster community engagement, and build long-term trust with your supporters."
          }
          isOneBlock={true}
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
          isWhiteLabelBg={true}
          whiteLabelBgClasses="-bottom-[130%]"
        />
        <Industries
          title={"Leveraging Data-Driven Insights for Better Decision-Making"}
          desc={
            "In the fast-paced world of ICO fundraising, staying informed is crucial to making strategic decisions. Advanced ICO platforms now incorporate robust data-driven tools that provide actionable insights into campaign performance, investor behavior, and market trends. With access to real-time analytics, you can"
          }
          data={icoPlatformsInsights}
          topBorder={false}
          customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[109px] xl:gap-x-[107px] xl:pl-[65px] !mt-0"
          itemContainerClasses={
            "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full xl:max-w-[515px]"
          }
          descClasses={"text-white max-w-[775px]"}
          titleClasses={"custom1430:w-[1200px]"}
          containerClasses={"xl:gap-[107px] custom1430:pr-[88px] xl:py-[126px]"}
          itemTitleClasses={"md:text-lg max-w-full"}
        />
        <ExpertiseServices
          data={icoPlatformExpert}
          title={
            <>
              Why Choose
              <br /> Expert ICO
              <br /> Development
              <br /> Services?
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 xl:pr-[134px]"}
          titleClasses=" md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid xl:gap-9"
          itemTitleClasses={"md:text-[20px] leading-90"}
          descClasses="max-w-[500px]"
        />
        <div className="w-full overflow-hidden">
          <FAQ
            title={
              <>
                Steps to <br />
                Get Started
                <br /> with Your <br />
                ICO Platform
              </>
            }
            noBg={true}
            isTwoHalf={true}
            hasIcon={false}
            faqGradient={true}
            data={icoPlatformFaqData}
            isDoublePadding={true}
            itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line"}
            faqContentClasses="max-w-[540px]"
          />
        </div>
        <KeyFeatures
          title={"Your Path to ICO Excellence"}
          noBg={true}
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15"
          desc={
            "A professional ICO platform launch offers the tools and expertise needed to transform your vision into a flourishing blockchain project. From token creation platforms to scalable fundraising solutions, our team ensures your ICO platform is built for success. Prepared to leave your imprint on the crypto arena? Begin your venture with our professional solutions today!"
          }
          isOneBlock={true}
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
        />
        <Feedback
          desc="Our clients know they can rely on Cowchain 
      to deliver reliable, secure blockchain solutions. Here’s what they have to say"
          imageClasses="hidden md:block"
        />
        <WhiteLabelCases />
        <Cases />
        <CasesMobile />
        <div className="w-full overflow-hidden">
          <FAQ noBg={true} data={faqData} faqHorizontalPadding />
        </div>
        <Contact
          descriptionClasses={"mb-6 md:mb-0"}
          className={"px-4 py-[50px] md:px-0 xl:py-[143px]"}
        />
      </section>
    </>
  );
};

export default ICOPlatform;
