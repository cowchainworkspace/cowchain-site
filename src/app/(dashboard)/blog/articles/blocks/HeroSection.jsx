import instagram from "@/assets/article/InstagramIcon.svg";
import facebook from "@/assets/article/facebookIcon.svg";
import copyLink from "@/assets/article/link.svg";
import twitter from "@/assets/article/twitterIcon.svg";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import React from "react";
import { ShareLinks } from "./ShareLinks";

export const HeroSection = ({ tag, title, author }) => {
  return (
    <section className="scrollbar-none container relative mb-9  w-full pt-20 md:mb-[60px]  md:max-w-full lg:pt-[120px]">
      <div className="relative flex flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag title={tag} className={"mb-4 md:mb-8"} />
        <h1 className="text-center text-3xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-5xl">
          {title}
        </h1>

        <span className="mb-6  mt-4 text-secondary">written by {author}</span>
        <ShareLinks />
      </div>
    </section>
  );
};
