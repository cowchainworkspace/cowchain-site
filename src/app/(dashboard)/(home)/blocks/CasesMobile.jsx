"use client";

import React, { useRef, useState, useEffect } from "react";

import bridge from "@/assets/cases/newCases/bridgeMobileImg.png"
import payment from "@/assets/cases/newCases/CryptoExchangeImg.png"
import finance from "@/assets/cases/newCases/cryptoWalletApp2Img.png"
import wallet from "@/assets/cases/newCases/cryptoWalletAppImg.png"
import hotel from "@/assets/cases/newCases/HotelBusinessImg.png"
import m2e from "@/assets/cases/newCases/m2eMobileImg.png"

import { useScroll } from "framer-motion";

import { useTransform, useMotionValue } from "framer-motion";
import { ScrollProject } from "./ScrollProject";

import useScrollPercentage from "react-scroll-percentage-hook";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/bundle";
import "swiper";
import sliderLeftArrow from "@/assets/icons/sliderLeftArrow copy.svg";
import sliderRightArrow from "@/assets/icons/sliderRightArrow.svg";

const casesData = [
  {
    title: `m2e platform`,
    link: "/cases/move",
    description:
      "Large Move 2 earn game with complex ecosystem (DEX, crypto wallet, NFT Marketplace and native token)",
    photo: m2e,
    tags: ["App Development", "Website Development"]
  },
  {
    title: "Cross-chain transfer bridge",
    link: "/cases/bridge",
    description:
      "Multichain portal, which bridged more than 50M$ volume and 200 assets across 25 chains",
    photo: bridge,
    tags: ["Website Development", "24/7 Support", "Web3"]
  },
  {
    title: "Crypto wallet app",
    link: "/cases/wallet",
    description:
      "Crypto wallet app for iOS and Android",
    photo: wallet,
    tags: ["App Development", "Website Development"]
  }
];

const CasesMobile = () => {
  const ghostRef = useRef(null);

  const scrollPerc = useMotionValue(0);

  const { containerRef, percentage } = useScrollPercentage();

  useEffect(() => {
    scrollPerc.set(percentage.vertical);
  }, [percentage.vertical, scrollPerc]);


  return (
    <section ref={containerRef} className="block md:hidden">
      {casesData &&
        casesData.map((project, index) => (
          <div key={index} className="">
            <ScrollProject key={index} index={index} {...project} mobile={true} />
          </div>
        ))}
    </section>
  );
};

export default CasesMobile;
