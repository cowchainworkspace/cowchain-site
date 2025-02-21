import Tag from "@/components/ui/tag";
import React from "react";
import { Reading } from "../../components/Reading/Reading";
import { ShareLinks } from "./ShareLinks";

export const HeroSection = ({ tag, title, author, readingMinutes }) => {
  return (
    <section className="scrollbar-none container relative mb-10  w-full pt-[65px] md:mb-[65px]  md:max-w-full lg:pt-[120px]">
      <div className="relative flex flex-col items-center justify-center md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag title={tag} className={"mb-4 md:mb-8"} />
        <h1 className="text-center text-3xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-5xl">
          {title}
        </h1>
        <div className="mb-6 mt-4  flex gap-10">
          <p className="text-secondary">
            written by <span className="text-white">{author}</span>
          </p>
          <Reading reading_minutes={readingMinutes} />
        </div>
        <ShareLinks />
      </div>
    </section>
  );
};
