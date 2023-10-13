import pic1 from "../../../assets/clients/cases/1.jpg";
import pic2 from "../../../assets/clients/cases/2.jpg";
import pic3 from "../../../assets/clients/cases/3.jpg";
import pic4 from "../../../assets/clients/cases/4.jpg";
import { useInView, useScroll } from "framer-motion";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

import useScrollPercentage from "react-scroll-percentage-hook";

const casesData = [
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic1,
  },
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic2,
  },
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic3,
  },
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic4,
  },
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic1,
  },
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic3,
  },
];

const Cases = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc = useMotionValue(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll({
    target: ghostRef,
  });

  const { containerRef, percentage } = useScrollPercentage();

  useEffect(() => {
    scrollPerc.set(percentage.vertical);
  }, [percentage.vertical]);

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <section ref={containerRef} id="clients-cases" className="relative z-10">
      <div className="scroll-container top-[30%] xl:top-[20%] md:overflow-hidden border-y border-y-th-fade">
        <motion.div
          ref={scrollRef}
          style={{ x: spring }}
          className="cases_wrapper overflow-x-scroll md:overflow-x-visible relative flex p-2 lg:py-8 gap-x-2 md:gap-x-4"
        >
          {casesData &&
            casesData.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${project.pic})`,
                }}
                className="flex h-64 w-full min-w-[256px] max-w-[256px] lg:h-[30vw] lg:min-w-[30vw] relative p-6 md:p-8 lg:p-10 bg-cover bg-center bg-no-repeat"
              >
                <h2 className="text-white mt-auto max-w-xs">{project.title}</h2>
              </div>
            ))}
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="ghost hidden md:block"
      />
    </section>
  );
};

export default Cases;
