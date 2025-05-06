import ua from "@/assets/ua.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

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
      className="mt-10 border-b border-b-th-fade px-[20px] md:mt-24 xl:mt-28  xl:pb-[124px]"
    >
      <h3 className="m-auto mb-20 hidden max-w-[740px] text-left text-2xl sm:block sm:text-center xl:mb-0 xl:max-w-[1174px]  xl:text-4xl">
        SPLIT ACROSS{" "}
        <Image
          src={ua}
          className="mx-2 mb-2 inline-block max-h-[25px] max-w-[25px]"
          alt="ua"
        />
        UKRAINE AND EUROPE, WE WORK HARD AT FOSTERING AN ENVIRONMENT OF
        TOGETHERNESS, CREATIVITY, AND CLOSE COLLABORATION.
      </h3>

      <h3 className="m-auto mb-20 block max-w-[740px] text-left text-2xl sm:hidden md:text-center xl:mb-0 xl:max-w-[1174px]  xl:text-4xl">
        SPLIT ACROSS{" "}
        <Image
          src={ua}
          className="mx-2 mb-2 inline-block max-h-[25px] max-w-[25px]"
          alt="ua"
        />
        <br />
        UKRAINE AND EUROPE, <br /> WE WORK HARD AT <br /> FOSTERING AN <br />{" "}
        ENVIRONMENT OF <br />
        TOGETHERNESS, <br /> CREATIVITY, AND CLOSE <br /> COLLABORATION.
      </h3>
    </motion.div>
  );
}
