import { HeroSection } from "./blocks/HeroSection";
import Benefits from "./blocks/Benefits";
import Development from "./blocks/Development";
import { IndustriesMobile } from "./blocks/IndustriesMobile";
import { Industries } from "./blocks/Industries";
import Networks from "./blocks/networks/index";
import Others from "./blocks/Others";
import Contact from "@/components/Contact";
import Cases from "../../(home)/blocks/Cases";
import CasesMobile from "../../(home)/blocks/CasesMobile";
import Clients from "../../(home)/blocks/Clients";
import FAQ from "./blocks/FAQ";

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/services"
  }
};

const SmartContractDevelopment = () => {
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

export default SmartContractDevelopment;
