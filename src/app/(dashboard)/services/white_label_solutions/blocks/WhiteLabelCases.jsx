import arrow from "@/assets/arrow_right.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const WhiteLabelCases = ({
  title = "Our White Label Web Development Cases",
  desc = (
    <>
      {" "}
      Numerous projects, such as Pixeltap, have benefited from our white label{" "}
      <br className="hidden lg:block" /> development services, enabling them to
      scale their platforms while maintaining <br className="hidden lg:block" />{" "}
      user engagement and satisfaction
    </>
  )
}) => {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-[1440px] px-5 py-10 md:px-8 md:pb-[84px] md:pt-[126px] xl:px-[88px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-0 ">
          <div className="flex flex-col gap-5 md:gap-[60px]">
            <h2 className="lg:order-0 heading-[38px] text-[42px]   uppercase text-white">
              {title}
            </h2>
            <p className="body  max-w-lg text-base leading-6 lg:order-2 lg:max-w-full">
              {desc}
            </p>
          </div>
          <Link href="/cases" className=" lg:order-1 lg:ml-auto lg:block">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">All Cases</p>
              <Image className="w-6" src={arrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
