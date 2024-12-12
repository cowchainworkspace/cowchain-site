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
    title: "Overview",
    text: "Cowchain is a team of experts in blockchain smart contract development. We have deep knowledge and practical experience creating decentralized solutions on various blockchain platforms, including Ethereum, Solana, Avalanche, TON, Near, Polygon, and Binance Smart Chain. Our expertise is backed by successful projects for clients in various industries, such as finance, gaming, logistics, medical, and the public sector. Over the years, our smart contract development agency has accumulated expertise in all aspects: Smart contract architecture and design with scalability, efficiency, and security. Smart contract development using Solidity, Rust, and other languages. Integrating smart contracts with traditional systems and external data sources via oracles. Auditing smart contracts to identify and remediate vulnerabilities. Optimizing smart contracts to reduce gas costs. Upgrade and migrate existing smart contracts. When you choose Cowchain, you get a team of experts who can create you a robust, high-performance blockchain solution fully customized to your business needs.",
    transformStyle: "translate-y-[30%] xl:translate-y-[0%]",
    initialStyle: "border-0"
  },
  {
    title: "Smart contract development",
    text: "Our experts create high-performance and scalable smart contracts on various blockchain platforms such as Ethereum, Solana, Binance Smart Chain, Polygon, and others. We develop smart contracts for DeFi apps, NFT marketplaces, DEX, GameFi, and other blockchain-based solutions. Using best development practices, we ensure your smart contracts are secure, transparent, and efficient.",
    transformStyle:
      "max-h-max -translate-y-[37%] xl:-translate-y-[40%] 2xl:-translate-y-[45%] duration-1000",
    initialStyle:
      "max-h-max translate-y-[140%] xl:translate-y-[30%] 2xl:translate-y-[52%] duration-1000"
  },
  {
    title: "Smart contract audit",
    text: "If you need to develop a Web3 product of any complexity, as a team who lives and breathes Web3, we’ll streamline the entire process and provide clean, secure, and scalable code ",
    transformStyle:
      "max-h-max -translate-y-[100%] xl:-translate-y-[80%] 2xl:-translate-y-[85%]   duration-1000",
    initialStyle:
      "max-h-max translate-y-[77%] 2xl:translate-y-[10%] duration-1000"
  },
  {
    title: "Smart contract optimization",
    text: "Smart contract auditing is critical to ensure reliability and protection against potential vulnerabilities. Our cybersecurity experts thoroughly check the source code of smart contracts and identify and address potential risks such as logic errors, overflow errors, re-entry vulnerabilities, and many others. We provide a detailed report with recommendations to improve the security of your smart contract.",
    transformStyle:
      "max-h-max -translate-y-[157%] xl:-translate-y-[120%] 2xl:-translate-y-[130%] duration-1000",
    initialStyle:
      "max-h-max translate-y-[20%] xl:translate-y-[10%] 2xl:-translate-y-[30%] duration-1000"
  },
  {
    title: "Implementation of smart contracts into business processes",
    text: "We help integrate smart contracts into companies' existing business processes, providing operations automation, increased efficiency, and transparency. Our experts will analyze your needs and offer optimal solutions for implementing smart contracts in your business.",
    transformStyle:
      "max-h-max -translate-y-[225%] xl:-translate-y-[160%] 2xl:-translate-y-[170%] duration-1000",
    initialStyle:
      "max-h-max -translate-y-[45%] xl:-translate-y-[5%] 2xl:-translate-y-[65%]  duration-1000",
    isLast: true
  }
];

export default function Benefits() {
  const { data } = useGetItems("services-expertises");

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
  const [modalOpen, setModalOpen] = useState(false);

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
      className="relative"
    >
      <div className="sticky top-0 flex flex-col border-t border-t-th-fade md:flex-row">
        <div className="px-default md-border-r flex w-full md:border-b md:border-b-th-fade py-10 md:w-1/2 md:py-0">
          <div className="my-auto box-border md:sticky">
            <section id="view_more" className="relative z-10 lg:my-auto">
              <div className="relative grid grid-cols-1">
                <Image
                  alt=""
                  width={1380}
                  height={1330}
                  style={{ pointerEvents: 'none' }}
                  className="absolute hidden md:block -left-32 -top-[800px] -z-10 min-h-[1330px] min-w-[900px]"
                  src={"/assets/services/radial.png"}
                />
                <div className="mb-16 flex flex-col items-start justify-start gap-y-8 px-4 text-center text-white ">
                  <h3 className="mx-auto cursor-default text-left font-roc text-2xl uppercase leading-none md:text-[42px]">
                    Expertise of Our Smart Contract Development Company
                  </h3>
                  <ContactForm
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="border-b border-b-th-fade md:flex md:w-1/2 md:flex-col">

        <Accordion allowToggle>
            {data?.data.map((benefit, index) => (
              <AccordionItem key={index} className={cn("border-b border-th-fade", {
                
              })}>
                {({ isExpanded }) => (
                  <div
                    className={cn(
                      "relative bg-cover px-5 py-[24px] xl:px-[60px] xl:py-[36px] "
                    )}
                    key={index}
                  >
                    <AccordionButton className={cn("relative")}>
                      <div className="mr-auto w-full max-w-3xl text-left ">
                        <span className="max-w-2xl text-left font-roc !text-[14px] font-medium uppercase !leading-none text-white lg:!text-xl lg:!leading-none">
                        {benefit.attributes.title}
                        </span>
                      </div>
                      {isExpanded ? (
                        <div
                          className="flex items-center "
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
                          className="flex items-center justify-end md:justify-center"
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
                      className={cn(
                        "markdown markdown_benefits max-h-[300px] mr-[20px] md:mr-[55px] mt-[24px] min-h-[150px] max-w-2xl overflow-auto text-sm !leading-[180%] text-secondary transition-all  duration-[1000ms]  ease-in will-change-transform lg:text-base 2xl:max-w-full",
                        benefit.initialStyle,
                        {
                          "block  transition-all duration-1000":
                            scrollIndex === index
                        }
                      )}
                    >

                      <Markdown
                        children={benefit.attributes.text}
                        options={{
                          createElement(type, props, children) {
                            return (
                              <div className="parent pr-[10px] md:pr-[80px] markdown">
                                {createElement(type, props, children)}
                              </div>
                            );
                          }
                        }}
                      />
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
