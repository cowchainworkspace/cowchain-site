"use client";

import bg_lg from "@/assets/bg/dexServiceBg.svg";
import Image from "next/image";

export function DexServices() {
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
            Our <br /> Decentralized <br /> Exchange <br /> Development <br />{" "}
            Services
          </h2>
          <div className="mt-8 flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto"></div>
          <p className="body my-[40px] max-w-[582px] text-base leading-6 md:my-[20px]">
            We believe that a solid foundation in decentralized exchange
            development is key to creating platforms that not only meet today’s
            demands but also evolve with the growing needs of the cryptocurrency
            market
          </p>
        </div>

        <div className="max-w-[519px]">
          <div className="relative bg-cover ">
            <div className="mr-auto w-full text-left ">
              <span className="text-left font-roc !text-[20px] font-medium uppercase !leading-none text-white">
                Integration Services and Solutions
              </span>
            </div>
            <div>
              <p className="text-[16px] mt-[24px] !leading-[22px] !text-[#BBBBBB] ">
                The decentralized exchange development solutions at Cowchain
                guarantee that third-party integrations, wallets, payment
                gateways, and liquidity providers will be seamlessly integrated
                into your system to ensure operations run without glitches and
                are accessible for users on different platforms. Using advanced
                decentralized exchange development, we make sure your platform
                integrates necessary third-party utilities in a non-compromising
                way regarding performance or security
              </p>
            </div>
          </div>
          
          <div className="relative bg-cover  mt-[86px]">
            <div  className="mr-auto w-full text-left ">
              <span className="text-left font-roc !text-[20px] font-medium uppercase !leading-none text-white">
                Bespoke Decentralized Exchange App Development
              </span>
            </div>
            <div>
              <p className="text-[16px] mt-[24px] !leading-[22px] !text-[#BBBBBB] ">
                We offer decentralized exchange development to create unique,
                user-friendly DEX applications that allow seamless transactions.
                From crafting smart contracts to building intuitive interfaces,
                we ensure each platform provides a premium user experience
              </p>
            </div>
          </div>

          <div className="relative bg-cover mt-[86px]">
            <div className="mr-auto w-full text-left ">
              <span className="text-left font-roc !text-[20px] font-medium uppercase !leading-none text-white">
                White Label Decentralized Exchange Software
              </span>
            </div>
            <div>
              <p className="text-[16px] mt-[24px] !leading-[22px] !text-[#BBBBBB] ">
                For companies looking for a quick launch, our decentralized
                exchange software development services provide a customizable
                solution that can be branded and scaled to meet your business
                goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
