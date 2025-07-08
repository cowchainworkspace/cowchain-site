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
  keyFeaturesRwaPlatformData,
  realWorldRwaPlatformData,
  keyComponentsRwaData,
  benefitsOfRwaData,
  challengesRwaData
} from "./utils/data";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { WhiteLabelCases } from "../white-label-solutions/blocks/WhiteLabelCases";
import { metadata } from "./utils/RwaPlatformMetaData";
import { getServiceSchema, setBreadcrumbSchemaServices } from "@/lib/utils";
import { rwaPlatformSchema } from "@/lib/constants/servicesSchemas";

export { metadata };

const RwaPlatform = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "RWA Platform",
    "rwa_platform"
  );
  const serviceSchema = getServiceSchema(rwaPlatformSchema);

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
              RWA Platform: <br className="hidden custom1400:block" />{" "}
              Transforming Real-World <br className="hidden custom1400:block" />{" "}
              Asset Tokenization
            </>
          }
          ttileClasses="md:!pt-0"
        />
        <Achievements
          tag={"How RWA Platforms Revolutionize Asset Tokenization"}
          desc={
            <>
              Real-World Asset (RWA) platforms are{" "}
              <span className="violet-gradient-text">
                reshaping <br className="hidden custom1400:block" />
                the financial environment{" "}
              </span>{" "}
              by bringing the concept <br className="hidden custom1400:block" />
              of asset tokenization into the mainstream.{" "}
              <br className="hidden custom1400:block" />
              These platforms{" "}
              <span className="violet-gradient-text">
                {" "}
                enable the representation{" "}
                <br className="hidden custom1400:block" />
                of physical and tangible assets
              </span>
              , such as real estate,
              <br className="hidden custom1400:block" />
              commodities, or patents,{" "}
              <span className="violet-gradient-text">on the blockchain</span>,
              making <br className="hidden custom1400:block" />
              them accessible to a global network of investors.
            </>
          }
        />

        <Industries
          title={<>Key Features of an RWA Platform</>}
          titleContainerClasses="lg:gap-[26px]"
          desc="Our Web3 white label division works with various industries"
          itemTitleClasses="lg:max-w-[350px] md:text-[18px]"
          data={keyFeaturesRwaPlatformData}
          topBorder={false}
          customClasses="!grid-cols-2 !pr-0  xl:gap-y-[70px] xl:pl-[55px] xl:pr-[60px] xl:mt-[65px]"
          itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              What Is an RWA Platform and How{" "}
              <br className="hidden custom1400:block" /> Does It Work?
            </>
          }
          noBg={true}
          desc={
            <>
              <p>
                An RWA platform is a blockchain-based ecosystem designed to
                tokenize real-world assets, turning them into digital tokens
                that can be traded or managed on decentralized networks. But
                what is a RWA, and how does it transform traditional asset
                management?
              </p>
              <br />
              <p>
                By leveraging RWA blockchain technology, these platforms secure
                ownership records on immutable ledgers, providing transparency
                and efficiency. The tokenization process involves creating
                crypto RWA that represents the value of physical assets,
                enabling fractional ownership, seamless transfers, and global
                accessibility. Platforms like US Patex have already begun
                integrating these capabilities to revolutionize the financial
                industry
              </p>
            </>
          }
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <ExpertiseServices
          title={
            <>
              Benefits <br className="hidden custom1400:block" /> of Tokenizing{" "}
              <br className="hidden custom1400:block" /> Real-World{" "}
              <br className="hidden custom1400:block" /> Assets
            </>
          }
          desc="Tokenization unlocks a wealth of opportunities for investors and asset holders alike, providing a bridge between traditional finance and blockchain innovation"
          data={benefitsOfRwaData}
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses="lg:pb-[102px]"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[60px] xl:mb-[60px]"
          bg={
            <Image
              src={dexBg}
              alt="decoration ellipse"
              className="pointer-events-none absolute -bottom-[30%] left-0 z-[0] w-auto md:h-[1600px]"
            />
          }
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              RWA Tokenization vs. Traditional{" "}
              <br className="hidden custom1400:block" /> Asset Management
            </>
          }
          desc={
            <>
              Tokenization of real-world assets fundamentally differs from
              traditional asset management methods. Traditional systems often
              rely on intermediaries, lengthy processes, and localized markets,
              limiting their accessibility and flexibility. RWA tokenization, on
              the other hand, uses blockchain to eliminate these inefficiencies.
              Investors can own fractions of assets, trade globally in
              real-time, and enjoy improved liquidity and transparency. For
              example, real estate tokenization allows users to buy shares in a
              property rather than needing to purchase the entire asset.
            </>
          }
          noBg={true}
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <ExpertiseServices
          title={
            <>
              Key Components <br className="hidden custom1400:block" /> of an
              Effective <br className="hidden custom1400:block" /> RWA Platform
            </>
          }
          desc="The success of any RWA platform hinges on its foundational elements"
          data={keyComponentsRwaData}
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses="lg:pb-[102px]"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[60px] xl:mb-[60px]"
        />

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              Role of Smart Contracts <br className="hidden custom1400:block" />{" "}
              in RWA Platforms
            </>
          }
          desc={
            <>
              Smart contracts play a pivotal role in RWA platforms by automating
              complex processes and enhancing security. These self-executing
              contracts handle tasks such as asset ownership transfers, dividend
              distribution, and compliance checks, eliminating the need for
              intermediaries. For example, an RWA platform can use smart
              contracts to automatically update ownership records after a token
              sale, ensuring transparency and reducing administrative overhead.
            </>
          }
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <ExpertiseServices
          title={
            <>
              Challenges <br className="hidden custom1400:block" /> in RWA
              Tokenization <br className="hidden custom1400:block" />
              and How Platforms <br className="hidden custom1400:block" />
              Address Them
            </>
          }
          data={challengesRwaData}
          cryptoWalletClass="lg:mb-[80px]"
          sectionContainerClasses="lg:pb-[102px]"
          itemTitleClasses="lg:text-[20px]"
          titleClasses="xl:!text-[53px] xl:mb-[60px]"
        />

        <div className="relative">
          {" "}
          <Image
            src={dexBg}
            alt="decoration ellipse"
            className="pointer-events-none absolute -bottom-[130%] left-0 z-[0] w-auto md:h-[1600px]"
          />{" "}
          <KeyFeatures
            isOneBlock={true}
            title={
              <>
                Future of RWA Platforms in{" "}
                <br className="hidden custom1400:block" /> Crypto and Blockchain
              </>
            }
            desc={
              <>
                The future of RWA platforms looks promising, driven by
                technological advancements and increasing adoption. Innovations
                like Aspis Security and integrations with tools like Base
                Sepolia RPC will further enhance the security and scalability of
                tokenized ecosystems. As these platforms gain traction, they
                will redefine the financial sector, bridging the gap between
                traditional investments and blockchain-driven solutions. The
                integration of RWA crypto projects with mainstream finance will
                create more transparent, accessible, and efficient markets.
              </>
            }
            noBg={true}
            descClasses={"max-w-[798px] !mt-[60px]"}
          />
        </div>

        <KeyFeatures
          isOneBlock={true}
          title={
            <>
              How to Get Started with <br className="hidden custom1400:block" />{" "}
              RWA Tokenization
            </>
          }
          desc={
            <>
              For investors and businesses looking to leverage RWA tokens,
              understanding the fundamentals of tokenization is essential.
              Partnering with platforms that offer integrated solutions — like
              RWA wallet functionality and adherence to regulatory standards —
              simplifies the entry into tokenized asset markets. By exploring
              the benefits of blockchain, stakeholders can unlock unprecedented
              opportunities in the global financial ecosystem.
            </>
          }
          noBg={true}
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <Industries
          title={
            <>
              Real-World Applications <br className="hidden custom1400:block" />
              of RWA Platforms
            </>
          }
          titleContainerClasses="lg:gap-[26px]"
          desc="RWA platforms are already making an impact across various industries. These examples demonstrate the versatility of RWA platforms and their ability to transform traditional industries"
          itemTitleClasses="lg:max-w-[350px] md:text-[18px]"
          data={realWorldRwaPlatformData}
          topBorder={false}
          customClasses="!grid-cols-2 !pr-0 xl:gap-y-[107px] xl:pl-[55px] xl:pr-[60px] xl:mt-[65px]"
          itemClasses="!flex-row gap-[20px] lg:gap-[49px] !min-w-full"
        />

        <KeyFeatures
          isOneBlock={true}
          title={<>Why Choose RWA Platforms?</>}
          desc={
            <>
              RWA platforms combine blockchain’s security, scalability, and
              transparency with the flexibility of tokenized assets. They cater
              to diverse financial needs, offering solutions for institutional
              investors, SMEs, and individual traders. With their proven
              capabilities in managing RWA real world assets, these platforms
              are poised to become the backbone of modern finance.
            </>
          }
          noBg={true}
          descClasses={"max-w-[798px] !mt-[60px]"}
        />

        <Feedback desc="Our clients know they can rely on Cowchain to deliver reliable, secure blockchain solutions. Here’s what they have to say" />

        <div className="relative">
          <WhiteLabelCases
            title="Our White Label Web Development Cases"
            desc="Numerous projects, such as Pixeltap, have benefited from our white label development services, enabling them to scale their platforms while maintaining user engagement and satisfaction"
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

export default RwaPlatform;
