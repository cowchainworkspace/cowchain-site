import bg_lg from "@/assets/bg/clients_header_bg_lg.webp";
import bgMobileImage from "@/assets/blog/bg-blog-mobile.webp";
import arrow from "@/assets/icons/arrow.svg";
import home from "@/assets/icons/home.png";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CasesFilter from "../components/CasesFilter";
import { casesTags } from "../constants";
import { useMediaQuery } from "@chakra-ui/react";

export const HeroSection = ({ setTags, currentTags }) => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <section className="relative pt-[38px] md:pt-20 lg:pt-[120px]">
      <Image
        width={375}
        height={541}
        alt="Header Background"
        className="absolute -top-24 right-0 h-auto w-full md:-top-16 md:block md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={isMoreThan768 ? bg_lg : bgMobileImage}
        priority
      />
      <div className="z-5 relative flex flex-col px-5 pb-8 sm:relative md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <div className="mb-6 flex gap-4">
          <Link className="flex gap-2" href={"/"}>
            <Image className="h-[24px] w-[24px]" src={home} />
            <span className="text-white">Home</span>
          </Link>
          <Image className="h-[24px] w-[24px]" src={arrow} />
          <span className="text-white">Cases</span>
        </div>
        <Tag className={"z-5 mr-auto cursor-default"} title={"case studies"} />
        <h1 className="z-5 mt-4 cursor-default text-5xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-[100px]">
          we offer the diversity of skills
        </h1>
        <CasesFilter
          setTags={setTags}
          casesTags={casesTags}
          currentTags={currentTags}
        />
      </div>
    </section>
  );
};
