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
  DappExpertiseDesc,
  EngagementDevData,
  IndustriesData,
  dappBenefitsData,
  dappDevProcessData,
  faqDappData,
  otherDappServiceData
} from "./utils/data";
import { DappExpertiseData } from "./utils/data";

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/services/dapp_development"
  }
};

const DappDevelopment = () => {
  console.log("dappBenefitsData", dappBenefitsData);
  return (
    <section>
      <HeroSection
        tag={"Dapp Development"}
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
            {" "}
            As a trusted dapp development company, Cowchain <br />
            offers full-cycle dApp development services against <br />
            the growing demands of modern industries. <br />
            Be it a startup or a big player, with our{" "}
            <span className="violet-gradient-text">
              dapp Be it a startup or a big player, with our dapp development
              services
            </span>{" "}
            by implementing the full <br />
            potential of blockchain technology, a business can <br />
            build{" "}
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
      <ServiceStack />
      <KeyFeatures
        isOneBlock={true}
        title={"Our Approach to Innovation"}
        desc={
          "At Cowchain, we understand that innovation is key to staying ahead in the decentralized space. As a pioneering dapp development company, we actively integrate the latest blockchain advancements into our projects, ensuring that each application not only meets industry standards but also exceeds client expectations in functionality and security"
        }
      />
      <KeyFeatures
        topBorder={false}
        bottomBorder={false}
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          "With years of experience in blockchain advisory, Cowchain provides strategic guidance to businesses seeking to leverage decentralized technologies. Our advisory services ensure that your project is aligned with current trends and future developments in the blockchain space"
        }
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
      />
      <KeyFeatures
        topBorder={false}
        bottomBorder={false}
        isOneBlock={true}
        title={"Why Our Clients Trust Us"}
        desc={
          "Clients trust Cowchain because we deliver reliable custom dApp development. Our company dapp development expertise ensures that every application is built to high standards of performance and security, empowering businesses to achieve their goals in the competitive blockchain market"
        }
      />
      <OtherServices
        title={
          <>
            In addition <br /> to{" "}
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
      />
      <FAQ data={faqDappData} />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default DappDevelopment;
