"use client";

import Cases from "./Cases";
import Clients from "./Clients";
import Contact from "@/components/Contact";
import FAQ from "../../services/components/service/blocks/FAQ";
import Team from "./Team";
import CasesMobile from "./CasesMobile.jsx";
import { KeyFeatures } from "../../services/components/service/blocks/KeyFeatures";
import { ServiceStack } from "../../services/components/service/blocks/stack";
import { ExpertiseServices } from "../../services/components/service/blocks/ExpertiseServices";
import { Industries } from "../../services/components/service/blocks/Industries";
import { Feedback } from "../../services/components/service/blocks/Feedback";
import { OtherServices } from "../../services/components/service/blocks/OtherServices";
import { TustByNumbers } from "../../services/full_stack_development/blocks/TustByNumbers";
import Advantages from "./Advantages";
import {
  FSExpertiseData,
  TustByNumbersData,
  ourServices,
  web3DevData,
  servedIndustriesData,
  useCases,
  engagementModels,
  WhyClientChooseData,
  otherServiceData
} from "../utils/homeData";

export default function HomeContent() {
  return (
    <>
      <KeyFeatures
        isOneBlock={true}
        topBorder={false}
        noBg={true}
        tag={"about Cowchain"}
        title={
          <>
            Web3 Development <br /> Company
          </>
        }
        desc={
          "At Cowchain, we are a Web3 development company with a proven track record in creating decentralized applications, smart contracts, and blockchain solutions. Our focus is on unlocking new revenue streams for businesses through secure and transparent blockchain integration. Leveraging a wealth of expertise in emerging technologies, the team delivers custom solutions that ensure transparency, security, and a streamlined flow of operations"
        }
      />
      <TustByNumbers
        home
        data={TustByNumbersData}
        desc={
          "At Cowchain, we are a Web3 development company with a proven track record in creating decentralized applications, smart contracts, and blockchain solutions. Our focus is on unlocking new revenue streams for businesses through secure and transparent blockchain integration. Leveraging a wealth of expertise in emerging technologies, the team delivers custom solutions that ensure transparency, security, and a streamlined flow of operations"
        }
      />
      <Clients />
      <Industries
        isTwoSides={true}
        title={
          <>
            Our <br className="block sm:hidden" /> Services
          </>
        }
        desc={
          "We offer a full range of services to take your project from an idea to a working solution"
        }
        data={ourServices}
      />
      <div className="block md:hidden">
        <FAQ
          noBg={true}
          title={
            <>
              Our Web3 <br /> development <br /> services
            </>
          }
          data={web3DevData}
          desc="As a leading Web3 development company, Cowchain delivers Web3 development services that empower businesses to fully utilize decentralized technologies. 
Each solution is crafted with precision, 
and aimed at solving real-world challenges"
        />
      </div>
      <div className="hidden md:block">
        <FAQ
          noBg={true}
          title={
            <>
              Our Web3 <br /> development <br /> services
            </>
          }
          data={web3DevData}
        />
      </div>
      <ServiceStack home />
      <Advantages />
      <ExpertiseServices
        tag="web3 development process"
        data={FSExpertiseData}
        title={
          <>
            Each project follows <br />
            a structured path, <br />
            designed to
            <span className="violet-gradient-text">
              minimize
              <br />
              risks
            </span>{" "}
            and
            <span className="violet-gradient-text">
              deliver <br /> results
            </span>{" "}
            that aligned <br /> with your requirements
          </>
        }
      />
      <Industries
        title={"Industries Benefiting from Web3 Solutions"}
        desc={
          "The adaptability of Web3 development allows us to cater to a variety of industries,  each gaining significant value from blockchain technologies"
        }
        data={servedIndustriesData}
        topBorder={false}
        bottomBorder={false}
      />
      <OtherServices
        title={
          <>
            The applications of <br />
            <span className="violet-gradient-text">Web3 development</span>
            From{" "}
            <span className="violet-gradient-text">
              decentralized <br /> exchanges
            </span>{" "}
            to{" "}
            <span className="violet-gradient-text">
              NFT <br /> platforms
            </span>
            , <br />
            the potential for <br />
            innovation is limitless
          </>
        }
        data={useCases}
        tag="web3 development use cases"
      />
      <Cases />
      <CasesMobile />
      <Feedback />
      <Team />
      <ExpertiseServices
        topBorder={false}
        title={
          <>
            We offer adaptable <br />
            engagement models
            <br />
            to best suit your <br />
            project’s needs
          </>
        }
        data={engagementModels}
        tag="engagement models"
      />
      <Industries
        title={
          <>
            Why <br className="hidden md:block" />
            Clients
            <br />
            Choose <br />
            Cowchain
          </>
        }
        isTwoSides={true}
        topBorder={false}
        bottomBorder={false}
        data={WhyClientChooseData}
      />
      <OtherServices
        noItemsBorders={true}
        title={
          <>
            Cowchain{" "}
            <span className="violet-gradient-text">
              provides <br /> a full range
            </span>
            of <br />
            supplementary <br />
            services to ensure <br />
            your blockchain <br />
            project <span className="violet-gradient-text">thrives</span>
          </>
        }
        data={otherServiceData}
        tag="additional services"
      />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
      <FAQ faq={true} />
    </>
  );
}
