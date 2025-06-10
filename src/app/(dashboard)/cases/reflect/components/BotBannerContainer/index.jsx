"use client";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const BotBannerContainer = () => {
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Image
      width={isMoreThan768 ? 1440 : 375}
      height={isMoreThan768 ? 507 : 170}
      className="mx-auto h-[170px] w-full max-w-[1440px] sm:block md:h-auto"
      src={
        isMoreThan768
          ? "/reflect-bot-banner.webp"
          : "/reflect-banner-mobile-bot.webp"
      }
      alt="Reflect banner"
      loading="lazy"
      priority={false}
    />
  );
};

export default BotBannerContainer;
