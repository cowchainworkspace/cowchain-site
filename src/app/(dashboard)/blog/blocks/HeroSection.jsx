import bgImage from "@/assets/blog/bg-blog-ds.webp";
import bgMobileImage from "@/assets/blog/bg-blog-mobile.webp";

import { Category } from "@/components/ui/category";
import Image from "next/image";
import React from "react";

export const HeroSection = ({ categories }) => {
  return (
    <section className="scrollbar-none container relative  mb-9 w-full  pt-20 md:mb-[100px] md:max-w-full  lg:pt-[120px]">
      <Image
        src={bgImage}
        className="pointer-events-none absolute -top-24 left-0 hidden md:block"
      />
      <Image
        src={bgMobileImage}
        className="pointer-events-none absolute -top-24 right-0 w-full  md:hidden"
      />
      <div className="relative flex flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <h1 className="z-20 text-center text-5xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-[82px]">
          Insights & more
        </h1>

        <div className="z-20 mt-9 flex max-w-[110%] items-start justify-start gap-2 overflow-x-scroll md:items-center md:overflow-auto lg:max-w-full lg:justify-between xl:max-w-none ">
          {categories.data?.map(({ id, attributes }) => (
            <Category key={id} title={attributes.tag_name} />
          ))}
        </div>
      </div>
    </section>
  );
};
