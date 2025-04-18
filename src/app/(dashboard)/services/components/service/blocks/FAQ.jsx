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
  isSecondary = false,
  faq = false,
  isTwoHalf = false,
  isDoublePadding = false,
  titleClasses = "",
  itemsClasses,
  hasIcon = true,
  faqGradient = false,
  faqHorizontalPadding = false,
  descriptionClasses = "",
  typographyContainer = "",
  noTopBorder = false,
  itemTitleClass
}) {
  const [screenWidth, setScreenWidth] = useState();
  const lastIndex = data.length - 1;
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <section
      id="faq"
      className={cn(
        "relative z-30 border-y border-y-th-fade",
        noTopBorder && "border-t-0"
      )}
    >
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
        className={cn(
          "relative mx-auto grid max-w-[1440px] grid-cols-1  overflow-visible md:grid-cols-5",
          {
            "md:grid-cols-2": isTwoHalf
          }
        )}
      >
        <div
          className={cn(
            "md:py-heading md-border-r !pr-0 pb-[30px] pt-[60px] text-left md:col-span-2 md:pb-[60px] md:pt-[70px]",
            {
              "md:col-span-1": isTwoHalf,
              "xl:!pt-[126px]": isDoublePadding
            }
          )}
        >
          <div
            className={cn(
              "flex flex-col  gap-[10px] pl-5 md:gap-[20px] md:pl-8 lg:pl-[88px] xl:gap-[40px]",
              typographyContainer
            )}
          >
            <h2
              className={cn(
                `flex  ${faq ? "justify-center text-center" : "text-pretty"} text-[36px]  uppercase  leading-[37.59px] text-white custom1000:text-[42px] custom1430:text-[60px] custom1430:leading-[0.9]`,
                titleClasses
              )}
            >
              {title}
            </h2>
            {desc && (
              <p
                className={cn(
                  "body my-5 max-w-[462px] text-left leading-6 md:my-[20px]",
                  {
                    "max-w-[434px] text-balance !text-secondary": isSecondary
                  },
                  descriptionClasses
                )}
              >
                {desc}
              </p>
            )}
          </div>
        </div>
        <div
          className={cn(
            "h-full border-t border-y-th-fade md:col-span-3 md:border-t-0",
            {
              "md:col-span-1": isTwoHalf
            }
          )}
        >
          <Accordion allowToggle>
            {data.map((faq, index) => (
              <AccordionItem key={index}>
                {({ isExpanded }) => (
                  <div className={cn("relative")} key={index}>
                    <div
                      className={cn(
                        "absolute left-0 top-0 h-full w-screen border-b border-y-th-fade bg-cover bg-center bg-no-repeat  md:w-[calc(60vw)]",
                        lastIndex === index && "border-0",
                        isExpanded &&
                          !faqGradient &&
                          " bg-[url('/assets/faq-gradient-2.webp')]",
                        isExpanded &&
                          faqGradient &&
                          " bg-[url('/assets/faq-main-gradient.webp')]"
                      )}
                    />
                    <div
                      className={cn(
                        "max-w-[893px] px-5 py-[43px] md:pl-8 xl:pl-[88px] xl:pr-[60px]",
                        faqHorizontalPadding && "xl:!px-[60px]",
                        itemsClasses
                      )}
                    >
                      <AccordionButton className={cn("relative")}>
                        <div className="mr-0 w-full text-left md:mr-auto">
                          <span
                            className={cn(
                              "block !w-full max-w-[260px] text-left  font-roc",
                              "text-[14px] font-medium uppercase !leading-none text-white md:max-w-[623px] md:text-[18px] lg:!leading-none",
                              itemTitleClass
                            )}
                          >
                            {faq.title}
                          </span>
                        </div>
                        {hasIcon && (
                          <div className={` ${!faq ? "hidden" : "block"}`}>
                            {isExpanded ? (
                              <div
                                className="flex items-center justify-end md:justify-end"
                                style={{
                                  width: 50
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
                                className="flex items-center justify-end md:justify-end"
                                style={{
                                  width: 50
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
                        )}
                      </AccordionButton>
                      <AccordionPanel
                        className={cn("opacity-0  will-change-transform", {
                          "pt-6 opacity-100": isExpanded
                        })}
                      >
                        <div>
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
                            <p className="max-w-2xl !leading-[140%] !text-[#bbb] ">
                              {faq.content}
                            </p>
                          )}
                        </div>
                      </AccordionPanel>
                    </div>
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
