import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import arrow from "@/assets/icons/arrow.svg";
import home from "@/assets/icons/home.png";
import stack_mobile from "@/assets/services/stack-mobile.svg";
import stack from "@/assets/services/stack.svg";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section
      id="hero-services"
      className="scrollbar-none container  relative mb-9 w-full border-b border-b-th-fade pt-20 md:mb-[100px]  md:max-w-full lg:pt-[120px]"
    >
      <Image
        alt="Header Background"
        className="absolute right-0 top-0 min-h-[100%]   min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] lg:w-[90vw] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="relative flex cursor-default flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <div className="items-left flex w-full">
          <div className="mb-6 flex gap-4">
            <Link className="flex gap-2" href={"/"}>
              <Image className="h-[24px] w-[24px]" src={home} />
              <span className="text-white">Home</span>
            </Link>
            <Image className="h-[24px] w-[24px]" src={arrow} />
            <span className="text-white">Services & Technologies</span>
          </div>
        </div>
        <Tag title={"services"} className={"mb-4 text-base md:mb-8"} />
        <h1 className="mb-10 max-w-[570px]  text-center   text-5xl uppercase text-white lg:mt-6   lg:text-[82px]">
          Services & Technologies
        </h1>
        <span className="max-w-lg   text-center text-sm text-white md:text-base">
          We treat all products we develop as if they’re ours. This is why we go
          the extra mile for every client, providing consultancy and guidance
          from the architecture, design, and marketing strategy standpoints to
          create truly revenue-generating Web3 products
        </span>
      </div>
      <div className="1440custom:max-w-[1300px] container mt-20 max-w-[360px] md:max-w-[1300px] lg:mt-28 lg:max-w-[95vw]">
        <Image
          className="  1440custom:scale-[1.15] mb-4 hidden w-full self-center antialiased md:block  md:h-auto md:object-fill min-[2000px]:mb-6 min-[2000px]:scale-125"
          src={stack}
          alt="Stack"
        />{" "}
        <Image
          className="block w-full self-center  md:hidden"
          src={stack_mobile}
          alt="Stack"
        />
      </div>
    </section>
  );
};
