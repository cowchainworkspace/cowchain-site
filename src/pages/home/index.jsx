import { lazy } from "react";
import { HomeContent } from "./blocks/home-content";
import "./home.css";

const Header = lazy(() => import("./blocks/Header"));
const Navbar = lazy(() => import("../../components/Navbar"));

const Home = ({ setBurgerOpen }) => {
  return (
    <section id="home-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <Header />
        <HomeContent />
      </div>
    </section>
  );
};

export default Home;
