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
import { aiAgentDevelopmentSchema } from "@/lib/constants/servicesSchemas";
import { metadata } from "./utils/aiAgentMetadata";
import {
  aiAgentBenefits,
  aiAgentExpertise,
  aiAgentFaqData,
  aiAgentHowItWorks,
  aiAgentIndustries,
  aiAgentOtherServices
} from "./utils/data";

export { metadata };

const AiAgentDevelopment = () => {
  const breadcrumbList = setBreadcrumbSchemaServices(
    "AI Agent Development",
    "ai-agent-development"
  );
  const serviceSchema = getServiceSchema(aiAgentDevelopmentSchema);
  const faqSchema = getFaqSchema(aiAgentFaqData);
  const howToSchema = getHowToSchema(
    "How Cowchain builds safe on-chain AI agents",
    aiAgentHowItWorks
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
          title={"AI Agent Development Company"}
          desc={
            <>
              Cowchain builds autonomous on-chain AI agents — with their own
              wallets, spending limits, and the ability to transact, pay, and act
              on smart contracts without a human in the loop.
            </>
          }
        />

        <Achievements
          tag={"The agent economy is here"}
          desc={
            <>
              We build{" "}
              <span className="violet-gradient-text">
                autonomous AI agents
              </span>{" "}
              that don't just analyze — they{" "}
              <span className="violet-gradient-text">act on-chain</span>: holding
              assets, executing transactions, and paying for services
              autonomously.
            </>
          }
          sub={
            "2026 is the year AI agents became users of the blockchain, not just a narrative. Agentic wallets shipped from major exchanges, and the x402 payment standard for machine-to-machine transactions was adopted across leading cloud and AI platforms. In a HashKey/HKUST survey, on-chain autonomous agents earned an 86.8% approval rating among institutions — the highest of any emerging trend. Cowchain builds the wallets, guardrails, and payment rails that make agent autonomy safe and useful."
          }
          subClasses="max-w-[880px]"
        />

        <KeyFeatures
          isOneBlock={true}
          title={"What an On-Chain AI Agent Actually Does"}
          desc={
            <>
              An on-chain AI agent pairs an AI model with its own smart-account
              wallet. It can decide and then execute — swapping, paying for an
              API, rebalancing a position, or triggering a contract — all within
              spending caps and policies you control.
              <br />
              <br />
              The result is automation that moves real value safely: every action
              is logged on-chain, capped, and reversible by design.
            </>
          }
          noBg={true}
          descClasses={"max-w-[640px]"}
          titleClasses="lg:mb-[60px]"
        />

        <ExpertiseServices
          data={aiAgentExpertise}
          title={
            <>
              AI Agent <br className="hidden md:block" />
              Services <br className="hidden md:block" />
              We Provide
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
        />

        <ExpertiseServices
          threeColumns
          data={aiAgentBenefits}
          topBorder={false}
          title={
            <>
              Why <br />
              On-Chain <br />
              Agents
            </>
          }
          containerClasses="grid-cols-1 md:grid-cols-2"
        />

        <ExpertiseServices
          data={aiAgentHowItWorks}
          topBorder={false}
          title={
            <>
              How We <br className="hidden md:block" />
              Build Safe <br className="hidden md:block" />
              Agents
            </>
          }
          sectionContainerClasses={"md:flex-row md:gap-5"}
        />

        <Industries
          title={"Where Agents Create Value"}
          data={aiAgentIndustries}
          topBorder={false}
          desc={
            "Anywhere decisions need to become transactions in real time, an autonomous agent outperforms a dashboard. These are the areas we build for most."
          }
        />

        <Feedback
          desc="Clients rely on Cowchain to ship AI systems that are reliable, secure, and production-ready. Here's what they say"
        />

        <div className="w-full overflow-hidden">
          <OtherServices
            tag={"Other Blockchain Services"}
            title={
              <>
                Beyond{" "}
                <span className="violet-gradient-text">
                  AI agent development
                </span>
                , Cowchain provides the surrounding stack agents need to think,
                act, and settle.
              </>
            }
            data={aiAgentOtherServices}
          />
        </div>

        <WhiteLabelCases title="our cases" hasNoDescription={true} />
        <Cases />
        <CasesMobile />

        <div className="w-full overflow-hidden">
          <FAQ data={aiAgentFaqData} noBg={true} faqHorizontalPadding={true} />
        </div>

        <Contact
          title={"Ready to put an autonomous agent to work?"}
          desc={
            "Tell us what you'd hand to an agent if you trusted it with a wallet. We'll build it with the guardrails to make that trust safe."
          }
          className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]"
        />
      </section>
    </>
  );
};

export default AiAgentDevelopment;
