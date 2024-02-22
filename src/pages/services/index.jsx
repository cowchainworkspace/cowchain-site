import { Navbar } from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import { Footer } from "components/Footer";
import Contact from "components/Contact";
import { Products } from "./blocks/Products";
import { ViewMoreSection } from "./blocks/ViewMore";
import Stack from "components/stack";

const Services = ({ setBurgerOpen }) => {
  return (
    <section>
      <div className="relative overflow-x-hidden bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
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
        <Footer />
      </div>
    </section>
  );
};

export default Services;
