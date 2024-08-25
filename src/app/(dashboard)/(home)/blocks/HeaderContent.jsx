import React from "react";
// import upwork from "@/assets/homepage/upwork.svg";
// import clutch from "@/assets/homepage/clutch.svg";
import Image from "next/image";
import playIcon from "@/assets/icons/homepage/linkedInIcon.svg";
import michaelAvatar from "@/assets/icons/homepage/michaelAvatarImg.png";

export default function HeaderContent() {
  return (
    <>
      <h1 className="relative mt-8 z-[21] hidden cursor-default uppercase  md:ml-[55px] md:mt-[103px] md:block lg:mt-24">
        Accelerate your <br /> Web3 odyssey <br /> with cowchain
      </h1>
      <h1 className="relative mt-8 z-[21] block cursor-default text-[38px]  font-medium uppercase leading-[44px] md:mt-16 md:hidden lg:mt-24">
        Accelerate <br /> your Web3 <br /> odyssey <br /> with cowchain
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

          <h2 className="hidden text-[32px] leading-[29px] md:block">
            Driving Crypto Evolution: <br /> From Vision to Reality, <br />{" "}
            Every Step.
          </h2>
        </div>
        <div className="flex cursor-default flex-col gap-y-4 md:items-end">
          <div className="">

          <h2 className="block md:hidden mb-[24px] text-left md:text-right md:mb-0 md:text-[24px]">
              Crypto Services and Technologies
            </h2>

            <div className="flex gap-[24px] justify-left md:items-center md:justify-end">
              

              <div className="flex gap-[12px]">
                <a className="" href="">
                  <Image
                    alt="linkedin"
                    className="h-[42px] w-[42px]"
                    src={michaelAvatar}
                  ></Image>
                </a>

                <a className="" href="">
                  <Image
                    alt="linkedin"
                    className="h-[42px] w-[42px]"
                    src={playIcon}
                  ></Image>
                </a>
              </div>

              <div className="flex flex-col gap-y-1">
                <p className="body1 mb-[6px] text-base  leading-[18px] md:mb-0">
                  Mykhailo Adzhoiev
                </p>
                <p className="text-sm text-secondary md:mb-0">
                  Founder & CTO
                </p>
              </div>
            </div>

            <h2 className="hidden md:block mt-[24px] text-left md:text-right md:mb-0 md:text-[24px]">
              Crypto Services and Technologies
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
