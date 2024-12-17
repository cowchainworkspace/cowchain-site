import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import Contact from "@/components/Contact";
import FAQ from "../components/service/blocks/FAQ";
import { TustByNumbers } from "./blocks/TustByNumbers";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import { Industries } from "../components/service/blocks/Industries/index";
import { Feedback } from "../components/service/blocks/Feedback";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { CasesHead } from "./blocks/CasesHead";
import { FSExpertiseDesc } from "./utils/data";
import { FSExpertiseData } from "./utils/data";
import { servedIndustriesData } from "./utils/data";
import { AdvantageseData } from "./utils/data";
import { DevProcessData } from "./utils/data";
import { chooseUsData } from "./utils/data";
import { otherServiceData } from "./utils/data";
import { faqData } from "./utils/data";

export const metadata = {
  metadataBase: new URL("https://cowchain.io/services"),
  alternates: {
    canonical: "/dex_development"
  }
};

const FullStackDevelopment = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        tag={"Full Stack Development"}
        title={"Full Stack Development"}
        desc={
          <>
            Looking for a full stack development company? Cowchain offers
            comprehensive full stack development <br /> services, handling both
            the visuals users love and the logic they rely on
          </>
        }
      />
      <Achievements
        tag={"full-stack development company"}
        desc={
          <>
            At Cowchain, we specialize in delivering{" "}
            <span className="violet-gradient-text">
              complete
              <br />
              full stack development services
            </span>{" "}
            , covering all <br />
            aspects of digital product creation. As a{" "}
            <span className="violet-gradient-text">
              full stack <br />
              software development company
            </span>
            , we create scalable <br />
            solutions, ensuring seamless operation across all <br />
            system components. By leveraging
            <span className="violet-gradient-text">
              {" "}
              cutting-edge <br /> technologies
            </span>
            , our engineers deliver systems that <br />
            work{" "}
            <span className="violet-gradient-text">
              flawlessly across platforms
            </span>
            , adapting to the <br />
            unique needs of your business
          </>
        }
      />
      <TustByNumbers />
      <ExpertiseServices
        title={
          <>
            Expertise of <br />
            Our Full-Stack <br />
            Development <br />
            Services
          </>
        }
        desc={FSExpertiseDesc}
        data={FSExpertiseData}
        noBg={true}
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
      <ExpertiseServices
        title={
          <>
            Advantages <br />
            of Choosing <br />
            Full-Stack
            <br />
            Development
          </>
        }
        data={AdvantageseData}
        noBg={true}
      />
      <ExpertiseServices
        title={
          <>
            Our Development <br />
            Process
          </>
        }
        desc={
          "Our full stack development company follows a structured process to ensure that every project is delivered on time, meets client expectations, and is optimized for performance"
        }
        data={DevProcessData}
        topBorder={false}
        bottomBorder={false}
      />
      <FAQ
        noBg={true}
        title={
          <>
            Why <br /> Choose <br /> Us?
          </>
        }
        data={chooseUsData}
      />
      <ServiceStack />
      <Feedback />
      <CasesHead />
      <Cases />
      <CasesMobile />
      <OtherServices
        title={
          <>
            In addition <br /> to{" "}
            <span className="violet-gradient-text">
              dex platform
              <br />
              development
            </span>
            ,<br />
            we offer <br />
            the following <br />
            <span className="violet-gradient-text">blockchain</span> services
          </>
        }
        data={otherServiceData}
      />
      <FAQ data={faqData} />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default FullStackDevelopment;
