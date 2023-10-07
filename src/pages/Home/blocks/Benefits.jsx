import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { useCollapse } from "react-collapsed";

const benefitsData = [
  {
    title: "Transforming raw concepts into results-driven code",
    text: "If you have an idea or an existing product that you want to upgrade with Web3, we’ll suggest and develop a custom solution for your business that will bring you tangible results ",
  },
  {
    title: "Expanding business opportunities for fintech products",
    text: "If you want to integrate crypto and blockchain into your fintech product, we’ll do it in a way that’ll bring your business to its full potential",
  },
  {
    title: "Building impactful and functional Web3 products",
    text: "If you need to develop a Web3 product of any complexity, as a team who lives and breathes Web3, we’ll streamline the entire process and provide clean, secure, and scalable code ",
  },
  {
    title: "Creating a custom-tailored strategy for every product",
    text: "Our team moves in sync with the market, adapting and reacting to the changes on the go. We’re proactive to the bone and provide milestone updates regularly & promptly",
  },
  {
    title: "Taking full responsibility for the product development",
    text: "You can save yourself a headache by delegating the development process to us. Focus on other things that matter for your business while we deliver the product shaped by your vision",
  },
];

const Benefits = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepExit = ({ direction, data }) => {
    if (direction === "up" && currentStepIndex === 1) setCurrentStepIndex(0);
  };

  const expandVariants = {
    visible: { height: "auto" },
    hidden: { height: 0 },
  };

  const textVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section id="benefits" className="relative">
      <div className="flex flex-col md:flex-row">
        <div className="w-full flex py-16 md:py-0 px-default border-b border-b-th-fade md-border-r md:w-1/2">
          <div className="sticky bottom-[30vh] self-end box-border">
            <p className="font-roc text-2xl leading-tight font-medium md:text-3xl lg:text-4xl xl:text-[42px] text-center md:text-left text-white uppercase max-w-xl md:my-12 lg:my-16 xl:my-20">
              Being fully immersed in Web3, we’re not just devs —{" "}
              <span className="violet-gradient-text">
                we’re product visionaries
              </span>{" "}
              working as an in-house team{" "}
              <span className="text-th-grey">
                with you to grow your business with Web3
              </span>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:flex md:flex-col">
          <Scrollama
            offset={0.5}
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
          >
            {benefitsData.map((benefit, index) => {
              const active = index + 1 === currentStepIndex;
              return (
                <Step data={index + 1} key={index}>
                  <article className="benefit-wrapper border-b border-b-th-fade px-default py-12 lg:py-16 flex overflow-hidden relative">
                    <div>
                      <h2 className="max-w-xl">{benefit.title}</h2>
                      <AnimatePresence>
                        {active && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={expandVariants}
                            id={"b-expandable-" + index}
                          >
                            <motion.p
                              initial="hidden"
                              animate="visible"
                              variants={textVariants}
                              className="text-th-grey mt-8 text-sm md:text-base lg:text-lg !leading-[180%]"
                            >
                              {benefit.text}
                            </motion.p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </article>
                </Step>
              );
            })}
          </Scrollama>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
