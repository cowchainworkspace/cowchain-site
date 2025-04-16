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
import { faqHomeData } from '../homeData/data'

export default function FAQ() {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <section id="faq" className="relative z-30 border-t border-t-th-fade">
      <div className="relative grid grid-cols-1 md:grid-cols-5">
        <div className="py-[60px] md:py-heading px-default md-border-r flex justify-center border-b border-b-th-fade text-center md:col-span-2">
          <h2 className="flex max-w-[321px] justify-center text-center text-4xl uppercase leading-[40px]  text-white md:max-w-[365px] md:text-left md:text-[60px] md:leading-[53px]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="md:col-span-3">
          <Accordion allowToggle>
            {faqHomeData.map((faq, index) => (
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
                      <div className="mr-auto w-full max-w-3xl text-left ">
                        <span className="max-w-2xl text-left font-roc !text-[14px] font-medium uppercase !leading-none text-white lg:!text-xl lg:!leading-none">
                          {faq.title}
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
