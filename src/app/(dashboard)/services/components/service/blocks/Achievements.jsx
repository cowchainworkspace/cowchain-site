import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import React from "react";

export default function Achievements({
  tag,
  desc,
  descClass,
  containerClasses
}) {
  return (
    <section className="relative  w-full overflow-hidden border-b border-t border-b-th-fade border-t-th-fade pt-[60px] md:max-w-full md:pt-[126px] ">
      <div
        className={cn(
          "justify-left relative mx-auto flex max-w-[1440px] cursor-default flex-col items-start px-5 pb-[30px] md:px-8 md:pb-[127px] lg:px-16 xl:px-[88px]",
          containerClasses
        )}
      >
        <Tag
          title={tag}
          className={
            "z-[20] mb-10 w-auto !whitespace-nowrap md:mb-8 xl:mb-[60px]"
          }
        />

        <h3
          className={cn(
            "text-left text-2xl uppercase leading-[0.9] text-white md:block lg:text-[42px]",
            descClass
          )}
        >
          {desc}
        </h3>

        {sub && (
          <p className="mt-[30px] max-w-[800px] text-[16px] !leading-[22px] !text-[#BBBBBB]">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
