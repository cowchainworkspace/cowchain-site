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
import { CoreFeaturesRWAbg } from "../../../../assets/svgComponents/CoreFeaturesRWAbg";
import {
  keyFeaturesOfNftData,
  whyChooseNftGameData,
  web3DesignTrendsData,
  otherWeb3DesignServices,
  challengesUiUxData,
  benefitsNftGameData,
  howToGetStartedNftGameData
} from "./utils/data";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";

const NftGameDev = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={<>NFT GAME DEVELOPMENT</>}
        ttileClasses="md:!pt-[37px]"
      />
      <Achievements
        tag={"Introduction to Web3 UI/UX Design"}
        descClass="lg:text-[39px]"
        sub="This shift is fueling a new kind of game economy where creativity, rarity, and interaction shape value. With NFT game development, projects can build vibrant virtual ecosystems where players are stakeholders, not just users"
        desc={
          <>
            {" "}
            Crypto lotteries are gaining traction as NFT games{" "}
            <br className="hidden custom1400:block" />
            are{" "}
            <span className="violet-gradient-text">
              transforming the way players interact with{" "}
              <br className="hidden custom1400:block" />
              digital worlds
            </span>{" "}
            . Instead of just playing, users now{" "}
            <br className="hidden custom1400:block" />
            own, trade, and monetize in-game assets backed by{" "}
            <br className="hidden custom1400:block" />
            blockchain.{" "}
            <span className="violet-gradient-text">
              {" "}
              Each NFT represents a unique digital item{" "}
            </span>{" "}
            <br className="hidden custom1400:block" />— whether it’s a
            character, weapon, or skin — that{" "}
            <br className="hidden custom1400:block" />
            belongs to the player, not the game server
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={<>Introduction to NFT Game Development</>}
        desc={
          <>
            <p>
              {" "}
              NFT games are transforming the way players interact with digital
              worlds. Instead of just playing, users now own, trade, and
              monetize in-game assets backed by blockchain. Each NFT represents
              a unique digital item – whether it’s a character, weapon, or skin
              – that belongs to the player, not the game server.
            </p>
            <br />
            <p>
              This shift is fueling a new kind of game economy where creativity,
              rarity, and interaction shape value. With NFT game development,
              projects can build vibrant virtual ecosystems where players are
              stakeholders, not just users.
            </p>{" "}
          </>
        }
        noBg={true}
        descClasses={"max-w-[798px] !mt-[60px]"}
      />

      <ExpertiseServices
        title={<>Why Choose NFT Game Development?</>}
        titleClasses="xl:text-[60px] leading-[90%]"
        data={whyChooseNftGameData}
        topBorder={true}
        itemTitleClasses="lg:text-[26px] leading-[90%]"
        descClasses="!mb-0"
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

      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
             Key Features of NFT <br /> Game Development <br />  Services
            </>
          }
          data={keyFeaturesOfNftData}
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          itemTitleClass="xl:!text-[20px]"
          itemsClasses={"py-[40px] md:py-[75px] "}
        />
      </div>

      <ExpertiseServices
        title={
          <>
           Benefits of <br /> Working with <br />
           a Professional <br /> NFT Game Development <br /> Company
          </>
        }
        data={benefitsNftGameData}
        cryptoWalletClass="lg:mb-[60px]"
        sectionContainerClasses="lg:pb-[102px]"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[30%] right-0 h-auto w-[1400px]" />
        }
      />

      <ExpertiseServices
        title={
          <>
            How to <br />
Get Started <br />
with NFT Game <br /> Development
          </>
        }
        data={howToGetStartedNftGameData}
        topBorder={false}
        bottomBorder={false}
        itemClasses="md:text-[20px]"
        cryptoWalletClass="lg:mb-[80px]"
        titleClasses="lg:!text-[60px]"
        itemTitleClasses="lg:text-[20px] leading-[90px]"
      />

      <KeyFeatures
        isOneBlock={true}
        title={<>Introduction to NFT Game Development</>}
        desc={
          <>
            <p>
              {" "}
              NFT games are transforming the way players interact with digital
              worlds. Instead of just playing, users now own, trade, and
              monetize in-game assets backed by blockchain. Each NFT represents
              a unique digital item – whether it’s a character, weapon, or skin
              – that belongs to the player, not the game server.
            </p>
            <br />
            <p>
              This shift is fueling a new kind of game economy where creativity,
              rarity, and interaction shape value. With NFT game development,
              projects can build vibrant virtual ecosystems where players are
              stakeholders, not just users.
            </p>{" "}
          </>
        }
        noBg={true}
        descClasses={"max-w-[798px] !mt-[60px]"}
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
          className="pointer-events-none absolute -bottom-[10%] left-0 z-[10] hidden h-[1600px] w-auto md:inline"
        />

        <Cases />
        <CasesMobile />
      </div>

      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default NftGameDev;
