import Contact from "@/components/Contact";
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
import { OtherServices } from "../components/service/blocks/OtherServices";
import { WhiteLabelCases } from "../white-label-solutions/blocks/WhiteLabelCases";

import {
  getFaqSchema,
  getServiceSchema,
  setBreadcrumbSchemaServices
} from "@/lib/utils";
import { stablecoinDevelopmentSchema } from "@/lib/constants/servicesSchemas";
import { metadata } from "./utils/stablecoinMetadata";
import {
  stablecoinBenefits,
  stablecoinCompliance,
  stablecoinExpertise,
  stablecoinFaqData,
  stablecoinIndustries,
  stablecoinOtherServices
} from "./utils/data";

export { metadata };

const StablecoinDevelopment = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "Stablecoin & Payments Development",
    "stablecoin-development"
  );
  const serviceSchema = getServiceSchema(stablecoinDevelopmentSchema);
  const faqSchema = getFaqSchema(stablecoinFaqData);

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section>
        <HeroSection
          title={"Stablecoin Development & Payments Company"}
          desc={
            <>
              Cowchain builds stablecoins and the payment rails around them —
              from fiat-backed tokens to cross-border settlement that moves money
              in seconds, 24/7.
            </>
          }
        />

        <Achievements
          tag={"What we build"}
          desc={
            <>
              We help businesses launch{" "}
              <span className="violet-gradient-text">stablecoins</span> and
              integrate{" "}
              <span className="violet-gradient-text">
                stablecoin payment rails
              </span>{" "}
              — fiat-backed, crypto-collateralized, and yield-bearing designs
              with the compliance and settlement logic real payments require.
            </>
          }
          sub={
            "Stablecoins have become the internet's settlement layer: an estimated $46 trillion+ moved through stablecoins in 2025, more than Visa's annual volume. In 2026, clearer regulation and enterprise adoption are pushing stablecoins into mainstream payments, treasury, and cross-border use. Cowchain delivers the token, the reserves, the compliance controls, and the rails as one production-ready system."
          }
          subClasses="max-w-[880px]"
        />

        <KeyFeatures
          isOneBlock={true}
          title={"Stablecoins as Payment Infrastructure"}
          desc={
            <>
              A stablecoin is only useful if people can actually pay with it. We
              design the full stack: mint and burn logic, reserve management and
              proof-of-reserves, on/off-ramps, merchant checkout, mass payouts,
              and remittance corridors.
              <br />
              <br />
              Every build is engineered for solvency and trust — auditable
              reserves, pause controls, and monitoring — so your network holds up
              under real volume.
            </>
          }
          noBg={true}
          descClasses={"max-w-[640px]"}
          titleClasses="lg:mb-[60px]"
        />

        <ExpertiseServices
          data={stablecoinExpertise}
          title={
            <>
              Stablecoin <br className="hidden md:block" />
              Services <br className="hidden md:block" />
              We Provide
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
        />

        <Industries
          title={"Who We Build For"}
          data={stablecoinIndustries}
          topBorder={false}
          desc={
            "Stablecoin payments now touch every industry that moves money across borders or needs programmable settlement. These are the teams we build for most."
          }
        />

        <ExpertiseServices
          threeColumns
          data={stablecoinBenefits}
          title={
            <>
              Why <br />
              Stablecoin <br />
              Payments
            </>
          }
          containerClasses="grid-cols-1 md:grid-cols-2"
        />

        <ExpertiseServices
          data={stablecoinCompliance}
          topBorder={false}
          title={
            <>
              Compliance, <br className="hidden md:block" />
              Reserves & <br className="hidden md:block" />
              Security
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
        />

        <Feedback
          desc="Clients trust Cowchain to ship payment systems that are secure, solvent, and built to last. Here's what they say"
        />

        <div className="w-full overflow-hidden">
          <OtherServices
            tag={"Other Blockchain Services"}
            title={
              <>
                Beyond{" "}
                <span className="violet-gradient-text">
                  stablecoin development
                </span>
                , Cowchain offers complementary services that give your token
                real utility and reach.
              </>
            }
            data={stablecoinOtherServices}
          />
        </div>

        <WhiteLabelCases title="our cases" hasNoDescription={true} />
        <Cases />
        <CasesMobile />

        <div className="w-full overflow-hidden">
          <FAQ data={stablecoinFaqData} noBg={true} faqHorizontalPadding={true} />
        </div>

        <Contact
          title={"Ready to launch your stablecoin or payment rail?"}
          desc={
            "Tell us what you want to settle, where, and under which rules — we'll design the token, the reserves, the compliance, and the rails to make it work."
          }
          className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]"
        />
      </section>
    </>
  );
};

export default StablecoinDevelopment;
