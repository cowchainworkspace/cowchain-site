import Tag from "@/components/ui/tag";
import React from "react";

export default function Achievements({tag, desc}) {
  return (
    <section className="relative  w-full overflow-hidden border-b border-b-th-fade border-t border-t-th-fade pt-20 md:max-w-full ">
      <div className="justify-left relative flex cursor-default flex-col items-start px-5 pb-8 md:px-8 md:pb-[127px] lg:px-16 xl:px-24">
        <Tag
          title={tag}
          className={"z-[20] mb-4 md:mb-8"}
        />

        <h3 className="text-left text-[42px] uppercase text-white md:block  lg:mt-6">
          {desc}
        </h3>
      </div>
    </section>
  );
}
