import bgImage from "@/assets/blog/bg-blog-ds.webp";
import bgMobileImage from "@/assets/blog/bg-blog-mobile.webp";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="scrollbar-none relative  w-full  border-b border-b-th-fade pt-20 md:max-w-full  lg:pt-[141px]">
      <Image
        src={bgImage}
        className=" pointer-events-none absolute -top-24 left-0 hidden md:block"
      />
      <Image
        src={bgMobileImage}
        className="pointer-events-none absolute -top-24 right-0 w-full  md:hidden"
      />
      <div className="relative flex cursor-default flex-col items-start justify-center px-5 pb-8 md:px-8 md:pb-12 lg:items-center lg:px-16 xl:px-24">
        <Tag title={"team"} className={"z-[20] mb-4 md:mb-8"} />

        <h1 className="mb-[196px] hidden max-w-[1150px] text-[32px] uppercase text-white md:mb-[150px] md:block lg:mt-6 lg:text-[82px] xl:text-center  xl:text-7xl">
          We are a team of{" "}
          <span className="violet-gradient-text">50+ web3 natives</span> making
          crypto simple since 2020
        </h1>

        <h1 className="mb-[196px] block max-w-[1150px] text-[40px] uppercase text-white md:mb-[150px] md:hidden lg:mt-6 lg:text-[82px] xl:text-center  xl:text-7xl">
          We are a team <br /> of{" "}
          <span className="violet-gradient-text">
            50+ web3 <br /> natives
          </span>{" "}
          making crypto simple <br /> since 2020
        </h1>
      </div>
    </section>
  );
};
