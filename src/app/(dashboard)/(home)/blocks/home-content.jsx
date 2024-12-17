"use client";

import Benefits from "./Benefits";
import BenefitsMobiles from "./BenefitMobiles";
import Cases from "./Cases";
import Clients from "./Clients";
import Contact from "@/components/Contact";
import FAQ from "./FAQ";
import Stack from "@/components/stack";
import Team from "./Team";
import CasesMobile from "./CasesMobile.jsx";
import { KeyFeatures } from "../../services/components/service/blocks/KeyFeatures";
import { TustByNumbers } from "../../services/full_stack_development/blocks/TustByNumbers";
import { ServiceStack } from "../../services/components/service/blocks/stack";
import { ExpertiseServices } from "../../services/components/service/blocks/ExpertiseServices";
import { Industries } from "../../services/components/service/blocks/Industries";
import { Feedback } from "../../services/components/service/blocks/Feedback";
import { OtherServices } from "../../services/components/service/blocks/OtherServices";

import EcommerceIcon from "@/assets/svgComponents/industries/EcomerceIcon";
import EducationIcon from "@/assets/svgComponents/industries/EducationIcon";
import FinanceIcon from "@/assets/svgComponents/industries/FinanceIcon";
import HealthcareIcon from "@/assets/svgComponents/industries/HelthcareIcon";

export const servedIndustriesData = [
  {
    title: "Finance and Banking",
    text: "Decentralized finance revolutionizes financial services, enabling secure and transparent transaction flows across industries",
    icon: FinanceIcon
  },
  {
    title: "Healthcare Technology",
    text: "Blockchain’s secure infrastructure is transforming healthcare, providing secure data storage and streamlined communication between patients and providers",
    icon: HealthcareIcon
  },
  {
    title: "Supply Chain Management",
    text: "Blockchain technology provides traceability and transparency, ensuring every transaction and product movement is verifiable along the supply chain",
    icon: FinanceIcon
  },
  {
    title: "Gaming and Entertainment",
    text: "Web3 development solutions in gaming and entertainment create new opportunities for engagement, combining blockchain  with immersive experiences",
    icon: EducationIcon
  },
  {
    title: "E-commerce and Retail",
    text: "Decentralized systems enhance the retail experience by offering transparency, improving customer satisfaction, and streamlining operations",
    icon: EcommerceIcon
  }
];

export const WhyClientChooseData = [
  {
    title: "In-Depth Expertise",
    text: "We combine years of experience with cutting-edge solutions"
  },
  {
    title: "Value-Driven Pricing",
    text: "Our approach ensures your investment works for your business"
  },
  {
    title: "Industry Best Practices",
    text: "Adhering to the highest standards in Web3 development, we deliver solutions that last"
  },
  {
    title: "Enhanced Security",
    text: "Our platforms prioritize safety and integrity in every transaction"
  },
  {
    title: "Tailored to You",
    text: "Each solution is built around your specific needs and goals"
  }
];

export const engagementModels = [
  {
    title: "Fixed Scope",
    desc: "For projects with clear objectives and timelines, we ensure full visibility on costs and deliverables"
  },
  {
    title: "Dedicated Team",
    desc: "A team of Cowchain’s specialists works exclusively on your project, ensuring flexibility and seamless collaboration"
  },
  {
    title: "Time & Material",
    desc: "Designed for projects where requirements may evolve, this model allows for adaptability while keeping the process efficient"
  }
];

export const FSExpertiseData = [
  {
    title: "Mapping and Planning",
    desc: "Our Web 3.0 development company begins by outlining the project’s scope, aligning it with your business objectives. This foundation helps guide the entire development process"
  },
  {
    title: "Technical Architecture and Design",
    desc: "Our team of technical specialists architect a scalable, secure system tailored to your needs. We focus on both present-day operations and long-term growth, ensuring stability"
  },
  {
    title: "Development and Implementation",
    desc: "As a Web3 app development company, our development team brings the system to life, utilizing advanced blockchain technologies and ensuring each element meets the high-performance standards your business demands"
  },
  {
    title: "Comprehensive Testing",
    desc: "In-depth testing helps uncover potential issues before they impact the production environment. Cowchain’s optimization ensures that your platform is prepared to handle real-world loads without hiccups"
  },
  {
    title: "Deployment and Launch",
    desc: "Upon completion, deployment is handled with care. Whether launching on Ethereum, Solana, or other blockchains, we ensure your platform goes live seamlessly"
  },
  {
    title: "Continuous Support and Maintenance",
    desc: "Your project’s performance continues beyond launch. Ongoing monitoring, updates, and maintenance ensure that your platform stays resilient, secure, and up-to-date"
  }
];

export const otherServiceData = [
  {
    text: "UI / UX Design",
    author:
      "We create user-friendly, highly intuitive UI/UX designs that balance aesthetics with functionality for Web3 applications"
  },
  {
    text: "Blockchain Consulting",
    author:
      "Strategic advice on tokenomics, project structure, and blockchain integration to ensure your project aligns with market standards and industry needs"
  },
  {
    text: "White-Label Solutions",
    author:
      "Our white-label blockchain solutions offer flexibility for businesses or looking to launch quickly while maintaining customization and scalability"
  }
];

const TustByNumbersData = [
  {
    number: 120,
    title: "PROJECTS",
    desc: "delivered across Ethereum, Polygon,  Binance Smart Chain, and more",
    sighn: "+"
  },
  {
    number: 180,
    title: "million In",
    desc: "market capitalization managed through platforms developed by our team",
    sighn: "$"
  },
  {
    number: 20,
    title: "million+",
    desc: "fdaily trading volume on systems we’ve built",
    sighn: "$"
  },
  {
    number: 50,
    title: "Web3-native",
    desc: "developers with expertise in blockchain technology",
    sighn: "+"
  }
];

export default function HomeContent() {
  return (
    <>
      <KeyFeatures
        isOneBlock={true}
        topBorder={false}
        noBg={true}
        title={
          <>
            Web3 Development <br /> Company
          </>
        }
        desc={
          "At Cowchain, we are a Web3 development company with a proven track record in creating decentralized applications, smart contracts, and blockchain solutions. Our focus is on unlocking new revenue streams for businesses through secure and transparent blockchain integration. Leveraging a wealth of expertise in emerging technologies, the team delivers custom solutions that ensure transparency, security, and a streamlined flow of operations"
        }
      />
      <TustByNumbers data={TustByNumbersData} />
      <Clients />
      <Stack title={"Our\nExpertise"} />
      {/* {scrolling component} */}
      <ServiceStack />
      {/* {component with vertical titels and upper side} */}
      <ExpertiseServices
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
        title={"Industries We Serve"}
        desc={
          "At Cowchain, our full stack development company has delivered solutions across multiple industries. Our full stack services offer customized software solutions crafted to address requirements of every specific sector. Here are some industries we serve"
        }
        data={servedIndustriesData}
        topBorder={false}
        bottomBorder={false}
      />
      {/* {scrolling component} */}
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
      />
      <Industries
        title={
          <>
            Why <br />
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
      />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
      <FAQ />
    </>
  );
}
