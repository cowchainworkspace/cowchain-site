import Contact from "@/components/Contact";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import Achievements from "../components/service/blocks/Achievements";
import FAQ from "../components/service/blocks/FAQ";
import { Feedback } from "../components/service/blocks/Feedback";
import { HeroSection } from "../components/service/blocks/HeroSection";
import { Industries } from "../components/service/blocks/Industries/index";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import { TustByNumbers } from "../web3_fullstack_development/blocks/TustByNumbers";
import { WhiteLabelCases } from "./blocks/WhiteLabelCases";
import { metadata } from "./utils/WhiteLabelDevMetadata";
import { faqDappData, otherServices, whiteProcessData } from "./utils/data";
import { IndustriesDexData } from "./utils/data";
import {
  TustByNumbersData,
  faqQuestions,
  whiteLabelSolutions
} from "./utils/data";
export { metadata };

const WhiteLabelDev = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        title={"White Label Web Development Services"}
        desc={
          <>
            Elevate your offerings with our customizable white label solutions.
            Cowchain provides expert, <br className="hidden lg:block" />
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
            <br className="hidden lg:block" />
            offers businesses an opportunity to expand their{" "}
            <br className="hidden lg:block" />
            end-to-end services to empower one to build{" "}
            <br className="hidden lg:block" /> service portfolio
            <span className="violet-gradient-text">
              without the need for extensive <br className="hidden lg:block" />{" "}
              in-house resources
            </span>
            . At Cowchain, we understand <br className="hidden lg:block" /> the
            importance of
            <span className="violet-gradient-text">
              delivering high-quality, custom <br className="hidden lg:block" />
              web and mobile app solutions
            </span>{" "}
            tailored to each
            <br className="hidden lg:block" />
            in{" "}
            <span className="violet-gradient-text">
              secure and customized solutions
            </span>{" "}
            tailored to each <br className="hidden lg:block" />
            client’s needs. Whether you are a firm looking for
            <br className="hidden lg:block" />
            white label services or a business in need of a white{" "}
            <br className="hidden lg:block" />
            label partner, we’ve got you covered
          </>
        }
      />

      <KeyFeatures
        isOneBlock={true}
        title={"What is White Label?"}
        noBg={true}
        isWhiteLabelBg={true}
        desc={
          <>
            White label development services allow businesses to expand their
            offerings without the need to hire or{" "}
            <br className="hidden lg:block" /> manage an in-house development
            team. This model is perfect for companies facing resource
            constraints, <br className="hidden lg:block" /> tight deadlines, or
            budget limitations. By partnering with a white label web development
            company, you can <br className="hidden lg:block" /> outsource tasks
            like custom web app creation, platform integration, or ongoing
            maintenance while keeping <br className="hidden lg:block" /> your
            brand at the forefront.
            <p>
              <br />
            </p>
            Why is this important? It lets you focus on winning new clients and
            growing your business, while experts
            <br className="hidden lg:block" /> handle the technical work behind
            the scenes. No additional overhead. No stress. Curious how white
            label <br className="hidden lg:block" /> development can help your
            business? Book a call with us today and discover the possibilities!
            <br />
            <br />
            <p>
              Curious how white label development can help your business? Book a
              call with us today and discover the possibilities!
            </p>
          </>
        }
      />

      <Industries data={whiteLabelSolutions} fullGrid />

      <TustByNumbers home data={TustByNumbersData} />

      <Industries
        title={"Industries We Serve"}
        desc={"Our Web3 white label division works with various industries"}
        data={IndustriesDexData}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[60px]"
      />

      <KeyFeatures
        isOneBlock={true}
        title={
          <>
            Advantages <br className="hidden lg:block" /> of White-Label
            <br className="hidden lg:block" /> Web Development
          </>
        }
        desc={
          <>
            Our white label development company guarantees that clients receive
            high-quality, scalable solutions,
            <br className="hidden lg:block" /> helping them expand their online
            presence. By leveraging white label website development,
            <br className="hidden lg:block" /> combined with app development,
            you gain access to a skilled team that ensures professional
            <br className="hidden lg:block" /> results while maintaining full
            control over branding and client relationships
            <p>
              <br />
            </p>
            Additionally, our services are fully customizable. From complex
            applications and feature-rich
            <br className="hidden lg:block" /> platforms to simple landing
            pages, we provide the necessary tools and expertise to deliver
            <br className="hidden lg:block" /> solutions that match their
            requirements
          </>
        }
        titleClasses="max-w-[573px] lg:mb-[60px]"
        descClasses={"max-w-[798px]"}
      />
      <FAQ
        title={"Our Proven Process"}
        desc={
          <>
            <p className="text-secondary">
              At Cowchain, we believe in a well-structured
              <br className="hidden lg:block" /> approach to delivering
              high-quality white label
              <br className="hidden lg:block" /> development services. From
              analyzing your clients’
              <br className="hidden lg:block" /> needs to creating custom web
              and mobile solutions, our process is transparent and focused on
              results.
            </p>
            <br />
            <p className="text-secondary">
              We understand that businesses need reliable
              <br className="hidden lg:block" /> partners, and our web
              development ensures
              <br className="hidden lg:block" /> consistent performance across
              all project stages.
            </p>
          </>
        }
        data={whiteProcessData}
        noBg={true}
        isSecondary={true}
        isTwoHalf={true}
        itemsClasses={"py-[74.5px]"}
        hasIcon={false}
        faqGradient={true}
      />
      <ServiceStack home={true} />
      <KeyFeatures
        isOneBlock={true}
        title={"Why choose us?"}
        desc={
          <>
            Choosing Cowchain as your white label web development partner gives
            you access to a team that values
            <br className="hidden lg:block" /> flexibility, innovation, and
            reliability. We prioritize building long-term relationships,
            ensuring that your clients
            <br className="hidden lg:block" /> receive high-quality, customized
            solutions without the need for extensive internal resources. Our
            deep
            <br className="hidden lg:block" /> expertise in web and app
            technologies allows us to handle complex projects while you maintain
            full
            <br className="hidden lg:block" /> control over branding and client
            communication
          </>
        }
        noBg={true}
        titleClasses="lg:mb-[60px]"
      />
      <OtherServices
        title={
          <>
            In addition to <br />
            <span className="violet-gradient-text">
              white label <br /> development, <br />
            </span>
            Cowchain offers <br />
            a variety <br /> of{" "}
            <span className="violet-gradient-text">
              complementary <br /> services
            </span>
          </>
        }
        data={otherServices}
        tag={"other our services"}
      />
      <Feedback />
      <WhiteLabelCases />
      <Cases />
      <CasesMobile />
      <FAQ data={faqQuestions} noBg={true} faqHorizontalPadding={true} />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default WhiteLabelDev;
