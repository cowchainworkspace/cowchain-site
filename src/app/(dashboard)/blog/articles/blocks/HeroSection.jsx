import React from "react";
import Tag from "@/components/ui/tag";
import facebook from "@/assets/article/facebookIcon.svg";
import copyLink from "@/assets/article/link.svg";
import twitter from "@/assets/article/twitterIcon.svg";
import instagram from "@/assets/article/InstagramIcon.svg";
import Image from "next/image";
import { ShareLinks } from "./ShareLinks";

export const HeroSection = () => {
  return (
    <section className="scrollbar-none container relative mb-9  w-full pt-20 md:mb-[60px]  md:max-w-full lg:pt-[120px]">
      <div className="relative flex flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag title={"Gaming"} className={"mb-4 md:mb-8"} />
        <h1 className="text-center text-3xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-5xl">
          Web3 Gaming: The Future of Immersive and Rewarding Experiences
        </h1>

        <span className="mt-4  mb-6 text-secondary">written by John Smith</span>
        <ShareLinks />
      </div>
    </section>
  );
};
