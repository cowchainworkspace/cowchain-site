import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import Contact from "@/components/Contact";
import FAQ from "../components/service/blocks/FAQ";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { Industries } from "../components/service/blocks/Industries/index";
import { Feedback } from "../components/service/blocks/Feedback";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import { faqDappData, otherServices } from "./utils/data";
import { IndustriesDexData } from "./utils/data";
import { TustByNumbersData, whiteLabelSolutions } from "./utils/data";
import { TustByNumbers } from "../full_stack_development/blocks/TustByNumbers";
import { CasesHead } from "../full_stack_development/blocks/CasesHead";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import { metadata } from "./utils//WhiteLabelDevMetadata";

export { metadata };

const WhiteLabelDev = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        tag={"White Label Development"}
        title={"White Label Web Development Services"}
        desc={
          <>
            Elevate your offerings with our customizable white label solutions.
            Cowchain provides expert, <br />
            customizable solutions that allow you to deliver exceptional digital
            products and platforms
          </>
        }
      />
      <Achievements
        tag={"white label web design & development services"}
        desc={
          <>
            In today’s digital world,{" "}
            <span className="violet-gradient-text">
              white label web development
            </span>{" "}
            <br />
            offers businesses an opportunity to expand their <br />
            end-to-end services to empower one to build <br /> service portfolio
            <span className="violet-gradient-text">
              without the need for extensive <br /> in-house resources
            </span>
            . At Cowchain, we understand <br /> the importance of
            <span className="violet-gradient-text">
              delivering high-quality, custom <br />
              web and mobile app solutions
            </span>{" "}
            tailored to each
            <br />
            in{" "}
            <span className="violet-gradient-text">
              secure and customized solutions
            </span>{" "}
            tailored to each <br />
            client’s needs. Whether you are a firm looking for
            <br />
            white label services or a business in need of a white <br />
            label partner, we’ve got you covered
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={"What is White Label?"}
        desc={
          <>
            White label development services allow businesses to expand their
            offerings without the need to hire or manage an in-house development
            team. This model is perfect for companies facing resource
            constraints, tight deadlines, or budget limitations. By partnering
            with a white label web development company, you can outsource tasks
            like custom web app creation, platform integration, or ongoing
            maintenance while keeping your brand at the forefront.
            <p>
              <br />
            </p>
            Why is this important? It lets you focus on winning new clients and
            growing your business, while experts handle the technical work
            behind the scenes. No additional overhead. No stress. Curious how
            white label development can help your business? Book a call with us
            today and discover the possibilities!
          </>
        }
      />

      <Industries
        data={whiteLabelSolutions}
        fullGrid
      />

      <TustByNumbers home data={TustByNumbersData} />

      <Industries
        title={"Industries We Serve"}
        desc={"Our Web3 white label division works with various industries"}
        data={IndustriesDexData}
      />

      <KeyFeatures
        isOneBlock={true}
        title={"Advantages of White-Label Web Development"}
        desc={
          <>
            ur white label development company guarantees that clients receive
            high-quality, scalable solutions, helping them expand their online
            presence. By leveraging white label website development, combined
            with app development, you gain access to a skilled team that ensures
            professional results while maintaining full control over branding
            and client relationships
            <p>
              <br />
            </p>
            Additionally, our services are fully customizable. From complex
            applications and feature-rich platforms to simple landing pages, we
            provide the necessary tools and expertise to deliver solutions that
            match their requirements
          </>
        }
      />
      <FAQ data={faqDappData} />
      <ServiceStack />
      <KeyFeatures
        isOneBlock={true}
        title={"Why choose us?"}
        desc={
          <>
            Choosing Cowchain as your white label web development partner gives
            you access to a team that values flexibility, innovation, and
            reliability. We prioritize building long-term relationships,
            ensuring that your clients receive high-quality, customized
            solutions without the need for extensive internal resources. Our
            deep expertise in web and app technologies allows us to handle
            complex projects while you maintain full control over branding and
            client communication
          </>
        }
      />
      <OtherServices
        title={
          <>
            Alongside
            <span className="violet-gradient-text">
              full <br /> stack development <br /> services,
            </span>
            , Cowchain <br /> offers
            <span className="violet-gradient-text">
              additional <br /> support services
            </span>{" "}
            <br />
            to fully back your
            <br /> project
          </>
        }
        data={otherServices}
      />
      <Feedback />
      <CasesHead />
      <Cases />
      <CasesMobile />
      <FAQ />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default WhiteLabelDev;
