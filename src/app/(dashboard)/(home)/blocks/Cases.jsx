"use client";

import React, {
  useRef,
  useState,
  // useLayoutEffect,
  // useCallback,
  useEffect
} from "react";
// import web3fy from "@/assets/cases/web3fyImg.png";
// import triend from "@/assets/cases/triendImg.png";
// import bridge from "@/assets/cases/retrobridgeImg.png";

import bridge from "@/assets/cases/newCases/crossChainTransferBridgeImg.png";
import payment from "@/assets/cases/newCases/CryptoExchangeImg.png";
import finance from "@/assets/cases/newCases/cryptoWalletApp2Img.png";
import wallet from "@/assets/cases/newCases/cryptoWalletAppImg.png";
import hotel from "@/assets/cases/newCases/HotelBusinessImg.png";
import m2e from "@/assets/cases/newCases/m2ePlatformImg.png";

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

const projectsData = [
  // {
  //   title: "Exchange wallet app",
  //   link: "/cases/payment",
  //   description:
  //     "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
  //   photo: web3fy,
  //   tags: ["App Development", "SEO"]
  // },
  // {
  //   title: "Retrobridge platform",
  //   link: "/cases/bridge",
  //   description:
  //     "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
  //   photo: bridge,
  //   tags: ["Website Development", "24/7 Support", "Web3"]
  // },
  // {
  //   title: "Tridend decentralized review website and app",
  //   link: "/cases/hotel",
  //   description:
  //     "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
  //   photo: triend,
  //   tags: ["App Development", "Website Development"]
  // }
  // {
  //   title: "m2e platform",
  //   link: "/cases/move",
  //   description:
  //     "Robust ecosystem for fitness finance that contains multiple various applications: move to earn application, blockchain wallet, dex, launchpad, dashboard etc.",
  //   photo: step,
  //   tags: ["DEX", "Staking", "Move-to-earn"]
  // },
  // {
  //   title: "DECENTRALIZED CRYPTO EXCHANGE",
  //   link: "/cases/finance",
  //   description:
  //     "Secure and convenient decentralized cryptocurrency exchange that allows to swap hundreds of crypto assets using liquidity pool mechanism.",
  //   photo: finance,
  //   tags: ["DEX", "DEFI"]
  // },
  // {
  //   title: "CRYPTO WALLET APP",
  //   link: "/cases/wallet",
  //   description:
  //     "Non-custodial multichain crypto wallet which allows users to create a blockchain wallet using web2 socials like Google, Facebook, Apple, email in one click.",
  //   photo: eva,
  //   tags: ["Mobile App", "Non-custodial wallet"]
  // }
];

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
    description: "Crypto wallet app for iOS and Android",
    photo: wallet,
    tags: ["App Development", "Website Development"]
  },
  {
    title: "decentralized crypto exchange",
    link: "/cases/finance",
    description:
      "DEX platform featuring an innovative fee structure, with token, and admin panel",
    photo: payment,
    tags: ["App Development", "SEO"]
  },
  {
    title: "Exchange wallet app",
    link: "/cases/payment",
    description: "First BTC/USDT crypto exchange in Canada",
    photo: finance,
    tags: ["App Development", "Website Development"]
  },
  {
    title: "Integration blockchain into hotel business",
    link: "/cases/hotel",

    description: "Web browser AI crypto plugin and Dapp for travel and hotels",
    photo: hotel,
    tags: ["App Development", "Website Development"]
  }
];

const Cases = () => {
  // const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ghostRef
  });

  const { containerRef, percentage } = useScrollPercentage();

  useEffect(() => {
    scrollPerc.set(percentage.vertical);
  }, [percentage.vertical, scrollPerc]);

  const transform = useTransform(
    scrollYProgress,
    [0, 0.7],
    [0, -scrollRange + viewportW]
  );

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      setCurrentIndex(swiperRef.current.activeIndex); // Set the initial currentIndex on mount
    }
  }, []);

  const handlePrevClick = () => {
    if (swiperRef.current && currentIndex > 0) {
      swiperRef.current.slideTo(currentIndex - 1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && currentIndex < casesData.length - 1) {
      swiperRef.current.slideTo(currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  console.log("isBeginning", isBeginning, "isEnd", isEnd);

  return (
    <section
      ref={containerRef}
      className="relative z-10 hidden h-[546px] border-b border-b-th-fade md:block md:h-[698px] xl:flex"
    >
      <Swiper
        className="flex h-[546px] md:h-[698px] fullSlider:!hidden"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper);
        }}
        slidesPerView={"auto"}
        spaceBetween={0}
      >
        {casesData &&
          casesData.map((project, index) => (
            <SwiperSlide
              key={index}
              className="h-[546px] max-w-[547px] md:h-[698px]"
            >
              <ScrollProject key={index} index={index} {...project} />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="hidden w-full justify-center fullSlider:flex">
        {casesData &&
          casesData.map((project, index) => (
            <div key={index} className="h-[546px] max-w-[547px] md:h-[698px]">
              <ScrollProject key={index} index={index} {...project} />
            </div>
          ))}
      </div>

      {!isBeginning && (
        <div
          style={{
            background: "linear-gradient(to left, transparent 1%, #AB40FF 160%)"
          }}
          onClick={handlePrevClick}
          className="absolute left-0 top-0 z-50 hidden hidden h-full w-32 cursor-pointer items-center justify-center bg-transparent lg:flex fullSlider:hidden "
        >
          <Image src={sliderLeftArrow} alt="Next" className="h-8 w-8" />
        </div>
      )}

      {!isEnd && (
        <div
          style={{
            background:
              "linear-gradient(to right, transparent 1%, #AB40FF 160%)"
          }}
          onClick={handleNextClick}
          className="absolute right-0 top-0 z-50 hidden h-full w-32 cursor-pointer items-center justify-center bg-transparent lg:flex fullSlider:hidden "
        >
          <Image src={sliderRightArrow} alt="Previous" className="h-8 w-8" />
        </div>
      )}
    </section>
  );
};

export default Cases;
