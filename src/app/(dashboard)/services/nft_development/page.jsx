import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import Contact from "@/components/Contact";
import FAQ from "../components/service/blocks/FAQ";
import { Industries } from "../components/service/blocks/Industries";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import { Feedback } from "../components/service/blocks/Feedback";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import {
  DeFiBenefitsData,
  nftServicesData,
  nftProcessData,
  NftIndustriesData,
  OtherNftData,
  faqNftData
} from "./utils/data";
import { nftStackData } from "../components/service/blocks/stack/data";
import { metadata } from "./utils/NftDevMetadata";

export { metadata };


const NftDevelopment = () => {
  return (
    <section>
      <HeroSection
        tag={"NFT Development"}
        title={"NFT Development Company"}
        desc={
          <>
            Cowchain provides reliable and creative NFT development services,
            offering end-to-end solutions <br />
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
            , Cowchain delivers <br />
            innovative solutions for{" "}
            <span className="violet-gradient-text">
              creating, managing, <br /> and launching NFTs
            </span>{" "}
            across industries. <br />
            Our approach to{" "}
            <span className="violet-gradient-text">
              blockchain NFT development
            </span>{" "}
            <br />
            ensures that your digital assets are accessible <br />
            <span className="violet-gradient-text">
              without compromising on performance
            </span>
          </>
        }
      />
      <KeyFeatures
        title={"DeFi Development"}
        data={nftServicesData}
        desc={
          <>
            As a leading decentralized finance development company, we
            specialize in creating innovative DeFi solutions that redefine how
            businesses and individuals interact with financial systems.
            <p>
              <br />
            </p>
            Our solutions encompass smart contracts, liquidity protocols, and
            more to streamline decentralized transactions
          </>
        }
      />

      <FAQ
        title={
          <>
            Our Non-Fungible <br />
            Token Development <br />
            Process
          </>
        }
        desc={
          "Our NFT development team follows a systematic approach to ensure that each project is handled with care from start to finish, delivering high-quality outcomes. By focusing on every detail of nft development, we create platforms that are robust and adaptable to evolving business needs, enabling clients to achieve lasting impact"
        }
        data={nftProcessData}
      />

      <Industries
        title={"NFT Across Industries"}
        desc={
          "NFTs are reshaping industries, opening unprecedented opportunities for businesses and creators. As a leading NFT development agency, Cowchain provides solutions that unlock the true potential of non-fungible tokens across multiple sectors"
        }
        data={NftIndustriesData}
        topBorder={false}
      />

      <ExpertiseServices
        threeColumns
        data={DeFiBenefitsData}
        title={
          <>
            Benefits <br />
            of DeFi <br />
            Development
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={"Why Choose Us As Your NFT Development Company"}
        desc={
          "Cowchain is recognized as a leading NFT development company, with a reputation for delivering high-qualityNon-Fungible Token development solutions. Our team of NFT developers offers in-depth knowledge in creating cutting-edge solutions for both businesses and creators"
        }
      />

      <ServiceStack
        title={"nft development stack"}
        desc={
          "We support NFT development on a wide array of blockchain platforms to ensure the best fit for your needs"
        }
        data={nftStackData}
        twoColumns={true}
      />

      <Feedback />

      <OtherServices
        tag={"Other Blockchain Services"}
        title={
          <>
            In addition to <br />
            <span className="violet-gradient-text">NFT development</span>
            <br />
            Cowchain offers <br /> a variety <br /> of
            <span className="violet-gradient-text">
              complementary <br /> services
            </span>
          </>
        }
        data={OtherNftData}
        bottomBorder={false}
      />
      <FAQ data={faqNftData} />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default NftDevelopment;
