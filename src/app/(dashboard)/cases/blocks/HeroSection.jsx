import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import arrow from "@/assets/icons/arrow.svg";
import home from "@/assets/icons/home.png";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";
import CasesFilter from "../components/CasesFilter";
import { casesTags } from "../constants";

export const HeroSection = ({ setTag, currentTag }) => {
  return (
    <section className="relative pt-[38px] md:pt-20 lg:pt-[120px]">
      <Helmet>
        <link rel="canonical" href={"https://cowchain.io/cases"} />
      </Helmet>
      <Image
        alt="Header Background"
        className="absolute -top-24 right-0 min-h-[150%] min-w-[200vw] md:-top-16 md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="relative flex flex-col px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <div className="mb-6 flex gap-4">
          <Link className="flex gap-2" href={"/"}>
            <Image className="h-[24px] w-[24px]" src={home} />
            <span className="text-white">Home</span>
          </Link>
          <Image className="h-[24px] w-[24px]" src={arrow} />
          <span className="text-white">Cases</span>
        </div>
        <Tag className={"mr-auto cursor-default"} title={"case studies"} />
        <h1 className="mt-4 cursor-default text-5xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-[100px]">
          we offer the diversity of skills
        </h1>
        <CasesFilter setTag={setTag} tags={casesTags} currentTag={currentTag} />
      </div>
    </section>
  );
};
