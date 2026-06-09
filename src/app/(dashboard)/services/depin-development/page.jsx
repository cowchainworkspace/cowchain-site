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
  getHowToSchema,
  getServiceSchema,
  setBreadcrumbSchemaServices
} from "@/lib/utils";
import { depinDevelopmentSchema } from "@/lib/constants/servicesSchemas";
import { metadata } from "./utils/depinMetadata";
import {
  depinBenefits,
  depinExpertise,
  depinFaqData,
  depinHowItWorks,
  depinIndustries,
  depinOtherServices
} from "./utils/data";

export { metadata };

const DepinDevelopment = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "DePIN Development",
    "depin-development"
  );
  const serviceSchema = getServiceSchema(depinDevelopmentSchema);
  const faqSchema = getFaqSchema(depinFaqData);
  const howToSchema = getHowToSchema(
    "How Cowchain builds a DePIN network",
    depinHowItWorks
  );

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
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <section>
        <HeroSection
          title={"DePIN Development Company"}
          desc={
            <>
              Cowchain builds Decentralized Physical Infrastructure Networks —
              token incentives, device onboarding, proof-of-physical-work, and
              marketplaces that turn real-world hardware into a network.
            </>
          }
        />

        <Achievements
          tag={"Decentralized Physical Infrastructure"}
          desc={
            <>
              We help teams launch{" "}
              <span className="violet-gradient-text">DePIN networks</span> that
              reward people for supplying{" "}
              <span className="violet-gradient-text">
                compute, storage, bandwidth, and sensor data
              </span>{" "}
              — coordinated on-chain instead of by a single company.
            </>
          }
          sub={
            "DePIN is one of 2026's defining trends: the combined market cap of DePIN tokens passed $60 billion, and AI gave the sector a second act as compute networks attract real workloads and revenue. Cowchain designs the token economics, builds the device and verification layers, and ships the marketplace that connects real-world supply to paying demand."
          }
          subClasses="max-w-[880px]"
        />

        <KeyFeatures
          isOneBlock={true}
          title={"How a DePIN Network Works"}
          desc={
            <>
              A DePIN network coordinates physical hardware through tokens:
              contributors plug in devices, the network verifies the work they do,
              and smart contracts reward them — while buyers purchase the resource
              on an open marketplace.
              <br />
              <br />
              The hard part is the economics. We model supply incentives and
              demand-side pricing before launch so rewards track real usage, not
              inflation.
            </>
          }
          noBg={true}
          descClasses={"max-w-[640px]"}
          titleClasses="lg:mb-[60px]"
        />

        <ExpertiseServices
          data={depinExpertise}
          title={
            <>
              DePIN <br className="hidden md:block" />
              Services <br className="hidden md:block" />
              We Provide
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
        />

        <ExpertiseServices
          threeColumns
          data={depinBenefits}
          topBorder={false}
          title={
            <>
              Why <br />
              Build <br />
              DePIN
            </>
          }
          containerClasses="grid-cols-1 md:grid-cols-2"
        />

        <ExpertiseServices
          data={depinHowItWorks}
          topBorder={false}
          title={
            <>
              Our DePIN <br className="hidden md:block" />
              Build <br className="hidden md:block" />
              Process
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
        />

        <Industries
          title={"DePIN Network Types"}
          data={depinIndustries}
          topBorder={false}
          desc={
            "From AI compute to wireless coverage, DePIN applies wherever physical capacity can be crowdsourced and verified. These are the network types we build most."
          }
        />

        <Feedback
          desc="Clients trust Cowchain to design token economies and infrastructure that actually hold up in production. Here's what they say"
        />

        <div className="w-full overflow-hidden">
          <OtherServices
            tag={"Other Blockchain Services"}
            title={
              <>
                Beyond{" "}
                <span className="violet-gradient-text">DePIN development</span>,
                Cowchain provides the surrounding stack your network needs to
                settle, scale, and serve demand.
              </>
            }
            data={depinOtherServices}
          />
        </div>

        <WhiteLabelCases title="our cases" hasNoDescription={true} />
        <Cases />
        <CasesMobile />

        <div className="w-full overflow-hidden">
          <FAQ data={depinFaqData} noBg={true} faqHorizontalPadding={true} />
        </div>

        <Contact
          title={"Ready to build your DePIN network?"}
          desc={
            "Tell us what real-world resource you want to decentralize. We'll model the economics and build the network that rewards it."
          }
          className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]"
        />
      </section>
    </>
  );
};

export default DepinDevelopment;
