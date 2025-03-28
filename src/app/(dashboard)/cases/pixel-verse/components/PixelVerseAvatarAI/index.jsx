import Contact from "@/components/Contact";
import Link from "next/link";
import React from "react";
import PlayIcon from "../../../../../../../public/svgIcons/PlayIcon";

const PixelVerseAvatarAI = () => {
  return (
    <section className="ov relative  w-full overflow-hidden  pt-[225px]">
      <div className="bot-0 absolute -top-9 left-1/2  h-[1690px] w-[2320px] -translate-x-[51%] bg-[url(/cases/PixelVerse/Banner-2.png)] " />
      <div className="mx-auto flex max-w-[555px] flex-col items-center">
        <p className="mb-[134px] text-center text-[37px] font-medium leading-[45.91px]">
          Ready to take your gaming platform to the next level? Explore the
          possibilities with Cowchain today!
        </p>
        <p className="font-rubik mb-11 text-[32px] font-bold uppercase text-white opacity-40">
          interactive
        </p>
        <h2 className="font-rubik mb-[61px] text-[100px] font-medium uppercase text-white">
          AI Avatar
        </h2>
        <Link
          className="border-hyper-violet gap z-10 flex h-[50px] w-[152px] items-center justify-center border"
          href={"#"}
        >
          <div className="flex size-[25px]  items-center justify-center">
            <PlayIcon />
          </div>
          <span className="text-hyper-violet text-2xl font-medium uppercase leading-[1]">
            try now
          </span>
        </Link>
      </div>
      <Contact className={"pb-[138px] pt-[217px]"} />
    </section>
  );
};

export default PixelVerseAvatarAI;
