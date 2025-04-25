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
  cryptoLotteryFAQData,
  otherLotteryServices,
  keyFeaturesLotteryData,
  whyCryptoLotteryData,
  howToLaunchLotteryData
} from "./utils/data";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";

const CryptoLottery = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={
          <>
            Build Your Crypto Lottery <br className="hidden custom1400:block" />{" "}
            Platform with White Label <br className="hidden custom1400:block" />{" "}
            Solutions
          </>
        }
        ttileClasses="md:!pt-[37px]"
      />
      <Achievements
        tag={"Introduction to Web3 UI/UX Design"}
        desc={
          <>
            {" "}
            Crypto lotteries are gaining traction as{" "}
            <br className="hidden custom1400:block" />a{" "}
            <span className="violet-gradient-text">
              transparent and decentralized way
            </span>{" "}
            to engage <br className="hidden custom1400:block" />
            users and distribute rewards. Unlike traditional{" "}
            <br className="hidden custom1400:block" />
            lottery systems, these platforms run on{" "}
            <span className="violet-gradient-text">
              {" "}
              smart <br className="hidden custom1400:block" />
              contracts
            </span>
            , offering automated payouts,{" "}
            <br className="hidden custom1400:block" />
            immutable entries, and provable fairness
          </>
        }
        sub="For startups and Web3 businesses, building such a platform from the ground up can be time-consuming and resource-heavy. That’s where white label lottery solutions come in – they offer a ready-to-launch framework that drastically reduces time to market while giving you full control over branding and user experience. With a turnkey lottery platform, you skip the heavy development phase and go straight to launch – without compromising on flexibility or reliability"
      />

      <ExpertiseServices
        title={
          <>
            Why White Label <br /> Is the Smart Way <br /> to Build Your <br />{" "}
            Crypto Lottery
          </>
        }
        desc="Choosing a white label model to build crypto lottery doesn’t just save time,
it sets you up for growth with lower risk and stronger infrastructure"
        data={whyCryptoLotteryData}
        cryptoWalletClass="lg:mb-[80px]"
        sectionContainerClasses="lg:pb-[102px]"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[30%] right-0 h-auto w-[1400px]" />
        }
      />

      <Industries
        title={
          <>
            Key Features of a Successful <br />
            Crypto Lottery Platform
          </>
        }
        desc="Using white label lottery software isn’t just about launching faster — it’s about building smarter. With pre-audited smart contracts,  integrated payout systems, and built-in blockchain validation, white label platforms offer a head start without compromising control or scalability"
        itemTitleClasses="lg:max-w-[350px] md:text-[18px]"
        data={keyFeaturesLotteryData}
        topBorder={false}
        customClasses="!grid-cols-2 !pr-0 xl:gap-y-[120px] xl:pl-[55px] xl:pr-[60px] xl:mt-[80px]"
        itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute bottom-[80%] left-0 z-[0] h-[1000px] w-auto"
          />
        }
      />

      <ExpertiseServices
        title={
          <>
            How to Launch <br /> Your Crypto <br /> Lottery
          </>
        }
        desc="Bringing a blockchain lottery to life doesn’t have to take months — especially when you’re working with the right tools and team. Here’s how we help you go from idea to launch"
        data={howToLaunchLotteryData}
        topBorder={false}
        bottomBorder={false}
        itemClasses="md:text-[20px]"
        cryptoWalletClass="lg:mb-[80px]"
        titleClasses="lg:!text-[60px]"
        itemTitleClasses="lg:text-[20px] leading-[90px]"
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[50%] right-0 h-auto w-[1200px]" />
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={
          <>
            Start Building Your Blockchain <br /> Lottery Platform Today
          </>
        }
        desc={
          <>
            Whether you’re a startup testing a new model or a Web3 company
            looking to expand your ecosystem, launching with white label lottery
            solutions gives you a reliable, fast, and future-ready path to
            market.  With a team that understands both blockchain infrastructure
            and user experience, you’re not just  launching a lottery — you’re
            building a product people trust
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
                Alongside <br />
                <span className="violet-gradient-text">Crypto Lottery</span>
                , <br /> Cowchain offers <br />{" "}
                <span className="violet-gradient-text">
                  additional support <br /> services
                </span>{" "}
                to fully <br /> back your project
              </>
            }
            data={otherLotteryServices}
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
          className="pointer-events-none absolute bottom-[60%] left-0 z-[10] hidden h-[1000px] w-auto md:inline"
        />

        <Cases />
        <CasesMobile />

        <div className="w-full overflow-hidden">
          <FAQ
            data={cryptoLotteryFAQData}
            noBg={true}
            titleClasses="lg:text-[60px] lg:leading-[53.7px]"
            faqHorizontalPadding={true}
          />
        </div>
      </div>

      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default CryptoLottery;
