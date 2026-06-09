import React from "react";
import Contact from "@/components/Contact";
import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import { Industries } from "../components/service/blocks/Industries/index";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { CoreFeaturesRWAbg } from "../../../../assets/svgComponents/CoreFeaturesRWAbg";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { Feedback } from "../components/service/blocks/Feedback";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white-label-solutions/blocks/WhiteLabelCases";
import { metadata } from "./utils/exchangeMetadata";
import {
  exchangeFeatures,
  exchangeChoosingData,
  exchangeP2P,
  exchangeSoftware,
  exchangeSteps,
  exchangeFAQ,
  exchangeBenefits,
  exchangeCases,
  exchangeOtherServicesData,
  exchangeFAQBottom
} from "./utils/data";
import Image from "next/image";
import { ServiceStack } from "../components/service/blocks/stack";
import {
  getFaqSchema,
  getServiceSchema,
  setBreadcrumbSchemaServices
} from "@/lib/utils";
import { exchangeSchema } from "@/lib/constants/servicesSchemas";

export { metadata };

const Exchange = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "White Label Exchange",
    "exchange"
  );
  const serviceSchema = getServiceSchema(exchangeSchema);
  const faqSchema = getFaqSchema(exchangeFAQ);

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
          title={"Launch Your White Label Exchange with Ease Today"}
        />
        <Achievements
          tag={"What Is a White Label Crypto Exchange?"}
          desc={
            <>
              A white label crypto exchange is a{" "}
              <span className="violet-gradient-text">
                ready-made
                <br className="hidden custom1430:block" /> software solution
              </span>{" "}
              that allows you to launch your
              <br className="hidden custom1430:block" /> own trading platform
              with minimal development
              <br className="hidden custom1430:block" /> from scratch. It’s a{" "}
              <span className="violet-gradient-text">
                shortcut for startups and
                <br className="hidden custom1430:block" />
                businesses
              </span>{" "}
              that want to enter the crypto market
              <br className="hidden custom1430:block" /> fast — without hiring a
              full development team or
              <br className="hidden custom1430:block" /> spending months in
              testing cycles
            </>
          }
          sub={
            "This approach gives you a fully functional exchange, including trading engine, wallet integration, security protocols, and admin dashboard — while still allowing you to brand the platform as your own and customize key components to suit your market. No need to reinvent the wheel. With white label crypto exchange software, you start from a solid foundation and focus on growing your business, not fixing bugs"
          }
          subClasses="max-w-[880px]"
        />
        <Industries
          data={exchangeFeatures}
          title={<>Key Features of White Label Cryptocurrency Exchange</>}
          topBorder={false}
          customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[109px] xl:gap-x-[120px] xl:pl-[65px] !mt-0"
          itemContainerClasses={
            "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
          }
          containerClasses={"xl:gap-30 custom1430:pr-[148px] xl:py-[126px]"}
          itemTitleClasses={
            "max-w-full nd:text-lg lg:text-lg xl:text-2xl xl:leading-90 mb-6"
          }
        />

        <Industries
          title={
            <>
              Why Choose White <br className="hidden lg:block" />
              Label Cryptocurrency <br className="hidden lg:block" />
              Exchange Software?
            </>
          }
          desc="Launching a crypto exchange from scratch is a high-risk, high-complexity process. White label crypto solutions take the pressure off by delivering pre-tested, modular systems that are easier to deploy, manage, and scale.
Whether you’re a startup, enterprise, or Web3 project expanding your ecosystem, using white label exchange software means less technical debt and more time to focus on growth and strategy"
          itemTitleClasses="lg:max-w-full md:text-[18px] xl:text-xl xl:leading-90 xl:mb-6"
          titleContainerClasses={"xl:gap-15"}
          containerClasses={
            "xl:gap-[107px] xl:pr-[134px] md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
          }
          data={exchangeChoosingData}
          topBorder={false}
          customClasses="!grid-cols-2 !pr-0 md:gap-x-10 xl:gap-y-[120px] xl:gap-x-[156px] md:!mt-0 "
          itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
          descClasses={"text-white max-w-[810px] xl:leading-6 xl:font-medium"}
          bg={
            <Image
              height={650}
              width={1000}
              src={"/exchange-label-decoration.webp"}
              alt="decoration ellipse"
              className="pointer-events-none absolute -top-[85%] left-0 hidden md:block"
            />
          }
        />

        <ExpertiseServices
          topBorder={false}
          data={exchangeP2P}
          title={
            <>
              How to Develop <br />
              a P2P Crypto <br /> Exchange?
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[146px]"}
          titleClasses="mb-0 md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid xl:gap-14"
          itemTitleClasses={" md:text-[20px] xl:text-[20px] xl:leading-90"}
          descClasses="max-w-[480px]"
          bg={
            <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[100%] right-0 hidden h-auto w-[1120px] lg:block" />
          }
        />
        <ExpertiseServices
          topBorder={false}
          data={exchangeSoftware}
          title={
            <>
              Why Choose White <br className="hidden lg:block" />
              Label Cryptocurrency
              <br className="hidden lg:block" /> Exchange Software?
            </>
          }
          desc={
            "Launching a crypto exchange from scratch is a high-risk, high-complexity process. White label crypto solutions take the pressure off by delivering pre-tested, modular systems that are easier to deploy, manage, and scale. Whether you’re a startup, enterprise, or Web3 project expanding your ecosystem, using white label exchange software means less technical debt and more time to focus on growth and strategy"
          }
          sectionContainerClasses={
            "md:flex-row md:gap-5  custom1430:pr-[134px]"
          }
          titleClasses="mb-6 md:mb-0 xl:text-[42px] xl:leading-90 xl:mb-15 max-w-[530px]"
          titleDescClasses="!text-secondary md:max-w-[320px] lg:max-w-[400px] xl:max-w-[530px]"
          containerClasses="xl:grid xl:gap-14"
          itemTitleClasses={"md:text-[20px] xl:text-[20px] xl:leading-90"}
          descClasses="max-w-[510px]"
        />
        <ExpertiseServices
          topBorder={false}
          data={exchangeSteps}
          title={"Steps to Launch Your White Label Exchange"}
          desc={
            "Taking your exchange from idea to live platform doesn’t have to be complex. With the right partner, you can move fast without cutting corners. Here’s how we guide you through the launch process"
          }
          sectionContainerClasses={
            "md:flex-row md:gap-5  custom1430:pr-[134px]"
          }
          titleClasses="mb-6 md:mb-0 xl:text-[60px] xl:leading-90 xl:mb-15 max-w-[592px]"
          titleDescClasses="!text-secondary md:max-w-[320px] lg:max-w-[400px] xl:max-w-[510px]"
          containerClasses="xl:grid xl:gap-14"
          itemTitleClasses={"md:text-[20px] xl:text-[20px] xl:leading-90"}
          descClasses="max-w-[500px] mt-4 xl:mt-6"
        />
        <div className="w-full overflow-hidden">
          <FAQ
            title={
              <>
                Key Considerations
                <br className="hidden xl:block" /> for White Label
                <br className="hidden xl:block" /> Crypto Exchange
                <br className="hidden xl:block" /> Development
              </>
            }
            desc={
              "There’s more to building a sustainable exchange than just writing code. These are the areas we prioritize to ensure long-term performance and resilience"
            }
            titleClasses="custom1430:text-[42px]"
            descriptionClasses="!text-secondary max-w-[432px]"
            noBg={true}
            isTwoHalf={true}
            hasIcon={false}
            faqGradient={true}
            data={exchangeFAQ}
            itemsClasses={"md:py-[74.5px]"}
            accordionPanelClasses="md:pb-[74.5px]"
            expandedItemClasses="!pb-6"
            isDoublePadding={true}
            itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line"}
          />
        </div>
        <Industries
          title={
            <>
              Benefits of Partnering <br className="hidden lg:block" />
              with Experts for White Label
              <br className="hidden lg:block" /> Exchange Development
            </>
          }
          desc="The impact of your crypto exchange doesn’t depend on code alone — it depends on who builds it with you. Working with experienced developers gives you a serious edge"
          itemTitleClasses="lg:max-w-full md:text-[18px] xl:text-xl xl:leading-90 xl:mb-6"
          titleContainerClasses={"xl:gap-15"}
          containerClasses={
            "xl:gap-[107px] xl:pr-[134px] md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
          }
          data={exchangeBenefits}
          topBorder={false}
          customClasses="!grid-cols-2 !pr-0 md:gap-x-10 xl:gap-y-[120px] xl:gap-x-[156px] md:!mt-0 "
          itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
          descClasses={"text-white max-w-[810px] xl:leading-6 xl:font-medium"}
          itemDescClasses={"max-w-[505px]"}
        />
        <div className="w-full overflow-hidden">
          <FAQ
            title={
              <>
                Use Cases <br className="hidden xl:block" />
                for White Label
                <br className="hidden xl:block" /> Cryptocurrency
                <br className="hidden xl:block" /> Exchanges Key Considerations
              </>
            }
            desc={
              "White label exchanges power more than just startups. Here’s where they’re making impact"
            }
            titleClasses="custom1430:text-[42px]"
            descriptionClasses="max-w-[462px]"
            noBg={true}
            isTwoHalf={true}
            hasIcon={false}
            faqGradient={true}
            data={exchangeCases}
            itemsClasses={"md:py-[43px]"}
            accordionPanelClasses="md:pb-[43.5px]"
            expandedItemClasses="!pb-6"
            isDoublePadding={true}
            itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line "}
            isDisabled={true}
          />
        </div>
        <KeyFeatures
          title={"Ready to Launch Your White Label Crypto Exchange?"}
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15"
          desc={
            <>
              <>
                {" "}
                You don’t need to start from zero. With the right white label
                crypto exchange development team, you can launch a secure,
                scalable platform in weeks — fully branded, fully functional,
                and built to grow.{" "}
              </>
              <br />
              <br />
              <>Let’s bring your exchange to life. Contact us to get started</>
            </>
          }
          isOneBlock={true}
          descClasses={"max-w-[750px] xl:my-0"}
          containerClasses="md:!py-[50px] xl:pt-[126px] xl:pb-[127px]"
          noBg={true}
        />
        <ServiceStack
          home={true}
          desc="Our development process is backed 
by a modern tech stack, ensuring that every white label developer on our team has the tools to create fast, secure, and scalable websites 
and apps"
        />
        <div className="relative">
          <div className="w-full overflow-hidden">
            <OtherServices
              tag={"Other Blockchain Services"}
              title={
                <>
                  In addition to <br />
                  <span className="violet-gradient-text">
                    white label
                    <br /> development,
                  </span>
                  <br /> Cowchain offers <br />
                  a variety <br />
                  of{" "}
                  <span className="violet-gradient-text">
                    complementary
                    <br /> services
                  </span>
                </>
              }
              data={exchangeOtherServicesData}
              itemClasses="py-10 xl:!py-[43px]"
            />
          </div>
        </div>
        <Feedback
          desc="Our clients know they can rely on Cowchain 
to deliver reliable, secure blockchain solutions. Here’s what they have to say"
          imageClasses="hidden md:block"
        />
        <WhiteLabelCases hasNoDescription={true} title="Our Cases" />
        <Cases />
        <CasesMobile />
        <div className="w-full overflow-hidden">
          <FAQ
            noBg={true}
            data={exchangeFAQBottom}
            faqHorizontalPadding={true}
          />
        </div>
        <Contact
          descriptionClasses={"mb-6 md:mb-0"}
          className={"px-4 py-[50px] md:px-0 xl:py-[143px]"}
        />
      </section>
    </>
  );
};

export default Exchange;
