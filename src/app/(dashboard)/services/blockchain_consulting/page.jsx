import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import Contact from "@/components/Contact";
import FAQ from "../components/service/blocks/FAQ";
import { KeyFeatures } from "../components/service/blocks/KeyFeatures";
import { Industries } from "../components/service/blocks/Industries/index";
import { Feedback } from "../components/service/blocks/Feedback";
import { OtherServices } from "../components/service/blocks/OtherServices";
import {
  EngagementDevData,
  OurWorksData,
  consultingFAQData,
  consultingProcessData,
  otherServices
} from "./utils/data";
import { IndustriesDexData } from "./utils/data";
import { TustByNumbersData } from "./utils/data";
import { TustByNumbers } from "../full_stack_development/blocks/TustByNumbers";
import { BlockchainServiceData } from "./utils/data";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";

const BlockChainConsulting = () => {
  return (
    <section className="overflow-visible">
      <HeroSection
        tag={"Blockchain Consulting"}
        title={"Blockchain Consulting Services & Solutions"}
        desc={
          <>
            Our team provides comprehensive blockchain consulting services to
            help you build a robust strategy <br />
            Select your preferred type of blockchain and optimal blockchain
            platform
          </>
        }
      />
      <Achievements
        tag={"white label web design & development services"}
        desc={
          <>
            As a{" "}
            <span className="violet-gradient-text">
              blockchain consulting company
            </span>
            , we deliver
            <br />
            professional <br />
            <span className="violet-gradient-text">
              blockchain consulting services
            </span>{" "}
            <br />
            tailored to the unique needs of
            <span className="violet-gradient-text">
              businesses looking <br />
              to leverage blockchain technology
            </span>
            . Whether you
            <br />
            are determining which blockchain best suits your
            <br />
            requirements or optimizing your current
            <br />
            infrastructure, our experts are prepared to deliver <br />
            deep insights and
            <span className="violet-gradient-text">
              practical blockchain consulting <br /> solutions
            </span>
            . From blockchain advisory services <br />
            to ongoing development, our approach empowers
            <br />
            companies to{" "}
            <span className="violet-gradient-text">
              maximize blockchain opportunities
            </span>
          </>
        }
      />
      <TustByNumbers home data={TustByNumbersData} />

      <ExpertiseServices
        title={
          <>
            Blockchain <br />
            Consulting <br />
            Services We <br />
            Provide
          </>
        }
        desc={
          "We at Cowchain provide a wide range of blockchain consulting services, including crypto consulting services, structured to meet the peculiar challenges that are presented to businesses through industries. As a trusted blockchain consulting firm, we offer end-to-end blockchain consultancy from strategy development to platform implementation, ensuring your business is ready to reap the full benefits of this transformational technology"
        }
        data={BlockchainServiceData}
      />

      <Industries
        title={"Industry-Focused Blockchain Consulting"}
        desc={
          "Blockchain comes with a lot of versatility, which will make it applicable to a wide array of industry areas. Our blockchain consultants work with companies from various sectors, ranging from health to finance, by providing them with industry-specific decentralized solutions. This is the expectation for some of the important industries where we apply our blockchain consulting services"
        }
        data={IndustriesDexData}
        topBorder={false}
      />

      <ExpertiseServices
        title={"Our Works"}
        desc={
          "At Cowchain, we take pride in delivering tailored blockchain consulting solutions across industries. Our expertise in strategy, development, and implementation has enabled businesses to streamline operations, enhance security, and achieve measurable results. Below are some of the projects that highlight our practical approach to blockchain solutions"
        }
        data={OurWorksData}
        topBorder={false}
        bottomBorder={false}
      />

      <FAQ title={"Our Consulting Process"} data={consultingProcessData} />

      <KeyFeatures
        isOneBlock={true}
        title={"Blockchains We Work With"}
        desc={
          <>
            Cowchain works with leading blockchains like Ethereum, Solana,
            Polygon, Binance Smart Chain, and more. Whatever your blockchain
            needs — expansion, integration, or optimization — our experts are
            ready to solve it.
            <p>
              <br />
            </p>
            ave a complex project or need end-to-end implementation? We’ll take
            care of every detail, delivering a solution that meets the highest
            standards of functionality, protection, and dependability
          </>
        }
      />

      <KeyFeatures
        reverse={true}
        isOneBlock={true}
        title={"Why Choose Us as Your Blockchain Consulting Partner?"}
        desc={
          <>
            Choosing Cowchain means partnering with an industry-leading
            blockchain consulting company that is committed to delivering
            innovative solutions. Our approach is centered on understanding the
            specific challenges and goals of your business, and we tailor our
            blockchain consulting services to provide practical, actionable
            results
            <p>
              <br />
            </p>
            s a trusted blockchain consulting company, we combine deep technical
            expertise with a strong business focus, ensuring that every solution
            we deliver is both technically sound and aligned with your long-term
            strategy. We work alongside your team, offering continuous support
            and insights throughout the entire project lifecycle
          </>
        }
      />

      <Feedback />

      <Industries
        title={"Our Engagement Models"}
        desc={
          "We provide flexible engagement models to suit different business needs, ensuring you receive the right expertise and approach for your project"
        }
        data={EngagementDevData}
        topBorder={false}
        isTwoSides={true}
      />

      <KeyFeatures
        isOneBlock={true}
        title={"Why Our Clients Trust Us"}
        desc={
          "Clients choose Cowchain because we offer a unique combination of deep expertise and a client-focused approach. Our blockchain consulting delivers solutions that align with the individual requirements of each business, ensuring that they receive not only a robust system but also a clear strategy for sustained growth. Our blockchain consulting company is known for delivering projects on time, and within budget, providing lasting support to foster growth and adaptability"
        }
      />

      <OtherServices
        title={
          <>
            In addition to
            <span className="violet-gradient-text">
              blockchain <br /> consulting
            </span>
            , Cowchain <br /> offers a range of <br /> offers a range of
            complementary solutions
            <span className="violet-gradient-text">
              to help businesses fully <br /> integrate technology <br /> into
              their operations.
            </span>{" "}
            <br />
            These services include
          </>
        }
        data={otherServices}
      />

      <FAQ data={consultingFAQData} />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default BlockChainConsulting;
