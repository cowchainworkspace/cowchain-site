import React, { useState, useMemo, useEffect } from "react";
import { Navbar } from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import { Footer } from "components/Footer";
import marsan from "assets/cases/marsan.png";
import eva from "assets/cases/eva.png";
import triend from "assets/cases/triend.png";
import triend_mobile from "assets/cases/triend-mobile.png";
import retrobridge from "assets/cases/retrobridge.png";
import retrobridge_mobile from "assets/cases/retrobridge-mobile.png";
import step from "assets/cases/step.png";
import finance from "assets/cases/finance.png";
import finance_mobile from "assets/cases/finance-mobile.png";
import { ViewMoreSection } from "./blocks/ViewMore";
import { CaseSplash } from "./components/case-splash";

const cases = [
  {
    title: "Exchange wallet app",
    link: "/cases/payment",
    img_desktop: marsan,
    img_mobile: marsan,
    tags: ["Mobile App", "Non-custodial exchange"]
  },
  {
    title: "Integration blockchain into hotel business",
    link: "/cases/hotel",
    img_desktop: triend,
    img_mobile: triend_mobile,
    tags: ["NFT", "Proof Of Attendance (POA)"]
  },
  {
    title: "Cross-chain transfer bridge",
    link: "/cases/retrobridge",
    img_desktop: retrobridge,
    img_mobile: retrobridge_mobile,
    tags: ["DEFI", "Crosschain", "Multichain", "Bridge"]
  },
  {
    title: "m2e platform",
    link: "/cases/step",
    img_desktop: step,
    img_mobile: step,
    tags: ["DEX", "Non-custodial exchange", "Staking", "Move-to-Earn"]
  },
  {
    title: "decentralized crypto exchange",
    link: "/cases/finance",
    img_desktop: finance,
    img_mobile: finance_mobile,
    tags: ["DEX", "DEFI"]
  },
  {
    title: "Crypto wallet app",
    link: "/cases/wallet",
    img_desktop: eva,
    img_mobile: eva,
    tags: ["Mobile App", "Non-custodial wallet"]
  }
];

export const Cases = ({ setBurgerOpen }) => {
  const [tags, setTags] = useState([]);
  const filteredCases = useMemo(() => {
    if (tags.length === 0) return cases;
    return cases.filter((product) => {
      return tags.some((tag) => product.tags.includes(tag));
    });
  }, [tags]);
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (tags.length === 0) setCount(3);
    else setCount(filteredCases.length);
  }, [tags]);

  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <HeroSection tags={tags} setTags={setTags} />
        {filteredCases.slice(0, count).map((product, index) => (
          <CaseSplash key={`${product.title + index}`} {...product} />
        ))}
        <ViewMoreSection
          setCount={setCount}
          count={count}
          casesCount={filteredCases.length}
        />
        <Footer />
      </div>
    </section>
  );
};
