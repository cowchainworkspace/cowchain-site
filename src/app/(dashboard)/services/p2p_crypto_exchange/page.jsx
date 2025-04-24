import dexBg from "@/assets/bg/dex-ellipse-bg.webp";
import Contact from "@/components/Contact";
import Image from "next/image";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries/index";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { CoreFeaturesRWAbg } from "../../../../assets/svgComponents/CoreFeaturesRWAbg";
import {
  p2pFAQData,
  howToDevelopp2pData,
  whyChoosep2pData,
  otherp2pServices,
  benefitsp2pData,
  keyFeaturesp2pData,
  challengesp2pData
} from "./utils/data";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";

const P2pCryptoExhangeDev = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={<>P2P Crypto Exchange Development Services</>}
        ttileClasses="md:!pt-[37px]"
      />
      <Achievements
        tag={"What Is a P2P Crypto Exchange?"}
        descClass="lg:text-[42px]"
        sub="This model promotes security, privacy, and full control over assets. Users choose their own terms, payment methods, and counterparties, making the process more flexible and transparent. Since there’s no central authority holding funds, the risk of large-scale hacks or frozen assets is significantly lower"
        desc={
          <>
            <span className="violet-gradient-text"></span>
            A P2P crypto exchange is a decentralized platform{" "}
            <br className="hidden custom1400:block" /> that{" "}
            <span className="violet-gradient-text">
              connects buyers and sellers directly
            </span>{" "}
            – without <br className="hidden custom1400:block" /> intermediaries.
            Unlike centralized exchanges that{" "}
            <br className="hidden custom1400:block" /> control users’ funds and
            process trades on their <br className="hidden custom1400:block" />{" "}
            own servers, P2P platforms{" "}
            <span className="violet-gradient-text">
              allow users to trade <br className="hidden custom1400:block" />{" "}
              crypto wallet-to-wallet{" "}
            </span>{" "}
            using smart contracts <br className="hidden custom1400:block" /> or
            escrow systems
          </>
        }
      />

      <ExpertiseServices
        title={
          <>
            Key Features <br />
            of a P2P Crypto <br /> Exchange
          </>
        }
        desc="To succeed in today’s competitive crypto market, your platform must combine usability, security, and performance. Here are the essential features we deliver as part of our crypto exchange software development"
        data={keyFeaturesp2pData}
        cryptoWalletClass="lg:mb-[80px]"
        sectionContainerClasses="lg:pb-[102px]"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
      />

      <Industries
        title={
          <>
            Benefits of Custom Crypto <br />
            Exchange Development
          </>
        }
        desc="Every P2P exchange has its own goals – whether it’s focusing on underserved regions, integrating fiat gateways, or supporting privacy-first assets. That’s why templated solutions don’t cut it. We build custom crypto exchanges tailored to your vision, market, and business model"
        itemTitleClasses="lg:max-w-[350px] md:text-[18px]"
        data={benefitsp2pData}
        topBorder={false}
        customClasses="!grid-cols-2 !pr-0 xl:gap-y-[120px] xl:pl-[55px] xl:pr-[60px] xl:mt-[80px]"
        itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute bottom-[50%] left-0 z-[0] w-auto md:h-[1600px]"
          />
        }
      />

      <ExpertiseServices
        title={
          <>
            How to Develop <br />
            a P2P Crypto <br /> Exchange?
          </>
        }
        desc={
          <>
            Launching a full-featured blockchain exchange platform may sound{" "}
            <br />
            overwhelming – but with the right team, it doesn’t have to be.{" "}
            <br />
            Here’s how we handle it
          </>
        }
        data={howToDevelopp2pData}
        cryptoWalletClass="lg:mb-[80px]"
        sectionContainerClasses="lg:pb-[102px]"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[40%] right-0 h-auto w-[1200px]" />
        }
      />

      <ExpertiseServices
        title={
          <>
            Challenges in P2P <br className="hidden custom1400:block" /> Crypto
            Exchange <br className="hidden custom1400:block" /> Development
          </>
        }
        desc="Building a peer-to-peer platform is a different game compared to launching a standard exchange. While the benefits are clear, there are unique technical and regulatory hurdles along the way. Here’s what to be prepared for and how we help navigate them"
        data={challengesp2pData}
        cryptoWalletClass="lg:mb-[80px]"
        sectionContainerClasses="lg:pb-[102px]"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
      />

      <div className="w-full overflow-hidden">
        <FAQ
          titleClasses="xl:text-[42px] custom1430:text-[42px]"
          title={
            <>
              Why Choose <br className="hidden custom1400:block" /> Our
              Professional <br className="hidden custom1400:block" />{" "}
              Development <br className="hidden custom1400:block" /> Services?
            </>
          }
          data={whyChoosep2pData}
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          itemTitleClass="xl:!text-[20px]"
          itemsClasses={"py-[40px] md:py-[45px] "}
        />
      </div>
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
                In addition to{" "}
                <span className="violet-gradient-text">
                  P2P <br className="hidden custom1400:block" /> crypto exchange
                  development,{" "}
                </span>{" "}
                <br className="hidden custom1400:block" /> Cowchain offers{" "}
                <br className="hidden custom1400:block" /> a variety{" "}
                <br className="hidden custom1400:block" /> of
                <span className="violet-gradient-text"> services</span>
              </>
            }
            data={otherp2pServices}
            itemClasses="!py-[50px]"
          />
        </div>
      </div>
      <WhiteLabelCases title="Our Cases" desc="" blockClasses="md:pb-[60px]" />

      <Cases />
      <CasesMobile />

      <div className="w-full overflow-hidden">
        <FAQ
          data={p2pFAQData}
          noBg={true}
          titleClasses="lg:text-[60px] lg:leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>

      <Contact
        title={
          <>
            Ready to Build Your <br /> P2P Exchange?
          </>
        }
        desc="We help you launch a secure, scalable P2P crypto exchange tailored to your market and vision. Whether you’re starting from scratch or upgrading an MVP, our team is ready to deliver a product your users will trust"
        className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]"
      />
    </section>
  );
};

export default P2pCryptoExhangeDev;
