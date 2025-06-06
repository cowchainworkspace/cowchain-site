import dexBg from "@/assets/bg/dex-ellipse-bg.webp";
import Contact from "@/components/Contact";
import Image from "next/image";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries/index";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";
import {
  advantagesStakingData,
  essentialStakingData,
  otherStakingServices,
  stakingFAQData,
  steByStepStakingData
} from "./utils/data";
import { metadata } from "./utils/stackingMetaData";
import { getServiceSchema, setBreadcrumbSchemaServices } from "@/lib/utils";
import { stakingSchema } from "@/lib/constants/servicesSchemas";
export { metadata };

const Staking = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "Staking Platform",
    "staking"
  );
  const serviceSchema = getServiceSchema(stakingSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="overflow-visible">
        <HeroSection
          title={
            <>
              Launch Your <br className="hidden custom1400:block" />
              Staking Platform with <br className="hidden custom1400:block" />{" "}
              White Label Solutions
            </>
          }
          ttileClasses="md:!pt-0"
        />
        <Achievements
          tag={"What Is a White Label Crypto Exchange?"}
          desc={
            <>
              White label staking solutions provide a{" "}
              <span className="violet-gradient-text">
                {" "}
                ready-made <br className="hidden custom1400:block" />
                infrastructure{" "}
              </span>{" "}
              for launching a staking platform{" "}
              <br className="hidden custom1400:block" />
              without the need for extensive development.{" "}
              <br className="hidden custom1400:block" />
              These platforms are{" "}
              <span className="violet-gradient-text">
                pre-built, customizable,{" "}
                <br className="hidden custom1400:block" />
                and designed for rapid deployment.
              </span>{" "}
              By using <br className="hidden custom1400:block" />a white label
              blockchain staking service,{" "}
              <br className="hidden custom1400:block" />
              companies can focus on branding, user acquisition,{" "}
              <br className="hidden custom1400:block" />
              and operational growth while leveraging secure{" "}
              <br className="hidden custom1400:block" /> and scalable staking
              software
            </>
          }
          sub="Instead of building a system from scratch, they get a fully functional staking platform that integrates with various blockchain networks, supports multiple assets, and offers automated yield distribution"
        />

        <ExpertiseServices
          title={
            <>
              Advantages of <br className="hidden custom1400:block" /> Using
              White Label <br className="hidden custom1400:block" /> Staking{" "}
              <br className="hidden custom1400:block" /> Platforms
            </>
          }
          desc="White label staking platforms offer several key benefits, 
making them a streamlined and scalable solution for businesses 
looking to enter the staking markets"
          data={advantagesStakingData}
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses="lg:pb-[102px]"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[60px] xl:mb-[60px]"
        />

        <ExpertiseServices
          title={
            <>
              Essential Features of a Successful{" "}
              <br className="hidden custom1400:block" /> Staking Platform
            </>
          }
          desc="To compete in the staking industry, a platform must have a seamless user experience, strong blockchain integration, and reliable infrastructure."
          titleClasses="xl:text-[60px] leading-[90%]"
          data={essentialStakingData}
          topBorder={true}
          itemTitleClasses="lg:text-[26px] leading-[90%]"
          descClasses="!mb-0"
          customClasses="lg:flex-col"
          sectionContainerClasses="lg:!flex-col gap-[30px] lg:gap-[50px] xl:gap-[100px]"
          itemsClasses="grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-[82px] lg:gap-y-[70px] min-w-full"
          itemClasses="md:!mt-0"
          bottomBorder={true}
          bg={
            <Image
              src={dexBg}
              alt="decoration ellipse"
              className="pointer-events-none absolute bottom-[10%] left-0 z-[0] h-[1500px] w-auto"
            />
          }
        />

        <Industries
          title={
            <>
              Step-by-Step Guide to Launching{" "}
              <br className="hidden custom1400:block" />a Staking Platform
            </>
          }
          titleContainerClasses="lg:gap-[70px]"
          desc="Forget about expensive development cycles. Our staking software solutions are fully built, audited, and optimized for performance. No guesswork – just a proven system ready for deployment."
          itemTitleClasses="lg:max-w-[350px] md:text-[18px]"
          data={steByStepStakingData}
          topBorder={false}
          customClasses="!grid-cols-2 !pr-0 xl:gap-y-[120px] xl:pl-[55px] xl:pr-[60px] xl:mt-[18px]"
          itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              Real-World Applications of White{" "}
              <br className="hidden custom1400:block" /> Label Staking Platforms
            </>
          }
          desc={
            <>
              <p>
                Many blockchain businesses, DeFi projects, and institutional
                investors are turning to white label staking as a practical way
                to launch staking services. Some key applications include:
              </p>
              <br />
              <ul class="list-disc pl-6">
                <li>
                  Crypto exchanges adding staking as a built-in feature to boost
                  user engagement
                </li>
                <li>
                  DeFi protocols integrating staking to increase TVL and
                  liquidity participation
                </li>
                <li>
                  Enterprises and DAOs launching custom staking services to
                  create passive income streams for token holders
                </li>
              </ul>
            </>
          }
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              Why White Label Staking Is the{" "}
              <br className="hidden custom1400:block" /> Future of Blockchain
              Services
            </>
          }
          desc={
            <>
              As the staking economy continues to expand, businesses need fast,
              secure, and scalable staking platforms to remain competitive.
              White label staking solutions provide a budget-friendly,
              high-performance way to enter the market, drive adoption, and
              maximize revenue potential.
            </>
          }
          noBg={true}
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <ServiceStack
          home={true}
          desc="Our development process is backed by a modern tech stack, ensuring
            that every white label developer on our team has the tools to create
            fast, secure, and scalable websites and apps"
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              Turn Staking into <br className="hidden custom1400:block" />
              Your Competitive Edge
            </>
          }
          desc={
            <>
              Why spend months building from scratch? Get a secure, scalable
              staking platform up and running in weeks with our white label
              solution. Talk to us today!
            </>
          }
          noBg={true}
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <div className="relative">
          <div className="w-full overflow-hidden">
            <OtherServices
              tag={"Other our Services"}
              title={
                <>
                  In addition to <br className="hidden custom1400:block" />
                  <span className="violet-gradient-text">
                    white label <br className="hidden custom1400:block" />
                    development,{" "}
                  </span>{" "}
                  <br className="hidden custom1400:block" />
                  Cowchain offers <br className="hidden custom1400:block" />
                  a variety <br className="hidden custom1400:block" />
                  of{" "}
                  <span className="violet-gradient-text">
                    complementary <br className="hidden custom1400:block" />{" "}
                    services{" "}
                  </span>
                </>
              }
              data={otherStakingServices}
              itemClasses="!py-[50px]"
            />
          </div>
        </div>

        <Feedback desc="Our clients know they can rely on Cowchain to deliver reliable, secure blockchain solutions. Here’s what they have to say" />

        <div className="relative">
          <WhiteLabelCases
            title="Our White Label Web Development Cases"
            desc="Numerous projects, such as Pixeltap, have benefited from our white label development services, enabling them to scale their platforms while maintaining user engagement and satisfaction"
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
              data={stakingFAQData}
              noBg={true}
              titleClasses="lg:text-[60px] lg:leading-[53.7px]"
              faqHorizontalPadding={true}
            />
          </div>
        </div>

        <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
      </section>
    </>
  );
};

export default Staking;
