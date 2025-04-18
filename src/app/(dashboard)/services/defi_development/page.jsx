import dexBg from "@/assets/bg/dex-ellipse-bg.webp";
import Contact from "@/components/Contact";
import Image from "next/image";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import {
  ClientsTrustData,
  DeFiBenefitsData,
  DeFiExpertiseData,
  IndustriesData,
  OtherDefiData,
  defiProcessData,
  faqDefiData
} from "./utils/data";
import { metadata } from "./utils/defiDevMetadata";
export { metadata };

const DefiDevelopment = () => {
  return (
    <section>
      <HeroSection
        title={"DeFi Development Company"}
        desc={
          <>
            Find out how DeFi Development Company can help you build a better
            blockchain ecosystem. <br className="hidden lg:block" />
            Cowchain is leading the way in blockchain development!
          </>
        }
      />
      <Achievements
        tag={
          <>
            Our DeFi Development Services{" "}
            <span className="hidden md:block">and Solutions</span>
          </>
        }
        desc={
          <>
            {" "}
            At Cowchain, we are a leading{" "}
            <span className="violet-gradient-text">
              defi development <br className="hidden custom1400:block" />{" "}
              company
            </span>{" "}
            specializing in providing top-notch{" "}
            <span className="violet-gradient-text">
              defi <br className="hidden custom1400:block" /> development
              services
            </span>
            . Our team is dedicated to{" "}
            <br className="hidden custom1400:block" />
            helping you navigate the world of decentralized{" "}
            <br className="hidden custom1400:block" />
            finance with{" "}
            <span className="violet-gradient-text">
              innovative platforms
            </span>{" "}
            offered by our <br className="hidden custom1400:block" />{" "}
            decentralized{" "}
            <span className="violet-gradient-text">
              finance development company
            </span>
          </>
        }
      />
      <KeyFeatures
        isOneBlock={true}
        title={"DeFi Development"}
        desc={
          <>
            As a leading decentralized finance development company, we
            specialize
            <br className="hidden lg:block" /> in creating innovative DeFi
            solutions that redefine how businesses
            <br className="hidden lg:block" /> and individuals interact with
            financial systems.
            <p>
              <br />
            </p>
            Our solutions encompass smart contracts, liquidity protocols, and
            <br className="hidden lg:block" />
            more to streamline decentralized transactions
          </>
        }
        noBg={true}
        descClasses={"max-w-[592px]"}
        titleClasses="lg:mb-[60px]"
      />

      <ExpertiseServices
        data={DeFiExpertiseData}
        title={
          <>
            DeFi <br className="hidden md:block" />
            Development <br className="hidden md:block" />
            Services <br className="hidden md:block" />
            We Provide
          </>
        }
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[35%] left-0 hidden md:block"
          />
        }
        sectionContainerClasses={"md:flex-row md:gap-5"}
      />

      <ExpertiseServices
        threeColumns
        data={DeFiBenefitsData}
        title={
          <>
            Benefits <br className="hidden md:block" />
            of DeFi <br className="hidden md:block" />
            Development
          </>
        }
        containerClasses="grid-cols-1 md:grid-cols-2"
      />

      <Industries
        title={"Industries We Serve"}
        data={IndustriesData}
        topBorder={false}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
      />

      <KeyFeatures
        isOneBlock={true}
        title={"DeFi Token Development Classification"}
        desc={
          "Our defi token development company classifies tokens based on their utility, governance, and other functionalities. We ensure that each token meets the specific needs of your project"
        }
        descClasses={"max-w-[592px]"}
        titleClasses="lg:mb-[60px]"
      />
      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Our DeFi <br />
              Development <br />
              Process
            </>
          }
          data={defiProcessData}
          desc={
            "Our NFT development team follows a systematic approach to ensure that each project is handled with care from start to finish, delivering high-quality outcomes. By focusing on every detail of nft development, we create platforms that are robust and adaptable to evolving business needs, enabling clients to achieve lasting impact"
          }
          noBg={true}
          isTwoHalf={true}
          isDoublePadding={true}
          hasIcon={false}
          itemsClasses={"py-10 md:py-[74.5px]"}
          faqGradient={true}
          descriptionClasses="!max-w-[320px] md:max-w-[462px]"
        />
      </div>

      <KeyFeatures
        isOneBlock={true}
        title={"DeFi Token Development Perks"}
        desc={
          <>
            Developing tokens with our defi development company offers several
            perks, including increased liquidity, global reach, and enhanced
            security. Our defi development services are tailored to maximize the
            potential of your tokens. Additionally, defi development creates new
            opportunities for token utility <br className="hidden lg:block" />{" "}
            and broader adoption
          </>
        }
        noBg={true}
        titleClasses="lg:mb-[60px]"
        descClasses={"max-w-[592px]"}
      />

      <ServiceStack
        home={true}
        desc={
          <>
            <>
              Our defi development company employs a diverse tech stack to
              deliver customized outcomes from defi development.
            </>
            <br />
            <br />
            <>
              We stay updated with the latest technologies to match your
              requirements using the most advanced tools
            </>
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          "With years of experience in the blockchain industry, our defi development company specializes in development services and expert advisory to optimize defi development. We guide clients through the complexities of blockchain and development, ensuring reliable implementation of their projects"
        }
        titleClasses="max-w-[737px] lg:mb-10"
        noBg={true}
      />

      <Feedback />

      <ExpertiseServices
        threeColumns
        data={ClientsTrustData}
        title={
          <>
            Why <br />
            Our Clients <br />
            Trust Us
          </>
        }
        containerClasses="grid-cols-1 md:grid-cols-2"
      />
      <div className="w-full overflow-hidden">
        <OtherServices
          tag={"Other Blockchain Services"}
          title={
            <>
              In addition to <br className="hidden md:block" />
              <span className="violet-gradient-text">DEFI development</span>
              <br />
              Cowchain offers <br className="hidden md:block" /> a variety{" "}
              <br /> of{" "}
              <span className="violet-gradient-text">
                complementary <br className="hidden md:block" /> services
              </span>
            </>
          }
          data={OtherDefiData}
          bottomBorder={false}
        />
      </div>

      <div className="w-full overflow-hidden">
        <FAQ
          data={faqDefiData}
          noBg={true}
          titleClasses="xl:text-[60px] lg:leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>
      <Contact className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default DefiDevelopment;
