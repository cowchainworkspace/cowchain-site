import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion } from "framer-motion";
import Tag from "components/ui/tag";
import bg from "assets/bg/values.png";

const benefitsData = [
  {
    title: "01 / Passion",
    text: "The Cowchain team is united by our burning desire to lead the transformation of how people interact with the world. And we have the experience & skills to fulfill it. How? Through successfully deployed products shaped by the vision of startups, enterprises, and Web3 pioneers who choose to work with us. "
  },
  {
    title: "02 / Individual Approach",
    text: "Cowchcain offers no “one-size-fits-alls.” We immerse ourselves in our clients' businesses, speaking their language and working as an in-house product team to develop effective solutions with users in mind. Your goals become our goals, and your challenges fuel our creativity."
  },
  {
    title: "03 / We are the devs of Web3.",
    text: "In our worldview, there’s a huge difference between being Web3 developers and developers of Web3. Web3 devs know how to implement blockchain technologies. Devs of Web3 code meaningful products that add value to the community and push the industry forward. We are the devs of Web3."
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

  return (
    <section id="benefits" className="relative h-full">
      <img
        className="absolute -bottom-44 left-0   hidden h-[1125px]   w-[700px] lg:block"
        src={bg}
        alt=""
      ></img>
      <button className=" absolute bottom-1/3 left-0 right-0 mx-auto hidden h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-white font-roc text-base font-medium uppercase text-black lg:h-40 lg:w-40 xl:block">
        Get in touch
      </button>
      <div className="flex flex-col xl:flex-row">
        <div className="flex items-start justify-start border-b-th-fade border-r-th-fade xl:w-1/2 xl:items-center xl:border-b xl:border-r ">
          <div className="sticky mb-12  ml-5 mt-16 flex max-w-[354px] flex-col items-start justify-start xl:mb-0 xl:ml-24">
            <Tag className={"mb-4 justify-start"} title={"our values"} />
            <p className="font-roc text-4xl font-medium  uppercase  text-white  xl:text-7xl">
              What we value
            </p>
            <button className="btn-submit mt-6 cursor-pointer  items-center justify-center bg-white   font-roc text-base font-medium uppercase text-black xl:hidden  xl:px-12">
              Get in touch
            </button>
          </div>
        </div>
        <div className="h-full min-h-[680px] items-center  justify-center md:flex md:flex-col xl:w-1/2">
          <Scrollama
            offset={0.5}
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
          >
            {benefitsData.map((benefit, index) => {
              const active = index + 1 === currentStepIndex;
              return (
                <Step data={index + 1} key={index}>
                  <article className="benefit-wrapper px-default relative flex h-full flex-grow overflow-hidden border-b border-b-th-fade py-12 lg:py-[60px]">
                    <div>
                      <span className="max-w-xl text-2xl text-white">
                        {benefit.title}
                      </span>
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
