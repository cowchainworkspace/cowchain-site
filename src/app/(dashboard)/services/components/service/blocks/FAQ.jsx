"use client";

import bg from "@/assets/services/FAQServiceBg.svg";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

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
  }
];

export default function FAQ({
  title = "FREQUENTLY ASKED QUESTIONS",
  data = faqData,
  noBg,
  desc,
  isSecondary,
  faq = false,
  isTwoHalf = false,
  isDoublePadding = false,
  titleClasses = ""
}) {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <section id="faq" className="relative z-30 border-t border-t-th-fade">
      {!noBg && (
        <div
          style={{ pointerEvents: "none" }}
          className="absolute -top-[380px] bottom-0 left-0 right-0 z-[-3] overflow-hidden"
        >
          <Image
            alt=""
            width={1380}
            height={1330}
            style={{ pointerEvents: "none" }}
            className="absolute -left-[650px] -z-10 min-h-[1330px] min-w-[900px]"
            src={bg}
          />
        </div>
      )}

      <div
        className={cn("relative grid grid-cols-1 md:grid-cols-5", {
          "md:grid-cols-2": isTwoHalf
        })}
      >
        <div
          className={cn(
            `md:py-heading px-default md-border-r flex flex-col lg:pl-[88px] ${faq ? "justify-center" : "justify-start"} gap-[10px] border-b border-b-th-fade py-[60px] pt-[70px] text-left md:col-span-2 md:gap-[40px]`,
            {
              "md:col-span-1": isTwoHalf,
              "!pt-[126px]": isDoublePadding
            }
          )}
        >
          <h2
            className={cn(
              `flex max-w-[462px] ${faq ? "justify-center text-center" : "text-pretty"} text-[36px]  uppercase  leading-[37.59px] text-white   custom1000:text-[42px]`,
              titleClasses
            )}
          >
            {title}
          </h2>
          {desc && (
            <p
              className={cn(
                "body my-[40px] max-w-[462px] text-left leading-6 md:my-[20px]",
                {
                  "max-w-[434px] text-balance !text-secondary": isSecondary
                }
              )}
            >
              {desc}
            </p>
          )}
        </div>
        <div
          className={cn("md:col-span-3", {
            "md:col-span-1": isTwoHalf
          })}
        >
          <Accordion allowToggle>
            {data.map((faq, index) => (
              <AccordionItem key={index} className="border-b border-th-fade">
                {({ isExpanded }) => (
                  <div
                    className={cn(
                      "relative bg-cover px-[20px] py-[43px] xl:px-[88px]",
                      {
                        "bg-[url('/assets/faq-gradient.png')]": isExpanded
                      }
                    )}
                    key={index}
                  >
                    <AccordionButton className={cn("relative")}>
                      <div className="mr-0 w-full text-left md:mr-auto">
                        <span
                          className="block !w-full max-w-full text-left font-roc text-[20px]
                         font-medium uppercase !leading-none text-white lg:!text-xl lg:!leading-none"
                        >
                          {faq.title}
                        </span>
                      </div>
                      <div className={` ${!faq ? "hidden" : "block"}`}>
                        {isExpanded ? (
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
                      </div>
                    </AccordionButton>
                    <AccordionPanel
                      className={cn("opacity-0  will-change-transform", {
                        "pt-6 opacity-100 ": isExpanded
                      })}
                    >
                      <div className=" ">
                        {Array.isArray(faq.content) ? (
                          <ul>
                            {faq.content.map((item, index) => (
                              <li key={index}>
                                <p className="max-w-2xl !leading-[160%] !text-[#bbb] lg:!leading-[175%]">
                                  {`- ${item};`}
                                </p>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="max-w-2xl !leading-[160%] !text-[#bbb] lg:!leading-[175%]">
                            {faq.content}
                          </p>
                        )}
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
