import whiteLabelBg from "@/assets/bg/white-label-ellipse.webp";
import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries/index";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";

import {
  cryptWalletBenefits,
  cryptWalletFaqData,
  cryptWalletFeatures,
  cryptWalletGeneralFaqData,
  cryptWalletOpportunities,
  cryptWalletSecure,
  cryptWalletTypes
} from "./utils/data";
import { metadata } from "./utils/mobileCryptoWalletMetadata";
import { getServiceSchema, setBreadcrumbSchemaServices } from "@/lib/utils";
import { cryptoWalletMobileSchema } from "@/lib/constants/servicesSchemas";

export { metadata };

const MobileCryptoWallet = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "Mobile Crypto Wallet",
    "mobile_crypto_wallet"
  );
  const serviceSchema = getServiceSchema(cryptoWalletMobileSchema);

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
      <section>
        <HeroSection
          title={"Secure Mobile Crypto Wallet — Easy Access & Safe Storage"}
        />
        <Achievements
          tag={"What Is a Mobile Crypto Wallet?"}
          desc={
            <>
              A <span className="violet-gradient-text">crypto wallet app</span>{" "}
              is a secure digital tool
              <br className="hidden custom1430:block" /> that allows users to
              store, send, and receive
              <br className="hidden custom1430:block" /> cryptocurrencies
              directly from their mobile devices.
              <br className="hidden custom1430:block" /> Unlike traditional
              wallets, which hold physical
              <br className="hidden custom1430:block" /> money,{" "}
              <span className="violet-gradient-text">
                mobile crypto wallets
              </span>{" "}
              manage private <br className="hidden custom1430:block" />
              keys that grant access to blockchain-based
              <br className="hidden custom1430:block" /> digital assets
            </>
          }
          descClass={"lg:!text-[42px]"}
          containerClasses={"xl:pl-[88px] xl:pr-[106px]"}
          sub={
            "Mobile wallets are celebrated for their portability and user-friendly design, making them ideal for on-the-go management of cryptocurrency portfolios. With features like instant transactions, encryption, and backup options, these wallets provide a seamless way to interact with the world of crypto"
          }
          subClasses="max-w-[880px]"
        />

        <KeyFeatures
          title={
            "Secure Your Assets with a Mobile Crypto Wallet for Easy Access"
          }
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15 max-w-[860px]"
          desc={
            "In the fast-paced world of digital finance, extra precaution with cryptocurrency is always advisable. A mobile wallet for cryptocurrency does provide that sweet spot, so to say, that anyone seeks — an ideal blend between safety and ease of access for cryptocurrencies. From convenience to safety, both have been kept in mind while building these wallets into the core of crypto management today"
          }
          isOneBlock={true}
          isWhiteLabelBg={true}
          noBg
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
          whiteLabelBgClasses="-bottom-[145%]"
        />
        <Industries
          title={
            <>
              Key Features of <br className="hidden xl:block" /> a Secure Mobile
              Crypto Wallet
            </>
          }
          data={cryptWalletFeatures}
          topBorder={false}
          customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[107px] xl:gap-x-[109px] xl:pl-[65px] !mt-0"
          itemContainerClasses={
            "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
          }
          itemDescClasses={"max-w-[395px]"}
          containerClasses={
            "xl:gap-[107px] custom1430:pr-[143px] xl:py-[126px]"
          }
          itemTitleClasses={"md:text-lg max-w-full"}
        />

        <KeyFeatures
          title={"Integration with Decentralized Finance (DeFi) Platforms"}
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15 max-w-[1050px]"
          desc={
            "As the DeFi ecosystem continues to expand, mobile crypto wallets have become an essential gateway for users looking to interact with decentralized platforms. Integration with DeFi services allows wallet holders to engage in activities like staking, lending, and liquidity provision directly from their mobile devices. With user-friendly interfaces, the best wallet for cryptocurrency facilitates hassle-free access to DeFi protocols. Whether you’re farming rewards or swapping tokens, a mobile wallet bridges the gap between everyday users and the decentralized financial world. This functionality makes it easier than ever to manage DeFi investments while keeping assets secure"
          }
          isOneBlock={true}
          noBg
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
          customBg={
            <Image
              width={870}
              height={550}
              src={"/ai-dev-decoration-ellipse.webp"}
              className="absolute -top-80 right-0 hidden md:block"
            />
          }
        />

        <ExpertiseServices
          data={cryptWalletTypes}
          title={
            <>
              Types of <br />
              Crypto Wallets
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
          titleClasses="md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid xl:gap-14"
          itemTitleClasses={"md:text-[20px] leading-90"}
          descClasses="max-w-[470px]"
        />
        <Industries
          title={"Benefits of Using a Mobile Wallet for Cryptocurrency"}
          desc={
            "Mobile wallets redefine how users manage digital assets by offering"
          }
          data={cryptWalletBenefits}
          topBorder={false}
          customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[107px] xl:gap-x-[109px] xl:pl-[65px] !mt-0"
          itemContainerClasses={
            "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
          }
          itemDescClasses={"max-w-[385px]"}
          containerClasses={
            "xl:gap-[107px] custom1430:pr-[143px] xl:py-[126px]"
          }
          itemTitleClasses={"md:text-lg max-w-full"}
          bg={
            <Image
              alt="background decoration"
              className={
                "pointer-events-none absolute -bottom-[50%] left-0 hidden md:block"
              }
              src={whiteLabelBg}
            />
          }
        />
        <ExpertiseServices
          data={cryptWalletSecure}
          title={
            <>
              How Our Secure
              <br /> Mobile Crypto
              <br /> Wallet Prevents
              <br /> Common Mistakes
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
          titleClasses="md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid xl:gap-14"
          itemTitleClasses={"md:text-[20px] leading-90"}
          descClasses="max-w-[480px]"
        />
        <div className="w-full overflow-hidden">
          <FAQ
            title={
              <>
                How to Build the
                <br /> Crypto Wallet with
                <br /> a White-Label
                <br /> Solution
              </>
            }
            noBg={true}
            isTwoHalf={true}
            hasIcon={false}
            faqGradient={true}
            titleClasses="custom1430:text-[42px]"
            data={cryptWalletFaqData}
            itemsClasses={"md:py-[50px]"}
            accordionPanelClasses="md:pb-[50px]"
            expandedItemClasses="!pb-6"
            isDoublePadding={true}
            itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line"}
            faqContentClasses="max-w-[540px]"
          />
        </div>
        <ExpertiseServices
          data={cryptWalletOpportunities}
          title={
            <>
              Future
              <br /> Opportunities
              <br /> for Mobile
              <br /> Crypto Wallets
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
          titleClasses="md:mb-0 xl:text-[60px] xl:leading-90"
          containerClasses="xl:grid "
          descClasses="max-w-[519px] !my-0"
          itemListClasses="mt-0"
          bg={
            <Image
              width={800}
              height={800}
              src={"/ico-constructor-decoration-bg.webp"}
              className="absolute -bottom-[170%] left-0"
            />
          }
        />
        <KeyFeatures
          title={
            <>
              Sustainability
              <br /> and Environmental Impact
            </>
          }
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15 max-w-[1050px]"
          desc={
            <>
              In an era where environmental consciousness is paramount, mobile
              crypto wallets are contributing to sustainable practices within
              the blockchain ecosystem.
              <br />
              <br />
              By enabling mobile-first solutions, these wallets reduce reliance
              on energy-intensive hardware. As the crypto industry evolves,
              sustainable practices in wallet design and operation will play a
              vital role in building an eco-conscious financial future
            </>
          }
          isOneBlock={true}
          noBg
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
        />
        <KeyFeatures
          title={
            "Why a Secure Mobile Crypto Wallet Is Essential for Your Business"
          }
          topBorder={false}
          titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15 max-w-[1200px]"
          desc={
            "In the competitive world of digital finance, offering the best wallet for cryptocurrency is a must for businesses aiming to attract and retain users. A secure mobile wallet combines robust security protocols, seamless integration with blockchain networks, and a user-friendly interface, making it a cornerstone of any crypto platform. By integrating or developing a white-label solution, you can provide your clients with unparalleled access to secure and convenient digital asset management, enhancing both trust and engagement"
          }
          isOneBlock={true}
          noBg
          descClasses={"max-w-[755px] xl:my-0"}
          containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
        />
        <Feedback
          nobg={true}
          desc="Our clients know they can rely on Cowchain 
            to deliver reliable, secure blockchain solutions. Here’s what they have to say"
        />
        <WhiteLabelCases title="Our works" hasNoDescription={true} />
        <Cases />
        <CasesMobile />
        <div className="w-full overflow-hidden">
          <FAQ
            noBg={true}
            data={cryptWalletGeneralFaqData}
            faqHorizontalPadding
          />
        </div>
        <Contact
          descriptionClasses={"mb-6 md:mb-0"}
          className={"px-4 py-[50px] md:px-0 xl:py-[143px]"}
        />
      </section>
    </>
  );
};

export default MobileCryptoWallet;
