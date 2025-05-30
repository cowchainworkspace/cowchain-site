import Contact from "@/components/Contact";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import { nftStackData } from "../components/service/blocks/stack/data";
import { WhiteLabelCases } from "../white_label_solutions/blocks/WhiteLabelCases";
import { metadata } from "./utils/NftDevMetadata";
import {
  NftIndustriesData,
  OtherNftData,
  faqNftData,
  nftBenefitsData,
  nftProcessData,
  nftServicesData
} from "./utils/data";
import { setBreadcrumbSchemaServices } from "@/lib/utils";

export { metadata };

const NftDevelopment = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "NFT Development Company",
    "nft_development"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <section>
        <HeroSection
          tag={"NFT Development"}
          title={"NFT Development Company"}
          desc={
            <>
              Cowchain provides reliable and creative NFT development services,
              offering end-to-end solutions <br className="hidden lg:block" />
              from token creation to platform launch and maintenance
            </>
          }
        />
        <Achievements
          tag={"NFT Development Agency"}
          desc={
            <>
              {" "}
              As{" "}
              <span className="violet-gradient-text">
                NFT development company
              </span>
              , Cowchain delivers <br className="hidden custom1400:block" />
              innovative solutions for{" "}
              <span className="violet-gradient-text">
                creating, managing, <br className="hidden custom1400:block" />{" "}
                and launching NFTs
              </span>{" "}
              across industries. <br className="hidden custom1400:block" />
              Our approach to{" "}
              <span className="violet-gradient-text">
                blockchain NFT development
              </span>{" "}
              <br className="hidden custom1400:block" />
              ensures that your digital assets are accessible{" "}
              <br className="hidden custom1400:block" />
              <span className="violet-gradient-text">
                without compromising on performance
              </span>
            </>
          }
        />
        <KeyFeatures
          title={"NFT Development Services We Provide"}
          titleClasses="lg:mb-[60px]"
          data={nftServicesData}
          desc={
            <>
              Our range of NFT development services includes every aspect of NFT
              creation and management, from token generation to long-term
              platform support. Cowchain ensures that each stage of NFT
              development is streamlined <br className="hidden xl:block" />
              and optimized, enabling businesses to achieve their goals.
            </>
          }
          noBg={true}
          descClasses={"max-w-[575px]"}
        />
        <div className="w-full overflow-hidden">
          <FAQ
            title={
              <>
                Our <br className="block lg:hidden" /> Non-Fungible
                <br className="hidden md:block" /> Token Development Process
              </>
            }
            desc={
              <>
                Our NFT development team follows a systematic approach
                <br className="hidden xl:block" /> to ensure that each project
                is handled with care from start
                <br className="hidden xl:block" /> to finish, delivering
                high-quality outcomes. By focusing on
                <br className="hidden xl:block" /> every detail of NFT
                development, we create platforms that
                <br className="hidden xl:block" /> are robust and adaptable to
                evolving business needs,
                <br className="hidden xl:block" /> enabling clients to achieve
                lasting impact
              </>
            }
            data={nftProcessData}
            isTwoHalf={true}
            isDoublePadding={true}
            noBg={true}
            hasIcon={false}
            itemsClasses={"md:py-[54.5px]"}
            accordionPanelClasses="md:pb-[54.5px]"
            expandedItemClasses="!pb-6"
            faqGradient={true}
            titleClasses="custom1430:text-[42px]"
            descriptionClasses="!max-w-[320px] lg:!max-w-[462px]"
          />
        </div>

        <Industries
          title={"NFT Across Industries"}
          desc={
            <>
              NFTs are reshaping industries, opening unprecedented opportunities
              for businesses
              <br /> and creators. As a leading NFT development agency, Cowchain
              provides solutions that
              <br /> unlock the true potential of non-fungible tokens across
              multiple sectors
            </>
          }
          data={NftIndustriesData}
          topBorder={false}
          customClasses="xl:pl-[55px] lg:gap-y-[120px] xl:pr-[60px] xl:mt-[60px]"
        />

        <ExpertiseServices
          threeColumns
          data={nftBenefitsData}
          title={
            <>
              Benefits <br />
              of Our NFT <br />
              Development
            </>
          }
          containerClasses="grid-cols-1 md:grid-cols-2"
          cryptoWalletClass="lg:mb-[100px]"
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              Why Choose Us
              <br className="hidden md:block" /> As Your NFT Development Company
            </>
          }
          desc={
            "Cowchain is recognized as a leading NFT development company, with a reputation for delivering high-quality Non-Fungible Token development solutions. Our team of NFT developers offers in-depth knowledge in creating cutting-edge solutions for both businesses and creators"
          }
          noBg={true}
          descClasses={"max-w-[700px]"}
          titleClasses="xl:mb-[60px]"
        />

        <ServiceStack
          title={
            <>
              nft
              <br className="hidden lg:block" /> development
              <br className="hidden lg:block" /> stack
            </>
          }
          desc={
            <>
              We support NFT development on
              <br /> a wide array of blockchain platforms <br /> to ensure the
              best fit for your needs
            </>
          }
          data={nftStackData}
          twoColumns={true}
          noMarginBottom={true}
          typographyContainer={"md:items-start"}
        />

        <Feedback />
        <div className="w-full overflow-hidden">
          {" "}
          <OtherServices
            tag={"Other Blockchain Services"}
            title={
              <>
                In addition to <br className="hidden md:block" />
                <span className="violet-gradient-text">NFT development</span>
                <br />
                Cowchain offers <br className="hidden md:block" /> a variety{" "}
                <br className="hidden md:block" /> of{" "}
                <span className="violet-gradient-text">
                  complementary <br /> services:
                </span>
              </>
            }
            data={OtherNftData}
          />
        </div>

        <WhiteLabelCases
          title="our cases"
          desc=""
          blockClasses="md:pb-[60px]"
        />
        <Cases />
        <CasesMobile />

        <div className="w-full overflow-hidden">
          <FAQ
            data={faqNftData}
            noBg={true}
            titleClasses="xl:text-[60px] lg:leading-[53.7px]"
            faqHorizontalPadding={true}
          />
        </div>

        <Contact className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]" />
      </section>
    </>
  );
};

export default NftDevelopment;
