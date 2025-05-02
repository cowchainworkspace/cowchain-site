import dexBg from "@/assets/bg/dex-ellipse-bg.webp";
import Contact from "@/components/Contact";
import Image from "next/image";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { CoreFeaturesRWAbg } from "../../../../assets/svgComponents/CoreFeaturesRWAbg";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries/index";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";
import {
  challengesUiUxData,
  deliversWeb3DesignData,
  keyFeaturesWeb3DesignData,
  otherWeb3DesignServices,
  realLifeAppWeb3DesignData,
  web3DesignFAQData,
  web3DesignTrendsData
} from "./utils/data";
import { metadata } from "./utils/web3UXMetadata";

export { metadata };

const Web3UiUx = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={<>Web3 UI/UX Design</>}
        desc="Cutting-Edge Web3 UI/UX Design Services for Blockchain Solutions"
        ttileClasses="md:!pt-[37px]"
      />
      <Achievements
        tag={"Introduction to Web3 UI/UX Design"}
        descClass="lg:text-[39px]"
        desc={
          <>
            Web3 is revolutionizing the digital ecosystem,{" "}
            <br className="hidden custom1400:block" /> transitioning from{" "}
            <span className="violet-gradient-text">
              centralized Web2 systems to{" "}
              <br className="hidden custom1400:block" /> decentralized
              blockchain-based environments
            </span>
            . <br className="hidden custom1400:block" />
            This shift demands a fresh approach to Web3 design,{" "}
            <br className="hidden custom1400:block" /> where usability and
            functionality{" "}
            <span className="violet-gradient-text"> merge seamlessly </span>{" "}
            with <br className="hidden custom1400:block" /> advanced
            technologies. Unlike traditional platforms,{" "}
            <br className="hidden custom1400:block" />{" "}
            <span className="violet-gradient-text">
              {" "}
              Web3 platforms emphasize user autonomy, open data{" "}
              <br className="hidden custom1400:block" /> accessibility, and the
              elimination of intermediaries
            </span>
            . <br className="hidden custom1400:block" /> Intuitive blockchain UI
            and blockchain UX are crucial{" "}
            <br className="hidden custom1400:block" /> for addressing the
            complexities of Web3 interactions{" "}
            <br className="hidden custom1400:block" /> while ensuring user
            satisfaction
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={<>Understanding User-Centric Design</>}
        desc={
          <>
            User-centric design ensures solutions are tailored to meet user
            expectations by simplifying complex processes. For Web3
            applications, this involves removing technical barriers, creating
            relatable flows, and ensuring a cohesive interface that appeals to
            both novices and experienced users. This approach fosters engagement
            by aligning the platform’s functionality with the diverse needs of
            its audience.
          </>
        }
        noBg={true}
        descClasses={"max-w-[738px] md:mt-[60px]"}
      />

      <Industries
        title={
          <>
            Challenges in Blockchain <br />
            UI/UX Design
          </>
        }
        desc="Designing for Web3 comes with its own set of challenges, often revolving around balancing complex technology with user accessibility."
        itemTitleClasses="lg:max-w-[400px] md:text-[18px]"
        data={challengesUiUxData}
        topBorder={false}
        titleClasses="xl:mb-[54px]"
        customClasses="!grid-cols-2 !pr-0 xl:gap-y-[120px] xl:pl-[55px] xl:pr-[60px] xl:mt-[80px]"
        itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute bottom-[10%] left-0 z-[0] h-[1600px] w-auto"
          />
        }
        itemDescClasses="max-w-[400px]"
      />

      <ExpertiseServices
        title={
          <>
            Key Features of <br /> High-Impact Web3 <br /> Applications <br />
            Design
          </>
        }
        data={keyFeaturesWeb3DesignData}
        cryptoWalletClass="lg:mb-[60px]"
        sectionContainerClasses="lg:pb-[102px] md:flex-row"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[30%] right-0 h-auto w-[1400px]" />
        }
        descClasses="max-w-[500px]"
      />

      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Innovative <br /> Trends in Web3 <br /> UI/UX Design
            </>
          }
          data={web3DesignTrendsData}
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          itemTitleClass="xl:!text-[20px]"
          itemsClasses={"py-[40px] md:py-[75px] "}
          faqContentClasses={"max-w-[545px]"}
        />
      </div>

      <ExpertiseServices
        title={
          <>
            Real-Life Applications <br />
            of Web3 UI/UX Design
          </>
        }
        titleClasses="xl:text-[60px] leading-[90%]"
        data={realLifeAppWeb3DesignData}
        topBorder={true}
        itemTitleClasses="lg:text-[26px] leading-[90%]"
        descClasses="!mb-0 max-w-[550px]"
        customClasses="lg:flex-col"
        sectionContainerClasses="lg:!flex-col gap-[30px] lg:gap-[50px] xl:gap-[70px]"
        itemsClasses="grid lg:grid-cols-2 lg:grid-rows-1 gap-x-[82px] gap-y-[70px] min-w-full"
        itemClasses="md:!mt-0"
        bottomBorder={true}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute -bottom-[200%] left-0 z-[0] h-[1500px] w-auto"
          />
        }
      />

      <ExpertiseServices
        title={
          <>
            How Cowchain <br /> Delivers <br />
            Cutting-Edge <br /> Web3 UI/UX Design <br /> Services
          </>
        }
        data={deliversWeb3DesignData}
        topBorder={false}
        bottomBorder={false}
        itemClasses="md:text-[20px]"
        cryptoWalletClass="lg:mb-[80px]"
        titleClasses="lg:!text-[60px]"
        itemTitleClasses="lg:text-[20px] leading-[90px]"
        descClasses="max-w-[500px]"
      />
      <KeyFeatures
        isOneBlock={true}
        title={"Transform Your Blockchain Vision  with Cowchain"}
        desc={
          <>
            High-quality Web3 UI/UX design services are the foundation of
            impactful blockchain platforms. From user-centric interfaces to
            cutting-edge innovations, these designs enhance usability, security,
            and engagement. Let Cowchain help you transform your vision into
            reality with tailored Web3 applications that resonate with your
            audience
          </>
        }
        noBg={true}
        titleClasses="max-w-[1200px]"
        descClasses={"max-w-[798px] md:mt-[60px]"}
      />

      <Feedback
        nobg={true}
        desc="Our clients know they can rely on Cowchain to deliver reliable, secure blockchain solutions. Here’s what they have to say"
      />

      <div className="relative">
        <div className="w-full overflow-hidden">
          <OtherServices
            tag={"Other our Services"}
            title={
              <>
                In addition to <br />
                <span className="violet-gradient-text">Web3 UI/UX design</span>
                , <br /> Cowchain offers <br />a range of{" "}
                <span className="violet-gradient-text">
                  development <br /> services
                </span>{" "}
                that help turn interface ideas into fully functioning{" "}
                <span className="violet-gradient-text">
                  blockchain products
                </span>
              </>
            }
            data={otherWeb3DesignServices}
            itemClasses="!py-[50px]"
          />
        </div>
      </div>
      <div className="relative">
        <WhiteLabelCases
          title="Our Cases"
          desc=""
          blockClasses="md:pb-[60px]"
        />
        <Image
          src={dexBg}
          alt="decoration ellipse"
          className="pointer-events-none absolute -bottom-[5%] left-0 z-[10] hidden h-[1600px] w-auto md:inline"
        />

        <Cases />
        <CasesMobile />

        <div className="relative w-full overflow-hidden">
          <FAQ
            data={web3DesignFAQData}
            noBg={true}
            titleClasses="lg:text-[60px] lg:leading-[53.7px]"
            faqHorizontalPadding={true}
          />
        </div>
        <Contact
          titleClasses={" z-10 max-w-[1110px] mb-4 md:mb-0"}
          title="Transform Your Blockchain Vision with Cowchain"
          descriptionClasses={"hidden md:block max-w-[770px]"}
          desc={
            "High-quality Web3 UI/UX design services are the foundation of impactful blockchain platforms. From user-centric interfaces to cutting-edge innovations, these designs enhance usability, security, and engagement. Let Cowchain help you transform your vision into reality with tailored Web3 applications that resonate with your audience"
          }
          className="z-10 px-4 py-[50px] md:px-[64px] md:pb-[127px] md:pt-[131px]"
        />
      </div>
    </section>
  );
};

export default Web3UiUx;
