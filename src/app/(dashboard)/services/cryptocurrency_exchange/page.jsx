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
import { metadata } from "./utils/crytocurrencyMetadata";
import {
  CryptoExchangeypesData,
  chooseCryptocurrencyData,
  cruptoCurrencyServiceData,
  cryptoCurrencyFAQData,
  cryptoCurrencyFeaturesData,
  cryptoCurrencySecurityData,
  otherCryptoCurrencyServices,
  walletProcessData
} from "./utils/data";
export { metadata };

const CryptoCurrencyDev = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={
          <>
            Cryptocurrency <br /> Exchange Development
          </>
        }
        ttileClasses="md:!pt-[37px]"
        hightLightClass="text-[34px] leading-[90%] md:text-[80px]"
      />
      <Achievements
        tag={
          <>
            Cryptocurrency Exchange Development Services{" "}
            <span className="hidden sm:inline">for Your Business</span>
          </>
        }
        desc={
          <>
            Exchanges for cryptocurrencies are now necessary{" "}
            <br className="hidden custom1400:block" /> for navigating
            <span className="violet-gradient-text">
              the future of digital finance
            </span>
            ; they are <br className="hidden custom1400:block" /> no longer
            optional. Our cryptocurrency exchange <br /> development services{" "}
            <span className="violet-gradient-text">
              {" "}
              will assist you in creating a{" "}
              <br className="hidden custom1400:block" /> safe, adaptable, and
              entirely customized solution{" "}
            </span>{" "}
            that satisfies your particular business objectives,{" "}
            <br className="hidden custom1400:block" /> regardless of whether
            you're planning to launch <br className="hidden custom1400:block" />{" "}
            your first platform or scale an existing idea.
          </>
        }
      />

      <ExpertiseServices
        title={
          <>
            Introduction to Cryptocurrency <br /> Exchange Development
          </>
        }
        titleClasses=" xl:text-[60px] leading-[90%]"
        data={walletProcessData}
        topBorder={true}
        itemTitleClasses="lg:text-[20px] leading-[90px]"
        descClasses="!mb-0 max-w-[515px]"
        customClasses="lg:flex-col"
        sectionContainerClasses="gap-0  lg:!flex-col md:gap-[30px] lg:gap-[50px] xl:gap-[107px]"
        itemsClasses="grid lg:grid-cols-2 lg:grid-rows-1 gap-x-[82px] gap-y-6 md:gap-y-[70px] xl:gap-x-[157px] min-w-full"
        itemClasses="md:!mt-0"
        bottomBorder={true}
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute -bottom-[80%] left-0 z-[0] h-[1000px] w-auto"
          />
        }
      />

      <ExpertiseServices
        title={
          <>
            Key Features <br />
            of a Profitable <br /> Cryptocurrency <br /> Exchange
          </>
        }
        data={CryptoExchangeypesData}
        cryptoWalletClass="lg:mb-[80px]"
        sectionContainerClasses="lg:pb-[102px] md:flex-row"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
      />

      <Industries
        title={
          <>
            Types of Cryptocurrency <br /> Exchange Platforms
          </>
        }
        itemTitleClasses="lg:max-w-[350px] xl:text-[18px]"
        data={cryptoCurrencyFeaturesData}
        topBorder={false}
        customClasses="!grid-cols-2  !pr-0 xl:gap-y-[120px] xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
        itemClasses="!flex-row  md:gap-[49px] !min-w-full"
        itemContainerClasses={"gap-4 md:gap-4 xl:gap-[49px]"}
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[90%] right-0 h-auto w-[1100px]" />
        }
      />

      <ExpertiseServices
        title={
          <>
            Essential <br /> Components <br />
            of Exchange <br /> Development
          </>
        }
        data={cruptoCurrencyServiceData}
        topBorder={false}
        bottomBorder={false}
        itemClasses="md:text-[20px]"
        cryptoWalletClass="lg:mb-[80px]"
        sectionContainerClasses="md:flex-row md:gap-15"
        titleClasses="lg:!text-[60px]"
        itemTitleClasses="lg:text-[20px] leading-[90px] !max-w-[250px]"
        descClasses={"!max-w-[495px]"}
      />

      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Security <br /> Measures for <br /> Cryptocurrency <br />{" "}
              Exchanges
            </>
          }
          data={cryptoCurrencySecurityData}
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          itemTitleClass="xl:!text-[20px]"
          itemsClasses={"py-[50px] "}
          titleClasses="custom1430:text-[42px]"
          faqContentClasses="max-w-[546px]"
        />
      </div>

      <ExpertiseServices
        title={
          <>
            How to Choose the Right <br /> Cryptocurrency Exchange <br />{" "}
            Development Services
          </>
        }
        data={chooseCryptocurrencyData}
        titleClasses="custom1430:text-[60px]"
        topBorder={true}
        itemTitleClasses="lg:text-[20px] leading-[90px]"
        descClasses="mb-6 md:mb-0 max-w-[525px]"
        customClasses="lg:flex-col"
        sectionContainerClasses="lg:!flex-col gap-0 md:gap-[30px] lg:gap-[50px] xl:gap-[70px]"
        itemsClasses="grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-[156px] lg:gap-y-[70px] min-w-full"
        itemClasses="md:!mt-[37px]"
        bottomBorder={true}
      />

      <Feedback desc="Clients have praised our work, citing our deep expertise in NFT development and blockchain technology. We focus on delivering innovative solutions that meet the unique needs of each project" />

      <div className="relative">
        <div className="w-full overflow-hidden">
          <OtherServices
            tag={"Other Blockchain Services"}
            title={
              <>
                In addition to <br />
                <span className="violet-gradient-text">
                  Cryptocurrency <br /> Exchange,
                </span>
                , <br /> Cowchain offers <br />
                a variety <br /> of
                <span className="violet-gradient-text">
                  complementary <br /> services
                </span>
                <br />
              </>
            }
            data={otherCryptoCurrencyServices}
            itemClasses="!py-[50px]"
          />
        </div>
      </div>
      <WhiteLabelCases title="Our Cases" desc="" blockClasses="md:pb-[60px]" />
      <Cases />
      <CasesMobile />

      <div className="w-full overflow-hidden">
        <FAQ
          data={cryptoCurrencyFAQData}
          noBg={true}
          titleClasses="lg:text-[60px] lg:leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>
      <Contact
        title={"The Future of Cryptocurrency Exchange Platforms"}
        titleClasses={"mb-4 md:mb-0 max-w-[1093px] custom1430:text-[64px]"}
        descriptionClasses={
          " hidden md:block max-w-[1080px] xl:text-base xl:leading-6"
        }
        desc={
          "The cryptocurrency market is evolving rapidly, and exchanges must stay ahead with innovative features and high-assurance designs. Whether through advanced crypto trading software or robust crypto wallet integration, the future belongs to platforms that prioritize performance and user-centric designs. Contact us to create a platform that stands out in this dynamic market."
        }
        className="px-4 py-[50px] md:px-[64px] md:py-[131px] "
        hasNoDesc={false}
      />
    </section>
  );
};

export default CryptoCurrencyDev;
