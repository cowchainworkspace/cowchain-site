import { HeroSection } from "./blocks/HeroSection";
import Achievements from "./blocks/Achievements";
import Contact from "@/components/Contact";
import FAQ from "./blocks/FAQ";
import { TustByNumbers } from "./blocks/TustByNumbers";
import { DexServices } from "../components/service/blocks/DexServices";
import { Industries } from "../components/service/blocks/Industries/index";
import { Feedback } from "../components/service/blocks/Feedback";
import { OtherServices } from "../components/service/blocks/OtherServices";
import { ServiceStack } from "../components/service/blocks/stack";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";

export const metadata = {
  metadataBase: new URL("https://cowchain.io/services"),
  alternates: {
    canonical: "/dex_development"
  }
};

const FSExpertiseDesc =
  " At Cowchain, our full stack development services cater to diverse industries, providing customized stack development solutions that meet diverse business needs. We manage the entire process, ensuring that both frontend and backend development align to deliver secure and scalable platforms";

const FSExpertiseData = [
  {
    title: "Frontend Development",
    desc: "Our full stack developers excel at crafting responsive and intuitive front-end interfaces using cutting-edge technologies like React.js and Next.js. Through our full stack development services, we ensure that websites and mobile applications offer an engaging user experience"
  },
  {
    title: "Backend Development",
    desc: "The backbone of any platform is its backend. Our developers build robust systems using Node.js, Express, and Nest.js, focusing on secure database management with MongoDB, MySQL, and PostgreSQL. Recognizing the critical role of reliability, we ensure that every component functions flawlessly to support high-traffic applications and mobile apps"
  },
  {
    title: "Web Development",
    desc: "Cowchain’s full stack web development services range from creating basic websites to complex web app infrastructures. As a prominent full stack web development company, we offer custom solutions that align with your business requirements. Whether it’s building an e-commerce site or a corporate portal, our team ensures fast systems"
  },
  {
    title: "Mobile App Development",
    desc: "Our full stack development services extend to mobile app development, ensuring consistent performance across platforms, from iOS to Android. Our dedicated developers apply cross-platform technologies to guarantee uninterrupted integration between web and mobile, creating scalable solutions for growing businesses"
  }
];

const AdvantageseData = [
  {
    desc: "Choosing Cowchain for full stack development services means partnering with a team that delivers cohesive solutions, from user interfaces to backend systems. Our approach ensures every layer of your platform works in sync, freeing your business from managing multiple teams."
  },
  {
    desc: "Our full-stack web development services focus on adaptability, ensuring that your platform accommodates future growth without requiring costly overhauls."
  },
  {
    desc: "Moreover, our dedicated developers give you full control over the development process, from system integration to final deployment. You’ll have a single point of contact throughout the project, simplifying communication and ensuring that all business requirements are met"
  },
  {
    desc: "Additionally, our process allows for seamless integration of mobile applications, web apps, and backend systems, simplifying the process for your platform to evolve as your business grows. Whether you’re looking to launch a startup or scale an existing enterprise, Cowchain’s full stack developer services deliver scalable solutions uniquely crafted to align with your requirements"
  }
];

const DevProcessData = [
  {
    title: "Scope & Strategy",
    desc: "Our project managers begin by defining the project scope and creating a strategic roadmap that aligns with your business needs. This phase is critical for ensuring that your project stays on track and within budget"
  },
  {
    title: "Creative Design",
    desc: "During this phase, our team creates user interfaces that are both visually engaging and highly functional. Each design is optimized for user experience, ensuring a seamless interaction across all platforms, from web apps to mobile applications"
  },
  {
    title: "Execution & Delivery",
    desc: "Our stack developers handle both the front-end and back-end, ensuring that all elements of the platform integrate effortlessly. This phase focuses on aligning the technology stack with your project’s requirements to deliver a robust and scalable platform"
  },
  {
    title: "Build & Refine",
    desc: "Once the initial build is complete, our full stack engineers rigorously test the platform for performance, security, and usability. Refinements are implemented prior to deployment to guarantee that your system operates flawlessly in real-world conditions"
  }
];

const FullStackDevelopment = () => {
  return (
    <section className="overflow-visible">
      <HeroSection />
      <Achievements />
      <TustByNumbers />
      <DexServices
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
      />
      <Industries
        title={"Industries We Serve"}
        desc={
          "At Cowchain, our full stack development company has delivered solutions across multiple industries. Our full stack services offer customized software solutions crafted to address requirements of every specific sector. Here are some industries we serve"
        }
      />
      <DexServices
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
      />
      <DexServices
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
      />
      <FAQ />
      <ServiceStack />
      <Feedback />
      <Cases />
      <CasesMobile />
      <OtherServices />
      <FAQ />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default FullStackDevelopment;
