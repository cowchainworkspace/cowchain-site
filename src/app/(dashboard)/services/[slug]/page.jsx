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
import Others from "./blocks/Others";
import ServiceContact from "./blocks/ServiceContact";
import Works from "./blocks/Works";
import Contact from "@/components/Contact";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import Clients from "../../(home)/blocks/Clients";
import FAQ from "./blocks/FAQ";

const photos = [team1, team2, team3];

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/services"
  }
};

const Services = () => {
  return (
    <section>
      <HeroSection />
      <Industries />
      <IndustriesMobile />
      <Development />
      <Benefits />
      <Networks
        gradientStyles="absolute -bottom-1/2 -right-40 block  h-[426px] w-[526px] md:hidden"
        isGradient={false}
        title={"Blockchain networks we work with"}
        margin={""}
      />

       <Clients />
      <Cases />
      <CasesMobile />
      <Others />
      <FAQ />
      <Contact className="py-[159px] px-[64px] md:pt-[169px] md:pb-[127px]"/>
    </section>
  );
};

export default Services;
