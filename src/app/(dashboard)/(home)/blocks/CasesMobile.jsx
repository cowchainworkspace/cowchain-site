"use client";

import React, { useRef, useEffect } from "react";
import { useMotionValue } from "framer-motion";
import { ScrollProject } from "./ScrollProject";
import useScrollPercentage from "react-scroll-percentage-hook";
import { casesMobileData } from '../homeData/data'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper";

const CasesMobile = () => {
  const scrollPerc = useMotionValue(0);

  const { containerRef, percentage } = useScrollPercentage();

  useEffect(() => {
    scrollPerc.set(percentage.vertical);
  }, [percentage.vertical, scrollPerc]);


  return (
    <section ref={containerRef} className="block md:hidden">
      {casesMobileData &&
        casesMobileData.map((project, index) => (
          <div key={index} className="">
            <ScrollProject key={index} index={index} {...project} mobile={true} />
          </div>
        ))}
    </section>
  );
};

export default CasesMobile;
