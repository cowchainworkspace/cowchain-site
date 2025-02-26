"use client";

import arrow from "@/assets/arrow_right.svg";
import bg_lg from "@/assets/bg/home-clients.png";
import Image from "next/image";
import Link from "next/link";

export function CasesHead() {
  return (
    <section className="relative">
      <div className="relative px-8 py-10 md:px-[88px] md:pb-[84px] md:pt-[126px]">
        <div className="flex flex-col items-start justify-between md:flex-row ">
          <div className="flex flex-col gap-5 md:gap-[60px]">
            <h2 className="lg:order-0 heading-[38px] text-[42px]  uppercase text-white">
              Our Full-Stack Development Cases
            </h2>
            <p className="body my-[40px] max-w-lg text-base leading-6 md:my-[20px] lg:order-2 lg:max-w-xl">
              Our full stack development services have been integral in
              delivering scalable solutions across various industries. Below are
              some examples of projects where our comprehensive services have
              played a crucial role
            </p>
          </div>
          <Link href="/cases" className=" lg:order-1 lg:ml-auto lg:block">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                OTHER Cases
              </p>
              <Image className="w-6" src={arrow} alt=""></Image>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
