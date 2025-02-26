import React from "react";
import Image from "next/image";
import playIcon from "@/assets/icons/homepage/linkedInIcon.svg";
import michaelAvatar from "@/assets/icons/homepage/michaelAvatarImg.png";

export default function HeaderContent() {
  return (
    <>
      <h1 className="relative z-[21] mt-8 hidden cursor-default uppercase  md:ml-[55px] md:mt-[103px] md:block lg:mt-24">
        LET’s make Web3 tech <br />
        work for you
      </h1>
      <h1 className="relative z-[21] mt-8 block cursor-default text-[38px]  font-medium uppercase leading-[44px] md:mt-16 md:hidden lg:mt-24">
        LET’s make Web3 tech <br />
        work for you
      </h1>

      <div className="mt-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex mb-[24px] md:mb-0 items-center md:gap-x-1">
          <h2 className="text-[16px] font-[500] md:text-[24px] custom1200:text-[32px] custom1200:leading-[29px]">
            BEING FULLY IMMERSED IN WEB3, <br />
            WE'RE NOT JUST DEVS — WE'RE <br />
            PRODUCT VISIONARIES WORKING <br />
            AS AN IN-HOUSE TEAM WITH <br />
            YOU TO GROW YOUR <br />
          </h2>
        </div>
        <div className="flex cursor-default flex-col gap-y-4 md:items-end">
          <div className="">
            <div className="justify-left flex gap-[24px] md:items-center md:justify-end">
              <div className="flex gap-[12px]">
                <Image
                  alt="linkedin"
                  className="h-[42px] w-[42px]"
                  src={michaelAvatar}
                ></Image>

                <a
                  className=""
                  href="https://www.linkedin.com/in/onchainmichael"
                >
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
                <p className="text-sm text-secondary md:mb-0">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
