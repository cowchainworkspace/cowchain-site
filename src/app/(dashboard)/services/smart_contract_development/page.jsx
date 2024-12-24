import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import Contact from "@/components/Contact";
import FAQ from "../components/service/blocks/FAQ";
import { Industries } from "../components/service/blocks/Industries";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import { Feedback } from "../components/service/blocks/Feedback";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import {
  DeFiBenefitsData,
  nftServicesData,
  nftProcessData,
  SmartContractOtherData,
  OtherNftData,
  faqNftData,
  SmartContractIndustriesData,
  OtherSmartContractData,
  SnartContractBenefitsData,
  SnartContractExpertiseData
} from "./utils/data";
import { nftStackData } from "../components/service/blocks/stack/data";
import { TustByNumbers } from "../full_stack_development/blocks/TustByNumbers";

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/services/dapp_development"
  }
};

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
              smart contract <br />
              development
            </span>{" "}
            service provider. Our team <br /> of experienced developers has
            in-depth <br /> knowledge of blockchain technology and <br />{" "}
            programming languages to develop DApps
          </>
        }
      />

      <ExpertiseServices
        data={SnartContractExpertiseData}
        title={"Expertise of Our Smart Contract Development Company"}
        desc={
          <>
            <p>
              Cowchain is a team of experts in blockchain smart contract
              development. We have deep knowledge and practical experience
              creating decentralized solutions on various blockchain platforms
            </p>
            <p>
              <br />
              <br />
            </p>
            <p>
              When you choose Cowchain, you get a team of experts who can create
              you a robust, high-performance blockchain solution fully
              customized to your business needs
            </p>
          </>
        }
      />

      <OtherServices
        tag={"web3 development use cases"}
        title={
          <>
            The applications of <br />
            <span className="violet-gradient-text">Web3 development</span>
            <br />
            are vast and growing. <br /> From
            <span className="violet-gradient-text">
              decentralized <br /> exchanges
            </span>{" "}
            to{" "}
            <span className="violet-gradient-text">
              NFT <br /> platforms
            </span>
            , <br />
            the potential for <br /> innovation is limitless
          </>
        }
        data={OtherSmartContractData}
        bottomBorder={false}
      />

      <Industries
        title={"Key industries for the application of smart contracts"}
        desc={
          <>
            <p>
              The experts at our smart contract development company are
              experienced in working with various blockchain networks, which
              allows us to offer optimal solutions depending on the project
              requirements
            </p>
            <p>
              <br />
              <br />
            </p>
            <p>
              We constantly follow the development of blockchain technologies
              and supplement our stack with new tools to improve development
              efficiency
            </p>
            <p>
              <br />
              <br />
            </p>
            <p>
              Our developers use advanced technologies and tools to provide
              smart contract development service
            </p>
          </>
        }
        data={SmartContractIndustriesData}
        topBorder={false}
      />

      <ServiceStack
        desc={
          <>
            <p>
              The experts at our smart contract development company are
              experienced in working with various blockchain networks, which
              allows us to offer optimal solutions depending on the project
              requirements
            </p>
            <p>
              <br />
              <br />
            </p>
            <p>
              We constantly follow the development of blockchain technologies
              and supplement our stack with new tools to improve development
              efficiency
            </p>
            <p>
              <br />
              <br />
            </p>
            <p>
              Our developers use advanced technologies and tools to provide
              smart contract development service
            </p>
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={"DeFi Token Development Classification"}
        desc={
          <>
            Our defi token development company classifies tokens based on their
            utility, <br /> governance, and other functionalities. We ensure
            that each token meets the <br /> specific needs of your project
          </>
        }
      />

      <FAQ
        title={
          <>
            Our Non-Fungible <br />
            Token Development <br />
            Process
          </>
        }
        desc={
          "Our NFT development team follows a systematic approach to ensure that each project is handled with care from start to finish, delivering high-quality outcomes. By focusing on every detail of nft development, we create platforms that are robust and adaptable to evolving business needs, enabling clients to achieve lasting impact"
        }
        data={nftProcessData}
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
            opportunities for token utility and broader adoption
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          <>
            With years of experience in the blockchain industry, our defi
            development company specializes in development services and expert
            advisory to optimize defi development. We guide clients through the
            complexities of blockchain and development, ensuring reliable
            implementation of their projects
          </>
        }
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
            <span className="violet-gradient-text">Smart contract <br /> development</span>
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


      <FAQ data={faqNftData} />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default SmartContractDevelopment;
