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
import { otherWhiteLabelServices, whiteProcessData } from "./utils/data";
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
        tag={
          <>
            white label web design & development{" "}
            <span className="hidden md:inline">services</span>
          </>
        }
        desc={
          <>
            In today’s digital world,{" "}
            <span className="violet-gradient-text">
              white label web development
            </span>{" "}
            <br className="hidden custom1400:block" />
            offers businesses an opportunity to expand their{" "}
            <br className="hidden custom1400:block" />
            end-to-end services to empower one to build{" "}
            <br className="hidden custom1400:block" /> service portfolio{" "}
            <span className="violet-gradient-text">
              without the need for extensive{" "}
              <br className="hidden custom1400:block" /> in-house resources
            </span>
            . At Cowchain, we understand{" "}
            <br className="hidden custom1400:block" /> the importance of{" "}
            <span className="violet-gradient-text">
              delivering high-quality, custom{" "}
              <br className="hidden custom1400:block" />
              web and mobile app solutions
            </span>{" "}
            tailored to each
            <br className="hidden custom1400:block" />
            client’s needs. Whether you are a firm looking for
            <br className="hidden custom1400:block" />
            white label services or a business in need of a white{" "}
            <br className="hidden custom1400:block" />
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
            <span className="block">
              <br />
            </span>
            Why is this important? It lets you focus on winning new clients and
            growing your business, while experts
            <br className="hidden lg:block" /> handle the technical work behind
            the scenes. No additional overhead. No stress. Curious how white
            label <br className="hidden lg:block" /> development can help your
            business? Book a call with us today and discover the possibilities!
          </>
        }
        titleClasses="xl:mb-[60px]"
      />

      <Industries
        data={whiteLabelSolutions}
        fullGrid
        isWhiteLabel
        itemTitleClasses="md:text-[18px]"
        customClasses="gap-x-[90px]"
      />

      <TustByNumbers
        data={TustByNumbersData}
        typographyContainerClasses={"xl:pt-[170px]"}
        noBg={true}
      />

      <Industries
        title={"Industries We Serve"}
        desc={"Our Web3 white label division works with various industries"}
        data={IndustriesDexData}
        customClasses="xl:pl-[55px] xl:pr-[60px] xl:mt-[80px]"
        itemTitleClasses="lg:text-[20px]"
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
            <span className="block">
              <br />
            </span>
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
      <div className="w-full overflow-hidden">
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
          itemsClasses={"md:py-[90px]"}
          accordionPanelClasses="md:pb-[90px]"
          expandedItemClasses="!pb-6"
          hasIcon={false}
          faqGradient={true}
          titleClasses="max-w-[396px]"
          descriptionClasses="max-w-[396px]"
          isDoublePadding={true}
          noTopBorder={true}
        />
      </div>

      <ServiceStack
        home={true}
        desc={
          <>
            Our development process is backed <br className="hidden xl:block" />
            by a modern tech stack, ensuring
            <br className="hidden xl:block" /> that every white label developer
            on
            <br className="hidden xl:block" /> our team has the tools to create
            <br className="hidden xl:block" /> fast, secure, and scalable
            websites
            <br className="hidden xl:block" />
            and apps
          </>
        }
      />
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
      <div className="w-full overflow-hidden">
        <OtherServices
          title={
            <>
              In addition to <br className="hidden xl:block" />
              <span className="violet-gradient-text">
                white label <br className="hidden xl:block" /> development,{" "}
                <br className="hidden xl:block" />
              </span>
              Cowchain offers <br className="hidden xl:block" />
              a variety <br className="hidden xl:block" /> of{" "}
              <span className="violet-gradient-text">
                complementary <br /> services:
              </span>
            </>
          }
          data={otherWhiteLabelServices}
          itemClasses="md:!py-[55px]"
          tag={"other our services"}
        />
      </div>

      <Feedback
        desc="Our clients know they can rely on Cowchain 
to deliver reliable, secure blockchain solutions. Here’s what they have to say"
      />
      <WhiteLabelCases />
      <Cases />
      <CasesMobile />
      <div className="w-full overflow-hidden">
        <FAQ
          data={faqQuestions}
          noBg={true}
          faqHorizontalPadding={true}
          titleClasses="custom1430:text-[60px] leading-[0.9]"
          typographyContainer="ml-auto max-w-[576px]"
          noTopBorder={true}
        />
      </div>

      <Contact className="px-[50px] py-[105px] md:px-[64px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default WhiteLabelDev;
