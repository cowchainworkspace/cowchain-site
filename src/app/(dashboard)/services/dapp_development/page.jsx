import { HeroSection } from "./blocks/HeroSection";
import { ContactDialog } from "./blocks/ContactDialog";
import Benefits from "./blocks/Benefits";
import BenefitsMobiles from "./blocks/BenefitMobiles";
import Development from "./blocks/Development";
import DevelopmentMobile from "./blocks/DevelopmentMobile";
import { IndustriesMobile } from "./blocks/IndustriesMobile";
import { Industries } from "./blocks/Industries";
import Achievements from "./blocks/Achievements";
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

const DappDevelopment = () => {
  return (
    <section>
      <HeroSection />
      <Achievements />
      <FAQ />
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </section>
  );
};

export default DappDevelopment;
