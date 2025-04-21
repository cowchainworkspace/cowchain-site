"use client";

import arrow from "@/assets/arrow_right.svg";
import bg_lg from "@/assets/bg/home-clients.png";
import Image from "next/image";
import Link from "next/link";

export function CasesHead() {
  return (
    <section className="relative w-full">
      <div className="relative px-5 py-10 md:px-8 md:pb-[84px] mx-auto md:pt-[126px] lg:max-w-[1440px] xl:px-[88px]">
        <div className="flex flex-col items-start justify-between xl:flex-row ">
          <div className="flex flex-col gap-5 xl:gap-[60px]">
            <h2 className="lg:order-0 heading-[38px] text-[36px] uppercase  text-white xl:text-[42px]">
              Our Full-Stack Development Cases
            </h2>
            <p className="body my-[40px] max-w-lg text-base leading-6 md:my-[20px] lg:order-2 lg:max-w-xl">
              Our full stack development services have been integral in
              delivering scalable solutions across various industries. Below are
              some examples of projects where our comprehensive services have
              played a crucial role
            </p>
          </div>
          <Link href="/cases" className=" lg:order-1 lg:block xl:ml-auto">
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
