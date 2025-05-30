import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries/index";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";

import { setBreadcrumbSchemaServices } from "@/lib/utils";
import { metadata } from "./utils/aiDevelopmentMetadata";
import {
  aiDevelopmentBenefits,
  aiDevelopmentBotFaqData,
  aiDevelopmentFaqData,
  aiDevelopmentPlatforms,
  aiDevelopmentProtocol,
  aiDevelopmentStability,
  aiPlatformServiceData
} from "./utils/data";

export { metadata };

const AIDevelopment = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "AI Development Services",
    "ai_development"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <section>
        <HeroSection
          title={"AI Development Services: Custom Solutions for You"}
        />
        <Achievements
          tag={"Introduction to Custom AI Development"}
          desc={
            <>
              Custom AI development is about{" "}
              <span className="violet-gradient-text">
                building tailored
                <br className="hidden custom1430:block" /> systems
              </span>{" "}
              that reflect the unique workflows, data,
              <br className="hidden custom1430:block" /> and challenges of your
              company. Whether it’s
              <br className="hidden custom1430:block" />{" "}
              <span className="violet-gradient-text">
                automating internal operations, powering
                <br className="hidden custom1430:block" /> predictive analytics,
                or enabling smarter user
                <br className="hidden custom1430:block" /> interactions
              </span>
              , custom AI is designed to fit your
              <br className="hidden custom1430:block" /> business logic — not
              the other way around
            </>
          }
          descClass={"lg:!text-[42px]"}
          containerClasses={"xl:pl-[88px] xl:pr-[106px]"}
          sub={
            "AI is no longer a futuristic concept – it’s a business tool. But not every business needs the same solution. This flexibility is especially critical in industries like Web3, where fragmented infrastructure, data complexity, and real-time demands make off-the-shelf AI tools a poor fit. Custom AI solutions let companies build exactly what they need – logic that aligns with on-chain data and dynamic user behavior"
          }
          subClasses="max-w-[880px]"
        />
        <KeyFeatures
          title={"Why AI Is a Game-Changer for Businesses"}
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15"
          desc={
            <>
              The shift from manual decision-making to intelligent automation is
              already reshaping global industries. AI gives businesses an edge
              by transforming raw data into actionable insights, predicting
              outcomes, and eliminating inefficiencies across the board.
              <br />
              <br />
              In AI for business, we’ve seen everything from financial firms
              optimizing asset allocation in real time to Web3 projects
              analyzing community behavior to guide tokenomics. For example, an
              AI-powered analytics engine can monitor smart contract events
              across multiple chains, detect anomalies in liquidity pools, and
              generate alerts before a depeg or exploit occurs.
              <br />
              <br />
              This is more than automation — it’s strategic foresight embedded
              into your operations
            </>
          }
          isOneBlock={true}
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
          noBg={true}
          isWhiteLabelBg={true}
          whiteLabelBgClasses="-bottom-[114%]"
        />
        <Industries
          data={aiDevelopmentBenefits}
          title={"Key Benefits of Custom AI Solutions"}
          titleClasses={"custom1430:w-[1200px]"}
          desc={
            "Custom AI solutions deliver results that generic tools can’t touch. Why? Because they’re built around your data, goals, and infrastructure. The biggest advantage? Adaptability. Custom systems can be retrained, extended, and scaled without the limitations of rigid pre-built platforms. That’s critical in fast-moving markets like blockchain and fintech, where agility is everything"
          }
          descClasses={"max-w-[760px]"}
          topBorder={false}
          customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[109px] xl:gap-x-[120px] xl:pl-[65px] !mt-0"
          itemContainerClasses={
            "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
          }
          containerClasses={
            "xl:gap-[107px] custom1430:pr-[148px] xl:py-[126px]"
          }
          itemTitleClasses={
            "max-w-full nd:text-lg lg:text-lg xl:text-lg xl:leading-90 mb-6 "
          }
          itemDescClasses={"max-w-[385px]"}
        />
        <ExpertiseServices
          topBorder={false}
          data={aiDevelopmentStability}
          title={
            <>
              From <br />
              Manual Drift <br />
              to Autonomous Stability
              <br />
            </>
          }
          sectionContainerClasses={
            "md:flex-row md:gap-5  custom1430:pr-[134px]"
          }
          titleClasses="mb-6 md:mb-0 xl:text-[60px] xl:leading-90 max-w-[592px]"
          containerClasses="xl:grid "
          itemTitleClasses={"xl:text-[20px] xl:leading-90"}
          bg={
            <Image
              width={870}
              height={550}
              src={"/ai-dev-decoration-ellipse.webp"}
              className="absolute -top-80 right-0 hidden md:block"
            />
          }
          descClasses={"max-w-[490px]"}
        />
        <ExpertiseServices
          topBorder={false}
          data={aiDevelopmentProtocol}
          title={
            <>
              AI Systems <br />
              for Scalable <br /> Protocol Logic
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[134px]"}
          titleClasses=" xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid xl:gap-9"
          itemTitleClasses={"xl:text-[20px] xl:leading-90"}
          descClasses={"max-w-[490px]"}
        />
        <KeyFeatures
          title={
            <>
              From Workflow to Strategy:{" "}
              <br className="hidden custom1430:block" /> How AI Becomes a Core
              Business Layer
            </>
          }
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15"
          desc={
            <>
              AI development isn’t just about smarter automation – it’s about
              embedding intelligence into the very structure of your product or
              protocol.
              <br />
              <br />
              Instead of adding tools on top of existing systems, we help
              companies reimagine the logic behind what they build. Whether it’s
              turning community engagement into a data-driven economy or
              designing agents that act on-chain with real-time inputs, our
              focus is on AI as a composable layer – not an accessory.
              <br />
              <br />
              This mindset is critical for Web3. In a space where behavior
              shifts overnight and logic often lives across contracts and
              chains, businesses need systems that can evolve as fast as their
              users do.
              <br />
              <br />
              The outcome? AI that doesn’t just optimize tasks — it shapes
              roadmaps
            </>
          }
          isOneBlock={true}
          imageClasses="-bottom-[115%]"
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
          noBg={true}
          isWhiteLabelBg={true}
          whiteLabelBgClasses="-bottom-[45%]"
        />
        <div className="w-full overflow-hidden">
          <FAQ
            title={
              <>
                Implementing <br /> custom <br />
                AI Solutions
              </>
            }
            noBg={true}
            isTwoHalf={true}
            hasIcon={false}
            faqGradient={true}
            data={aiDevelopmentFaqData}
            itemsClasses={"md:py-[65px]"}
            accordionPanelClasses="md:pb-[65px]"
            expandedItemClasses="!pb-6"
            isDoublePadding={true}
            itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line"}
          />
        </div>
        <ExpertiseServices
          topBorder={false}
          data={aiDevelopmentPlatforms}
          title={
            <>
              What’s Next <br />
              for AI-Driven
              <br /> Platforms
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[134px]"}
          titleClasses="mb-6 md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid "
          itemTitleClasses={"xl:text-[20px] xl:leading-90"}
          descClasses="max-w-[500px]"
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
                  In addition
                  <br /> to{" "}
                  <span className="violet-gradient-text">AI development</span>,
                  <br /> Cowchain provides
                  <br /> additional services
                  <br /> that{" "}
                  <span className="violet-gradient-text">
                    enhance
                    <br /> product logic,
                    <br /> architecture, and
                    <br /> integration
                  </span>{" "}
                  within
                  <br /> Web3 environments
                </>
              }
              data={aiPlatformServiceData}
              itemClasses="py-5 md:!py-[50px]"
              titleClasses="text-[24px]"
            />
          </div>
        </div>

        <WhiteLabelCases title="our cases" hasNoDescription={true} />
        <Cases />
        <CasesMobile />
        <div className="w-full overflow-hidden">
          <FAQ
            noBg={true}
            data={aiDevelopmentBotFaqData}
            faqHorizontalPadding
          />
        </div>
        <Contact
          title={
            <>
              Ready to Make AI a Core
              <br className="hidden custom1430:block" /> Part of Your Business?
            </>
          }
          titleClasses={
            "font-roc mb-4 md:mb-0 xl:max-w-[828px] md:px-4 xl:px-0 xl:text-normal custom1430:text-[64px]"
          }
          desc={
            "Whether you’re building smarter interactions, scaling internal systems, or designing AI-native products, we help you move fast without cutting corners. Let’s build the intelligence layer your platform actually needs.Contact us to explore AI development services built around your business"
          }
          descriptionClasses={
            "xl:max-w-[795px] mb-6 md:mb-0 px-4 md:px-4 xl:px-0 xl:text-base xl:font-normal xl:leading-6"
          }
          className={"px-4 py-[50px] md:px-0 xl:py-[143px]"}
          hasNoDesc={false}
        />
      </section>
    </>
  );
};

export default AIDevelopment;
