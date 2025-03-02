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
import { metadata } from "./utils/dappDeveMetadata";
import {
  DappExpertiseDesc,
  EngagementDevData,
  IndustriesData,
  dappBenefitsData,
  dappDevProcessData,
  faqDappData,
  otherDappServiceData
} from "./utils/data";
import { DappExpertiseData } from "./utils/data";

export { metadata };

const DappDevelopment = () => {
  return (
    <section>
      <HeroSection
        title={"dApp Development Services"}
        desc={
          <>
            Cowchain.io is a leading decentralized app development company. We
            build blockchain applications, <br /> dapps, and software for
            businesses of all sizes
          </>
        }
      />
      <Achievements
        tag={"dApp Development Services"}
        desc={
          <>
            As a trusted{" "}
            <span className="violet-gradient-text">
              dapp development company
            </span>
            , Cowchain <br />
            offers full-cycle dApp development services against <br />
            the growing demands of modern industries. <br />
            Be it a startup or a big player, with our{" "}
            <span className="violet-gradient-text">
              dapp Be it a startup or a big player, with our dapp development
              services
            </span>{" "}
            by implementing the full potential <br /> of blockchain technology,
            a business can build <br />{" "}
            <span className="violet-gradient-text">
              highly secure and decentralized applications
            </span>
          </>
        }
      />

      <ExpertiseServices
        topBorder={false}
        title={
          <>
            dApp <br />
            Development
            <br />
            Services <br />
            We Provide
          </>
        }
        desc={DappExpertiseDesc}
        data={DappExpertiseData}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute left-0 top-[18%]"
          />
        }
      />

      <Industries
        title={"Benefits of dApp Development"}
        desc={
          "When you partner with us, a leading dapp development company, you gain access to a number of benefits that come with our dApp development services"
        }
        data={dappBenefitsData}
        topBorder={false}
      />

      <KeyFeatures
        isOneBlock={true}
        topBorder={false}
        title={"The dApp Architecture"}
        desc={
          "At Cowchain, dapp architecture resilience is developed to ensure that everything works without a hitch even when pressure becomes high. Our dapp development company develops completely decentralized applications that can also be secure, reliable, and scalable according to the demands that they are likely to experience. Thanks to our expertise in working on multiple blockchain networks and the integration of sophisticated features, we ensure that system architecture from our dapp development services is prepared to support long-term growth and stability of operation"
        }
      />

      <Industries
        title={"Industries We Serve"}
        desc={
          "Cowchain’s dapp development company caters to a wide range of industries, providing specialized solutions for sector-specific challenges. Industries we support encompass the following sectors"
        }
        data={IndustriesData}
        topBorder={false}
      />
      <OtherServices
        topBorder={false}
        title={
          <>
            Our dApp <br />
            Development <br />
            Process
          </>
        }
        desc={
          "At Cowchain, dapp development company, we follow a structured process to ensure the delivery of high-quality decentralized applications. Our dapp development platform is designed to streamline each phase, from planning to deployment"
        }
        data={dappDevProcessData}
        noTag={true}
      />
      <ServiceStack home={true} />
      <KeyFeatures
        isOneBlock={true}
        title={"Our Approach to Innovation"}
        desc={
          "At Cowchain, we understand that innovation is key to staying ahead in the decentralized space. As a pioneering dapp development company, we actively integrate the latest blockchain advancements into our projects, ensuring that each application not only meets industry standards but also exceeds client expectations in functionality and security"
        }
        noBg={true}
      />
      <KeyFeatures
        topBorder={false}
        bottomBorder={false}
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          "With years of experience in blockchain advisory, Cowchain provides strategic guidance to businesses seeking to leverage decentralized technologies. Our advisory services ensure that your project is aligned with current trends and future developments in the blockchain space"
        }
        noBg={true}
      />
      <Feedback />
      <Industries
        title={"Our Engagement Models"}
        desc={
          "Our dapp development company provides adaptable engagement models to accommodate the unique requirements of each project"
        }
        isTwoSides={true}
        data={EngagementDevData}
        topBorder={false}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute left-0"
          />
        }
      />
      <KeyFeatures
        topBorder={false}
        bottomBorder={false}
        isOneBlock={true}
        title={"Why Our Clients Trust Us"}
        desc={
          "Clients trust Cowchain because we deliver reliable custom dApp development. Our company dapp development expertise ensures that every application is built to high standards of performance and security, empowering businesses to achieve their goals in the competitive blockchain market"
        }
        noBg={true}
        descClasses={"max-w-[792px]"}
      />
      <OtherServices
        title={
          <>
            In addition to{" "}
            <span className="violet-gradient-text">
              dApp
              <br />
              development
              <br />
              services
            </span>
            , Cowchain
            <br />
            offers a variety of <br />
            <span className="violet-gradient-text">
              blockchain <br /> solutions
            </span>
            ,
            <br /> including
          </>
        }
        data={otherDappServiceData}
        bottomBorder={false}
        tag={"Other Our Services"}
      />
      <FAQ
        data={faqDappData}
        noBg={true}
        titleClasses="lg:text-[60px] lg:leading-[53.7px]"
        faqHorizontalPadding={true}
      />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default DappDevelopment;
