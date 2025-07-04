"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { createElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper";
import arrowUpRight from "./../../../../../assets/services/arrowUpRightIcon.svg";

const expertiseData = [
  {
    title: "Blockchain consulting",
    text: "Our experts will help you evaluate the feasibility of blockchain for your business, choose the most appropriate platform, and develop a strategy for implementing this technology."
  },
  {
    title: "DApp development",
    text: "We create reliable and scalable decentralized applications based on smart contracts and provide security and transparency of transactions."
  },
  {
    title: "Token creation and NFT",
    text: "Our experts can help you design and issue your own or non-fungible tokens (NFTs) for various purposes, such as crowdfunding, customer loyalty, or digital asset identification."
  },
  {
    title: "Audit and optimization of blockchain solutions",
    text: "We conduct comprehensive audits of existing blockchain solutions for security, performance, and compliance with industry standards and offer optimization services."
  },
  {
    title: "Implementation of blockchain solutions",
    text: "We can help you integrate blockchain solutions into your IT infrastructure, ensuring they run smoothly and meet your corporate requirements."
  }
];

export default function Others() {
  return (
    <section id="expertise" className={cn("relative overflow-hidden md:mt-0")}>
      <div className="relative z-20 grid lg:grid-cols-1">
        <div className="relative grid grid-cols-1 border-y border-y-th-fade pt-14">
          <div className="mb-16 flex flex-col items-center justify-center gap-y-8 px-4 text-center text-white ">
            <Image
              alt="Background decoration ellipse"
              width={530}
              height={377}
              className="absolute -top-60 right-0 -z-10 md:hidden"
              src={"/assets/services/radial-mobile.png"}
            />
            <h3 className="mx-auto cursor-default text-center font-roc text-2xl   uppercase md:text-[44px]">
              Other Blockchain Services
            </h3>
            <span className="max-w-[500px] text-[#bbb]">
              In addition to smart contract development, we at Cowchain offer a
              wide range of smart contract development services
            </span>
          </div>
        </div>

        <div className="grid lg:col-span-1 lg:grid-cols-5">
          {expertiseData &&
            expertiseData.map((expertise, index) => (
              <article
                key={index}
                className="expertise_wrapper md-border-r group relative cursor-default  border-b border-b-th-fade px-[20px] py-[40px] md:py-12 lg:px-8 lg:py-16 xl:px-16 xl:py-20"
              >
                <div className="expertise_wrapper_bg absolute left-0 top-0 h-full w-full"></div>
                <div className="relative">
                  <p className="body3 text-white">{expertise.title}</p>
                  <p className="mb-[20px] mt-8 text-base text-[#bbb] duration-200 group-hover:opacity-100 md:opacity-0">
                    {expertise.text}
                  </p>
                </div>

                <div className="flex justify-end">
                  <div
                    className="bottom-4 right-4 z-10 flex items-center justify-center bg-white group-hover:bg-white md:absolute md:bg-transparent"
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: "50%",
                      border: "1px solid rgba(255, 255, 255, 0.3)"
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:stroke-black"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-black group-hover:stroke-black md:stroke-white"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-black group-hover:stroke-black md:stroke-white"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
