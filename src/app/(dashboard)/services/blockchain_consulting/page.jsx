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
  otherServices
} from "./utils/data";
import { IndustriesDexData } from "./utils/data";
import { TustByNumbersData } from "./utils/data";
import { BlockchainServiceData } from "./utils/data";

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
            At Cowchain,{" "}
            <span className="violet-gradient-text">
              one of the leading blockchain consulting companies
            </span>
            , we deliver professional
            <br className="hidden custom1400:block" />
            <span className="violet-gradient-text">
              blockchain consulting services
            </span>{" "}
            tailored to meet <br className="hidden custom1400:block" /> the very
            unique needs of{" "}
            <span className="violet-gradient-text">
              every business desirous <br className="hidden custom1400:block" />
              the potentials of blockchain technology
            </span>
            . Be it in the early stages of considering which blockchain best
            suits your needs or working to optimize your current blockchain
            infrastructure, our experts are here{" "}
            <br className="hidden custom1400:block" /> to give deep insights and
            practical{" "}
            <span className="violet-gradient-text">
              blockchain consulting solutions.
            </span>
            From blockchain advisory
            <br className="hidden custom1400:block" />
            services to ongoing development, our approach{" "}
            <br className="hidden custom1400:block" /> empowers companies to{" "}
            <span className="violet-gradient-text">
              leverage a blockchain <br className="hidden custom1400:block" />{" "}
              opportunity.
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
      />

      <ExpertiseServices
        title={
          <>
            Blockchain <br className="hidden lg:block" />
            Consulting <br className="hidden lg:block" />
            Services We <br className="hidden lg:block" />
            Provide
          </>
        }
        desc={
          <>
            We at Cowchain provide a wide range of blockchain consulting
            services, <br className="hidden lg:block" /> including crypto
            consulting services, structured to meet the peculiar
            <br className="hidden lg:block" /> challenges that are presented to
            businesses through industries.
            <br className="hidden lg:block" /> As a trusted blockchain
            consulting firm, we offer end-to-end blockchain
            <br className="hidden lg:block" /> consultancy from strategy
            development to platform implementation,
            <br className="hidden lg:block" /> ensuring your business is ready
            to reap the full benefits
            <br className="hidden lg:block" /> of this transformational
            technology
          </>
        }
        data={BlockchainServiceData}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[45%] left-0"
          />
        }
      />

      <Industries
        title={"Industry-Focused Blockchain Consulting"}
        desc={
          "Blockchain comes with a lot of versatility, which will make it applicable to a wide array of industry areas. Our blockchain consultants work with companies from various sectors, ranging from health to finance, by providing them with industry-specific decentralized solutions. This is the expectation for some of the important industries where we apply our blockchain consulting services"
        }
        data={IndustriesDexData}
        topBorder={false}
        customClasses={"lg:!mt-0"}
        descClasses={"text-white"}
      />

      <ExpertiseServices
        title={"Our Works"}
        desc={
          "At Cowchain, we take pride in delivering tailored blockchain consulting solutions across industries. Our expertise in strategy, development, and implementation has enabled businesses to streamline operations, enhance security, and achieve measurable results. Below are some of the projects that highlight our practical approach to blockchain solutions"
        }
        data={OurWorksData}
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
          desc={
            "Our blockchain consultation is structured to ensure that businesses can seamlessly integrate technology into their operations. This process includes several key stages"
          }
          title={"Our Consulting Process"}
          data={consultingProcessData}
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          itemsClasses={"py-[74.5px]"}
        />
      </div>

      <KeyFeatures
        isOneBlock={true}
        title={"Blockchains We Work With"}
        desc={
          <>
            Cowchain works with leading blockchains like Ethereum, Solana,
            Polygon,
            <br className="hidden lg:block" /> Binance Smart Chain, and more.
            Whatever your blockchain needs — expansion,
            <br className="hidden lg:block" /> integration, or optimization —
            our experts are ready to solve it.
            <p>
              <br />
            </p>
            ave a complex project or need end-to-end implementation?
            <br className="hidden lg:block" /> We’ll take care of every detail,
            delivering a solution that meets
            <br className="hidden lg:block" /> the highest standards of
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
            Why Choose <br className="hidden lg:block" /> Us as Your
            <br className="hidden lg:block" /> Blockchain
            <br className="hidden lg:block" /> Consulting
            <br className="hidden lg:block" /> Partner?
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
            s a trusted blockchain consulting company, we combine deep technical
            expertise with a strong business focus, ensuring that every solution
            we deliver is both technically sound and aligned with your long-term
            strategy. We work alongside your team, offering continuous support
            and insights throughout the entire project lifecycle
          </>
        }
        descClasses={"max-w-[519px]"}
        titleBlockClasses="flex-col lg:flex-row lg:justify-between"
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
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[45%] left-0"
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
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default BlockChainConsulting;
