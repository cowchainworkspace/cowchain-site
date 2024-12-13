import { HeroSection } from "./blocks/HeroSection";
import Achievements from "./blocks/Achievements";
import Contact from "@/components/Contact";
import FAQ from "../components/service/blocks/FAQ";
import { DexServices } from "../components/service/blocks/DexServices";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { Industries } from "../components/service/blocks/Industries/index";
import { Feedback } from "../components/service/blocks/Feedback";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import { DexExpertiseDesc } from "./utils/data";
import { DexExpertiseData } from "./utils/data";
import { IndustriesDexData } from "./utils/data";
import { DexAppDevData } from "./utils/data";
import { EngagementDevData } from "./utils/data";

const DexDevelopment = () => {
  return (
    <section className="overflow-visible">
      <HeroSection />
      <Achievements />
      <DexServices
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
      />
      <KeyFeatures
        title={"Key Features of Our DEX Development"}
        desc={
          "Cowchain’s dex development delivers crucial features to keep your platform competitive. Our decentralized exchange development ensures that every platform is optimized for handling complex operations. Our experience in dex development allows us to offer solutions that are easily adaptable to market changes and technological advancements"
        }
      />
      <Industries
        title={"Industries We Serve"}
        desc={
          "Our decentralized exchange development company serves a variety of industries, ensuring that each DEX platform is built to meet sector-specific needs"
        }
        data={IndustriesDexData}
      />
      <KeyFeatures
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          "With extensive experience in blockchain advisory services, Cowchain provides strategic guidance on decentralized exchange software development, helping clients navigate the complexities of building secure and feature-rich platforms. Our expertise ensures that every aspect of your decentralized exchange development is handled with precision, from initial planning to deployment, making sure the platform remains adaptable to future blockchain advancements"
        }
      />
      <Industries
        title={"Our Decentralized Exchange Application Development"}
        desc={
          "Our decentralized cryptocurrency exchange app development follows a structured approach, ensuring seamless development and deployment. By leveraging cutting-edge technologies in decentralized cryptocurrency exchange development, we ensure the creation of secure and scalable platforms, optimized for rapid transactions"
        }
        data={DexAppDevData}
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
      />
      <KeyFeatures
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          "With extensive experience in blockchain advisory services, Cowchain provides strategic guidance on decentralized exchange software development, helping clients navigate the complexities of building secure and feature-rich platforms. Our expertise ensures that every aspect of your decentralized exchange development is handled with precision, from initial planning to deployment, making sure the platform remains adaptable to future blockchain advancements"
        }
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
      />
      <FAQ />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default DexDevelopment;
