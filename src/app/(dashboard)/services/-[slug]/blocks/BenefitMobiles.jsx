"use client";

import { useState, useRef, createElement } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Markdown from "markdown-to-jsx";
import { useGetItems } from "@/hooks/use-strapi";

const benefitsData = [
  {
    title: "Overview",
    text: "Cowchain is a team of experts in blockchain smart contract development. We have deep knowledge and practical experience creating decentralized solutions on various blockchain platforms, including Ethereum, Solana, Avalanche, TON, Near, Polygon, and Binance Smart Chain. Our expertise is backed by successful projects for clients in various industries, such as finance, gaming, logistics, medical, and the public sector. Over the years, our smart contract development agency has accumulated expertise in all aspects:",
    initialStyle: "",
    transformStyle: ""
  },
  {
    title: "Smart contract development",
    text: "Cowchain is a team of experts in blockchain smart contract development. We have deep knowledge and practical experience creating decentralized solutions on various blockchain platforms, including Ethereum, Solana, Avalanche, TON, Near, Polygon, and Binance Smart Chain. Our expertise is backed by successful projects for clients in various industries, such as finance, gaming, logistics, medical, and the public sector. Over the years, our smart contract development agency has accumulated expertise in all aspects:",
    transformStyle: "max-h-max -translate-y-[80%] duration-1000",
    initialStyle: "max-h-max  duration-1000",
    headerStyle: "max-w-[320px]"
  },
  {
    title: "Smart contract audit",
    text: "Cowchain is a team of experts in blockchain smart contract development. We have deep knowledge and practical experience creating decentralized solutions on various blockchain platforms, including Ethereum, Solana, Avalanche, TON, Near, Polygon, and Binance Smart Chain. Our expertise is backed by successful projects for clients in various industries, such as finance, gaming, logistics, medical, and the public sector. Over the years, our smart contract development agency has accumulated expertise in all aspects:",
    transformStyle: "max-h-max -translate-y-[158%] duration-1000",
    initialStyle: "max-h-max -translate-y-[80%] duration-1000"
  },
  {
    title: "Smart contract optimization",
    text: "Cowchain is a team of experts in blockchain smart contract development. We have deep knowledge and practical experience creating decentralized solutions on various blockchain platforms, including Ethereum, Solana, Avalanche, TON, Near, Polygon, and Binance Smart Chain. Our expertise is backed by successful projects for clients in various industries, such as finance, gaming, logistics, medical, and the public sector. Over the years, our smart contract development agency has accumulated expertise in all aspects:",
    transformStyle: "max-h-max -translate-y-[235%] duration-1000",
    initialStyle: "max-h-max -translate-y-[155%] duration-1000"
  },
  {
    title: "Implementation of smart contracts into business processes",
    text: "Cowchain is a team of experts in blockchain smart contract development. We have deep knowledge and practical experience creating decentralized solutions on various blockchain platforms, including Ethereum, Solana, Avalanche, TON, Near, Polygon, and Binance Smart Chain. Our expertise is backed by successful projects for clients in various industries, such as finance, gaming, logistics, medical, and the public sector. Over the years, our smart contract development agency has accumulated expertise in all aspects:",
    transformStyle: "max-h-max -translate-y-[310%] duration-1000",
    initialStyle: "max-h-max -translate-y-[232%] duration-1000",
    isLast: true
  }
];

export default function BenefitsMobiles() {
  // const { data } = useGetItems("services-expertises");

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

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative  h-[2800px]  md:hidden md:h-[4000px]"
    >
      <div className="sticky top-0 flex h-screen flex-col md:flex-row">
        <div className="relative flex flex-col justify-between md:flex md:h-screen md:w-1/2 md:flex-col">
          <Scrollama className="relative" offset={0.5}>
            {benefitsData.map((benefit, index) => {
              return (
                <Step
                  className="relative"
                  data={index + 1}
                  key={benefit.title + index}
                >
                  <article
                    // style={benefit.initialStyle}
                    className={cn(
                      "relative flex h-[430px] min-h-[250px] grow flex-col items-center justify-center overflow-hidden border-t border-t-th-fade bg-black px-5    duration-1000  will-change-transform ",
                      benefitsData[index].initialStyle,
                      scrollIndex >= index
                        ? benefitsData[index].transformStyle
                        : ""
                    )}
                  >
                    <motion.div
                      variants={expandVariants}
                      id={"b-expandable-" + index}
                      className={"flex  flex-col justify-center py-10"}
                    >
                      <h2
                        className={cn(
                          "mb-12 mt-4 max-w-[320px]   text-base text-white",
                          benefit.text,
                          benefit.initialStyle
                        )}
                      >
                        {benefit.title}
                      </h2>
                      <motion.p
                        variants={textVariants}
                        className={cn(
                          " max-h-[300px] min-h-[300px] overflow-auto text-base !leading-[180%] text-secondary  transition-all  duration-[1000ms] ease-in will-change-transform lg:text-lg",
                          benefit.initialStyle,
                          {
                            "block  transition-all duration-1000":
                              scrollIndex === index
                          }
                        )}
                      >
                        <Markdown
                          children={benefit.text}
                          options={{
                            createElement(type, props, children) {
                              return (
                                <div className="parent markdown">
                                  {createElement(type, props, children)}
                                </div>
                              );
                            }
                          }}
                        />
                      </motion.p>
                    </motion.div>
                  </article>
                </Step>
              );
            })}
          </Scrollama>
        </div>
      </div>
    </section>
  );
}
