"use client";

import React, { useState, useRef, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import Tag from "@/components/ui/tag";
import bg from "@/assets/bg/values.png";
import { cn } from "@/lib/utils";
import TeamInfo from "../blocks/team-info";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@chakra-ui/react";

const benefitsData = [
  {
    title: "01 / Passion",
    text: "The Cowchain team is united by our burning desire to lead the transformation of how people interact with the world. And we have the experience & skills to fulfill it. How? Through successfully deployed products shaped by the vision of startups, enterprises, and Web3 pioneers who choose to work with us. ",
    transformStyle: "",
    initialStyle: "border-0 "
  },
  {
    title: "02 / Individual Approach",
    text: "Cowchcain offers no “one-size-fits-alls.” We immerse ourselves in our clients' businesses, speaking their language and working as an in-house product team to develop effective solutions with users in mind. Your goals become our goals, and your challenges fuel our creativity.",
    transformStyle:
      "max-h-max -translate-y-[5%] xl:-translate-y-[5%] duration-1000",
    initialStyle:
      "max-h-max translate-y-[80%] xl:translate-y-[115%]  duration-1000"
  },
  {
    title: "03 / We are the devs of Web3",
    text: "In our worldview, there’s a huge difference between being Web3 developers and developers of Web3. Web3 devs know how to implement blockchain technologies. Devs of Web3 code meaningful products that add value to the community and push the industry forward. We are the devs of Web3.",
    transformStyle:
      "max-h-max -translate-y-[10%] xl:-translate-y-[10%]  duration-1000",
    initialStyle:
      "max-h-max translate-y-[25%] xl:translate-y-[60%] duration-1000"
  }
];

export const Values = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepExit = ({ direction, data }) => {
    if (direction === "up" && currentStepIndex === 1) setCurrentStepIndex(0);
  };

  const expandVariants = {
    visible: { height: "auto" },
    hidden: { height: 0 }
  };

  const textVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  const [scrollIndex, setScrollIndex] = useState(null);

  scrollYProgress.on("change", (yProgress) => {
    if (yProgress <= 0.3 && yProgress >= 0) setScrollIndex(0);
    if (yProgress <= 0.6 && yProgress >= 0.3) setScrollIndex(1);
    if (yProgress <= 0.9 && yProgress >= 0.6) setScrollIndex(2);
  });

  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div className=" md:block">
      <section
        ref={sectionRef}
        id="benefits"
        className="relative z-100000  md:block"
      >
        <div className="">
          <Image
            className="absolute -bottom-[400px] left-0 hidden h-[1625px] w-[700px] xl:block"
            src={bg}
            alt=""
          ></Image>

          <div className="flex flex-col xl:flex-row">
            <div className="flex items-start justify-start border-b border-b-th-fade   border-r-th-fade xl:w-1/2 xl:items-center xl:border-b xl:border-r ">
              <div className="sticky mb-12  ml-5 mt-16 flex max-w-[354px] flex-col items-start justify-start xl:mb-0 xl:ml-28">
                <p className="font-roc text-4xl font-medium  uppercase  text-white  xl:text-7xl">
                  Our mission
                </p>
              </div>
            </div>

            <div className="flex-1">
              <Accordion allowToggle>
                {benefitsData.map((benefit, index) => (
                  <AccordionItem
                    key={index}
                    className="border-b border-th-fade"
                  >
                    {({ isExpanded }) => (
                      <div
                        className={cn(
                          "relative bg-cover px-5 py-[24px] xl:px-[60px] xl:py-[60px]"
                        )}
                        key={index}
                      >
                        <AccordionButton className={cn("relative")}>
                          <div className="mr-auto w-full max-w-3xl text-left ">
                            <span className="max-w-2xl text-left font-roc !text-[14px] font-medium uppercase !leading-none text-white lg:!text-xl lg:!leading-none">
                              {benefit.title}
                            </span>
                          </div>
                          {isExpanded ? (
                            <div
                              className="flex items-center justify-center"
                              style={{
                                width: screenWidth > 768 ? 150 : 50
                              }}
                            >
                              <svg
                                width={screenWidth > 768 ? "50" : "32"}
                                height={screenWidth > 768 ? "50" : "32"}
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="16" cy="16" r="16" fill="white" />
                                <path
                                  d="M12.2656 16H19.7323"
                                  stroke="black"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div
                              className="flex items-center justify-center"
                              style={{
                                width: screenWidth > 768 ? 150 : 50
                              }}
                            >
                              <svg
                                width={screenWidth > 768 ? "50" : "32"}
                                height={screenWidth > 768 ? "50" : "32"}
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="15.75"
                                  stroke="white"
                                  strokeOpacity="0.5"
                                  strokeWidth="0.5"
                                />
                                <path
                                  d="M16 12.2666V19.7333"
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.2656 16H19.7323"
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          )}
                        </AccordionButton>
                        <AccordionPanel
                          className={cn("opacity-0  will-change-transform", {
                            "pt-6 opacity-100 ": isExpanded
                          })}
                        >
                          <div className=" ">
                            <p className="max-w-2xl !leading-[160%] !text-[#bbb] lg:!leading-[175%]">
                              {benefit.text}
                            </p>
                          </div>
                        </AccordionPanel>
                      </div>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <TeamInfo />
    </div>
  );
};
