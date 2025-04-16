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
  walletProcessData,
  rwaTokenizationFAQData,
  walletsAppsData,
  paymentSystemData,
  otherRwaServices,
  walletFeaturesData,
  CryptoWalletTypesData,
  blockchainServiceData
} from "./utils/data";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";

const CryptoWalletDev = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={
          <>
            Crypto Wallet Development <br /> Services for Your Needs
          </>
        }
      />
      <Achievements
        tag={"Crypto Wallet Development Services"}
        desc={
          <>
            Crypto wallets are essential tools in the blockchain <br />{" "}
            ecosystem, enabling secure storage, management, <br /> and transfer
            of digital assets. As the digital <br /> economy expands, the demand
            for reliable{" "}
            <span className="violet-gradient-text">
              crypto
              <br /> wallet software{" "}
            </span>{" "}
            grows, emphasizing the importance <br /> of robust and user-friendly
            wallet solutions. <br /> Modern wallet app development not only
            ensures <br /> efficient transactions but also integrates advanced{" "}
            <br />
            <span className="violet-gradient-text">
              blockchain wallet security
            </span>{" "}
            measures, fostering <br /> trust among users.
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
        bg={
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="absolute -bottom-[40%] left-0 h-[1700px]"
          />
        }
      />

      <Industries
        title={
          <>
            Key Features of Our Wallet <br /> Development Services
          </>
        }
        data={walletFeaturesData}
        topBorder={false}
        customClasses="!grid-cols-2 !pr-0  xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
        itemClasses="!flex-row gap-[49px]  !min-w-full"
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
        customClasses="xl:flex-col"
        itemsClasses="grid grid-cols-2 grid-rows-2 gap-x-[62px] gap-y-[70px] min-w-full"
        itemClasses="md:!mt-0"
        bottomBorder={false}
        bg={<CoreFeaturesRWAbg className="absolute bottom-[25%] right-0" />}
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
          itemsClasses={"py-[43px]"}
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
            tools by <br /> integrating advanced payment systems. These
            enhancements empower both <br /> users and businesses, making
            wallets more versatile in the digital economy
          </>
        }
        data={paymentSystemData}
        topBorder={false}
        bottomBorder={false}
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
            <h1 className="font-manrope text-[22px] font-[500]">
              Proven Expertise in Blockchain Technology
            </h1>
            <p className="mt-[20px] font-manrope text-[16px] font-[500] leading-[24px] text-[#BBBBBB]">
              With extensive experience in crypto wallet software and blockchain
              development, our team delivers innovative <br /> solutions
              tailored to your needs. From digital wallet creation to scalable
              systems, we ensure top-tier results.
            </p>
            <p>
              <br />
            </p>
            <h1 className="font-manrope text-[22px] font-[500]">
              Comprehensive Support Services
            </h1>
            <p className="mt-[20px] text-[16px] font-[500] leading-[24px] text-[#BBBBBB]">
              Our services include post-deployment support, regular updates, and
              dedicated assistance to ensure your wallet <br /> remains secure
              and functional. Whether you need help with upgrades or
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
            growing digital economy. By leveraging <br />
            our expertise in crypto wallet services and advanced security, you
            can create solutions that resonate <br />
            with users and stand out in the market. Contact us today to explore
            how our crypto wallet integration <br />
            and development services can elevate your blockchain projects.
          </>
        }
        noBg={true}
        descClasses={"max-w-[798px]"}
      />

      <Feedback />
      <div className="w-full overflow-hidden">
        <OtherServices
          tag={"Other Our Services"}
          title={
            <>
              Alongside <br />
              <span className="violet-gradient-text">
                crypto wallet <br />
                development
              </span>
              , <br /> Cowchain offers <br />
              <span className="violet-gradient-text">
                additional support <br /> services
              </span>{" "}
              to fully <br /> back your project
            </>
          }
          data={otherRwaServices}
        />
      </div>z
      <WhiteLabelCases
        title="Our Crypto Wallet Development Cases"
        desc={
          <>
            From secure wallet infrastructure to full-featured white label
            solutions, our team has helped multiple Web3 products <br /> grow fast
            without compromising user experience. Whether it’s embedded wallets,
            multi-chain support, or mobile-first <br /> flows, our crypto wallet
            services deliver real impact where it counts: in retention,
            security, and usability.
          </>
        }
      />
      <Cases />
      <CasesMobile />

      <div className="w-full overflow-hidden">
        <FAQ
          data={rwaTokenizationFAQData}
          noBg={true}
          titleClasses="lg:text-[60px] lg:leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default CryptoWalletDev;
