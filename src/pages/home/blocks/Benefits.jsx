import React, { useState, useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import Typewriter from "typewriter-effect";
import { cn } from "lib/utils";

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

export const Benefits = () => {
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
      className="relative h-[2100px] md:h-[4000px]"
    >
      <div className="sticky top-0 flex flex-col md:flex-row">
        <div className="px-default md-border-r flex w-full border-b border-b-th-fade py-16 md:w-1/2 md:py-0">
          <div className="my-auto  box-border md:sticky">
            <p className="hidden max-w-xl text-center font-roc text-2xl font-medium uppercase leading-tight text-white md:my-12 md:block md:text-left md:text-3xl lg:my-16 lg:text-4xl xl:my-20 xl:text-[42px]">
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
            </p>
            <p className="block max-w-xl text-center font-roc text-2xl font-medium uppercase leading-tight text-white md:my-12 md:hidden md:text-left md:text-3xl lg:my-16 lg:text-4xl xl:my-20 xl:text-[42px]">
              Being fully immersed in Web3, we’re not just devs —{" "}
              <span className="violet-gradient-text">
                we’re product visionaries
              </span>{" "}
              working as an in-house team{" "}
              <span className="text-[#ffffff71]">
                with you to grow your business with Web3
              </span>
            </p>
          </div>
        </div>
        <div className="md:flex md:h-screen md:w-1/2 md:flex-col">
          <Scrollama offset={0.5}>
            {benefitsData.map((benefit, index) => {
              return (
                <Step data={index + 1} key={benefit.title + index}>
                  <article
                    className={cn(
                      "px-default relative flex max-h-[278px] grow flex-col items-center justify-center  overflow-hidden border-b border-b-th-fade py-6   will-change-transform lg:py-8",
                      {
                        "max-h-max": scrollIndex === index,
                        "hidden md:flex":
                          scrollIndex > index && (index === 0 || index === 1)
                      }
                    )}
                  >
                    <motion.div
                      variants={expandVariants}
                      id={"b-expandable-" + index}
                      className="flex flex-col  justify-center"
                    >
                      <h2 className="max-w-xl text-xl">{benefit.title}</h2>
                      <motion.p
                        variants={textVariants}
                        className={cn(
                          " h-min max-h-0  text-sm !leading-[180%] text-secondary opacity-0  will-change-transform md:text-base lg:text-lg",
                          {
                            "mt-6 block h-auto max-h-[300px] opacity-100":
                              scrollIndex === index
                          }
                        )}
                      >
                        {benefit.text}
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
};
