"use client";

import React, { createElement } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper";
import arrowUpRight from "./../../../../../assets/services/arrowUpRightIcon.svg";

const expertiseData = [
  {
    title: "BLOCKCHAIN",
    text: "From dApps to blockchains – you name it, we do it. Whether you only have a concept in mind or a running business, we can integrate it with Web3"
  },
  {
    title: "FRONT-END",
    text: "Combining your vision and best usability practices, we create products that live up to your business goals and are intuitive for users"
  },
  {
    title: "MOBILE",
    text: "Expertly crafting native and cross-platform mobile apps, we turn your vision into reality. Focused on performance, user experience, and seamless design, our mobile solutions ensure your app excels in today's dynamic market."
  },
  {
    title: "BACK-END",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture"
  }
];

export default function Others() {
  return (
    <section id="expertise" className={cn("relative overflow-hidden md:mt-0")}>
      <div className="relative z-20 grid lg:grid-cols-1">
        <div className="relative grid grid-cols-1 border-y border-y-th-fade pt-14">
          <div className="mb-16 flex flex-col items-center justify-center gap-y-8 px-4 text-center text-white ">
            <Image
              alt=""
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

        {/* <Swiper
          className="grid lg:col-span-1 lg:grid-cols-4"
          slidesPerView={"auto"}
          spaceBetween={0}
        >
          {expertiseData &&
            expertiseData.map((expertise, index) => (
              <SwiperSlide
                key={index}
                className="expertise_wrapper md-border-r group relative cursor-default  border-b border-b-th-fade px-4 py-12 lg:px-8 lg:py-16 xl:px-16 xl:py-20"
              >
                <div className="expertise_wrapper_bg absolute left-0 top-0 h-full w-full"></div>
                <div className="relative">
                  <p className="body3 text-white">{expertise.title}</p>
                  <p className="mb-4 mt-8 text-base text-[#bbb] opacity-0 duration-200 group-hover:opacity-100">
                    {expertise.text}
                  </p>
                </div>

                <div
                  className="absolute bottom-4 right-4 z-10 flex items-center justify-center group-hover:bg-white"
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
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
                      className="group-hover:stroke-black"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-black"
                    />
                  </svg>
                </div>
              </SwiperSlide>
            ))}
        </Swiper> */}

        <div className="grid lg:col-span-1 lg:grid-cols-4">

        {expertiseData &&
            expertiseData.map((expertise, index) => (
              <article
                key={index}
                className="expertise_wrapper md-border-r group relative cursor-default  border-b border-b-th-fade py-[40px] px-[20px] md:py-12 lg:px-8 lg:py-16 xl:px-16 xl:py-20"
              >
                <div className="expertise_wrapper_bg absolute left-0 top-0 h-full w-full"></div>
                <div className="relative">
                  <p className="body3 text-white">{expertise.title}</p>
                  <p className="mb-[20px] mt-8 text-base text-[#bbb] md:opacity-0 duration-200 group-hover:opacity-100">
                    {expertise.text}
                  </p>
                </div>

               <div className="flex justify-end">
                 <div
                  className="md:absolute bottom-4 right-4 z-10 flex items-center justify-center bg-white md:bg-transparent group-hover:bg-white"
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
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
                      className="stroke-black md:stroke-white group-hover:stroke-black"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-black md:stroke-white group-hover:stroke-black"
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
