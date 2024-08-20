import React, { useRef } from "react";
import team from "@/assets/team/team.png";
import teamMobile from "@/assets/team/teamMobileImg.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ua from "@/assets/ua.png";
import Image from "next/image";

export default function TeamInfo() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const marginTop = useTransform(scrollYProgress, [0.5, 0], [-50, 0]);

  return (
    <motion.div
      transition={{ from: 20, duration: 1 }}
      className="mt-10 border-b px-[20px] border-b-th-fade xl:pb-[124px] md:mt-24  xl:mt-28"
    >
      <h3 className="text-left hidden sm:block sm:text-center mb-20 max-w-[740px] m-auto xl:max-w-[1174px] text-2xl xl:mb-0  xl:text-4xl">
        SPLIT ACROSS{" "}
        <Image
          src={ua}
          className="mx-2 mb-2 inline-block max-h-[25px] max-w-[25px]"
          alt="ua"
        />
        UKRAINE AND EUROPE, WE WORK HARD AT FOSTERING AN  ENVIRONMENT OF 
        TOGETHERNESS, CREATIVITY, AND CLOSE COLLABORATION.
      </h3>

      <h3 className="text-left block sm:hidden md:text-center mb-20 max-w-[740px] m-auto xl:max-w-[1174px] text-2xl xl:mb-0  xl:text-4xl">
        SPLIT ACROSS{" "}
        <Image
          src={ua}
          className="mx-2 mb-2 inline-block max-h-[25px] max-w-[25px]"
          alt="ua"
        />
        <br />
        UKRAINE AND EUROPE, <br /> WE WORK HARD AT <br />  FOSTERING AN <br /> ENVIRONMENT OF <br />
        TOGETHERNESS, <br /> CREATIVITY, AND CLOSE <br /> COLLABORATION.
      </h3>
      {/* <div className="flex flex-col items-center">
        <h1 className="mt-16 hidden text-center text-9xl xl:block">
          team photo
        </h1>
        <motion.div ref={ref} style={{ marginTop }}>
          <Image className="hidden md:block w-full max-w-[915px]" src={team} alt="" />
          <Image className="block md:hidden w-full max-w-[915px]" src={teamMobile} alt="" />
        </motion.div>
      </div> */}
    </motion.div>
  );
}
