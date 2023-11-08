import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const benefitsData = [
  {
    title: "Transforming raw concepts into results-driven code",
    text: "If you have an idea or an existing product that you want to upgrade with Web3, we’ll suggest and develop a custom solution for your business that will bring you tangible results "
  },
  {
    title: "Expanding business opportunities for fintech products",
    text: "If you want to integrate crypto and blockchain into your fintech product, we’ll do it in a way that’ll bring your business to its full potential"
  },
  {
    title: "Building impactful and functional Web3 products",
    text: "If you need to develop a Web3 product of any complexity, as a team who lives and breathes Web3, we’ll streamline the entire process and provide clean, secure, and scalable code "
  },
  {
    title: "Creating a custom-tailored strategy for every product",
    text: "Our team moves in sync with the market, adapting and reacting to the changes on the go. We’re proactive to the bone and provide milestone updates regularly & promptly"
  },
  {
    title: "Taking full responsibility for the product development",
    text: "You can save yourself a headache by delegating the development process to us. Focus on other things that matter for your business while we deliver the product shaped by your vision"
  }
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
    hidden: { height: 0 }
  };

  const textVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <section id="benefits" className="relative">
      <div className="flex flex-col md:flex-row">
        <div className="px-default md-border-r flex w-full border-b border-b-th-fade py-16 md:w-1/2 md:py-0">
          <div className="sticky  my-auto box-border">
            <p className="max-w-xl text-center font-roc text-2xl font-medium uppercase leading-tight text-white md:my-12 md:text-left md:text-3xl lg:my-16 lg:text-4xl xl:my-20 xl:text-[42px]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'Being fully immersed in Web3, we’re not just devs — <span style="background: linear-gradient(146deg, #e9bbff 32.8%, #8e66ff 61.09%);  background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"> we’re product visionaries </span> working as an in-house team <span style="color: #ffffff71">with you to grow your business with Web3</span> '
                    )
                    .changeDelay(100)
                    .start();
                }}
              />
            </p>
          </div>
        </div>
        <div className="md:flex md:w-1/2 md:flex-col">
          <Scrollama
            offset={0.5}
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
          >
            {benefitsData.map((benefit, index) => {
              const active = index + 1 === currentStepIndex;
              return (
                <Step data={index + 1} key={index}>
                  <article className="benefit-wrapper px-default relative flex overflow-hidden border-b border-b-th-fade py-6 lg:py-8">
                    <div>
                      <h2 className="max-w-xl text-xl">{benefit.title}</h2>
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
                            className="mt-8 text-sm !leading-[180%] text-th-grey md:text-base lg:text-lg"
                          >
                            {benefit.text}
                          </motion.p>
                        </motion.div>
                      )}
                      {!active && (
                        <motion.div
                          initial="visible"
                          animate="hidden"
                          exit="hidden"
                          variants={expandVariants}
                          id={"b-expandable-" + index}
                        >
                          <motion.p
                            initial="visible"
                            animate="hidden"
                            variants={textVariants}
                            className="mt-8 text-sm !leading-[180%] text-th-grey md:text-base lg:text-lg"
                          >
                            {benefit.text}
                          </motion.p>
                        </motion.div>
                      )}
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
