"use client";

import arrow from "@/assets/arrow_right.svg";
import FSTrustBuyNumbBg from "@/assets/bg/FSTrustBuyNumbBg.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "../../../(home)/components/counter";

const TustByNumbersData = [
  {
    number: 120,
    desc: "projects delivered across diverse industries",
    sighn: "+"
  },
  {
    number: 150,
    desc: "dedicated developers and engineers on our team",
    sighn: "+"
  },
  {
    number: 40,
    desc: "faster project delivery rates thanks to streamlined services",
    sighn: "%"
  },
  {
    number: 95,
    desc: "client retention rate, thanks to our commitment to delivering reliable solutions",
    sighn: "%"
  }
];

export function TustByNumbers({
  data = TustByNumbersData,
  home,
  title = "Trust by Numbers",
  desc,
  isBlockChainConsulting = false
}) {
  return (
    <section className={`relative ${home && "h-fit md:h-[700px]"}`}>
      {!home && !isBlockChainConsulting && (
        <Image
          alt=""
          className="absolute -bottom-[38%] pointer-events-none left-0 hidden h-screen md:-bottom-[45%] md:block md:h-min lg:-bottom-[120%]"
          src={FSTrustBuyNumbBg}
        />
      )}

      <div className={`relative h-fit md:h-full`}>
        <div
          className={cn(
            "grid h-full grid-cols-1 md:grid-cols-[minmax(0,_250px)_1fr_1fr] max-w-[1440px] mx-auto custom815:grid-cols-[minmax(0,_300px)_1fr_1fr] custom1000:grid-cols-[minmax(0,_400px)_1fr_1fr] custom1200:grid-cols-[minmax(0,_480px)_1fr_1fr] custom1430:grid-cols-[minmax(0,_547px)_1fr_1fr]",
            {
              "lg:grid-cols-[minmax(0,_400px)_1fr_1fr md:grid-cols-1":
                isBlockChainConsulting
            }
          )}
        >
          <div
            className={cn(
              `flex h-full flex-col  ${home ? "h-fit md:h-[700px]" : "justify-center"}
             gap-[37px] border-r border-r-th-fade
            px-[20px] pb-[40px] pt-[60px] md:pb-[110px] md:pl-8 md:pt-[126px]   custom1430:pl-[88px] custom1430:pr-[168px] ${isBlockChainConsulting && "lg:pl-[64px] xl:pt-[170px] custom1430:pr-[90px]"}`,
              {
                "justify-start": isBlockChainConsulting
              }
            )}
          >
            <h2
              className={cn(
                "heading-[42px] text-[36px] uppercase text-white custom815:text-[48px] custom1200:text-[60px] ",
                {
                  "self-start leading-[0.9] md:text-[30px] custom815:text-[36px] custom1200:!text-[48px]":
                    isBlockChainConsulting
                }
              )}
            >
              {title}
            </h2>
            {!home && !isBlockChainConsulting && (
              <p className="body my-0 max-w-lg text-base leading-6 md:my-[20px] lg:order-2 lg:max-w-[306]">
                We simplify the development process
                <br className="hidden lg:block" /> by offering business tools
                that optimize
                <br className="hidden lg:block" /> workflows. Our dedicated
                developers
                <br className="hidden lg:block" /> utilize the latest technology
                stack
                <br className="hidden lg:block" /> to ensure consistent
                execution,
                <br className="hidden lg:block" /> making Cowchain a trusted
                partner
                <br className="hidden lg:block" /> for full stack software
                development
              </p>
            )}

            {desc && (
              <p className="my-0 block max-w-lg text-[14px] leading-6 sm:hidden md:my-[20px] md:text-base lg:order-2 lg:max-w-[306]">
                {desc}
              </p>
            )}
          </div>
          <div
            className={cn(
              "col-span-2 flex grid w-full grid-cols-2 flex-col justify-center border-b border-t border-b-th-fade border-t-th-fade customSmall:flex-row lg:order-3  lg:ml-auto lg:border-0",
              {
                "justify-start": isBlockChainConsulting
              }
            )}
          >
            {data.map(
              ({ number, desc, sighn, title, sufix, decimal }, index) => (
                <div
                  key={index}
                  className={cn(
                    `flex h-full w-full grid-cols-1 grid-rows-1 flex-col z-[10] justify-center border-r border-r-th-fade 
                    px-[26px] py-[22px] md:px-[20px] custom815:px-[30px] custom1200:px-[50px] custom1430:px-[70px] ${index < 2 && "border-b border-b-th-fade"}`,
                    {
                      "justify-start gap-4  md:gap-[30px] custom1430:!pt-[110px]":
                        isBlockChainConsulting && index < 2,
                      "!justify-start gap-4 md:gap-[30px] custom1430:!pt-[60px] custom1430:pb-[67px]":
                        isBlockChainConsulting && index > 1,
                      "!gap-0": isBlockChainConsulting && !number
                    }
                  )}
                >
                  <div>
                    {number && (
                      <div className="flex items-center">
                        {sufix ? (
                          <>
                            {sighn && (
                              <span className="font-roc text-[18px] font-medium leading-[18px] text-white text-white md:text-4xl md:text-[42px] md:leading-tight lg:text-5xl">
                                {sighn}
                              </span>
                            )}
                            <Counter
                              duration={4}
                              decimals={decimal}
                              target={number}
                              className={"font-roc xl:!text-[46px]"}
                            />
                            <span className="font-roc text-[18px] font-medium leading-[18px] text-white text-white md:text-[42px] md:leading-tight  lg:text-[46px]">
                              {sufix}
                            </span>
                          </>
                        ) : (
                          <>
                            <Counter
                              duration={4}
                              decimals={decimal}
                              target={number}
                              className={"font-roc xl:!text-[46px]"}
                            />
                            {sighn && (
                              <span className="font-roc text-[18px] font-medium uppercase leading-tight text-white text-white  md:text-[36px] lg:text-5xl">
                                {sighn}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    )}
                    {title && (
                      <span className="self-start font-roc text-[18px] font-medium uppercase leading-tight text-white text-white md:text-[30px] custom815:text-[36px] custom1300:text-[46px]">
                        {title}
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "mt-[12px] max-w-[250px] text-[10px] font-medium text-white md:mt-[30px] md:text-base",
                      {
                        "!mt-0 max-w-[306px] md:!mt-0": isBlockChainConsulting
                      }
                    )}
                  >
                    {desc}
                  </p>
                </div>
              )
            )}
          </div>

          <Link href="/cases" className="hidden">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                ALL PROJECTS
              </p>

              <Image className="w-6" src={arrow} alt=""></Image>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
