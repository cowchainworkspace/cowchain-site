import React, { useState } from "react";
import { Navbar } from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import { Footer } from "components/Footer";
import phones_desktop from "assets/cases/phones-desktop.png";
import phones_mobile from "assets/cases/phones-mobile.png";
import alien_desktop from "assets/cases/alien-desktop.png";
import alien_mobile from "assets/cases/alien-mobile.png";
import rental_desktop from "assets/cases/rental-desktop.png";
import rental_mobile from "assets/cases/rental-mobile.png";
import eye_desktop from "assets/cases/eye-desktop.png";
import eye_mobile from "assets/cases/eye-mobile.png";
import { ViewMoreSection } from "./blocks/ViewMore";
import { CaseSplash } from "./components/case-splash";

export const Cases = ({ setBurgerOpen }) => {
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
