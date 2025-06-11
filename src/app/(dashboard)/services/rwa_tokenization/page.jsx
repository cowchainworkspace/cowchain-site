import dexBg from "@/assets/bg/dex-ellipse-bg.webp";
import Contact from "@/components/Contact";
import Image from "next/image";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { CoreFeaturesRWAbg } from "../../../../assets/svgComponents/CoreFeaturesRWAbg";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { TustByNumbers } from "../web3_fullstack_development/blocks/TustByNumbers";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";
import {
  CoreFeaturesTokenization,
  TustByNumbersData,
  aplicationsTokenizations,
  otherRwaServices,
  rwaTokenizationFAQData,
  whyTokenization
} from "./utils/data";
import { BenefitsTokenizationData } from "./utils/data";
import { metadata } from "./utils/rwaTokenizationMetadata";
import { getServiceSchema, setBreadcrumbSchemaServices } from "@/lib/utils";
import { rwaTokenizationSchema } from "@/lib/constants/servicesSchemas";

export { metadata };

const RwaTokenization = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "RWA Tokenization Services",
    "rwa_tokenization"
  );
  const serviceSchema = getServiceSchema(rwaTokenizationSchema);

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
      <section className="overflow-visible">
        <HeroSection
          isRwa={true}
          title={"RWA Tokenization"}
          descClasses="lg:mt-[34px]"
          desc={
            <>
              Elevate your offerings with our customizable white label
              solutions. Cowchain provides expert,
              <br className="hidden xl:block" />
              customizable solutions that allow you to deliver exceptional
              digital products and platforms
            </>
          }
        />
        <Achievements
          tag={"Introduction to RWA Tokenization"}
          desc={
            <>
              <span className="violet-gradient-text">RWA tokenization</span>{" "}
              transforms physical assets into
              <br className="hidden xl:block" />
              digital tokens, making them easier to manage, trade,{" "}
              <br className="hidden xl:block" /> and invest in. By integrating
              blockchain technology, <br className="hidden xl:block" /> this
              innovative process offers unmatched security,{" "}
              <br className="hidden xl:block" /> transparency, and efficiency.
              With the growing
              <br className="hidden xl:block" />
              demand for{" "}
              <span className="violet-gradient-text">
                digital asset management,
              </span>{" "}
              tokenization is
              <br className="hidden xl:block" /> redefining how businesses and
              investors interact
              <br className="hidden xl:block" />
              with real-world assets.
            </>
          }
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              What Is RWA Tokenization <br className="hidden md:block" /> and
              Why It Matters?
            </>
          }
          desc={
            <>
              Real-World Asset Tokenization means digitizing physical real
              estate, some commodity, or financial{" "}
              <br className="hidden xl:block" /> instrument into digital tokens.
              These tokens are backed by the value of the physical asset,
              ensuring their <br className="hidden xl:block" /> credibility.
              Blockchain tokenization serves as the foundation, enabling
              seamless transfer, secure ownership{" "}
              <br className="hidden xl:block" /> records, and reduced barriers
              for global participation.
            </>
          }
          noBg={true}
          descClasses={"max-w-[798px]"}
        />

        <ExpertiseServices
          title={
            <>
              Key benefits of <br />
              tokenization <br />
              solutions
            </>
          }
          data={BenefitsTokenizationData}
          bg={
            <Image
              src={dexBg}
              alt="decoration ellipse"
              className="absolute -bottom-[40%] left-0 hidden h-[1700px] md:block"
            />
          }
          titleClasses=" xl:text-[60px] leading-90"
          itemTitleClasses="lg:text-[20px]"
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses={"md:flex-row md:gap-5"}
          descClasses="max-w-[510px]"
        />

        <TustByNumbers
          isRwa={true}
          noBg={true}
          tag="step-by-step"
          title={
            <>
              How asset <br className="hidden xl:block" />
              tokenization <br className="hidden xl:block" />
              works
            </>
          }
          data={TustByNumbersData}
        />

        <ExpertiseServices
          title={
            <>
              Core Features <br />
              of Blockchain <br />
              in Tokenization
            </>
          }
          data={CoreFeaturesTokenization}
          topBorder={true}
          bottomBorder={false}
          titleClasses=" xl:text-[60px] leading-90"
          bg={
            <CoreFeaturesRWAbg className="absolute bottom-[25%] right-0 hidden md:block" />
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
          itemTitleClasses="lg:text-[20px]"
          cryptoWalletClass="lg:mb-[60px]"
          descClasses="max-w-[495px]"
        />
        <div className="w-full overflow-hidden">
          <FAQ
            title={
              <>
                Applications <br /> of RWA <br /> Tokenization
              </>
            }
            data={aplicationsTokenizations}
            noBg={true}
            isTwoHalf={true}
            hasIcon={false}
            faqGradient={true}
          />
        </div>

        <ExpertiseServices
          itemTitleClasses="lg:text-[20px]"
          cryptoWalletClass="lg:mb-[60px]"
          titleClasses=" xl:text-[60px] leading-90"
          title={
            <>
              Why Choose Our <br /> Tokenization <br /> Solutions?
            </>
          }
          data={whyTokenization}
          topBorder={false}
          bottomBorder={false}
          sectionContainerClasses={"md:flex-row md:gap-5 lg:pb-[100px]"}
          descClasses="max-w-[505px]"
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              Transform Your Assets with RWA <br /> Tokenization
            </>
          }
          desc={
            <>
              Tokenization represents the future of asset management, offering
              liquidity, security, and accessibility like{" "}
              <br className="hidden xl:block" /> never before. Our blockchain
              tokenization services empower businesses and investors to unlock
              the full <br className="hidden xl:block" /> potential of their
              assets.
              <p>
                <br />
              </p>
              Take the leap into the now of asset management with RWA
              tokenization. Let us help you realize the full{" "}
              <br className="hidden xl:block" /> potential of your assets – get
              in touch today to start your journey.
            </>
          }
          noBg={true}
          descClasses={"max-w-[798px]"}
        />

        <Feedback
          desc="Our clients know they can rely on Cowchain 
to deliver reliable, secure blockchain solutions. Here’s what they have to say"
        />
        <WhiteLabelCases
          title="our cases"
          desc=""
          blockClasses="md:pb-[60px]"
        />

        <Cases />
        <CasesMobile />

        <div className="w-full overflow-hidden">
          <OtherServices
            tag={"Other Our Services"}
            title={
              <>
                In addition to{" "}
                <span className="violet-gradient-text">
                  RWA
                  <br /> TOKENIZATION{" "}
                </span>
                , <br /> Cowchain offers <br />{" "}
                <span className="violet-gradient-text">
                  development and <br />
                  and advisory services
                </span>{" "}
                to help you turn assets into on-chain value with
                <span className="violet-gradient-text">
                  {" "}
                  scalable infrastructure
                </span>
              </>
            }
            data={otherRwaServices}
          />
        </div>

        <div className="w-full overflow-hidden">
          <FAQ
            data={rwaTokenizationFAQData}
            noBg={true}
            titleClasses="xl:text-[60px] lg:leading-[53.7px]"
            faqHorizontalPadding={true}
          />
        </div>
        <Contact
          titleClasses={"mb-4 md:mb-0"}
          descriptionClasses={"mb-4 md:mb-0"}
          className="px-[50px] py-[50px] md:pb-[127px] md:pt-[169px] lg:px-[64px]"
        />
      </section>
    </>
  );
};

export default RwaTokenization;
