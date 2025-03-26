import Contact from "@/components/Contact";
import Stack from "@/components/stack";
import { HeroSection } from "./blocks/HeroSection";
import { Products } from "./blocks/Products";
import { ViewMoreSection } from "./blocks/ViewMore";

export const metadata = {
  title: "Explore Our Comprehensive Services | Cowchain",
  description:
    "Explore Cowchain's blockchain services, from custom advancement to execution, driving development over industries.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/services"
  }
};

const Services = () => {
  return (
    <section>
      <HeroSection />
      <ViewMoreSection />
      <Products />
      <Stack title={"Our tech stack"} margin={""} />
      <Contact />
    </section>
  );
};

export default Services;
