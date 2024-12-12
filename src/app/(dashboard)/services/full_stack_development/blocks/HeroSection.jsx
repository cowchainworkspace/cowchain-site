"use client";

import React, { useState, createElement } from "react";
import { useRef, useEffect } from "react";
import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import Tag from "@/components/ui/tag";
import { Helmet } from "react-helmet";
import Image from "next/image";
import home from "@/assets/icons/home.png";
import Link from "next/link";
import arrow from "@/assets/icons/arrow.svg";
import { useGetItems } from "@/hooks/use-strapi";

export const HeroSection = () => {
  return (
    <section className="relative overflow-visible pt-20 lg:pt-[120px]">
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
      <div className="relative flex flex-col px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <div className="mb-6 flex gap-4">
          <Link href={"/"}>
            <Image className="h-[24px] w-[24px]" src={home} />
          </Link>
          <Image className="h-[24px] w-[24px]" src={arrow} />
          <Link href={"/services"}>
            <span className="text-white">Services</span>
          </Link>
          <Image className="h-[24px] w-[24px]" src={arrow} />
          <span className="text-white">Dex development</span>
        </div>
        <Tag className={"mr-auto cursor-default"} title={"cowchain"} />
        <h1 className="mt-4 cursor-default text-[80px] uppercase text-white lg:mt-6 lg:max-w-[1200px]">
          Full-Stack Development Services
        </h1>
        <div className="my-14 flex items-center justify-end gap-2 text-white lg:justify-between">
          Looking for a full stack development company? Cowchain offers
          comprehensive full stack development <br /> services, handling both the
          visuals users love and the logic they rely on
        </div>
      </div>
    </section>
  );
};
