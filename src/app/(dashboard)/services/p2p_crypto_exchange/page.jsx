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
import { OtherServices } from "../components/service/blocks/OtherServices";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";
import {
  benefitsp2pData,
  challengesp2pData,
  howToDevelopp2pData,
  keyFeaturesp2pData,
  otherp2pServices,
  p2pFAQData,
  whyChoosep2pData
} from "./utils/data";
import { metadata } from "./utils/p2pCryptoExchangeMetadata";
import { setBreadcrumbSchemaServices } from "@/lib/utils";
export { metadata };

const P2pCryptoExhangeDev = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "P2P Crypto Exchange Development Services",
    "p2p_crypto_exchange"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
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
              A P2P crypto exchange is a decentralized platform{" "}
              <br className="hidden custom1400:block" /> that{" "}
              <span className="violet-gradient-text">
                connects buyers and sellers directly
              </span>{" "}
              – without <br className="hidden custom1400:block" />{" "}
              intermediaries. Unlike centralized exchanges that{" "}
              <br className="hidden custom1400:block" /> control users’ funds
              and process trades on their{" "}
              <br className="hidden custom1400:block" /> own servers, P2P
              platforms{" "}
              <span className="violet-gradient-text">
                allow users to trade <br className="hidden custom1400:block" />{" "}
                crypto wallet-to-wallet{" "}
              </span>{" "}
              using smart contracts <br className="hidden custom1400:block" />{" "}
              or escrow systems
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
          sectionContainerClasses="lg:pb-[102px] md:flex-row md:gap-6"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[60px] xl:mb-[60px]"
          titleDescClasses="!text-white max-w-[570px]"
          descClasses="max-w-[500px]"
        />

        <Industries
          title={
            <>
              Benefits of Custom Crypto <br />
              Exchange Development
            </>
          }
          desc={
            <>
              Every P2P exchange has its own goals – whether it’s focusing on
              underserved regions,
              <br className="hidden custom1400:block" /> integrating fiat
              gateways, or supporting privacy-first assets. That’s why templated
              <br className="hidden custom1400:block" /> solutions don’t cut it.
              We build custom crypto exchanges tailored to your vision,
              <br className="hidden custom1400:block" /> market, and business
              model"
            </>
          }
          itemTitleClasses="lg:max-w-[350px] md:text-[18px]"
          data={benefitsp2pData}
          topBorder={false}
          customClasses="!grid-cols-2 !pr-0 md:!mt-0 xl:gap-y-[120px] xl:pl-[55px] xl:pr-[60px] xl:mt-[80px]"
          itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
          bg={
            <Image
              src={dexBg}
              alt="decoration ellipse"
              className="pointer-events-none absolute bottom-[50%] left-0 z-[0] w-auto md:h-[1600px]"
            />
          }
          descClasses={"max-w-[625px]"}
          itemDescClasses={"max-w-[395px]"}
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
              <br className="hidden custom1400:block" />
              overwhelming – but with the right team, it doesn’t have to be.{" "}
              <br className="hidden custom1400:block" />
              Here’s how we handle it
            </>
          }
          data={howToDevelopp2pData}
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses="lg:pb-[102px] md:flex-row gap-6"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[60px] xl:mb-[60px]"
          bg={
            <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[40%] right-0 h-auto w-[1200px]" />
          }
          titleDescClasses="!text-white"
          descClasses="max-w-[480px]"
        />

        <ExpertiseServices
          title={
            <>
              Challenges in P2P <br className="hidden custom1400:block" />{" "}
              Crypto Exchange <br className="hidden custom1400:block" />{" "}
              Development
            </>
          }
          desc={
            <>
              Building a peer-to-peer platform is a different game compared to
              launching <br className="hidden custom1400:block" /> a standard
              exchange. While the benefits are clear, there are unique technical{" "}
              <br className="hidden custom1400:block" /> and regulatory hurdles
              along the way. Here’s what to be prepared for and how
              <br className="hidden custom1400:block" /> we help navigate them
            </>
          }
          data={challengesp2pData}
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses="lg:pb-[102px] md:flex-row  md:gap-6"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[60px] xl:mb-[60px]"
          titleDescClasses="!text-white max-w-[560px]"
          descClasses="custom1430:max-w-[500px]"
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
            itemsClasses={"py-10 md:py-[45px] "}
            accordionPanelClasses="pb-10 md:pb-[45px]"
            expandedItemClasses="!pb-6"
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
                    P2P <br className="hidden custom1400:block" /> crypto
                    exchange development,{" "}
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
        <WhiteLabelCases
          title="Our Cases"
          desc=""
          blockClasses="md:pb-[60px]"
        />

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
              Ready to Build Your <br className="hidden custom1400:block" /> P2P
              Exchange?
            </>
          }
          titleClasses={"mb-4 md:mb-0"}
          desc="We help you launch a secure, scalable P2P crypto exchange tailored to your market and vision. Whether you’re starting from scratch or upgrading an MVP, our team is ready to deliver a product your users will trust"
          className="px-4 py-[50px] md:pb-[127px] md:pt-[169px]"
          descriptionClasses={"max-w-[500px] mb-4 md:mb-0"}
          hasNoDesc={false}
        />
      </section>
    </>
  );
};

export default P2pCryptoExhangeDev;
