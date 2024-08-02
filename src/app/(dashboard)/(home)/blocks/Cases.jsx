"use client";

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect
} from "react";
import web3fy from "@/assets/cases/web3fyImg.png";
import triend from "@/assets/cases/triendImg.png";
import bridge from "@/assets/cases/retrobridgeImg.png";

import { useScroll } from "framer-motion";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { ScrollProject } from "./ScrollProject";

import useScrollPercentage from "react-scroll-percentage-hook";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import 'swiper/css/bundle';
import 'swiper'
import sliderLeftArrow from '@/assets/icons/sliderLeftArrow copy.svg';
import sliderRightArrow from '@/assets/icons/sliderRightArrow.svg';

const projectsData = [
  {
    title: "Web3fy learning app",
    link: "/cases/payment",
    description:
      "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
    photo: web3fy,
    tags: ["App Development", "SEO"]
  },

  {
    title: "Retrobridge platform",
    link: "/cases/bridge",
    description:
      "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
    photo: bridge,
    tags: ["Website Development", "24/7 Support", "Web3"]
  },
  {
    title: "Tridend decentralized review website and app",
    link: "/cases/hotel",

    description:
      "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
    photo: triend,
    tags: ["App Development", "Website Development"]
  },
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
const Cases = () => {
  const scrollRef = useRef(null);
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


  const swiperRef = useRef;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (swiperRef.current && currentIndex > 0) {
      swiperRef.current.slideTo(currentIndex - 1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && currentIndex < projectsData.length - 1) {
      swiperRef.current.slideTo(currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section ref={containerRef} className="relative z-10 h-[698px] border-b border-b-th-fade">
     <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        slidesPerView={2.62}
        spaceBetween={0}
        className="flex h-[698px]"
      >
        {projectsData &&
          projectsData.map((project, index) => (
            <SwiperSlide
              key={index}
            >
              <ScrollProject key={index} index={index} {...project} />
            </SwiperSlide>
          ))}
      </Swiper>

      {currentIndex > 0 && (
         <div
         style={{ 
          background: 'linear-gradient(to left, transparent 1%, #AB40FF 160%)' 
        }}
         onClick={handlePrevClick}
         className="absolute z-50 left-0 top-0 flex h-full w-32 cursor-pointer items-center justify-center bg-transparent"
       >
         <Image src={sliderLeftArrow} alt="Next" className="h-8 w-8" />
       </div>
        
      )}
      {currentIndex < projectsData.length - 2 && (
        <div
        style={{ 
          background: 'linear-gradient(to right, transparent 1%, #AB40FF 160%)' 
        }}
        onClick={handleNextClick}
        className="absolute z-50 right-0 top-0 flex h-full w-32 cursor-pointer items-center justify-center bg-transparent"
      >
        <Image src={sliderRightArrow} alt="Previous" className="h-8 w-8" />
      </div>
       
      )}
    </section>
  );
};

export default Cases;
