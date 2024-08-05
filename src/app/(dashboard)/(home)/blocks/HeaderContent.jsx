import React from "react";
// import upwork from "@/assets/homepage/upwork.svg";
// import clutch from "@/assets/homepage/clutch.svg";
import Image from "next/image";
import playIcon from "@/assets/icons/playIcon.svg";

export default function HeaderContent() {
  return (
    <>
      <h1 className="relative mt-8 cursor-default uppercase md:mt-16 lg:mt-24">
        Accelerate your <br /> Web3 odyssey <br /> with cowchain
      </h1>
      <div className="mt-auto grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex items-center md:gap-x-1">
          {/* <a
            href="https://www.upwork.com/ag/cowchain/"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <Image className="w-11 md:w-[70px]" src={upwork} alt=""></Image>
          </a>
          <a
            href="https://clutch.co/profile/cowchain"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <Image className="w-11 md:w-[70px]" src={clutch} alt=""></Image>
          </a> */}
          <h2 className="text-[32px] leading-[29px] md:block">
            Driving Crypto Evolution: <br /> From Vision to Reality, <br />{" "}
            Every Step.
          </h2>
        </div>
        <div className="flex cursor-default flex-col gap-y-4 md:items-end">

          {/* <div>
            <h2 className="mb-[24px] md:mb-0">Crypto Services and Technologies</h2>
            <div className="md:mt-[30px] md:flex md:items-center md:justify-between">
              <div className="flex flex-col gap-y-1">
                <p className="body1 text-base  mb-[6px] md:mb-0">Mykhailo Adzhoiev</p>
                <p className="text-sm  text-secondary mb-[24px] md:mb-0">Founder & CTO</p>
              </div>
              <a
                className="flex h-[34px] w-[184px] items-center justify-center gap-[10px] rounded-[20px] border-none bg-white text-black"
                href=""
              >
                <Image
                  alt="linkedin"
                  className="w-[12px]"
                  src={playIcon}
                ></Image>
                <p className="text-[14px] font-semibold uppercase leading-[18px] text-black">
                  watch interview
                </p>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
