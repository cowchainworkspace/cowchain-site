"use client";

import React, {
  useRef,
  useState,
  useEffect
} from "react";
import { casesData } from "../homeData/data";
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

const Cases = () => {
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
      setCurrentIndex(swiperRef.current.activeIndex);
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

  return (
    <section
      ref={containerRef}
      className="relative z-10 hidden h-[546px] border-b border-b-th-fade custom480:block custom480:h-[624px] xl:flex"
    >
      <Swiper
        className="flex h-[546px] custom480:h-[624px] fullSlider:!hidden"
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
              className="h-[546px] max-w-[480px] custom480:h-[624px]"
            >
              <ScrollProject key={index} index={index} {...project} />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="hidden w-full justify-center fullSlider:flex">
        {casesData &&
          casesData.map((project, index) => (
            <div key={index} className="h-[546px]  max-w-[480px] custom480:h-[624px]">
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
