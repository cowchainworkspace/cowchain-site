import servideBG from "@/assets/bg/dexServiceBg.svg";
import Contact from "@/components/Contact";
import Image from "next/image";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries/index";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import { CasesHead } from "./blocks/CasesHead";
import { TustByNumbers } from "./blocks/TustByNumbers";
import { metadata } from "./utils/FSDevMetadata";
import { FSExpertiseDesc } from "./utils/data";
import { FSExpertiseData } from "./utils/data";
import { servedIndustriesData } from "./utils/data";
import { AdvantageseData } from "./utils/data";
import { DevProcessData } from "./utils/data";
import { chooseUsData } from "./utils/data";
import { otherServiceData } from "./utils/data";
import { faqData } from "./utils/data";

export { metadata };

const FullStackDevelopment = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        tag={"Full Stack Development"}
        title={
          <>
            Full-Stack
            <br /> Development Services
          </>
        }
        desc={
          <>
            Looking for a full stack development company? Cowchain offers
            comprehensive full stack development{" "}
            <br className="hidden xl:block" /> services, handling both the
            visuals users love and the logic they rely on
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
              <br className="hidden custom1400:block" />
              full stack development services
            </span>{" "}
            , covering all <br className="hidden custom1400:block" />
            aspects of digital product creation. As a{" "}
            <span className="violet-gradient-text">
              full stack <br className="hidden custom1400:block" />
              software development company
            </span>
            , we create scalable <br className="hidden custom1400:block" />
            solutions, ensuring seamless operation across all{" "}
            <br className="hidden custom1400:block" />
            system components. By leveraging
            <span className="violet-gradient-text">
              {" "}
              cutting-edge <br className="hidden custom1400:block" />{" "}
              technologies
            </span>
            , our engineers deliver systems that{" "}
            <br className="hidden custom1400:block" />
            work{" "}
            <span className="violet-gradient-text">
              flawlessly across platforms
            </span>
            , adapting to the <br className="hidden custom1400:block" />
            unique needs of your business
          </>
        }
      />
      <TustByNumbers typographyContainerClasses="xl:pt-[170px]" />
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
        sectionContainerClasses={"md:flex-row md:gap-5"}
      />
      <Industries
        title={"Industries We Serve"}
        desc={
          <>
            At Cowchain, our full stack development company has delivered
            solutions across <br className="hidden xl:block" /> multiple
            industries. Our full stack services offer customized software
            solutions crafted
            <br className="hidden xl:block" /> to address requirements of every
            specific sector. Here are some industries we serve
          </>
        }
        data={servedIndustriesData}
        topBorder={false}
        bottomBorder={false}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
      />
      <ExpertiseServices
        title={
          <>
            Advantages <br className="hidden xl:block" />
            of Choosing <br className="hidden xl:block" />
            Full-Stack <br className="hidden xl:block" />
            Development
          </>
        }
        data={AdvantageseData}
        noBg={true}
        sectionContainerClasses={"md:flex-row md:gap-5"}
      />
      <ExpertiseServices
        title={
          <>
            Our Development <br />
            Process
          </>
        }
        desc={
          <>
            Our full stack development company follows a structured process to{" "}
            <br className="hidden xl:block" /> ensure that every project is
            delivered on time, meets client expectations,
            <br className="hidden xl:block" /> and is optimized for performance
          </>
        }
        data={DevProcessData}
        topBorder={false}
        bottomBorder={false}
        bg={
          <Image
            alt=""
            className="absolute -bottom-[45%] left-0 hidden h-screen  md:block md:block md:h-min "
            src={servideBG}
          />
        }
        sectionContainerClasses={"md:flex-row md:gap-5"}
      />
      <div className="w-full overflow-hidden">
        <FAQ
          noBg={true}
          title={
            <>
              Why <br className="hidden md:block" /> Choose <br /> Us?
            </>
          }
          data={chooseUsData}
          isTwoHalf={true}
          hasIcon={false}
          titleClasses="lg:text-[60px] leading-[0.9]"
          faqGradient={true}
        />
      </div>

      <ServiceStack
        desc={
          <>
            As a full stack development agency, we leverage a cutting-edge
            technology stack to ensure that each project is secure, scalable,
            and future-ready. Our developers are proficient in using modern
            tools across both front-end and back-end development
          </>
        }
      />
      <Feedback />
      <CasesHead />
      <Cases />
      <CasesMobile />
      <div className="w-full overflow-hidden">
        {" "}
        <OtherServices
          tag={"other our services"}
          title={
            <>
              Along side
              <span className="violet-gradient-text">
                {" "}
                full
                <br />
                stack development <br /> services,
              </span>{" "}
              cowchain <br />
              offers{" "}
              <span className="violet-gradient-text">
                additional <br /> support services
              </span>{" "}
              <br />
              to fully back your <br />
              project
            </>
          }
          data={otherServiceData}
        />
      </div>

      <div className="w-full overflow-hidden">
        <FAQ
          data={faqData}
          noBg={true}
          titleClasses="lg:text-[60px] leading-[53.7px]"
          faqHorizontalPadding={true}
        />
      </div>
      <Contact className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default FullStackDevelopment;
