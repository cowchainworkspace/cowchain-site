import React from "react";
import arrow from "@/assets/arrow_right.svg";
import Link from "next/link";
import Image from "next/image";

export const WhiteLabelCases = () => {
  return (
    <section className="relative">
      <div className="relative px-[88px] pb-[84px] pt-[126px]">
        <div className="flex items-start justify-between ">
          <div className="flex flex-col gap-[60px]">
            <h2 className="lg:order-0 heading-[38px] text-[42px]  uppercase text-white">
              Our White Label Web Development Cases
            </h2>
            <p className="body my-[40px] max-w-lg text-base leading-6 md:my-[20px] lg:order-2 lg:max-w-xl">
              Numerous projects, such as Pixeltap, have benefited from our white
              label development services, enabling them to scale their platforms
              while maintaining user engagement and satisfaction
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
};
