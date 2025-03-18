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
        tag={"Our DeFi Development Services and Solutions"}
        desc={
          <>
            {" "}
            At Cowchain, we are a leading{" "}
            <span className="violet-gradient-text">
              defi development <br className="custom1400:block hidden" />{" "}
              company
            </span>{" "}
            specializing in providing top-notch
            <span className="violet-gradient-text">
              defi <br className="custom1400:block hidden" /> development
              services
            </span>
            . Our team is dedicated to{" "}
            <br className="custom1400:block hidden" />
            helping you navigate the world of decentralized{" "}
            <br className="custom1400:block hidden" />
            finance with
            <span className="violet-gradient-text">
              innovative platforms
            </span>{" "}
            offered by our <br className="custom1400:block hidden" />{" "}
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
            DeFi <br />
            Development <br />
            Services <br />
            We Provide
          </>
        }
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[35%] left-0"
          />
        }
      />

      <ExpertiseServices
        threeColumns
        data={DeFiBenefitsData}
        title={
          <>
            Benefits <br />
            of DeFi <br />
            Development
          </>
        }
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
      />

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

      <ServiceStack home={true} />

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
      />

      <OtherServices
        tag={"Other Blockchain Services"}
        title={
          <>
            In addition to <br />
            <span className="violet-gradient-text">DEFI development</span>
            <br />
            Cowchain offers <br /> a variety <br /> of
            <span className="violet-gradient-text">
              complementary <br /> services
            </span>
          </>
        }
        data={OtherDefiData}
        bottomBorder={false}
      />
      <FAQ
        data={faqDefiData}
        noBg={true}
        titleClasses="lg:text-[60px] lg:leading-[53.7px]"
        faqHorizontalPadding={true}
      />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default DefiDevelopment;
