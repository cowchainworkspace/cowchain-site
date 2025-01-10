"use client";

import React, { useState, useRef } from "react";
import { useScroll } from "framer-motion";
import Tag from "@/components/ui/tag";
import bg from "@/assets/bg/values.png";
import TeamInfo from "./team-info";
import Image from "next/image";

export const ValuesMobile = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  const [scrollIndex, setScrollIndex] = useState(0);

  scrollYProgress.on("change", (yProgress) => {
    setScrollIndex(parseInt(yProgress * 100 * 5.2));
  });

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative h-[2000px] hidden  md:h-[3200px]"
    >
      <div className="sticky top-0">
        <Image
          className="absolute -bottom-44 left-0 hidden h-[1625px] w-[700px] lg:block"
          src={bg}
          alt=""
        ></Image>
        <button className=" absolute bottom-1/3 left-0 right-0 mx-auto hidden h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-white font-roc text-base font-medium uppercase text-black lg:h-44 lg:w-44 xl:block">
          Get in touch
        </button>
        <div className="  flex h-screen flex-col xl:flex-row">
          <div className="z-20 flex items-start justify-start border-b border-b-th-fade border-r-th-fade bg-black md:h-screen xl:w-1/2 xl:items-center xl:border-b xl:border-r ">
            <div className="sticky  mb-12  ml-5 mt-16 flex max-w-[354px] flex-col items-start justify-start xl:mb-0 xl:ml-28">
              <Tag className={"mb-4 justify-start"} title={"our values"} />
              <p className="font-roc text-4xl font-medium  uppercase  text-white  xl:text-7xl">
                What we value
              </p>
              <button className="btn-submit mt-6 cursor-pointer items-center justify-center bg-white font-roc   text-base font-medium uppercase text-black xl:hidden  xl:px-12">
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <TeamInfo />
      </div>
    </section>
  );
};
