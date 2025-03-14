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
  aspectsOfSmartContract,
  blockchainNetworks,
  consultingServices,
  faqNftData,
  nftProcessData
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
            Cowchain is a leading{" "}
            <span className="violet-gradient-text">
              smart contract <br className="1400:block hidden" />
              development
            </span>{" "}
            service provider. Our team <br className="1400:block hidden" /> of
            experienced developers has in-depth{" "}
            <br className="1400:block hidden" /> knowledge of blockchain
            technology and <br className="1400:block hidden" /> programming
            languages to develop DApps
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
            <p>
              Cowchain is a team of experts in blockchain smart contract
              development. We have deep knowledge and practical experience
              creating decentralized solutions on various blockchain platforms,
              including Ethereum, Solana, Avalanche, TON, Near, Polygon, and
              Binance Smart Chain.
            </p>
            <br />
            <p>
              Our expertise is backed by successful projects for clients in
              various industries, such as finance, gaming, logistics, medical,
              and the public sector.
            </p>
            <br />
            <div>
              <p>
                Over the years, our smart contract development agency has
                accumulated expertise in all aspects:
              </p>

              <ul className="pl-4">
                {aspectsOfSmartContract.map(({ id, desc }) => (
                  <li className="-indent-2" key={id}>{`- ${desc}`}</li>
                ))}
              </ul>
            </div>
            <br />

            <p>
              When you choose Cowchain, you get a team of experts who can create
              you a robust, high-performance blockchain solution fully
              customized to your business needs
            </p>
          </>
        }
        titleClasses="text-[42px] max-w-[592px]"
      />

      <OtherServices
        tag={"web3 development use cases"}
        title={
          <>
            How smart contracts <br />
            <span className="violet-gradient-text">
              are transforming business processes?
            </span>
            <br />
            Implementing smart contracts <br /> can bring{" "}
            <span className="violet-gradient-text">
              many <br /> benefits
            </span>{" "}
            to{" "}
            <span className="violet-gradient-text">
              your <br /> business,
            </span>
            <br />
            including
          </>
        }
        data={OtherSmartContractData}
        bottomBorder={true}
        isScroll={true}
      />

      <Industries
        title={"Key industries for the application of smart contracts"}
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

      <KeyFeatures
        isOneBlock={true}
        title={"Blockchain networks we work with"}
        desc={
          <>
            <p>
              The experts at our smart contract development company are
              experienced in working with
              <br /> various blockchain networks, which allows us to offer
              optimal solutions depending on the
              <br /> project requirements:
            </p>
            <ul className="pl-2">
              {blockchainNetworks.map(({ id, desc }) => (
                <li className="-indent-2" key={id}>{`- ${desc}`}</li>
              ))}
            </ul>
          </>
        }
        noBg={true}
      />

      <FAQ
        title={
          <>
            Our Smart Contracts <br />
            Development <br />
            Process
          </>
        }
        desc={
          "We follow a rigorous and consistent smart contract development process to ensure high quality, security, and customer compliance:"
        }
        data={nftProcessData}
        isTwoHalf={true}
        noBg={true}
        hasIcon={false}
      />

      <KeyFeatures
        isOneBlock={true}
        title={
          <>
            Our Blockchain <br /> Advisory Background
          </>
        }
        desc={
          <>
            <p>
              In addition to developing smart contracts, we provide blockchain
              consulting services. Our experts can help you:
            </p>
            <ul className="pl-2">
              {consultingServices.map(({ id, desc }) => (
                <li key={id}>{`- ${desc};`}</li>
              ))}
            </ul>
          </>
        }
        noBg={true}
        titleClasses="md:mb-10"
      />

      <KeyFeatures
        isOneBlock={true}
        title={"Our Engagement Models"}
        desc={
          <p>
            At Cowchain, we are flexible in our collaboration approach, offering
            various engagement models tailored to your unique needs and
            requirements. Regardless of project size or industry specifics, we
            will find the best way to organize work to ensure the successful
            implementation of your idea.
          </p>
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

      <OtherServices
        tag={"Other Blockchain Services"}
        title={
          <>
            In addition to <br />
            <span className="violet-gradient-text">
              Smart contract <br /> development
            </span>
            <br />
            Cowchain offers <br /> a variety of <br />
            <span className="violet-gradient-text">
              complementary <br /> services
            </span>
          </>
        }
        data={SmartContractOtherData}
        bottomBorder={false}
      />

      <FAQ
        noBg={true}
        data={faqNftData}
        titleClasses="lg:text-[60px] lg:leading-[53.7px]"
        faqHorizontalPadding={true}
      />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default SmartContractDevelopment;
