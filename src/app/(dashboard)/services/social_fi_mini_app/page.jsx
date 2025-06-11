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
import {
  stakingFAQData,
  realUseTgAppData,
  integrationTgMiniAppData,
  whySocialAppData,
  HowToInstallTgAppData,
  benefitsOfTgMiniAppData
} from "./utils/data";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";
import { metadata } from "./utils/SocialMiniAppMetaData";
import { CoreFeaturesRWAbg } from "@/assets/svgComponents/CoreFeaturesRWAbg";
import { getServiceSchema, setBreadcrumbSchemaServices } from "@/lib/utils";
import { fiMiniAppSchema } from "@/lib/constants/servicesSchemas";

export { metadata };

const SicialMiniApp = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "Social TG Mini-App",
    "social_fi_mini_app"
  );
  const serviceSchema = getServiceSchema(fiMiniAppSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <section className="overflow-visible">
        <HeroSection
          title={
            <>
              Social TG Mini-App – Engage,{" "}
              <br className="hidden custom1400:block" /> Connect, and Grow
              Easily
            </>
          }
          hightLightClass="md:text-[78px]"
          ttileClasses="md:!pt-0 "
        />
        <Achievements
          tag={"How RWA Platforms Revolutionize Asset Tokenization"}
          desc={
            <>
              In a world driven by digital communities,{" "}
              <br className="hidden custom1400:block" />
              <span className="violet-gradient-text">the Mini-App </span> stands
              out as a transformative <br className="hidden custom1400:block" />
              application telegram,{" "}
              <span className="violet-gradient-text">
                {" "}
                designed to enhance <br className="hidden custom1400:block" />
                interaction, communication, and management{" "}
              </span>{" "}
              within <br className="hidden custom1400:block" />
              Telegram. This innovative solution simplifies group{" "}
              <br className="hidden custom1400:block" />
              engagement while unlocking{" "}
              <span className="violet-gradient-text">
                new possibilities for <br className="hidden custom1400:block" />
                growth
              </span>{" "}
              . With features tailored for boosting{" "}
              <br className="hidden custom1400:block" />
              community activity and engagement, the app enables{" "}
              <br className="hidden custom1400:block" />
              group leaders to attract new members, retain{" "}
              <br className="hidden custom1400:block" />
              current ones, and drive overall participation
            </>
          }
          sub="Whether you’re a Telegram crypto community bot enthusiast or a leader managing a large network, 
this mini-app is your gateway to uncomplicated communication and connectivity"
        />

        <KeyFeatures
          isOneBlock={true}
          title={<>What Is the Social TG Mini-App?</>}
          noBg={true}
          desc={
            <>
              The Social TG Mini-App is a dynamic platform integrated into the
              Telegram ecosystem, offering tools for simplified community
              interaction, management, and growth. It bridges the gap between
              traditional messaging and interactive features, making it an
              essential asset for users and admins alike. The mini-app is
              perfect for handling large groups, streamlining tasks, and
              creating immersive experiences for users across niches. Designed
              with simplicity at its core, the app provides an intuitive
              interface that’s easy for users to adopt, regardless of their
              technical background
            </>
          }
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <ExpertiseServices
          title={
            <>
              <br className="hidden custom1400:block" />
              Why Social <br className="hidden custom1400:block" />
              TG Mini-App Is <br className="hidden custom1400:block" />
              a Must-Have for <br className="hidden custom1400:block" /> Your
              Community?
            </>
          }
          data={whySocialAppData}
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses="lg:pb-[102px]"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[60px] xl:mb-[60px]"
          bg={
            <Image
              src={dexBg}
              alt="decoration ellipse"
              className="pointer-events-none absolute bottom-[20%] left-0 z-[0] w-auto md:h-[1600px]"
            />
          }
        />

        <ExpertiseServices
          title={
            <>
              Benefits of Using the <br className="hidden custom1400:block" />
              Social TG Mini-App
            </>
          }
          desc="The Social TG Mini-App empowers communities with tools to expand their reach, enhance engagement, and simplify group management. Whether you’re leading 
a ton telegram network or building a niche group, the app supports your goals"
          titleClasses="xl:text-[60px] leading-[90%]"
          data={benefitsOfTgMiniAppData}
          topBorder={true}
          itemTitleClasses="lg:text-[26px] leading-[90%]"
          descClasses="!mb-0"
          customClasses="lg:flex-col"
          sectionContainerClasses="lg:!flex-col xl:!flex-col gap-[30px] lg:gap-[50px] xl:gap-[70px]"
          itemsClasses="grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-[82px] lg:gap-y-[70px] min-w-full"
          itemClasses="md:!mt-0"
          bottomBorder={true}
          bg={
            <CoreFeaturesRWAbg className="absolute bottom-[25%] right-0 hidden md:block" />
          }
        />

        <div className="relative">
          <KeyFeatures
            isOneBlock={true}
            title={
              <>
                Why Social TG Mini-App{" "}
                <br className="hidden custom1400:block" />
                Is Perfect for TON Communities
              </>
            }
            desc={
              <>
                The Social TG Mini-App is built to operate smoothly within the
                TON blockchain ecosystem. It connects directly to TON apps and
                wallets, allowing users to manage transactions and community
                activities without leaving Telegram. The mini-app also offers
                flexible tools for working with decentralized groups, making it
                easier to coordinate tasks and communication. Thanks to its
                scalable design, it supports both small communities and large
                networks without losing stability or speed
              </>
            }
            noBg={true}
            descClasses={"max-w-[798px] !mt-[60px]"}
          />
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute -bottom-[140%] left-0 z-[0] w-auto md:h-[1600px]"
          />
        </div>

        <ExpertiseServices
          title={
            <>
              Advanced Integrations in{" "}
              <br className="hidden custom1400:block" /> Your TG Mini-App
            </>
          }
          desc="Unlock the full potential of your Telegram community with custom-built integrations. Whether you need advanced wallet compatibility or secure user management, our Mini-App delivers feature-rich solutions straight out 
of the box — ready to scale with your vision"
          data={integrationTgMiniAppData}
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses="lg:pb-[102px]"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[60px] xl:mb-[60px]"
        />

        <div className="w-full overflow-hidden">
          <FAQ
            desc={
              "See how simple installation for users and intuitive community management for admin can be with the Social TG Mini-App at the same time"
            }
            title={
              <>
                How to Install <br className="hidden custom1400:block" />
                and Start Using the <br className="hidden custom1400:block" />{" "}
                Social TG Mini-App
              </>
            }
            data={HowToInstallTgAppData}
            noBg={true}
            isTwoHalf={true}
            hasIcon={false}
            faqGradient={true}
            // itemsClasses={"py-10 md:py-[43px]"}
            titleClasses="custom1430:text-[42px]"
          />
        </div>

        <Industries
          title={
            <>
              Real-Life Use Cases of Social{" "}
              <br className="hidden custom1400:block" />
              TG Mini-App
            </>
          }
          titleContainerClasses="lg:gap-[26px]"
          desc="This app is a versatile platform catering to various industries and needs. Its flexibility makes it indispensable for building and managing dynamic communities"
          itemTitleClasses="lg:max-w-[350px] md:text-[18px]"
          data={realUseTgAppData}
          topBorder={false}
          customClasses="!grid-cols-2 !pr-0 xl:gap-y-[107px] xl:pl-[55px] xl:pr-[60px] xl:mt-[65px]"
          itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              Revolutionize Your <br className="hidden custom1400:block" />{" "}
              Community with Social <br className="hidden custom1400:block" />{" "}
              TG Mini-App
            </>
          }
          desc={
            <>
              The Social TG Mini-App isn’t just another application; it’s a
              game-changer for community management and engagement. With its
              innovative features, blockchain integration, and focus on user
              experience, this app transforms how communities interact and grow.
              Ready to elevate your business’s potential? Explore the Social TG
              Mini-App today and experience the future of digital interaction
              that’s already here
            </>
          }
          noBg={true}
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <Feedback desc="Our clients know they can rely on Cowchain to deliver reliable, secure blockchain solutions. Here’s what they have to say" />

        <div className="relative">
          <WhiteLabelCases
            title="Our Works: Social TG Mini-App in Action"
            desc="Cowchain has successfully deployed the Social TG Mini-App across various industries. From crypto-based groups to global networks, our clients have leveraged the app to enhance engagement and simplify management"
            blockClasses="md:pb-[60px]"
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

export default SicialMiniApp;
