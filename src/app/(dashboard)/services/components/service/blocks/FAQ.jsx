"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@chakra-ui/react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import bg from "@/assets/services/FAQServiceBg.svg"
import Image from "next/image";

const faqData = [
  {
    title:
      "How much does it cost to outsource the project to a Smart Contract development company?",
    content:
      "The cost of smart contract development depends on the project's complexity, the technologies used, and the developers' level of expertise. In general, we strive to offer each client the best value for money."
  },
  {
    title:
      "How long does a Smart Contract development project take to go live?",
    content: `The typical timeframe for a smart contract development project is about four days, including requirements analysis, development, testing, and deployment. The duration of the job varies depending on the scope and complexity of the project.`
  },
  {
    title:
      "Does a professional Smart Contract development service provider offer maintenance and support services?",
    content: `provider offer maintenance and support services?
Yes, we offer maintenance and support services for smart contracts after deployment. This ensures the solution's smooth operation in the long term.`
  },
];

export default function FAQ() {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <section id="faq" className="relative z-30 border-t border-t-th-fade">

<div style={{ pointerEvents: "none" }} className="absolute right-0 bottom-0 -top-[380px] left-0 z-[-3] overflow-hidden">
    <Image
        alt=""
        width={1380}
        height={1330}
        style={{ pointerEvents: "none" }}
        className="absolute -left-[650px] -z-10 min-h-[1330px] min-w-[900px]"
        src={bg}
      />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-5">
        <div className="py-[60px] md:py-heading px-default md-border-r flex justify-center border-b border-b-th-fade text-center md:col-span-2">
          <h2 className="flex max-w-[321px] justify-center text-center text-4xl uppercase leading-[40px]  text-white md:max-w-[365px] md:text-left md:text-[60px] md:leading-[53px]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="md:col-span-3">
          <Accordion allowToggle>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} className="border-b border-th-fade">
                {({ isExpanded }) => (
                  <div
                    className={cn(
                      "relative bg-cover px-[20px] py-[24px] xl:px-[60px] xl:py-16",
                      {
                        "bg-[url('/assets/faq-gradient.png')]": isExpanded
                      }
                    )}
                    key={index}
                  >
                    <AccordionButton className={cn("relative")}>
                      <div className="mr-auto w-full max-w-[287px] text-left ">
                        <span className="max-w-2xl text-left font-roc !text-[14px] font-medium uppercase !leading-none text-white lg:!text-xl lg:!leading-none">
                          {faq.title}
                        </span>
                      </div>
                      {isExpanded ? (
                         <div className="flex items-center justify-end md:justify-center" style={{
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
                        <div className="flex items-center justify-end md:justify-center" style={{
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
                          {faq.content}
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
