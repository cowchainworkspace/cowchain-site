"use client";

import { useState, useRef, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import Typewriter from "typewriter-effect";
import { cn } from "@/lib/utils";
import plusIcon from "@/assets//icons/plus.svg";
import minusIcon from "@/assets//icons/minus.svg";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@chakra-ui/react";

const benefitsData = [
  {
    title: "Transforming raw concepts into results-driven code",
    text: "If you have an idea or an existing product that you want to upgrade with Web3, we’ll suggest and develop a custom solution for your business that will bring you tangible results ",
    transformStyle: "",
    initialStyle: "border-0"
  },
  {
    title: "Expanding business opportunities for fintech products",
    text: "If you want to integrate crypto and blockchain into your fintech product, we’ll do it in a way that’ll bring your business to its full potential",
    transformStyle:
      "max-h-max -translate-y-[40%] xl:-translate-y-[40%] 2xl:-translate-y-[45%] duration-1000",
    initialStyle:
      "max-h-max translate-y-[60%] xl:translate-y-[30%] 2xl:translate-y-[45%] duration-1000"
  },
  {
    title: "Building impactful and functional Web3 products",
    text: "If you need to develop a Web3 product of any complexity, as a team who lives and breathes Web3, we’ll streamline the entire process and provide clean, secure, and scalable code ",
    transformStyle:
      "max-h-max -translate-y-[80%] xl:-translate-y-[80%] 2xl:-translate-y-[85%]   duration-1000",
    initialStyle:
      "max-h-max translate-y-[25%] 2xl:translate-y-[10%] duration-1000"
  },
  {
    title: "Creating a custom-tailored strategy for every product",
    text: "Our team moves in sync with the market, adapting and reacting to the changes on the go. We’re proactive to the bone and provide milestone updates regularly & promptly",
    transformStyle:
      "max-h-max -translate-y-[120%] xl:-translate-y-[120%] 2xl:-translate-y-[130%] duration-1000",
    initialStyle:
      "max-h-max -translate-y-[15%] xl:-translate-y-[35%] 2xl:-translate-y-[30%] duration-1000"
  },
  {
    title: "Taking full responsibility for the product development",
    text: "You can save yourself a headache by delegating the development process to us. Focus on other things that matter for your business while we deliver the product shaped by your vision",
    transformStyle:
      "max-h-max -translate-y-[160%] xl:-translate-y-[160%] 2xl:-translate-y-[170%] duration-1000",
    initialStyle:
      "max-h-max -translate-y-[55%] xl:-translate-y-[65%] 2xl:-translate-y-[65%]  duration-1000",
    isLast: true
  }
];

export default function Benefits() {
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
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  // scrollYProgress.on("change", (yProgress) => {
  //   if (yProgress <= 0.2 && yProgress >= 0) setScrollIndex(0);
  //   if (yProgress <= 0.4 && yProgress >= 0.2) setScrollIndex(1);
  //   if (yProgress <= 0.6 && yProgress >= 0.4) setScrollIndex(2);
  //   if (yProgress <= 0.8 && yProgress >= 0.6) setScrollIndex(3);
  //   if (yProgress <= 1 && yProgress >= 0.8) setScrollIndex(4);
  // });

  const handleToggle = (index) => {
    console.log(index);
    setScrollIndex(index);
  };

  return (
    <section id="faq" className="relative z-30">
      <div className="relative grid grid-cols-1 md:grid-cols-6">
        <div className="py-heading px-default md-border-r flex justify-center border-b border-b-th-fade text-center md:col-span-3">
          <div className="hidden max-w-xl cursor-default text-center font-roc text-2xl font-medium uppercase leading-tight text-white md:my-12 md:block md:text-left md:text-3xl lg:my-16 lg:text-4xl xl:my-20 xl:text-[42px]">
          <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'Being fully immersed in Web3, we’re not just devs — <span style="background: linear-gradient(146deg, #e9bbff 32.8%, #8e66ff 61.09%);  background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"> we’re product visionaries </span> working as an in-house team <span style="color: #ffffff71">with you to grow your business with Web3</span> '
                    )
                    .callFunction(({ elements }) => {
                      elements.cursor.hidden = true;
                    })
                    .changeDelay(10)
                    .start();
                }}
              />
          </div>
          
        </div>
        <div className="md:col-span-3">
          <Accordion allowToggle>
            {benefitsData.map((benefit, index) => (
              <AccordionItem key={index} className="border-b border-th-fade">
                {({ isExpanded }) => (
                  <div
                    className={cn(
                      "relative bg-cover px-5 py-8 xl:px-[60px] xl:py-16",
                      {
                        "bg-[url('/assets/faq-gradient.png')]": isExpanded
                      }
                    )}
                    key={index}
                  >
                    <AccordionButton className={cn("relative")}>
                      <div className="mr-auto w-full max-w-3xl text-left ">
                        <span className="max-w-2xl text-left font-roc !text-base font-medium uppercase !leading-none text-white lg:!text-xl lg:!leading-none">
                          {benefit.title}
                        </span>
                      </div>
                      {isExpanded ? (
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
                      ) : (
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
    </section>
  );
}