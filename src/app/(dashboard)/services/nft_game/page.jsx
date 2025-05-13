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
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";
import {
  benefitsNftGameData,
  howToGetStartedNftGameData,
  keyFeaturesOfNftData,
  nftGameFAQData,
  otherNftGameServices,
  whyChooseNftGameData
} from "./utils/data";
import { metadata } from "./utils/nftGameMetadata";
export { metadata };

const NftGameDev = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={<>NFT GAME DEVELOPMENT</>}
        ttileClasses="md:!pt-[37px]"
      />
      <Achievements
        tag={"Introduction to NFT Game Development"}
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
        subClasses="custom1430:max-w-[840px]"
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
        descClasses={"max-w-[798px] md:mt-[60px]"}
      />

      <ExpertiseServices
        title={<>Why Choose NFT Game Development?</>}
        titleClasses="xl:text-[60px] leading-[90%]"
        data={whyChooseNftGameData}
        topBorder={true}
        itemTitleClasses="lg:text-[20px] leading-[90%]"
        descClasses="!mb-0 custom1430:max-w-[490px]"
        customClasses="lg:flex-col"
        sectionContainerClasses="lg:!flex-col gap-[30px] lg:gap-[50px] xl:gap-[107px]"
        itemsClasses="grid lg:grid-cols-2 lg:grid-rows-1 gap-x-[82px] gap-y-[70px] min-w-full"
        itemClasses="md:!mt-0"
        bottomBorder={true}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute bottom-[10%] left-0 z-[0] h-[1100px] w-auto"
          />
        }
      />

      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Key Features of NFT <br /> Game Development <br /> Services
            </>
          }
          data={keyFeaturesOfNftData}
          noBg={true}
          titleClasses="custom1430:text-[42px]"
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          itemTitleClass="xl:!text-[20px]"
          itemsClasses={"py-10 md:py-[55px] "}
          accordionPanelClasses="pb-10 md:pb-[55px]"
          expandedItemClasses="!pb-6"
        />
      </div>

      <ExpertiseServices
        title={
          <>
            Benefits of <br /> Working with <br />
            a Professional <br /> NFT Game <br /> Development <br /> Company
          </>
        }
        data={benefitsNftGameData}
        cryptoWalletClass="lg:mb-[80px]"
        sectionContainerClasses="lg:pb-[102px] md:flex-row"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
        descClasses="max-w-[505px]"
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
        sectionContainerClasses="md:flex-row"
        cryptoWalletClass="lg:mb-[80px]"
        titleClasses="lg:!text-[60px]"
        itemTitleClasses="lg:text-[20px] leading-[90px] block max-w-[320px]"
        descClasses="max-w-[500px]"
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[10%] right-0 h-auto w-[1200px]" />
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={<>Ready to Launch Your NFT Game?</>}
        desc={
          <>
            <p>
              {" "}
              NFT-powered games are the foundation of the next generation of
              interactive entertainment. Whether you’re building a play-to-earn
              ecosystem, a collectible-driven experience, or a full Web3 gaming
              universe, the right development team makes all the difference. 
            </p>
            <br />
            <p>
              Let’s turn your game idea into a playable, ownable, scalable
              reality. Contact us today to start building
            </p>{" "}
          </>
        }
        noBg={true}
        descClasses={"max-w-[798px] md:mt-[80px]"}
      />

      <Feedback desc="Our clients know they can rely on Cowchain to deliver reliable, secure blockchain solutions. Here’s what they have to say" />

      <div className="relative">
        <div className="w-full overflow-hidden">
          <OtherServices
            tag={"Other Blockchain Services"}
            itemTitleClass=""
            title={
              <>
                In addition to <br />{" "}
                <span className="violet-gradient-text">
                  {" "}
                  NFT Game <br /> Development,
                </span>{" "}
                <br /> Cowchain offers <br />
                a wide range of <br /> blockchain <br /> development services{" "}
                <br /> to support product <br />{" "}
                <span className="violet-gradient-text">
                  {" "}
                  scalability, usability, <br /> and security across <br />{" "}
                  industries{" "}
                </span>
              </>
            }
            data={otherNftGameServices}
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

        <Cases />
        <CasesMobile />
        <div className="w-full overflow-hidden">
          <FAQ
            data={nftGameFAQData}
            noBg={true}
            titleClasses="lg:text-[60px] lg:leading-[53.7px]"
            faqHorizontalPadding={true}
          />
        </div>
      </div>

      <Contact
        titleClasses={"mb-4 md:mb-0"}
        descriptionClasses={"mb-4 md:mb-0"}
        className="px-4 py-[50px] md:pb-[127px] md:pt-[169px]"
      />
    </section>
  );
};

export default NftGameDev;
