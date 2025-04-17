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
  EngagementDevData,
  OurWorksData,
  consultingFAQData,
  consultingProcessData,
  otherServices,
  TustByNumbersData,
  IndustriesDexData,
  BlockchainServiceData
} from "./utils/data";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";

const BlockChainConsulting = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={"Blockchain Consulting Services & Solutions"}
        desc={
          <>
            Our team provides comprehensive blockchain consulting services to
            help you build a robust strategy <br className="hidden lg:block" />
            Select your preferred type of blockchain and optimal blockchain
            platform
          </>
        }
      />
      <Achievements
        tag={"blockchain consulting services"}
        desc={
          <>
            As a{" "}
            <span className="violet-gradient-text">
              blockchain consulting company
            </span>{" "}
            , we deliver <br /> professional{" "}
            <span className="violet-gradient-text">
              blockchain consulting services
            </span>{" "}
            <br /> tailored to the unique needs of{" "}
            <span className="violet-gradient-text">
              businesses looking to leverage blockchain technology
            </span>
            . Whether you <br /> are determining which blockchain best suits
            your <br /> requirements or optimizing your current <br />{" "}
            infrastructure, our experts are prepared to deliver <br /> deep
            insights and{" "}
            <span className="violet-gradient-text">
              practical blockchain consulting solutions
            </span>
            . From blockchain advisory services <br />
            to ongoing development, our approach empowers <br /> companies to{" "}
            <span className="violet-gradient-text">
              maximize blockchain opportunities
            </span>
          </>
        }
      />

      <TustByNumbers
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
        typographyContainerClasses="md:!pr-0"
        noBg={true}
      />

      <ExpertiseServices
        itemTitleClasses="lg:text-[20px]"
        title={
          <>
            Blockchain <br className="hidden lg:block" />
            Consulting <br className="hidden lg:block" />
            Services We <br className="hidden lg:block" />
            Provide
          </>
        }
        cryptoWalletClass="mb-[80px]"
        desc={
          <>
            We at Cowchain provide a wide range of blockchain consulting
            services, <br className="hidden xl:block" /> including crypto
            consulting services, structured to meet the peculiar
            <br className="hidden xl:block" /> challenges that are presented to
            businesses through industries.
            <br className="hidden xl:block" /> As a trusted blockchain
            consulting firm, we offer end-to-end blockchain
            <br className="hidden xl:block" /> consultancy from strategy
            development to platform implementation,
            <br className="hidden xl:block" /> ensuring your business is ready
            to reap the full benefits
            <br className="hidden xl:block" /> of this transformational
            technology
          </>
        }
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
        data={BlockchainServiceData}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[45%] left-0 hidden md:block"
          />
        }
        sectionContainerClasses={"md:flex-row md:gap-5 lg:gap-10"}
      />

      <Industries
        title={"Industry-Focused Blockchain Consulting"}
        desc={
          "Blockchain comes with a lot of versatility, which will make it applicable to a wide array of industry areas. Our blockchain consultants work with companies from various sectors, ranging from health to finance, by providing them with industry-specific decentralized solutions. This is the expectation for some of the important industries where we apply our blockchain consulting services"
        }
        data={IndustriesDexData}
        topBorder={false}
        customClasses={"!mt-0 md:grid-cols-2 lg:grid-cols-3"}
        descClasses={"text-white"}
      />

      <ExpertiseServices
        title={"Our Works"}
        desc={
          "At Cowchain, we take pride in delivering tailored blockchain consulting solutions across industries. Our expertise in strategy, development, and implementation has enabled businesses to streamline operations, enhance security, and achieve measurable results. Below are some of the projects that highlight our practical approach to blockchain solutions"
        }
        itemTitleClasses="lg:text-[20px]"
        data={OurWorksData}
        topBorder={false}
        titleClasses="xl:text-[60px] xl:mb-[60px]"
        bottomBorder={false}
        cryptoWalletClass="mb-[80px]"
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[65%] left-0 hidden md:block"
          />
        }
        sectionContainerClasses={"md:flex-row md:gap-5 lg:gap-10"}
      />

      <div className="w-full overflow-hidden">
        <FAQ
          desc={
            "Our blockchain consultation is structured to ensure that businesses can seamlessly integrate technology into their operations. This process includes several key stages"
          }
          title={"Our Consulting Process"}
          data={consultingProcessData}
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          itemsClasses={"py-10 md:py-[55px]"}
        />
      </div>

      <KeyFeatures
        isOneBlock={true}
        title={"Blockchains We Work With"}
        desc={
          <>
            Cowchain works with leading blockchains like Ethereum, Solana,
            Polygon,
            <br className="hidden xl:block" /> Binance Smart Chain, and more.
            Whatever your blockchain needs — expansion,
            <br className="hidden xl:block" /> integration, or optimization —
            our experts are ready to solve it.
            <p>
              <br />
            </p>
            ave a complex project or need end-to-end implementation?
            <br className="hidden xl:block" /> We’ll take care of every detail,
            delivering a solution that meets
            <br className="hidden xl:block" /> the highest standards of
            functionality, protection, and dependability
          </>
        }
        noBg={true}
        descClasses={"max-w-[592px]"}
        titleClasses="xl:mb-[60px]"
      />

      <KeyFeatures
        reverse={true}
        isOneBlock={true}
        title={
          <>
            Why Choose <br className="hidden xl:block" /> Us as Your
            <br className="hidden xl:block" /> Blockchain
            <br className="hidden xl:block" /> Consulting
            <br className="hidden xl:block" /> Partner?
          </>
        }
        desc={
          <>
            Choosing Cowchain means partnering with an industry-leading
            blockchain consulting company that is committed to delivering
            innovative solutions. Our approach is centered on understanding the
            specific challenges and goals of your business, and we tailor our
            blockchain consulting services to provide practical, actionable
            results
            <p>
              <br />
            </p>
            As a trusted blockchain consulting company, we combine deep
            technical expertise with a strong business focus, ensuring that
            every solution we deliver is both technically sound and aligned with
            your long-term strategy. We work alongside your team, offering
            continuous support and insights throughout the entire project
            lifecycle
          </>
        }
        descClasses={"max-w-[519px]"}
        titleBlockClasses="flex-col gap-1 md:gap-[102px] lg:flex-row lg:justify-between"
        isTextSecondary={true}
      />

      <Feedback />

      <Industries
        title={"Our Engagement Models"}
        desc={
          <>
            We provide flexible engagement models
            <br className="hidden lg:block" /> to suit different business needs,
            <br className="hidden lg:block" /> ensuring you receive the right
            expertise
            <br className="hidden lg:block" /> and approach for your project
          </>
        }
        data={EngagementDevData}
        topBorder={false}
        isTwoSides={true}
        titleClasses="!text-[60px]"
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute -bottom-[45%] left-0 hidden md:block"
          />
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={"Why Our Clients Trust Us"}
        desc={
          <>
            Clients choose Cowchain because we offer a unique combination of
            deep expertise
            <br className="hidden lg:block" /> and a client-focused approach.
            Our blockchain consulting delivers solutions that align with
            <br className="hidden lg:block" /> the individual requirements of
            each business, ensuring that they receive not only a robust
            <br className="hidden lg:block" /> system but also a clear strategy
            for sustained growth. Our blockchain consulting company
            <br className="hidden lg:block" /> is known for delivering projects
            on time, and within budget, providing lasting support{" "}
            <br className="hidden lg:block" /> to foster growth and adaptability
          </>
        }
        noBg={true}
        titleClasses="xl:mb-[60px]"
      />
      <WhiteLabelCases title="our cases" desc="" blockClasses="md:pb-[60px]" />
      <Cases />
      <CasesMobile />
      <div className="w-full overflow-hidden">
        <OtherServices
          tag={"Other Blockchain Services"}
          title={
            <>
              In addition to{" "}
              <span className="violet-gradient-text">
                blockchain <br /> consulting
              </span>
              , Cowchain <br /> offers a range of <br />
              complementary solutions <br />
              <span className="violet-gradient-text">
                to help businesses fully <br /> integrate technology <br /> into
                their operations.
              </span>{" "}
              <br />
              These services include
            </>
          }
          data={otherServices}
        />
      </div>

      <div className="w-full overflow-hidden">
        <FAQ
          data={consultingFAQData}
          noBg={true}
          titleClasses="lg:text-[60px] lg:leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>
      <Contact className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default BlockChainConsulting;
