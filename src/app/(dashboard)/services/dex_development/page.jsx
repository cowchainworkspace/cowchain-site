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
import { ServiceStack } from "../components/service/blocks/stack";
import { DexExpertiseDesc } from "./utils/data";
import { DexExpertiseData } from "./utils/data";
import { IndustriesDexData } from "./utils/data";
import { DexAppDevData } from "./utils/data";
import { EngagementDevData, faqDexData } from "./utils/data";
import { metadata } from "./utils/dexDevMetadata";
export { metadata };

const DexDevelopment = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={" Decentralized Exchange Development Company"}
        desc={
          <>
            Get the best decentralized exchange development services from
            Cowchain <br />
            and stand out in the competitive cryptocurrency market
          </>
        }
      />
      <Achievements
        tag={"decentralized exchange development company"}
        desc={
          <>
            Cowchain is among the{" "}
            <span className="violet-gradient-text">
              leading decentralized
              <br />
              exchange development companies
            </span>{" "}
            providing <br />
            end-to-end services to empower one to build <br />
            <span className="violet-gradient-text">scalable DEX platforms</span>
            . As the trusted <br />
            <span className="violet-gradient-text">
              decentralized exchange software <br />
              development company
            </span>
            , we believe <br />
            in{" "}
            <span className="violet-gradient-text">
              secure and customized solutions
            </span>{" "}
            that help <br />
            organizations address the demands of the market <br />
            and security in trading alongside the users
          </>
        }
      />
      <ExpertiseServices
        title={
          <>
            our
            <br />
            Decentralized <br />
            Exchange <br />
            Development <br />
            Services
          </>
        }
        desc={DexExpertiseDesc}
        data={DexExpertiseData}
        topBorder={false}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -top-24 left-0"
          />
        }
      />
      <KeyFeatures
        title={"Key Features of Our DEX Development"}
        desc={
          "Cowchain’s dex development delivers crucial features to keep your platform competitive. Our decentralized exchange development ensures that every platform is optimized for handling complex operations. Our experience in dex development allows us to offer solutions that are easily adaptable to market changes and technological advancements"
        }
        noBg={true}
        isMaxWidthTab={true}
      />
      <Industries
        title={"Industries We Serve"}
        desc={
          "Our decentralized exchange development company serves a variety of industries, ensuring that each DEX platform is built to meet sector-specific needs"
        }
        data={IndustriesDexData}
        topBorder={false}
      />
      <KeyFeatures
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          "With extensive experience in blockchain advisory services, Cowchain provides strategic guidance on decentralized exchange software development, helping clients navigate the complexities of building secure and feature-rich platforms. Our expertise ensures that every aspect of your decentralized exchange development is handled with precision, from initial planning to deployment, making sure the platform remains adaptable to future blockchain advancements"
        }
        titleClasses={"!max-w-[737px] mb-10"}
        isMaxWidthTab={true}
        isTextSecondary={true}
      />
      <Industries
        title={"Our Decentralized Exchange Application Development"}
        desc={
          "Our decentralized cryptocurrency exchange app development follows a structured approach, ensuring seamless development and deployment. By leveraging cutting-edge technologies in decentralized cryptocurrency exchange development, we ensure the creation of secure and scalable platforms, optimized for rapid transactions"
        }
        data={DexAppDevData}
        topBorder={false}
      />
      <ServiceStack />
      <Feedback />
      <Industries
        title={"Our Engagement Models"}
        desc={
          "As a leading decentralized exchange development company, we provide adaptable engagement models to fit the unique needs of every business"
        }
        isTwoSides={true}
        data={EngagementDevData}
        topBorder={false}
      />
      <KeyFeatures
        isOneBlock={true}
        title={" Why Our Clients Trust Us"}
        desc={
          "Clients trust Cowchain for our in-depth expertise, tailored solutions, and proven results in decentralized exchange development. We consistently deliver secure, scalable platforms while maintaining transparency and trust throughout the project lifecycle. Our track record in decentralized exchange development is evident through our projects across diverse industries."
        }
        isTextSecondary={true}
        isMaxWidthTab={true}
        titleClasses="max-w-[553px] mb-10"
      />
      <OtherServices
        title={
          <>
            In addition <br /> to{" "}
            <span className="violet-gradient-text">
              dex platform
              <br />
              development
            </span>
            ,<br />
            we offer <br />
            the following <br />
            <span className="violet-gradient-text">blockchain</span> services
          </>
        }
        tag={"Other Our Services"}
      />
      <FAQ
        noBg={true}
        data={faqDexData}
        titleClasses={"custom1000:text-[60px] leading-[53.7px]"}
      />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default DexDevelopment;
