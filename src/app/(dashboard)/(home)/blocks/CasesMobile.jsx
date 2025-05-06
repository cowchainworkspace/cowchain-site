"use client";

import { useMotionValue } from "framer-motion";
import React, { useEffect } from "react";
import useScrollPercentage from "react-scroll-percentage-hook";
import { casesMobileData } from "../homeData/data";
import { ScrollProject } from "./ScrollProject";
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
    <section
      ref={containerRef}
      className="relative z-[2] block custom480:hidden"
    >
      {casesMobileData &&
        casesMobileData.map((project, index) => (
          <div key={index} className="">
            <ScrollProject
              key={index}
              index={index}
              {...project}
              mobile={true}
            />
          </div>
        ))}
    </section>
  );
};

export default CasesMobile;
