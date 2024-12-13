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

export function TustByNumbers() {
  return (
    <section className="relative ">
      <Image
        alt=""
        className="absolute -bottom-[38%] left-0 hidden h-screen md:-bottom-[45%] md:block md:h-min  lg:-bottom-[80%]"
        src={FSTrustBuyNumbBg}
      />

      <div className="relative h-full">
        <div className="grid h-full grid-cols-1 lg:grid-cols-3 ">
          <div className="flex h-full pt-[170px] pl-[88px] pb-[110px] pr-[168px] flex-col gap-[37px] border-b border-b-th-fade justify-center border-r border-r-th-fade">
            <h2 className=" text-[60px] heading-[54px] uppercase text-white  md:text-[60px]">
              Trust by Numbers
            </h2>
            <p className="body my-[40px] max-w-lg text-base leading-6 md:my-[20px] lg:order-2 lg:max-w-[306]">
              We simplify the development process by offering business tools
              that optimize workflows. Our dedicated developers utilize the
              latest technology stack to ensure consistent execution, making
              Cowchain a trusted partner for full stack software development
            </p>
          </div>
          <div className="col-span-2 flex grid w-full grid-cols-2  flex-col justify-center customSmall:flex-row  lg:order-3 lg:ml-auto">
            {TustByNumbersData.map(({number, desc, sighn}) => (
              <div className="h-full w-full grid-cols-1 px-[70px]  grid-rows-1 flex flex-col justify-center border-b border-r  border-b-th-fade border-r-th-fade">
                <div className="flex items-center">
                  <Counter duration={4} target={number} />
                  {sighn &&  <span className="num_lg  text-white">{sighn}</span>}
                </div>
                <p className="body1 mt-[30px] max-w-[250px]">{desc}</p>
              </div>
            ))}
          </div>

          <Link href="/cases" className="lg:hidden">
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
