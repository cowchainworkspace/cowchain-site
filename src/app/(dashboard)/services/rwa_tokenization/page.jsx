import dexBg from "@/assets/bg/dex-ellipse-bg.webp";
import Contact from "@/components/Contact";
import Image from "next/image";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries/index";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { TustByNumbers } from "../web3_fullstack_development/blocks/TustByNumbers";
import {
  CoreFeaturesTokenization,
  rwaTokenizationFAQData,
  aplicationsTokenizations,
  whyTokenization,
  otherRwaServices,
} from "./utils/data";
import { IndustriesDexData } from "./utils/data";
import { TustByNumbersData } from "./utils/data";
import { BenefitsTokenizationData } from "./utils/data";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";

const RwaTokenization = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={"RWA Tokenization"}
        desc={
          <>
            Elevate your offerings with our customizable white label solutions.
            Cowchain provides expert,
            <br />
            customizable solutions that allow you to deliver exceptional digital
            products and platforms
          </>
        }
      />
      <Achievements
        tag={"Introduction to RWA Tokenization"}
        desc={
          <>
            <span className="violet-gradient-text">RWA tokenization</span>{" "}
            transforms physical assets into
            <br />
            digital tokens, making them easier to manage, trade, <br /> and
            invest in. By integrating blockchain technology, <br /> this
            innovative process offers unmatched security, <br /> transparency,
            and efficiency. With the growing
            <br />
            demand for{" "}
            <span className="violet-gradient-text">
              digital asset management,
            </span>{" "}
            tokenization is
            <br /> redefining how businesses and investors interact
            <br />
            with real-world assets.
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={
          <>
            What Is RWA Tokenization <br /> and Why It Matters?
          </>
        }
        desc={
          <>
            Real-World Asset Tokenization means digitizing physical real estate,
            some commodity, or financial <br /> instrument into digital tokens.
            These tokens are backed by the value of the physical asset, ensuring
            their <br /> credibility. Blockchain tokenization serves as the
            foundation, enabling seamless transfer, secure ownership <br />{" "}
            records, and reduced barriers for global participation.
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
            className="absolute -bottom-[45%] left-0"
          />
        }
      />

      <TustByNumbers
        tag="step-by-step"
        title={
          <>
            Exploring <br className="hidden lg:block" /> Blockchain’s{" "}
            <br className="hidden lg:block" /> Potential
            <br className="hidden lg:block" /> in the Modern
            <br className="hidden lg:block" /> Market
          </>
        }
        data={TustByNumbersData}
        isBlockChainConsulting={true}
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
        topBorder={false}
        bottomBorder={false}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[65%] left-0"
          />
        }
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
          itemsClasses={"py-[43px]"}
        />
      </div>

      <ExpertiseServices
        title={"Our Works"}
        desc={
          "At Cowchain, we take pride in delivering tailored blockchain consulting solutions across industries. Our expertise in strategy, development, and implementation has enabled businesses to streamline operations, enhance security, and achieve measurable results. Below are some of the projects that highlight our practical approach to blockchain solutions"
        }
        data={whyTokenization}
        topBorder={false}
        bottomBorder={false}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[65%] left-0"
          />
        }
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
            liquidity, security, and accessibility like <br /> never before. Our
            blockchain tokenization services empower businesses and investors to
            unlock the full <br /> potential of their assets.
            <p>
              <br />
            </p>
            Take the leap into the now of asset management with RWA
            tokenization. Let us help you realize the full <br /> potential of
            your assets – get in touch today to start your journey.
          </>
        }
        noBg={true}
        descClasses={"max-w-[798px]"}
      />

      <Feedback />
      <WhiteLabelCases />
      <Cases />
      <CasesMobile />

      <div className="w-full overflow-hidden">
        <OtherServices
          tag={"Other Our Services"}
          title={
            <>
              Alongside{" "}
              <span className="violet-gradient-text">
                RWA
                <br /> TOKENIZATION{" "}
              </span>
              , <br /> Cowchain offers <br />{" "}
              <span className="violet-gradient-text">
                additional support <br /> services{" "}
              </span>{" "}
              to fully <br /> back your project
            </>
          }
          data={otherRwaServices}
        />
      </div>

      <div className="w-full overflow-hidden">
        <FAQ
          data={rwaTokenizationFAQData}
          noBg={true}
          titleClasses="lg:text-[60px] lg:leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default RwaTokenization;
