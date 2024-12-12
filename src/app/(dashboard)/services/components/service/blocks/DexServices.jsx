"use client";

import bg_lg from "@/assets/bg/dexServiceBg.svg";
import Image from "next/image";

export function DexServices({ title, desc, data }) {
  return (
    <section className="relative">
      <Image
        alt=""
        className="absolute -bottom-[38%] left-0  h-screen md:block md:h-min "
        src={bg_lg}
      />

      <div className="py-heading px-default relative flex justify-between">
        <div className="  lg:gap-16">
          <h2 className="lg:order-0 text-[60px] uppercase text-white  md:text-[60px]">
            {title}
          </h2>
          <div className="mt-8 flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto"></div>
          {desc && (
            <p className="body my-[40px] max-w-[582px] text-base leading-6 md:my-[20px]">
              {desc}
            </p>
          )}
        </div>

        <div className="max-w-[519px]">
          {data.map(({ title, desc }) => (
            <div className="relative bg-cover ">
              {title && (
                <div className="mr-auto mt-[60px] w-full text-left">
                  <span className="text-left font-roc !text-[20px] font-medium uppercase !leading-none text-white">
                    {title}
                  </span>
                </div>
              )}
              <div>
                <p className="mt-[24px] text-[16px] !leading-[22px] !text-[#BBBBBB] ">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
