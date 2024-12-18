"use client";

import { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@chakra-ui/react";

const benefitsData = [
  {
    title: "Transforming raw concepts into results-driven code",
    text: "If you have a concept or product you'd like to integrate with web3 or enhance with Web3 technology, we will build a web3 integration strategy that delivers tangible outcomes. Thus, by including experienced developers, your idea becomes a marketable product smoothly and gainfully.",
    transformStyle: "",
    initialStyle: "border-0"
  },
  {
    title: "Extensive Project Accelerator Services",
    text: "In our cutting-edge accelerator, we have many services for every project. Whatever a company that needs help with funding, development, packaging, and go-to-market strategy believes in, we're ready to boost it. With an extensive list of partners, service provider support, and KOLs, your project will get the best resources and web3 recognition.",
    transformStyle:
      "max-h-max -translate-y-[40%] xl:-translate-y-[40%] 2xl:-translate-y-[45%] duration-1000",
    initialStyle:
      "max-h-max translate-y-[60%] xl:translate-y-[30%] 2xl:translate-y-[45%] duration-1000"
  },
  {
    title: "White-label solutions for business optimization",
    text: "Custom white-label products will be less time-consuming and cost-efficient. These ready-made solutions, created by crypto industry professionals, can be configured according to your business's requirements. Obtain actual code for your application or startup venture, so you do not have to wait for costly development cycles.",
    transformStyle:
      "max-h-max -translate-y-[80%] xl:-translate-y-[80%] 2xl:-translate-y-[85%]   duration-1000",
    initialStyle:
      "max-h-max translate-y-[25%] 2xl:translate-y-[10%] duration-1000"
  },
  {
    title: "Trend actions in web3 marketing and business development",
    text: "Using all the secrets of web3 marketing and our deep understanding of business development strategy, your project will be able to grow and gain a huge community. Our vast network of partners, service providers, KOLs, and VCs allows us to tackle any challenge, ensuring your project achieves outstanding success and prominence in the web3 universe.",
    transformStyle:
      "max-h-max -translate-y-[120%] xl:-translate-y-[120%] 2xl:-translate-y-[130%] duration-1000",
    initialStyle:
      "max-h-max -translate-y-[15%] xl:-translate-y-[35%] 2xl:-translate-y-[30%] duration-1000"
  },
  {
    title: "Early-Stage Venture Capital (Low Cap)",
    text: "We don't just offer early-stage venture capital services to web3 startups. We also identify and help you realize your potential by providing crucial funding, strategic guidance, and mentorship. Our approach ensures that we comprehend the distinct needs and priorities of each project, thus aiding you in achieving success in the competitive web3 landscape.",
    transformStyle:
      "max-h-max -translate-y-[160%] xl:-translate-y-[160%] 2xl:-translate-y-[170%] duration-1000",
    initialStyle:
      "max-h-max -translate-y-[55%] xl:-translate-y-[65%] 2xl:-translate-y-[65%]  duration-1000",
    isLast: true
  }
];

export default function Benefits() {
  const sectionRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <section id="faq" className="relative z-30">
      <div className="relative grid grid-cols-1 md:grid-cols-6">
        <div className="px-default md-border-r items flex items-center justify-center border-b border-b-th-fade py-[] text-center md:col-span-3">
          <div className=" max-w-xl my-[60px] cursor-default text-center font-roc text-2xl font-medium uppercase leading-tight text-white md:my-12 md:block md:text-left md:text-3xl lg:my-16 lg:text-4xl xl:my-20 xl:text-[42px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'Fully immersed in web3, we’re not just devs — <span style="background: linear-gradient(146deg, #e9bbff 32.8%, #8e66ff 61.09%);  background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"> we’re the ones </span> who really can help tour company <span style="color: #ffffff71">solve every possible need in web3 universe</span> '
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
                      "relative bg-cover px-5 py-[24px] xl:px-[60px] xl:py-[36px]",
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
