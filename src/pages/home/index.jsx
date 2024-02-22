import { lazy } from "react";
import { Navbar } from "../../components/Navbar";

import "./home.css";
import { HomeContent } from "./blocks/home-content";

const Header = lazy(() => import("./blocks/Header"));

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
