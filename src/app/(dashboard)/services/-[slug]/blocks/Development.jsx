"use client";

import { useState, useRef, createElement, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/utils/ContactForm";
import Image from "next/image";
import { useGetItems } from "@/hooks/use-strapi";
import Markdown from "markdown-to-jsx";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@chakra-ui/react";

const benefitsData = [
  {
    title: "/1 Requirements Analysis",
    text: "If you have an idea or an existing product that you want to upgrade with Web3, we’ll suggest and develop a custom solution for your business that will bring you tangible results ",
    initialStyle: "",
    transformStyle: ""
  },
  {
    title: "/2 Architecture design",
    text: "If you want to integrate crypto and blockchain into your fintech product, we’ll do it in a way that’ll bring your business to its full potential",
    transformStyle: "max-h-max -translate-y-[80%] duration-1000",
    initialStyle: "max-h-max -translate-y-[15%] duration-1000",
    headerStyle: "max-w-[320px]"
  },
  {
    title: "/3 Smart Contract Development",
    text: "If you need to develop a Web3 product of any complexity, as a team who lives and breathes Web3, we’ll streamline the entire process and provide clean, secure, and scalable code ",
    transformStyle: "max-h-max -translate-y-[150%] duration-1000",
    initialStyle: "max-h-max -translate-y-[85%] duration-1000"
  },
  {
    title: "/4 Deployment and integration",
    text: "Our team moves in sync with the market, adapting and reacting to the changes on the go. We’re proactive to the bone and provide milestone updates regularly & promptly",
    transformStyle: "max-h-max -translate-y-[225%] duration-1000",
    initialStyle: "max-h-max -translate-y-[160%] duration-1000"
  },
  {
    title: "/5 Support and updates",
    text: "You can save yourself a headache by delegating the development process to us. Focus on other things that matter for your business while we deliver the product shaped by your vision",
    transformStyle: "max-h-max -translate-y-[296%] duration-1000",
    initialStyle: "max-h-max -translate-y-[233%] duration-1000",
    isLast: true
  }
];

export default function Development() {
  const [modalOpen, setModalOpen] = useState(false);

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
    if (yProgress <= 0.2 && yProgress >= 0) setScrollIndex(0);
    if (yProgress <= 0.4 && yProgress >= 0.2) setScrollIndex(1);
    if (yProgress <= 0.6 && yProgress >= 0.4) setScrollIndex(2);
    if (yProgress <= 0.8 && yProgress >= 0.6) setScrollIndex(3);
    if (yProgress <= 1 && yProgress >= 0.8) setScrollIndex(4);
  });

  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative hidden md:block "
    >
      <div className="sticky top-0 flex flex-col border-t border-t-th-fade md:flex-row">
        <div className="px-default md-border-r flex w-full border-b border-b-th-fade py-10 md:w-1/2 md:py-0">
          <div className="my-auto box-border md:sticky">
            <section id="view_more" className="relative z-10 lg:my-auto">
              <div className="relative grid grid-cols-1">
                <Image
                  alt=""
                  width={1380}
                  height={1330}
                  style={{ pointerEvents: 'none' }}
                  className="absolute -left-32 -top-[800px] -z-10 min-h-[1330px] min-w-[900px]"
                  src={"/assets/services/radial.png"}
                />
                <div className="mb-16 flex flex-col items-start justify-start gap-y-8 px-4 text-center text-white ">
                  <h3 className="mx-auto cursor-default text-left font-roc text-2xl uppercase   leading-none md:text-[42px]">
                    Our Smart Contracts Development Process
                  </h3>
                  <span className="text-left text-[#ffffff71]">
                    We follow a rigorous and consistent smart contract
                    development process to ensure high quality, security, and
                    customer compliance:
                  </span>

                  <button
                    onClick={() => setModalOpen(true)}
                    type="submit"
                    className="btn-submit uppercase xl:px-12"
                  >
                    book consultation
                  </button>
                  <ContactForm
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                  />
                </div>
              </div>
            </section>
            <p className="block max-w-xl cursor-default text-center font-roc text-2xl font-medium uppercase leading-tight text-white md:my-12 md:hidden md:text-left md:text-3xl lg:my-16 lg:text-4xl xl:my-20 xl:text-[42px]">
              Being fully immersed in Web3, we’re not just devs —{" "}
              <span className="violet-gradient-text">
                we’re product visionaries
              </span>{" "}
              working as an in-house team{" "}
              <span className="text-[#808080]">
                with you to grow your business with Web3
              </span>
            </p>
          </div>
        </div>
        <div className="border-b border-b-th-fade md:flex md:w-1/2 md:flex-col">

        <Accordion allowToggle>
            {benefitsData.map((benefit, index) => (
              <AccordionItem key={index} className="border-b border-th-fade">
                {({ isExpanded }) => (
                  <div
                    className={cn(
                      "relative bg-cover px-5 py-[24px] xl:px-[60px] xl:py-[36px]",
                    )}
                    
                    style={benefit.style}
                    key={index}
                  >

                    <div className="absolute flex left-[-5px]  flex-col items-center justify-center">
                        <div
                          className={cn(
                            "absolute h-[15vh] w-[0px] bg-[#808080]",
                          )}
                        ></div>
                        <div className="mt-[15px] h-3 min-w-3 rounded-full bg-[#808080]"></div>
                      </div>

                    <AccordionButton className={cn("relative")}>
                      <div className="mr-auto w-full max-w-3xl text-left ">
                        <span className="max-w-2xl text-left font-roc !text-[14px] font-medium uppercase !leading-none text-white lg:!text-xl lg:!leading-none">
                          {benefit.title}
                        </span>
                      </div>
                      {isExpanded ? (
                         <div className="flex items-center justify-center" style={{
                          width: screenWidth > 768 ? 150 : 50,
                        }}>
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
                        <div className="flex items-center justify-center" style={{
                          width: screenWidth > 768 ? 150 : 50,
                        }}>
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
    </section>
  );
}
