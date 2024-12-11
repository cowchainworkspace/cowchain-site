import { HeroSection } from "./blocks/HeroSection";
import Contact from "@/components/Contact";
import { Products } from "./blocks/Products";
import { ViewMoreSection } from "./blocks/ViewMore";
import Stack from "@/components/stack";

export const metadata = {
  title: "Explore Our Comprehensive Services | Cowchain",
  description: "Explore Cowchain's blockchain services, from custom advancement to execution, driving development over industries.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/services"
  }
};

const Services = ({ setBurgerOpen }) => {
  return (
    <section>
      <HeroSection />
      <ViewMoreSection />
      <Products />
      <Stack
        gradientStyles="absolute -bottom-1/2 -right-40 block  h-[426px] w-[526px] md:hidden"
        isGradient={true}
        title={"Our tech stack"}
        margin={""}
      />
      <Contact />
    </section>
  );
};

export default Services;
