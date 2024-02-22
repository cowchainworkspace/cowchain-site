import { Suspense, lazy } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "components/Footer";
import "./home.css";
import { Loading } from "components/loader/Loading";

const Clients = lazy(() => import("./blocks/Clients"));
const Stack = lazy(() => import("components/stack"));
const Cases = lazy(() => import("./blocks/Cases"));
const FAQ = lazy(() => import("./blocks/FAQ"));
const Contact = lazy(() => import("components/Contact"));
const Header = lazy(() => import("./blocks/Header"));
const Benefits = lazy(() => import("./blocks/Benefits"));
const BenefitsMobiles = lazy(() => import("./blocks/BenefitMobiles"));
const Team = lazy(() => import("./blocks/Team"));

const Home = ({ setBurgerOpen }) => {
  return (
    <section id="home-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <Header />
        <Benefits />
        <BenefitsMobiles />
        <Suspense loading={<Loading />}>
          <Stack title={"Our Expertise"} />
          <Clients />
          <Cases />
          <Team />
          <FAQ />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
