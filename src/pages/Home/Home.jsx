import React from "react";
import Navbar from "../../components/Navbar";
import bg_top from "../../assets/bg/navbar_top.png";
import Header from "./blocks/Header";

const Home = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-black relative">
        <img alt="" src={bg_top} className="absolute top-0 left-0 w-full"></img>
        <Navbar />
        <Header />
      </div>
    </section>
  );
};

export default Home;
