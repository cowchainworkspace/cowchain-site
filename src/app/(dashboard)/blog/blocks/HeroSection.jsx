import bgImage from "@/assets/blog/bg-blog-ds.webp";
import bgMobileImage from "@/assets/blog/bg-blog-mobile.webp";
import { tagsOptions } from "@/hooks/use-strapi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import Categories from "./Categories";

export const HeroSection = () => {
  const { data: tags } = useQuery(tagsOptions);

  return (
    <section className=" scrollbar-none container relative  mb-9 w-full  pt-20 md:mb-[100px] md:max-w-full  lg:pt-[120px]">
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

        <Categories categories={tags?.data} />
      </div>
    </section>
  );
};
