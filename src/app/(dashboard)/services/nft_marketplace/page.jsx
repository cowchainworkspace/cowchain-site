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
  faqQuestions,
  nftPlatformsBenefits,
  nftPlatformsExperts,
  nftPlatformsFaqCommunityData,
  nftPlatformsFaqData,
  nftPlatformsFeatures,
  nftPlatformsRole,
  nftPlatformsSteps
} from "./utils/data";
import { metadata } from "./utils/nftMarketPlaceMetadata";

export { metadata };

const NFTMarketPlace = () => {
  return (
    <section>
      <HeroSection title={"NFT Marketplace"} />
      <Achievements
        tag={"What Is a White Label NFT Marketplace?"}
        desc={
          <>
            A white label NFT marketplace is a{" "}
            <span className="violet-gradient-text">
              pre-built,
              <br className="hidden custom1430:block" /> ready-to-use
              platform{" "}
            </span>
            designed to support
            <br className="hidden custom1430:block" /> the creation, buying, and
            selling of non-fungible
            <br className="hidden custom1430:block" /> tokens (NFTs). Unlike
            custom development,
            <br className="hidden custom1430:block" /> which requires building a
            solution from scratch,
            <br className="hidden custom1430:block" /> white label marketplaces
            offer{" "}
            <span className="violet-gradient-text">
              preconfigured <br className="hidden custom1430:block" />
              frameworks that are easily customizable
            </span>{" "}
            to match
            <br className="hidden custom1430:block" /> your branding and
            specific needs
          </>
        }
        sub={
          "This approach significantly reduces development time and costs, making it ideal for businesses looking to enter the NFT market quickly while maintaining a unique identity"
        }
        subClasses="max-w-[900px]"
      />
      <ExpertiseServices
        topBorder={false}
        data={nftPlatformsRole}
        title={<>The Role of Smart Contracts in NFT Platforms</>}
        desc={
          "Smart contracts are the backbone of any NFT platform, automating transactions and ensuring trust among users:"
        }
        sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[193px]"}
        titleClasses="mb-0 md:mb-[30px]  xl:leading-90 max-w-[420px]"
        containerClasses="xl:grid xl:gap-14"
        itemTitleClasses={" md:text-[20px] xl:text-[20px] xl:leading-90"}
        titleDescClasses="max-w-[450px] !text-secondary"
        descClasses="max-w-[505px]"
        bg={
          <Image
            src={whiteLabelBg}
            alt="decoration ellipse"
            className="absolute -top-[55%] left-0 hidden  md:block"
          />
        }
      />
      <Industries
        data={nftPlatformsFeatures}
        title={<>Key Features of an NFT Marketplace</>}
        topBorder={false}
        customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-y-[107px] xl:gap-x-[109px] xl:pl-[65px] !mt-0"
        itemContainerClasses={
          "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
        }
        containerClasses={"xl:gap-[107px] custom1430:pr-[143px] xl:py-[126px]"}
        itemTitleClasses={
          "max-w-full nd:text-lg lg:text-lg xl:text-lg xl:leading-90 mb-6"
        }
      />
      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Why Choose a <br /> White Label NFT
              <br /> Marketplace?
            </>
          }
          desc={
            "White label NFT marketplaces provide unparalleled advantages, making them a preferred choice for businesses of all sizes."
          }
          titleClasses="custom1430:text-[42px]"
          descriptionClasses="!text-secondary max-w-[475px]"
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          data={nftPlatformsFaqData}
          itemsClasses={"md:py-[55.5px]"}
          accordionPanelClasses="md:pb-[55.5px]"
          expandedItemClasses="!pb-6"
          isDoublePadding={true}
          itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line"}
        />
      </div>
      <ExpertiseServices
        topBorder={false}
        data={nftPlatformsSteps}
        title={
          <>
            Steps We Take
            <br /> to Deliver Your
            <br /> White Label NFT
            <br /> Marketplace
          </>
        }
        sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[134px]"}
        titleClasses="mb-0 md:mb-[30px]  xl:leading-90 custom1430:text-[60px]"
        containerClasses="xl:grid xl:gap-14"
        itemTitleClasses={" md:text-[20px] xl:text-[20px] xl:leading-90"}
        descClasses="max-w-[505px]"
      />
      <Industries
        data={nftPlatformsBenefits}
        title={
          <>
            Benefits of a White Label
            <br className="hidden custom1430:block" /> NFT Marketplace
            Development
          </>
        }
        topBorder={false}
        customClasses="md:grid-cols-2 md:gap-y-10 md:gap-x-10 xl:gap-x-[109px] xl:pl-[65px] !mt-0"
        itemContainerClasses={
          "flex-row gap-3 md:gap-5 xl:gap-[49px] md:max-w-full"
        }
        containerClasses={"xl:gap-[107px] custom1430:pr-[148px] xl:py-[126px]"}
        itemTitleClasses={
          "max-w-full nd:text-lg lg:text-lg xl:text-lg xl:leading-90 mb-6"
        }
      />

      <ExpertiseServices
        topBorder={false}
        data={nftPlatformsExperts}
        title={
          <>
            Why Partner
            <br /> with Experts for
            <br /> NFT Marketplace
            <br /> Development?
          </>
        }
        desc={
          "Collaborating with experienced developers ensures your marketplace is built with industry-leading practices. Professionals provide"
        }
        sectionContainerClasses={"md:flex-row md:gap-5 custom1430:pr-[134px]"}
        titleClasses="mb-0 md:mb-[30px] xl:mb-15  xl:leading-90 custom1430:text-[60px]"
        containerClasses="xl:grid xl:gap-14"
        itemTitleClasses={" md:text-[20px] xl:text-[20px] xl:leading-90"}
        titleDescClasses="max-w-[570px] !text-secondary"
        descClasses="max-w-[519px]"
      />
      <div className="w-full overflow-hidden">
        <FAQ
          title={
            <>
              Building
              <br /> Community
              <br /> Engagement
              <br /> Through NFTs
            </>
          }
          desc={
            "White label NFT marketplaces provide unparalleled advantages, making them a preferred choice for businesses of all sizes."
          }
          titleClasses="custom1430:text-[60px]"
          descriptionClasses="!text-secondary max-w-[475px]"
          noBg={true}
          isTwoHalf={true}
          hasIcon={false}
          faqGradient={true}
          data={nftPlatformsFaqCommunityData}
          itemsClasses={"md:py-[57px]"}
          accordionPanelClasses="md:pb-[57px]"
          expandedItemClasses="!pb-6"
          isDoublePadding={true}
          itemTitleClass={"xl:text-xl xl:leading-90 whitespace-pre-line"}
          faqContentClasses="max-w-[440px]"
        />
      </div>
      <KeyFeatures
        title={"Start Building Your NFT Marketplace Today"}
        topBorder={false}
        titleClasses="md:text-[36px] xl:text-[60px] xl:mb-15 max-w-[1012px]"
        desc={
          "A white label nft marketplace development solution offers the perfect combination of speed, scalability, and customization, allowing you to establish a robust presence in the NFT ecosystem. Don’t wait – turn your vision into reality with our expert solutions today!"
        }
        noBg={true}
        isOneBlock={true}
        descClasses={"max-w-[750px] xl:my-0"}
        containerClasses="md:py-[50px] xl:pt-[126px] xl:pb-[127px]"
      />
      <Feedback
        desc="Our clients know they can rely on Cowchain 
to deliver reliable, secure blockchain solutions. Here’s what they have to say"
        imageClasses="hidden md:block"
      />
      <WhiteLabelCases />
      <Cases />
      <CasesMobile />
      <div className="w-full overflow-hidden">
        <FAQ noBg={true} data={faqQuestions} />
      </div>
      <Contact
        descriptionClasses={"mb-6 md:mb-0"}
        className={"px-4 py-[50px] md:px-0 xl:py-[143px]"}
      />
    </section>
  );
};

export default NFTMarketPlace;
