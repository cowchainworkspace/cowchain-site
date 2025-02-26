"use client";

import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import arrow from "@/assets/icons/arrow.svg";
import home from "@/assets/icons/home.png";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";

export const HeroSection = ({ title, desc }) => {
  return (
    <section className="relative overflow-visible  pt-20  lg:pt-[120px]">
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
      <div className="relative mx-auto flex max-w-[1440px] flex-col px-[32px] pb-[91px] pt-5 md:pt-8 lg:px-16 xl:px-[88px]">
        <Tag className={"mr-auto cursor-default"} title={"cowchain"} />
        {title && (
          <h1 className="mt-4 cursor-default text-[42px]  uppercase text-white md:text-[80px] lg:mt-6 lg:max-w-[1200px]">
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
