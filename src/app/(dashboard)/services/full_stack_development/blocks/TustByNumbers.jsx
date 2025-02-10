"use client";

import FSTrustBuyNumbBg from "@/assets/bg/FSTrustBuyNumbBg.svg";
import arrow from "@/assets/arrow_right.svg";
import { Counter } from "../../../(home)/components/counter";
import Link from "next/link";
import Image from "next/image";

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
  desc
}) {
  return (
    <section className={`relative ${home && "h-fit md:h-[700px]"}`}>
      {!home && (
        <Image
          alt=""
          className="absolute -bottom-[38%] left-0 hidden h-screen md:-bottom-[45%] md:block md:h-min lg:-bottom-[80%]"
          src={FSTrustBuyNumbBg}
        />
      )}

      <div className={`relative h-fit md:h-full`}>
        <div className="grid h-full grid-cols-1 lg:grid-cols-3">
          <div
            className={`flex h-full flex-col  ${home ? "h-fit md:h-[700px]" : "justify-center"}
             gap-[37px] border-r border-r-th-fade
            px-[20px] pb-[40px] pt-[60px] md:pb-[110px] md:pl-[88px] md:pr-[168px] md:pt-[170px]`}
          >
            <h2 className="heading-[42px] text-[36px] uppercase text-white md:text-[60px] ">
              {title}
            </h2>
            {!home && (
              <p className="body my-0 max-w-lg text-base leading-6 md:my-[20px] lg:order-2 lg:max-w-[306]">
                We simplify the development process by offering business tools
                that optimize workflows. Our dedicated developers utilize the
                latest technology stack to ensure consistent execution, making
                Cowchain a trusted partner for full stack software development
              </p>
            )}

            {desc && (
              <p className="body my-0 max-w-lg text-base leading-6 md:my-[20px] lg:order-2 lg:max-w-[306]">
                {desc}
              </p>
            )}
          </div>
          <div
            className="col-span-2 flex grid w-full grid-cols-2 
          flex-col justify-center
          border-b border-t
           border-b-th-fade border-t-th-fade customSmall:flex-row  lg:order-3 lg:ml-auto"
          >
            {data.map(
              ({ number, desc, sighn, title, sufix, decimal }, index) => (
                <div
                  className={`flex h-full w-full grid-cols-1 grid-rows-1 flex-col justify-center border-r border-r-th-fade px-[26px] py-[22px] md:px-[70px] ${index < 2 && "border-b border-b-th-fade"}`}
                >
                  <div>
                    {number && (
                      <div className="flex items-center">
                        {sufix ? (
                          <>
                            {sighn && (
                              <span className="font-roc text-[18px] font-medium leading-[18px] text-white text-white md:text-4xl md:text-[42px] md:leading-tight  lg:text-5xl">
                                {sighn}
                              </span>
                            )}
                            <Counter
                              duration={4}
                              decimals={decimal}
                              target={number}
                            />
                            <span className="font-roc text-4xl font-medium text-white text-white md:text-[42px] md:leading-tight  lg:text-5xl">
                              {sufix}
                            </span>
                          </>
                        ) : (
                          <>
                            <Counter
                              duration={4}
                              decimals={decimal}
                              target={number}
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
                      <span className="self-start font-roc text-[18px] font-medium uppercase leading-tight text-white text-white md:text-[42px] lg:text-5xl">
                        {title}
                      </span>
                    )}
                  </div>
                  <p className="mt-[12px] max-w-[250px] text-[10px] font-medium text-white md:mt-[30px] md:text-base">
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
