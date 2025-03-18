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
            build blockchain applications, <br className="hidden lg:block" />{" "}
            dapps, and software for businesses of all sizes
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
            , Cowchain <br className="hidden custom1400:block" />
            offers full-cycle dApp development services against{" "}
            <br className="hidden custom1400:block" />
            the growing demands of modern industries.{" "}
            <br className="hidden custom1400:block" />
            Be it a startup or a big player, with our{" "}
            <span className="violet-gradient-text">
              dapp <br className="hidden custom1400:block" /> dapp development
              services,
            </span>{" "}
            by implementing the full <br className="hidden custom1400:block" />{" "}
            potential of blockchain technology, a business can{" "}
            <br className="hidden custom1400:block" /> build{" "}
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
            dApp <br className="hidden lg:block" /> Development{" "}
            <br className="hidden lg:block" />
            Services <br className="hidden lg:block" />
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
        titleClasses="text-3xl"
      />

      <Industries
        title={"Benefits of dApp Development"}
        desc={
          "When you partner with us, a leading dapp development company, you gain access to a number of benefits that come with our dApp development services"
        }
        data={dappBenefitsData}
        topBorder={false}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
      />

      <KeyFeatures
        isOneBlock={true}
        topBorder={false}
        title={"The dApp Architecture"}
        desc={
          <>
            At Cowchain, dapp architecture resilience is developed to ensure
            that everything works without a hitch
            <br className="hidden lg:block" /> even when pressure becomes high.
            Our dapp development company develops completely decentralized
            <br className="hidden lg:block" /> applications that can also be
            secure, reliable, and scalable according to the demands that they
            are likely to
            <br className="hidden lg:block" /> experience. Thanks to our
            expertise in working on multiple blockchain networks and the
            integration of
            <br className="hidden lg:block" /> sophisticated features, we ensure
            that system architecture from our dapp development services is
            <br className="hidden lg:block" /> prepared to support long-term
            growth and stability of operation
          </>
        }
        titleClasses="lg:mb-10"
      />

      <Industries
        title={"Industries We Serve"}
        desc={
          "Cowchain’s dapp development company caters to a wide range of industries, providing specialized solutions for sector-specific challenges. Industries we support encompass the following sectors"
        }
        data={IndustriesData}
        topBorder={false}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
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
          <>
            At Cowchain, dapp development company, we follow a
            <br className="hidden: lg:block" /> structured process to ensure the
            delivery of high-quality
            <br className="hidden: lg:block" /> decentralized applications. Our
            dapp development platform is
            <br className="hidden: lg:block" /> designed to streamline each
            phase, from planning to
            <br className="hidden: lg:block" /> deployment
          </>
        }
        data={dappDevProcessData}
        noTag={true}
      />
      <ServiceStack home={true} />
      <KeyFeatures
        isOneBlock={true}
        title={"Our Approach to Innovation"}
        desc={
          <>
            At Cowchain, we understand that innovation is key to staying ahead
            in the decentralized space. As a <br className="hidden: lg:block" />{" "}
            pioneering dapp development company, we actively integrate the
            latest blockchain advancements into our
            <br className="hidden: lg:block" /> projects, ensuring that each
            application not only meets industry standards but also exceeds
            client
            <br className="hidden: lg:block" /> expectations in functionality
            and security
          </>
        }
        noBg={true}
      />
      <KeyFeatures
        topBorder={false}
        bottomBorder={false}
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          <>
            With years of experience in blockchain advisory, Cowchain provides
            strategic guidance to businesses seeking
            <br className="hidden: lg:block" /> to leverage decentralized
            technologies. Our advisory services ensure that your project is
            aligned with current
            <br className="hidden: lg:block" /> trends and future developments
            in the blockchain space
          </>
        }
        noBg={true}
      />
      <Feedback />
      <Industries
        title={"Our Engagement Models"}
        desc={
          <>
            Our dapp development company
            <br className="hidden: lg:block" /> provides adaptable engagement
            models
            <br className="hidden: lg:block" /> to accommodate the unique
            <br className="hidden: lg:block" /> requirements of each project
          </>
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
        itemClasses="lg:max-w-full"
      />
      <KeyFeatures
        topBorder={false}
        bottomBorder={false}
        isOneBlock={true}
        title={"Why Our Clients Trust Us"}
        desc={
          <>
            Clients trust Cowchain because we deliver reliable custom dApp
            development. Our company dapp <br className="hidden: lg:block" />{" "}
            development expertise ensures that every application is built to
            high standards of performance
            <br className="hidden: lg:block" /> and security, empowering
            businesses to achieve their goals in the competitive blockchain
            market
          </>
        }
        noBg={true}
        descClasses={"max-w-[792px]"}
        titleClasses="lg:mb-[60px]"
      />
      <OtherServices
        title={
          <>
            In addition to{" "}
            <span className="violet-gradient-text">
              dApp
              <br className="hidden: lg:block" />
              development
              <br className="hidden: lg:block" />
              services
            </span>
            , Cowchain
            <br className="hidden: lg:block" />
            offers a variety of <br className="hidden: lg:block" />
            <span className="violet-gradient-text">
              blockchain <br className="hidden: lg:block" /> solutions
            </span>
            ,
            <br className="hidden: lg:block" /> including
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
