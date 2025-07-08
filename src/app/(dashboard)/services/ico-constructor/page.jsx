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
import { WhiteLabelCases } from "../white-label-solutions/blocks/WhiteLabelCases";
import { metadata } from "./utils/icoConstructorMetadata";

import {
  icoConstructorBenefits,
  icoConstructorDIY,
  icoConstructorFaqBotData,
  icoConstructorFeatures,
  icoConstructorInfo,
  icoConstructorProcess,
  icoConstructorServicesData,
  icoPlatformAdvantages,
  icoPlatformFaqData
} from "./utils/data";
import { getServiceSchema, setBreadcrumbSchemaServices } from "@/lib/utils";
import { icoConstructorSchema } from "@/lib/constants/servicesSchemas";
export { metadata };

const IcoConstructor = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "ICO Constructor",
    "ico_constructor"
  );
  const serviceSchema = getServiceSchema(icoConstructorSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section>
        <HeroSection
          title={"Create Your Own ICO Easily with Our ICO Constructor"}
        />
        <Achievements
          tag={"ICO Constructor"}
          desc={
            <>
              In the world of blockchain and cryptocurrencies,
              <br className="hidden custom1430:block" />{" "}
              <span className="violet-gradient-text">
                Initial Coin Offerings (ICOs){" "}
              </span>
              have become the go-to
              <br className="hidden custom1430:block" /> strategy for raising
              capital. With{" "}
              <span className="violet-gradient-text">
                our state-of-the-
                <br className="hidden custom1430:block" />
                art ICO generator
              </span>
              , launching your own ICO has never
              <br className="hidden custom1430:block" /> been easier. Say
              goodbye to complex coding and
              <br className="hidden custom1430:block" /> technical barriers —{" "}
              <span className="violet-gradient-text">
                our tool empowers you to take
                <br className="hidden custom1430:block" /> control of your ICO
                setup
              </span>{" "}
              with simplicity and speed
            </>
          }
        />
        <ExpertiseServices
          topBorder={false}
          data={icoConstructorInfo}
          title={
            <>
              What Is an ICO
              <br className="hidden xl:block" /> and Why Should
              <br className="hidden xl:block" /> You Create One?
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[134px]"}
          titleClasses="mb-6 md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid xl:gap-14"
          itemTitleClasses={"xl:text-[20px] xl:leading-90"}
          bg={
            <Image
              width={970}
              height={650}
              src={"/ico-constructor-ellipse.webp"}
              className="absolute"
            />
          }
        />

        <Industries
          data={icoConstructorProcess}
          title={
            <>
              How an ICO Constructor <br className="hidden xl:block" />
              Simplifies the Process
            </>
          }
          topBorder={false}
          customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[109px] xl:gap-x-[120px] xl:pl-[65px] !mt-0"
          itemContainerClasses={
            "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
          }
          containerClasses={
            "xl:gap-[107px] custom1430:pr-[148px] xl:py-[126px]"
          }
          itemTitleClasses={
            "max-w-full nd:text-lg lg:text-lg xl:text-lg xl:leading-90 mb-6"
          }
        />
        <ExpertiseServices
          topBorder={false}
          title={
            <>
              Key Features
              <br className="hidden xl:block" />
              of Our ICO
              <br className="hidden xl:block" /> Constructor
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[134px]"}
          titleClasses="mb-6 md:mb-0 xl:text-[60px] xl:leading-90"
          itemTitleClasses={"xl:text-[20px] xl:leading-90"}
          containerClasses="xl:grid xl:gap-14"
          data={icoConstructorFeatures}
        />
        <KeyFeatures
          title={"Start Your ICO Journey Today"}
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15"
          desc={
            "Don’t let technical barriers hold you back. With our ICO generator, you can launch a secure, scalable, and successful ICO in no time. Take the first step towards realizing your blockchain vision — create your ICO today with our powerful and reliable constructor."
          }
          isOneBlock={true}
          imageClasses="-bottom-[115%]"
          descClasses={"max-w-[810px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
        />
        <ExpertiseServices
          topBorder={false}
          title={
            <>
              Benefits of Using
              <br className="hidden xl:block" /> Our ICO Creation
              <br className="hidden xl:block" /> Solution
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[134px]"}
          titleClasses="mb-6 mb-0 xl:text-[60px] xl:leading-90"
          itemTitleClasses={
            "xl:text-[20px] lg:text-[20px] md:text-[20px] xl:leading-90"
          }
          containerClasses="xl:grid xl:gap-14"
          data={icoConstructorBenefits}
        />
        <Industries
          data={icoConstructorDIY}
          title={"Tips for an Accomplished DIY ICO"}
          desc={
            "Our ICO constructor provides the technical foundation, but a strong plan will help maximize your results. Launching an ICO with a constructor is straightforward, but success depends on strategic planning"
          }
          topBorder={false}
          customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[109px] xl:gap-x-[120px] xl:pl-[65px] !mt-0"
          itemContainerClasses={
            "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
          }
          containerClasses={"xl:gap-30 custom1430:pr-[148px] xl:py-[126px]"}
          itemTitleClasses={
            "max-w-full nd:text-lg lg:text-lg xl:text-lg xl:leading-90 mb-6"
          }
        />
        <KeyFeatures
          title={"The Future of ICO Development with Advanced Tools"}
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15 max-w-[1012px]"
          desc={
            "With the continuous evolution of the blockchain ecosystem, the tools for launching ICOs are advancing as well. Our solution incorporates the latest advancements, including enhanced user interfaces, and multi-chain compatibility. By staying ahead of the curve, we empower you to lead the market"
          }
          noBg={true}
          isOneBlock={true}
          imageClasses="-bottom-[115%]"
          descClasses={"max-w-[780px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
          customBg={
            <Image
              width={800}
              height={800}
              src={"/ico-constructor-decoration-bg.webp"}
              className="absolute -top-[150%] left-0"
            />
          }
        />
        <div className="w-full overflow-hidden">
          <FAQ
            title={
              <>
                Why Choose Our <br className="hidden xl:block" /> Blockchain ICO{" "}
                <br className="hidden xl:block" /> Constructor?
              </>
            }
            noBg={true}
            isTwoHalf={true}
            hasIcon={false}
            faqGradient={true}
            data={icoPlatformFaqData}
            itemsClasses={"md:py-[65px]"}
            accordionPanelClasses="md:pb-[65px]"
            expandedItemClasses="!pb-6"
            isDoublePadding={true}
            itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line"}
          />
        </div>
        <ExpertiseServices
          topBorder={false}
          title={
            <>
              Need a Fully <br /> Custom ICO <br /> Platform?
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[134px]"}
          titleClasses="mb-6 mb-0 xl:text-[60px] xl:leading-90"
          itemTitleClasses={
            "xl:text-[20px] lg:text-[20px] md:text-[20px] xl:leading-90"
          }
          containerClasses="xl:grid"
          data={icoPlatformAdvantages}
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
                  Alongside <br />
                  <span className="violet-gradient-text">
                    ico constructor,
                  </span>{" "}
                  <br /> Cowchain offers <br />{" "}
                  <span className="violet-gradient-text">
                    additional support <br /> services
                  </span>{" "}
                  to fully
                  <br /> back your project
                </>
              }
              data={icoConstructorServicesData}
              itemClasses="py-10 xl:!py-[43px]"
              topBorder={false}
            />
          </div>
        </div>
        <WhiteLabelCases hasNoDescription={true} title="Our Cases" />
        <Cases />
        <CasesMobile />
        <div className="w-full overflow-hidden">
          <FAQ
            noBg={true}
            data={icoConstructorFaqBotData}
            faqHorizontalPadding
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

export default IcoConstructor;
