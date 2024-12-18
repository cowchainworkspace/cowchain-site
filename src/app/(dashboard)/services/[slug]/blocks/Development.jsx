"use client";

import { useState, useRef, createElement, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/utils/ContactForm";
import Image from "next/image";
import { useGetItems } from "@/hooks/use-strapi";
import arrowDown from "./../../../../../assets/services/arrowDownIcon.svg";
import arrowUp from "./../../../../../assets/services/arrowUpIcon.svg";
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
  const { data } = useGetItems("services-processes");

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
    <section id="benefits" ref={sectionRef} className="relative py-[30px] md:py-[0]">
      <div className=" sticky top-0 flex flex-col md:border-t md:border-t-th-fade md:flex-row">
        <div className="px-default md-border-r flex w-full md:border-b md:border-b-th-fade py-10 md:w-1/2 md:py-0">
          <div className="my-auto box-border md:sticky">
            <section id="view_more" className="relative z-10 lg:my-auto">
              <div className="relative grid grid-cols-1">
                <Image
                  alt=""
                  width={1380}
                  height={1330}
                  style={{ pointerEvents: "none" }}
                  className="absolute -left-32 -top-[800px] -z-10 hidden min-w-[900px]  md:block"
                  src={"/assets/services/radial.png"}
                />
                <div className="flex flex-col items-start justify-start gap-y-8 px-4 text-center text-white ">
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
          </div>
        </div>

        <div className="relative overflow-hidden md:overflow-visible md:border-b md:border-b-th-fade md:flex md:py-[30px]  md:w-1/2 md:flex-col">
          

          <Accordion allowToggle>

            {data?.data.map((benefit, index) => (
              <AccordionItem key={index} className="">
                {({ isExpanded }) => (
                  <div
                    className={cn(
                      "relative bg-cover px-5 py-[24px] xl:px-[60px] xl:py-[36px]"
                    )}
                    style={benefit.style}
                    key={index}
                  >

                    <div
                      className={cn(
                        "md:absolute left-[20px] flex flex-col md:items-center justify-center",
                        {
                          "md:left-[-6px]": isExpanded,
                          "md:left-[-3px]": !isExpanded
                        }
                      )}
                    >

                      <div
                        className={cn(
                          "absolute bottom-0 top-0 w-[1px] opacity-[0.3] md:opacity-[0.2]",
                          {
                            "absolute bottom-0 md:h-[45vh] top-0 md:top-[10px] md:left-[5px]  block w-[1px]":
                              isExpanded,
                              "top-[35px] md:top-[10px]": index === 0,
                              "bottom-[35px]": index === data?.data.length - 1,
                          }
                        )}
                        style={{
                          opacity: "0.3",
                          background: isExpanded
                            ? "linear-gradient(to bottom, #CF91FF 80%, #808080 100%)"
                            : "#808080"
                        }}
                      ></div>

                      <div className="relative top-[-5px]">
                      {isExpanded ? (
                        <div className=" absolute left-[-3px] mt-[15px] md:left-0 h-[8px] max-w-[8px] min-w-[8px] rounded-full bg-[#CF91FF] md:h-[11px] md:min-w-[11px]"></div>
                      ) : (
                        <div className=" absolute left-[-2px] md:left-0 mt-[15px] min-h-[5px] max-w-[5px] min-w-[5px] rounded-full bg-[#808080]"></div>
                      )}
                      </div>
                    </div>

                    <AccordionButton className={cn("relative")}>
                      <div className="mr-auto pl-[20px] md:pl-0 w-full max-w-3xl text-left ">
                        <span
                          className={cn(
                            "max-w-2xl text-left font-roc  text-[20px]  font-medium uppercase !leading-[24px] lg:!text-xl lg:!leading-none",
                            {
                              "text-[#BBBBBB]": !isExpanded,
                              "text-[#FFFFFF]": isExpanded
                            }
                          )}
                        >
                          {benefit.attributes.title}
                        </span>
                      </div>

                      {isExpanded ? (
                        <div
                          className="hidden md:flex items-center justify-center"
                          style={{
                            width: screenWidth > 768 ? 150 : 50
                          }}
                        >
                          <Image src={arrowUp} />
                        </div>
                      ) : (

                        <div
                          className="hidden md:flex items-center justify-center"
                          style={{
                            width: screenWidth > 768 ? 150 : 50
                          }}
                        >
                          <Image src={arrowDown} />
                        </div>
                      )}
                    </AccordionButton>
                    <AccordionPanel
                      className={cn("opacity-0  will-change-transform", {
                        "pt-6 opacity-100 ": isExpanded
                      })}
                    >
                      <div className="pl-[20px] md:pl-0">
                        <p className="max-w-2xl !leading-[160%] !text-[#bbb] lg:!leading-[175%]">
                          {benefit.attributes.text}
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
