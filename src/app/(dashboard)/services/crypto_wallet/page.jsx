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
import { metadata } from "./utils/cryptoWalletMetadata";
import {
  CryptoWalletTypesData,
  blockchainServiceData,
  cryptoWalletFAQData,
  otherRwaServices,
  paymentSystemData,
  walletFeaturesData,
  walletProcessData,
  walletsAppsData
} from "./utils/data";

export { metadata };

const CryptoWalletDev = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={"Crypto Wallet Development Services for Your Needs"}
        ttileClasses="md:!pt-0"
        hightLightClass={"lg:max-w-[1300px]"}
      />
      <Achievements
        tag={"Crypto Wallet Development Services"}
        desc={
          <>
            Crypto wallets are essential tools in the blockchain{" "}
            <br className="hidden custom1400:block" /> ecosystem, enabling
            secure storage, management, <br /> and transfer of digital assets.
            As the digital <br className="hidden custom1400:block" /> economy
            expands, the demand for reliable{" "}
            <span className="violet-gradient-text">
              crypto
              <br className="hidden custom1400:block" /> wallet software{" "}
            </span>{" "}
            grows, emphasizing the importance{" "}
            <br className="hidden custom1400:block" /> of robust and
            user-friendly wallet solutions.{" "}
            <br className="hidden custom1400:block" /> Modern wallet app
            development not only ensures{" "}
            <br className="hidden custom1400:block" /> efficient transactions
            but also integrates advanced <br />
            <span className="violet-gradient-text">
              blockchain wallet security
            </span>{" "}
            measures, fostering <br className="hidden custom1400:block" /> trust
            among users.
          </>
        }
      />
      <ExpertiseServices
        title={
          <>
            Types of Crypto <br /> Wallets We <br /> Develop
          </>
        }
        data={CryptoWalletTypesData}
        cryptoWalletClass="lg:mb-[60px]"
        sectionContainerClasses="lg:pb-[102px]"
        itemTitleClasses="lg:text-[20px]"
        titleClasses="xl:!text-[60px] xl:mb-[60px]"
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute -bottom-[100%] left-0 h-[1800px] w-auto"
          />
        }
        descClasses="max-w-[500px]"
      />

      <Industries
        title={
          <>
            Key Features of Our Wallet <br /> Development Services
          </>
        }
        itemTitleClasses="lg:max-w-[350px] xl:text-[18px]"
        data={walletFeaturesData}
        topBorder={false}
        customClasses="!grid-cols-2 !pr-0 xl:gap-y-[120px] xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
        itemClasses="!flex-row md:gap-[49px] !min-w-full"
        itemDescClasses={"max-w-[420px]"}
      />

      <ExpertiseServices
        title={
          <>
            Our Crypto Wallet <br />
            Developent Process
          </>
        }
        data={walletProcessData}
        topBorder={true}
        itemTitleClasses="lg:text-[26px] leading-[90px]"
        descClasses="!mb-0 max-w-[520px]"
        customClasses="lg:flex-col"
        sectionContainerClasses="lg:!flex-col gap-[30px] lg:gap-[50px] xl:gap-[70px]"
        itemsClasses="grid lg:grid-cols-2 grid-rows-2 gap-x-[82px] gap-y-[70px] min-w-full"
        itemClasses="md:!mt-0"
        bottomBorder={true}
        bg={
          <CoreFeaturesRWAbg className="pointer-events-none absolute -bottom-[90%] right-0 h-auto w-[1100px]" />
        }
      />

      <ExpertiseServices
        title={
          <>
            Blockchain <br /> Consulting <br /> Services We <br /> Provide
          </>
        }
        data={blockchainServiceData}
        topBorder={false}
        bottomBorder={false}
        itemClasses="md:text-[20px]"
        cryptoWalletClass="lg:mb-[80px]"
        titleClasses="lg:!text-[60px]"
        itemTitleClasses="lg:text-[20px] leading-[90px]"
      />

      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Real-World <br /> Applications <br /> of Our Wallets
            </>
          }
          data={walletsAppsData}
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          itemTitleClass="xl:!text-[20px]"
          itemsClasses={"md:py-[74px] "}
        />
      </div>

      <ExpertiseServices
        title={
          <>
            Integration <br />
            of Advanced <br /> Payment Systems <br /> in Wallets
          </>
        }
        desc={
          <>
            Modern crypto wallets are transforming into comprehensive financial
            tools by <br className="hidden custom1400:block" /> integrating
            advanced payment systems. These enhancements empower both{" "}
            <br className="hidden custom1400:block" /> users and businesses,
            making wallets more versatile in the digital economy
          </>
        }
        itemClasses="md:text-[20px]"
        data={paymentSystemData}
        titleClasses="md:mb-[60px] lg:!text-[60px]"
        cryptoWalletClass="lg:mb-[80px]"
        itemTitleClasses="lg:text-[20px] leading-[90px]"
        topBorder={false}
        bottomBorder={false}
        descClasses="max-w-[480px]"
        titleDescClasses={"!text-white"}
      />

      <KeyFeatures
        isOneBlock={true}
        title={
          <>
            Why Choose Us <br />
            for Crypto Wallet Development?
          </>
        }
        desc={
          <>
            <h1 className=" mt-[40px] font-roc text-[24px] font-[500] uppercase">
              Proven Expertise in Blockchain Technology
            </h1>
            <p className="mt-[20px] font-manrope text-[16px] font-[500] leading-[24px] text-[#BBBBBB]">
              With extensive experience in crypto wallet software and blockchain
              development, our team delivers innovative{" "}
              <br className="hidden custom1400:block" /> solutions tailored to
              your needs. From digital wallet creation to scalable systems, we
              ensure top-tier results.
            </p>
            <p className="mb-15"></p>
            <h1 className=" font-roc  text-[24px] font-[500] uppercase">
              Comprehensive Support Services
            </h1>
            <p className="mt-[20px] text-[16px] font-[500] leading-[24px] text-[#BBBBBB]">
              Our services include post-deployment support, regular updates, and
              dedicated assistance to ensure your wallet{" "}
              <br className="hidden custom1400:block" /> remains secure and
              functional. Whether you need help with upgrades or
              troubleshooting, we’ve got you covered.
            </p>
          </>
        }
        noBg={true}
        descClasses={"max-w-[900px]"}
      />

      <KeyFeatures
        isOneBlock={true}
        title={
          <>
            Secure Your Crypto <br /> Future Today
          </>
        }
        desc={
          <>
            A professionally developed wallet is crucial for navigating the
            growing digital economy. By leveraging{" "}
            <br className="hidden lg:block" />
            our expertise in crypto wallet services and advanced security, you
            can create solutions that resonate{" "}
            <br className="hidden lg:block" />
            with users and stand out in the market. Contact us today to explore
            how our crypto wallet integration <br className="hidden lg:block" />
            and development services can elevate your blockchain projects.
          </>
        }
        noBg={true}
        descClasses={"max-w-[798px] md:mt-[60px]"}
      />

      <Feedback
        desc="Our clients know they can rely on Cowchain to deliver reliable, secure blockchain solutions. Here’s what they have to say"
        nobg={true}
      />

      <div className="relative">
        <div className="w-full overflow-hidden">
          <OtherServices
            typographyContainerClasses="md:!pt-[80px]"
            tag={"Other Our Services"}
            title={
              <>
                In addition to <br className="hidden lg:block" />
                <span className="violet-gradient-text">
                  crypto wallet <br className="hidden lg:block" />
                  development
                </span>
                , <br className="hidden lg:block" /> Cowchain provides{" "}
                <br className="hidden lg:block" />
                <span className="violet-gradient-text">
                  full-cycle blockchain <br className="hidden lg:block" />{" "}
                  services
                </span>{" "}
                to support broader{" "}
                <span className="violet-gradient-text">
                  platform functionality and user engagement
                </span>
                <br className="hidden lg:block" />
              </>
            }
            data={otherRwaServices}
            itemClasses="!py-[50px]"
          />
        </div>
        <Image
          src={dexBg}
          alt="decoration ellipse"
          className="pointer-events-none absolute -bottom-[80%] left-0 z-[1] h-[1400px] w-auto"
        />
      </div>
      <WhiteLabelCases
        title="Our Crypto Wallet Development Cases"
        desc={
          <>
            From secure wallet infrastructure to full-featured white label
            solutions, our team has helped multiple Web3 products compromising
            user experience. Whether it’s embedded wallets, multi-chain support,
            or mobile-first services deliver real impact where it counts: in
            retention, security, and usability.
          </>
        }
        descClasses={"max-w-[888px]"}
      />
      <Cases />
      <CasesMobile />

      <div className="w-full overflow-hidden">
        <FAQ
          data={cryptoWalletFAQData}
          noBg={true}
          titleClasses="lg:text-[60px] lg:leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>
      <Contact
        title={"Secure Your Crypto Future Today"}
        titleClasses={"mb-4 md:mb-0 max-w-[700px] custom1430:text-[64px]"}
        descriptionClasses={
          " hidden md:block max-w-[530px] xl:text-base xl:leading-6"
        }
        desc={
          "A professionally developed wallet is crucial for navigating the growing digital economy. By leveraging our expertise in crypto wallet services and advanced security, you can create solutions that resonate with users and stand out in the market. Contact us today to explore how our crypto wallet integration and development services can elevate your blockchain projects."
        }
        className="px-4 py-[50px] md:px-[64px] md:py-[107px] "
      />
    </section>
  );
};

export default CryptoWalletDev;
