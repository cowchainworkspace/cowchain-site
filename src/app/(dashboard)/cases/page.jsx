"use client";

import { useState, useMemo, useEffect } from "react";
import { HeroSection } from "./blocks/HeroSection";
import marsan from "@/assets/cases/marsan.png";
import eva from "@/assets/cases/eva.png";
import triend from "@/assets/cases/triend.png";
import triend_mobile from "@/assets/cases/triend-mobile.png";
import retrobridge from "@/assets/cases/retrobridge.png";
import retrobridge_mobile from "@/assets/cases/retrobridge-mobile.png";
import step from "@/assets/cases/step.png";
import finance from "@/assets/cases/finance.png";
import finance_mobile from "@/assets/cases/finance-mobile.png";
import { CaseSplash } from "./components/case-splash";
import { useGetItems } from "@/hooks/use-strapi";

const old_cases = [
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
    tags: ["NFT", "Proof Of Attendance (POAP)"]
  },
  {
    title: "Cross-chain transfer bridge",
    link: "/cases/bridge",
    img_desktop: retrobridge,
    img_mobile: retrobridge_mobile,
    tags: ["DEFI", "Crosschain", "Multichain", "Bridge"]
  },
  {
    title: "m2e platform",
    link: "/cases/move",
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

const Cases = () => {
  const { data: cases } = useGetItems("cases");
  const [tags, setTags] = useState([]);
  const filteredCases = useMemo(() => {
    if (tags.length === 0) return cases?.data;
    return cases?.data.filter((product) => {
      return tags.some((tag) => product.attributes.tags.includes(tag));
    });
  }, [tags, cases?.data]);
  const [count, setCount] = useState(cases?.data.length);

  useEffect(() => {
    if (tags.length === 0) setCount(cases?.data.length);
    else setCount(filteredCases.length);
  }, [tags, cases]);

  return (
    <section id="clients-wrapper">
      <div className="relative  bg-black">
        <HeroSection tags={tags} setTags={setTags} />
        <div className="flex flex-col items-center">
          {filteredCases?.slice(0, count).map((product, index) => (
            <CaseSplash
              key={`${product.attributes.title + index}`}
              {...product.attributes}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
