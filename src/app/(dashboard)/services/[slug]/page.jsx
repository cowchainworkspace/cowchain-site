import { HeroSection } from "./blocks/HeroSection";
import { ContactDialog } from "./blocks/ContactDialog";
import Benefits from "./blocks/Benefits";
import BenefitsMobiles from "./blocks/BenefitMobiles";
import Development from "./blocks/Development";
import DevelopmentMobile from "./blocks/DevelopmentMobile";
import { IndustriesMobile } from "./blocks/IndustriesMobile";
import { Industries } from "./blocks/Industries";
import ServiceStack from "./blocks/stack/index";
import Networks from "./blocks/networks/index";
import Planet from "./blocks/Planet";
import Feedback from "../../clients/blocks/Feedback";
import Team from "../../(home)/blocks/Team";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import linkedin from "@/assets/footer/linkedin.svg";
import telegram from "@/assets/footer/telegram.svg";
import mail from "@/assets/footer/mail.svg";
import team1 from "@/assets/team/team-carousel-2/team1.png";
import team2 from "@/assets/team/team-carousel-2/team2.png";
import team3 from "@/assets/team/team-carousel-2/team3.png";
import { Values } from "./blocks/Values";
import { ValuesMobile } from "./blocks/ValuesMobile";
import FAQ from "../../(home)/blocks/FAQ";
import Others from "./blocks/Others";
import ServiceContact from "./blocks/ServiceContact";

const photos = [team1, team2, team3];

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/services"
  }
};

const Services = ({ setBurgerOpen }) => {
  return (
    <section>
      <HeroSection />
      <ContactDialog />
      <Benefits />
      <BenefitsMobiles />
      <Industries />
      <IndustriesMobile />
      <Development />
      <DevelopmentMobile />
      <Networks
        gradientStyles="absolute -bottom-1/2 -right-40 block  h-[426px] w-[526px] md:hidden"
        isGradient={false}
        title={"Blockchain networks we work with"}
        margin={""}
      />
      <ServiceStack margin={""} />
      <Planet />
      {/* <Works /> */}
      <Feedback />
      <Team />
      <div className="mx-5 mt-14 flex flex-col gap-4  xl:mx-24 xl:mt-28 ">
        <Tag
          className={"max-w-[166px] mb-[16px] xl:max-w-[200px]"}
          title={"founded and run by"}
        />
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="flex max-w-[370px] flex-col items-start justify-start gap-4 pb-7 xl:pb-28 ">
            <h3 className="text-4xl uppercase xl:text-7xl">
              Mykhailo Adzhoiev
            </h3>
          </div>
          <div className="max-w-[497px] mt-[16px] text-secondary">
            <p className="mb-5  text-secondary">
              Mykhailo Adzhoiev is a blockchain entrepreneur and crypto
              enthusiast with 9+ years of IT industry experience as a senior
              developer, team leader, and CTO. After years of working in
              traditional Web2 development, Mykhailo realized that he’s “been
              there, seen that, done that.” So once he got involved in a Web3
              project, he saw the potential for innovation in this industry that
              was missing in Web2 and suddenly knew he wanted to become a part
              of it.
            </p>
            <p className="text-secondary">
              After 3 unsuccessful attempts to create a team of passionate Web3
              devotees, Mykhailo’s 4th time was a charm. That’s how Cowchain was
              created.
            </p>
            <div className="  mt-6 flex items-center justify-start    gap-x-4 xl:mt-4 ">
              <a
                href="https://www.linkedin.com/company/cowchain/"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image
                  alt="linkedin"
                  className="w-12 lg:w-16"
                  src={linkedin}
                ></Image>
              </a>
              <a
                href="https://t.me/cowchain_team"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image
                  alt="telegram"
                  className="w-12 lg:w-16"
                  src={telegram}
                ></Image>
              </a>
              <a
                href="mailto:sales@cowchain.io"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image alt="mail" className="w-12 lg:w-16" src={mail}></Image>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-16 mt-9 flex max-w-[110%] items-start  justify-start gap-2 overflow-x-scroll md:mt-0 md:items-center md:overflow-auto   lg:max-w-full  lg:justify-between">
          {photos.map((imgSrc, index) => (
            <Image
              src={imgSrc}
              className="h-[286px] w-[300px] lg:h-[492px] lg:w-[516px]"
              alt=""
              key={index}
            />
          ))}
        </div>
      </div>
      <Values />
      <ValuesMobile />
      <FAQ />
      <Others />
      <ServiceContact />
    </section>
  );
};

export default Services;
