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
            Cowchain <br className="hidden lg:block" />
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
              leading decentralized <br className="hidden custom1400:block" />
              exchange development companies
            </span>{" "}
            providing <br className="hidden custom1400:block" />
            end-to-end services to empower one to build{" "}
            <br className="hidden custom1400:block" />
            <span className="violet-gradient-text">scalable DEX platforms</span>
            . As the trusted <br className="hidden custom1400:block" />
            <span className="violet-gradient-text">
              decentralized exchange software{" "}
              <br className="hidden custom1400:block" />
              development company
            </span>
            , we believe <br className="hidden custom1400:block" />
            in{" "}
            <span className="violet-gradient-text">
              secure and customized solutions
            </span>{" "}
            that help <br className="hidden custom1400:block" />
            organizations address the demands of the market{" "}
            <br className="hidden custom1400:block" />
            and security in trading alongside the users
          </>
        }
      />
      <ExpertiseServices
        title={
          <>
            our
            <br className="hidden lg:block" /> Decentralized{" "}
            <br className="hidden lg:block" />
            Exchange <br className="hidden lg:block" />
            Development <br className="hidden lg:block" />
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
            className="absolute -top-24 left-0 hidden md:block"
          />
        }
        sectionContainerClasses={"md:flex-row md:gap-5"}
      />

      <KeyFeatures
        title={"Key Features of Our DEX Development"}
        desc={
          "Cowchain’s dex development delivers crucial features to keep your platform competitive. Our decentralized exchange development ensures that every platform is optimized for handling complex operations. Our experience in dex development allows us to offer solutions that are easily adaptable to market changes and technological advancements"
        }
        noBg={true}
        isMaxWidthTab={true}
        titleClasses="lg:mb-[60px]"
      />

      <Industries
        title={"Industries We Serve"}
        desc={
          "Our decentralized exchange development company serves a variety of industries, ensuring that each DEX platform is built to meet sector-specific needs"
        }
        data={IndustriesDexData}
        topBorder={false}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
      />
      <KeyFeatures
        isOneBlock={true}
        title={"Our Blockchain Advisory Background"}
        desc={
          <>
            With extensive experience in blockchain advisory services,
            <br className="hidden lg:block" /> Cowchain provides strategic
            guidance on decentralized exchange software
            <br className="hidden lg:block" />
            development, helping clients navigate the complexities of building
            secure
            <br className="hidden lg:block" /> and feature-rich platforms. Our
            expertise ensures that every aspect of your
            <br className="hidden lg:block" /> decentralized exchange
            development is handled with precision, from initial
            <br className="hidden lg:block" /> planning to deployment, making
            sure the platform remains adaptable to future
            <br className="hidden lg:block" /> blockchain advancements
          </>
        }
        titleClasses={"!max-w-[737px] lg:mb-[60px]"}
        isMaxWidthTab={true}
        isTextSecondary={true}
      />

      <Industries
        title={"Our Decentralized Exchange Application Development"}
        desc={
          <>
            Our decentralized cryptocurrency exchange app development follows a
            structured
            <br className="hidden lg:block" /> approach, ensuring seamless
            development and deployment. By leveraging cutting-
            <br className="hidden lg:block" />
            edge technologies in decentralized cryptocurrency exchange
            development, we ensure
            <br className="hidden lg:block" /> the creation of secure and
            scalable platforms, optimized for rapid transactions
          </>
        }
        data={DexAppDevData}
        topBorder={false}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
      />
      <ServiceStack />
      <Feedback />
      <Industries
        title={"Our Engagement Models"}
        desc={
          <>
            As a leading decentralized exchange
            <br className="hidden lg:block" /> development company, we provide
            <br className="hidden lg:block" /> adaptable engagement models to
            fit
            <br className="hidden lg:block" /> the unique needs of every
            business
          </>
        }
        isTwoSides={true}
        data={EngagementDevData}
        topBorder={false}
      />
      <KeyFeatures
        isOneBlock={true}
        title={" Why Our Clients Trust Us"}
        desc={
          <>
            Clients trust Cowchain for our in-depth expertise, tailored
            solutions,
            <br className="hidden lg:block" /> and proven results in
            decentralized exchange development.
            <br className="hidden lg:block" />
            We consistently deliver secure, scalable platforms while maintaining
            <br className="hidden lg:block" />
            transparency and trust throughout the project lifecycle. Our track
            record
            <br className="hidden lg:block" /> in decentralized exchange
            development is evident through our projects
            <br className="hidden lg:block" /> across diverse industries.
          </>
        }
        isTextSecondary={true}
        isMaxWidthTab={true}
        titleClasses="max-w-[553px] lg:mb-[60px]"
      />
      <div className="w-full overflow-hidden">
        {" "}
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
          typographyContainerClasses="xl:py-[166px]"
        />
      </div>

      <div className="w-full overflow-hidden">
        <FAQ
          noBg={true}
          data={faqDexData}
          titleClasses={"custom1430:text-[60px] custom1430:leading-[53.7px]"}
          faqHorizontalPadding={true}
        />
      </div>
      <Contact className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default DexDevelopment;
