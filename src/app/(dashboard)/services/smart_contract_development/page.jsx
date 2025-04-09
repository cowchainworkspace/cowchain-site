import servideBG from "@/assets/bg/dexServiceBg.svg";
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
  OtherSmartContractData,
  SmartContractIndustriesData,
  SmartContractOtherData,
  SnartContractBenefitsData,
  SnartContractExpertiseData,
  consultingServices,
  faqNftData,
  nftProcessData,
  smartContractsData
} from "./utils/data";
import { metadata } from "./utils/smartContractDevMetadata";

export { metadata };

const SmartContractDevelopment = () => {
  return (
    <section>
      <HeroSection
        tag={"Smart Contract Development"}
        title={"Smart Contract Development Services"}
        desc={
          <>
            We offer a full range of blockchain smart contract development
            services customized <br />
            to meet your business needs
          </>
        }
      />

      <Achievements
        tag={"Smart Contract Development Services"}
        desc={
          <>
            Cowchain, a leading{" "}
            <span className="violet-gradient-text">
              smart contract development{" "}
              <br className="hidden custom1400:block" />
              service provider,
            </span>{" "}
            specializes in creating dapps{" "}
            <br className="hidden custom1400:block" />
            tailored to your business needs. Our{" "}
            <span className="violet-gradient-text">
              blockchain smart contract development services
            </span>{" "}
            leverage <br className="hidden custom1400:block" /> in-depth
            expertise in blockchain technology and{" "}
            <br className="hidden custom1400:block" />
            programming to deliver customized solutions
          </>
        }
      />

      <ExpertiseServices
        bg={
          <Image
            alt=""
            className="absolute -bottom-[900px] left-0  h-screen md:block md:h-min "
            src={servideBG}
          />
        }
        data={SnartContractExpertiseData}
        title={"Expertise of Our Smart Contract Development Company"}
        desc={
          <>
            Cowchain, a leading blockchain smart contract development company,
            combines deep knowledge and extensive experience in creating
            decentralized solutions across various industries, including
            finance, gaming, logistics, healthcare, and the public sector. Our
            expertise spans smart contract architecture and design with a focus
            on scalability and security, as well as seamless integration of
            smart contracts with traditional systems and external data sources
            via oracles.
          </>
        }
        titleClasses="text-[42px] max-w-[592px]"
      />
      <div className="w-full overflow-hidden">
        <OtherServices
          tag={"Smart Contracts in Business Transformation"}
          title={
            <>
              Smart contracts are reshaping industries by automating complex
              workflows and eliminating the need for intermediaries. Their
              implementation drives trust and brings many benefits to modern
              businesses
            </>
          }
          data={OtherSmartContractData}
          bottomBorder={true}
          isScroll={true}
        />
      </div>

      <Industries
        title={
          <>
            Key industries for the application{" "}
            <br className="hidden custom1400:block" /> of smart contracts
          </>
        }
        desc={
          <>
            Our blockchain smart contract development company <br />
            has expertise in a variety of industries
          </>
        }
        data={SmartContractIndustriesData}
        topBorder={false}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
      />

      <ServiceStack
        home={true}
        lopngDesc={true}
        desc={
          <>
            <p className="text-[#BBBBBB]">
              The experts at our smart contract development company are
              experienced in working with various blockchain networks, which
              allows us to offer optimal solutions depending on the project
              requirements
            </p>
            <p>
              <br />
              <br />
            </p>
            <p className="text-[#BBBBBB]">
              We constantly follow the development of blockchain technologies
              and supplement our stack with new tools to improve development
              efficiency
            </p>
            <p>
              <br />
              <br />
            </p>
            <p className="text-[#BBBBBB]">
              Our developers use advanced technologies and tools to provide
              smart contract development service
            </p>
          </>
        }
      />
      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Our Smart Contracts <br className="hidden custom1400:block" />
              Development <br className="hidden custom1400:block" />
              Process
            </>
          }
          desc={
            <>
              We follow rigorous and consistent blockchain smart contract
              <br className="hidden custom1400:block" />
              development standards to maintain high quality, security,
              <br className="hidden custom1400:block" /> and customer compliance
            </>
          }
          data={smartContractsData}
          itemsClasses={"py-[50px]"}
          isTwoHalf={true}
          noBg={true}
          hasIcon={false}
          faqGradient={true}
          isDoublePadding={true}
        />
      </div>

      <KeyFeatures
        isOneBlock={true}
        title={
          <>
            Our Blockchain <br /> Advisory Background
          </>
        }
        desc={
          <>
            At Cowchain, we don’t just develop smart contracts – we guide
            businesses through the complexities
            <br className="hidden custom1400:block" /> of blockchain adoption.
            Our blockchain consulting services provide tailored strategies to
            help you unlock
            <br className="hidden custom1400:block" /> the potential of
            decentralized technologies. Whether optimizing existing systems or
            exploring
            <br className="hidden custom1400:block" /> new opportunities, our
            expertise ensures your business stays ahead in the blockchain space.
          </>
        }
        noBg={true}
        titleClasses="md:mb-10"
      />

      <Feedback />

      <ExpertiseServices
        threeColumns
        data={SnartContractBenefitsData}
        title={
          <>
            Why <br /> Our Clients <br /> Trust Us
          </>
        }
      />
      <div className="w-full overflow-hidden">
        <OtherServices
          tag={"other blockchain services"}
          title={
            <>
              In addition to <br className="hidden custom1400:block" />
              <span className="violet-gradient-text">
                smart contract <br className="hidden custom1400:block" />{" "}
                development
              </span>
              , we at <br className="hidden custom1400:block" /> Cowchain offer{" "}
              <br className="hidden custom1400:block" /> a wide range of{" "}
              <br className="hidden custom1400:block" />
              <span className="violet-gradient-text">
                complementary <br className="hidden custom1400:block" />
                services
              </span>
            </>
          }
          data={SmartContractOtherData}
          bottomBorder={false}
        />
      </div>
      <div className="w-full overflow-hidden">
        <FAQ
          noBg={true}
          data={faqNftData}
          titleClasses="lg:text-[60px] lg:leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>

      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default SmartContractDevelopment;
