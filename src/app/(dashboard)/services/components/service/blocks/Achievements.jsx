import Tag from "@/components/ui/tag";
import React from "react";

export default function Achievements({ tag, desc }) {
  return (
    <section className="relative  w-full overflow-hidden border-b border-t border-b-th-fade border-t-th-fade pt-[60px] md:max-w-full md:pt-[126px] ">
      <div className="justify-left relative mx-auto flex max-w-[1440px] cursor-default flex-col items-start px-5 pb-[30px] md:px-8 md:pb-[127px] lg:px-16 xl:px-[88px]">
        <Tag title={tag} className={"z-[20] mb-10 md:mb-8 xl:mb-[60px]"} />

        <h3 className="text-left text-2xl uppercase leading-[0.9] text-white md:block   lg:text-[42px]">
          {desc}
        </h3>
      </div>
    </section>
  );
}
