import React, { useState } from "react";
import "./case-studies.css";
import Navbar from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import Footer from "components/Footer";
import phones_desktop from "assets/cases/phones-desktop.png";
import phones_mobile from "assets/cases/phones-mobile.png";
import alien_desktop from "assets/cases/alien-desktop.png";
import alien_mobile from "assets/cases/alien-mobile.png";
import rental_desktop from "assets/cases/rental-desktop.png";
import rental_mobile from "assets/cases/rental-mobile.png";
import eye_desktop from "assets/cases/eye-desktop.png";
import eye_mobile from "assets/cases/eye-mobile.png";
import Tag from "components/ui/tag";
import { Link } from "react-router-dom";

export const Cases = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";

  const cases = [
    {
      title: "Decentralized Exchange (DEX)",
      img_desktop: phones_desktop,
      img_mobile: phones_mobile,
      tags: ["React.js", "Solidity", "Subgraph", "StyledComponents", "GraphQL"]
    },
    {
      title: "Decentralized Exchange (DEX)",
      img_desktop: alien_desktop,
      img_mobile: alien_mobile,
      tags: ["React.js", "Solidity", "Subgraph", "StyledComponents", "GraphQL"]
    },
    {
      title: "Decentralized Exchange (DEX)",
      img_desktop: rental_desktop,
      img_mobile: rental_mobile,
      tags: ["React.js", "Solidity", "Subgraph", "StyledComponents", "GraphQL"]
    },
    {
      title: "Decentralized Exchange (DEX)",
      img_desktop: eye_desktop,
      img_mobile: eye_mobile,
      tags: ["React.js", "Solidity", "Subgraph", "StyledComponents", "GraphQL"]
    }
  ];

  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <HeroSection />
        {cases.map((product, index) => (
          <CaseSplash key={`${product.title + index}`} {...product} />
        ))}
        <ViewMoreSection />
        <Footer />
      </div>
    </section>
  );
};

const CaseSplash = ({ title, tags, img_mobile, img_desktop }) => {
  return (
    <div className="relative flex w-full items-end justify-start border-t border-th-fade">
      <img
        src={img_desktop}
        className=" hidden max-h-[560px] w-full object-cover lg:block"
        alt=""
      />
      <img
        src={img_mobile}
        className=" block max-h-[560px] w-full object-cover lg:hidden"
        alt=""
      />
      <div className="absolute  bottom-1/2 right-10 ">
        <Link
          to="/cases/case_study"
          className="mx-auto flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-white text-center font-roc text-sm font-medium uppercase text-black lg:h-48 lg:w-48 lg:text-base"
        >
          View Project
        </Link>
      </div>
      <div className="absolute z-10 mb-9 ml-5 max-w-[270px] md:mb-16 md:ml-20 md:max-w-full">
        <ul className="mb-4 flex flex-wrap gap-[6px] md:mb-8 md:flex-nowrap">
          {tags.map((title, index) => (
            <Tag key={`${title + index}`} title={title} />
          ))}
        </ul>
        <h2 className=" text-3xl md:text-5xl">{title}</h2>
      </div>
    </div>
  );
};

const ViewMoreSection = () => {
  return (
    <section id="view_more" className="relative overflow-hidden">
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col gap-y-8 border-b border-b-th-fade px-4 py-16 text-center md:gap-y-24 md:py-24 xl:py-36">
          <h3 className="mx-auto text-center text-2xl uppercase">
            5 of 21 projects
          </h3>
          <button
            className="btn-contact mx-auto uppercase lg:h-48 lg:w-48"
            onClick={() => {}}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};
