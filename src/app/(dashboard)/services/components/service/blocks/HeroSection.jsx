"use client";

import React from "react";
import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import Tag from "@/components/ui/tag";
import { Helmet } from "react-helmet";
import Image from "next/image";
import home from "@/assets/icons/home.png";
import Link from "next/link";
import arrow from "@/assets/icons/arrow.svg";

export const HeroSection = ({ title, desc }) => {
  return (
    <section className="relative overflow-visible px-[32px] pt-20 lg:px-16 lg:pt-[120px] xl:px-[88px]">
      <Helmet>
        <link
          rel="canonical"
          href={"https://cowchain.io/services/dex_development"}
        />
      </Helmet>
      <Image
        alt=""
        className="absolute -top-24 right-0  min-h-[150%] min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="relative flex flex-col pb-[91px] pt-5 md:pt-8 ">
        <div className="mb-6 flex gap-4">
          <Link href={"/"}>
            <Image className="h-[24px] w-[24px]" src={home} />
          </Link>
          <Image className="h-[24px] w-[24px]" src={arrow} />
          <Link href={"/services"}>
            <span className="text-white">Services</span>
          </Link>
          <Image className="h-[24px] w-[24px]" src={arrow} />
          <span className="text-white">Dapp Development</span>
        </div>
        <Tag className={"mr-auto cursor-default"} title={"cowchain"} />
        {title && (
          <h1 className="mt-4 cursor-default text-[80px] uppercase text-white lg:mt-6 lg:max-w-[1200px]">
            {title}
          </h1>
        )}

        {desc && (
          <div className="mt-[60px] flex items-center justify-end gap-2 text-[16px] text-white lg:justify-between">
            {desc}
          </div>
        )}
      </div>
    </section>
  );
};
