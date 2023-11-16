import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@chakra-ui/react";
import { cn } from "lib/utils";

const faqData = [
  {
    title:
      "What is Web3 development, and how is it different from traditional web development?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards."
  },
  {
    title:
      "What measures are taken to ensure the security of Web3 applications?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards."
  },
  {
    title: "How can I monetize my Web3 application?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards."
  },
  {
    title: "What are the benefits of using Web3 applications for my business?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards."
  },
  {
    title:
      "How can a Web3 development agency help my business implement blockchain technology effectively?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards."
  }
];

const FAQ = () => {
  const [screenWidth] = useState(window.innerWidth);
  return (
    <section id="faq" className="relative z-30">
      <div className="relative grid grid-cols-1 md:grid-cols-5">
        <div className="py-heading px-default md-border-r border-b border-b-th-fade text-center md:col-span-2">
          <h3 className="text-center md:text-left">
            FREQUENTLY<br></br>ASKED<br></br>QUESTIONS
          </h3>
        </div>
        <div className="md:col-span-3">
          <Accordion allowToggle>
            {faqData.map((faq, index) => (
              <AccordionItem>
                {({ isExpanded }) => (
                  <div
                    className={cn(
                      "relative bg-cover px-5 py-6 xl:px-[60px] xl:py-8",
                      {
                        "bg-[url('assets/bg/faq-gradient.png')]": isExpanded
                      }
                    )}
                    key={index}
                  >
                    <AccordionButton className={cn("relative")}>
                      <div className="mr-auto w-full max-w-3xl ">
                        <h2 className="max-w-2xl text-left !text-sm !leading-none lg:!text-lg lg:!leading-none">
                          {faq.title}
                        </h2>
                      </div>
                      {isExpanded ? (
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
                      ) : (
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
};

export default FAQ;
