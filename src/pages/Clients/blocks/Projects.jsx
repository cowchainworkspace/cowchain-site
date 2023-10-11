import React, { useState } from "react";
import pic1 from "../../../assets/homepage/projects/1.jpg";
import pic2 from "../../../assets/homepage/projects/2.jpg";
import pic3 from "../../../assets/homepage/projects/3.jpg";
import { Scrollama, Step } from "react-scrollama";
import { motion } from "framer-motion";

const sectionsData = [
  {
    title: "Startups riding the blockchain wave 1",
    description:
      "Got an idea keeping you up at night? Let's turn it into a tangible and effective solution. We'll guide you through the development process, ensuring that your product is both functional and aligned with your business goals",
    projects: [
      {
        pic: pic1,
        name: "Decentralized Exchange (DEX)",
      },
      {
        pic: pic2,
        name: "Decentralized Exchange (DEX)",
      },
    ],
  },
  {
    title: "Startups riding the blockchain wave 2",
    description:
      "Got an idea keeping you up at night? Let's turn it into a tangible and effective solution. We'll guide you through the development process, ensuring that your product is both functional and aligned with your business goals",
    projects: [
      {
        pic: pic1,
        name: "Decentralized Exchange (DEX)",
      },
      {
        pic: pic2,
        name: "Decentralized Exchange (DEX)",
      },
    ],
  },
  {
    title: "Startups riding the blockchain wave 3",
    description:
      "Got an idea keeping you up at night? Let's turn it into a tangible and effective solution. We'll guide you through the development process, ensuring that your product is both functional and aligned with your business goals",
    projects: [
      {
        pic: pic1,
        name: "Decentralized Exchange (DEX)",
      },
      {
        pic: pic2,
        name: "Decentralized Exchange (DEX)",
      },
    ],
  },
];

const Projects = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const windowWidth = document.body.clientWidth;

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepExit = ({ direction, data }) => {
    if (direction === "down" && currentStepIndex === 3) setCurrentStepIndex(0);
    else setCurrentStepIndex(currentStepIndex - 1);
    /* if (direction === "up" && currentStepIndex === 1) setCurrentStepIndex(0); */
  };

  return (
    <section id="clients-projects">
      <div className="relative grid grid-cols-1 md:grid-cols-7">
        <div className="hidden md:block md:col-span-3 px-default py-10 pb-48">
          <div className="h-[1px]"></div>
          <div className="sticky top-48 flex flex-col gap-y-12 lg:gap-y-16">
            <h4
              className="text-th-fade clients-projects-marker"
              active={currentStepIndex === 1 ? "true" : "false"}
            >
              Startups
            </h4>
            <h4
              className="text-th-fade clients-projects-marker"
              active={currentStepIndex === 2 ? "true" : "false"}
            >
              Enterprises
            </h4>
            <h4
              className="text-th-fade clients-projects-marker"
              active={currentStepIndex === 3 ? "true" : "false"}
            >
              Web3 natives
            </h4>
          </div>
        </div>
        <div className="md:col-span-4">
          {/* <div
            className={
              index === 2
                ? "section-rendered h-4"
                : "section-rendered h-4 md:h-[50vh]"
            }
          ></div> */}
          <div className="section-rendered h-4"></div>
          <Scrollama
            offset={0.5}
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
          >
            {sectionsData &&
              sectionsData.map((section, index) => (
                <Step data={index + 1} key={index}>
                  <article
                    className={
                      index !== 0
                        ? "bg-black sticky px-4 md:px-8 flex flex-col"
                        : "bg-black sticky px-4 md:px-8 flex flex-col"
                    }
                    style={{
                      top: `${
                        windowWidth < 768 ? index * 108 : (index + 1) * 108
                      }px`,
                    }}
                  >
                    <div
                      className={
                        index === 0
                          ? "h-[1px] py-6"
                          : "border-t border-t-th-fade h-[1px] py-6"
                      }
                    ></div>
                    <p className="text-xl font-roc text-white uppercase leading-none font-medium max-w-xs md:max-w-none">
                      {section.title}
                    </p>
                    <div className="mt-10 bg-black">
                      <p className="text-th-grey max-w-xl">
                        {section.description}
                      </p>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 lg:gap-6 my-8 md:my-12 lg:mb-20 xl:mb-32 md:grid md:grid-cols-2 md:mr-8 lg:mr-16 xl:mr-24 max-w-3xl">
                        {section.projects &&
                          section.projects.map((project, index) => (
                            <div
                              key={index}
                              className="relative flex flex-col p-4 w-full max-w-[320px] md:max-w-none md:w-full h-[30vh] md:h-[480px]"
                            >
                              <div
                                className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                  backgroundImage: `url(${project.pic})`,
                                }}
                              ></div>
                              <h2 className="relative text-white max-w-[140px] mt-auto">
                                {project.name}
                              </h2>
                            </div>
                          ))}
                      </div>
                    </div>
                  </article>
                </Step>
              ))}
          </Scrollama>
        </div>
      </div>
    </section>
  );
};

export default Projects;
