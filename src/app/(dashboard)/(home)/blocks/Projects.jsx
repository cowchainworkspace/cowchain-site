"use client";

import React, { useState, useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import { useScroll } from "framer-motion";
import { projectsHomeData } from "../homeData/data";
import { Project } from "../components/project";

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  const [scrollIndex, setScrollIndex] = useState(null);

  scrollYProgress.on("change", (yProgress) => {
    if (yProgress <= 0.3 && yProgress >= 0) setScrollIndex(0);
    if (yProgress <= 0.6 && yProgress >= 0.3) setScrollIndex(1);
    if (yProgress <= 0.9 && yProgress >= 0.6) setScrollIndex(2);
  });

  return (
    <section ref={sectionRef} className="relative h-full md:h-[4000px]">
      <div className="sticky top-0 flex flex-col flex-nowrap lg:flex-row">
        <Scrollama offset={0.5}>
          {projectsHomeData.map((project, index) => (
            <Step key={project.title}>
              <Project index={index} scrollIndex={scrollIndex} {...project} />
            </Step>
          ))}
        </Scrollama>
      </div>
    </section>
  );
};

export default Projects;
