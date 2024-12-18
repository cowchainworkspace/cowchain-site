"use client";

import React, { createElement } from "react";
import Image from "next/image";
import { useGetItems } from "@/hooks/use-strapi";
import Markdown from "markdown-to-jsx";

const expertiseData = [
  {
    title: "BLOCKCHAIN",
    text: "From dApps to blockchains – you name it, we do it. Whether you only have a concept in mind or a running business, we can integrate it with Web3",

  },
  {
    title: "FRONT-END",
    text: "Combining your vision and best usability practices, we create products that live up to your business goals and are intuitive for users",

  },
  {
    title: "MOBILE",
    text: "Expertly crafting native and cross-platform mobile apps, we turn your vision into reality. Focused on performance, user experience, and seamless design, our mobile solutions ensure your app excels in today's dynamic market.",

  },
  {
    title: "BACK-END",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture",

  }
];

export default function Planet() {
  return (
    <section id="view_more" className="relative z-10  mt-16  lg:my-[120px]">
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <Image
          alt=""
          width={530}
          height={377}
          className="absolute -top-60 right-0 -z-10 md:hidden"
          src={"/assets/services/radial-mobile.png"}
        />
        <div className="px-4">
          <div className="mb-16  flex flex-col items-center justify-center gap-y-8  text-center text-white">
            <h3 className="mx-auto cursor-default text-left font-roc text-2xl uppercase   leading-none md:text-[48px]">
              Our blockchain advisory background
            </h3>
            <span className="text-left text-[#bbb]">
              <Markdown
                children={expertiseData[0].title}
                options={{
                  createElement(type, props, children) {
                    return (
                      <div className="parent markdown">
                        {createElement(type, props, children)}
                      </div>
                    );
                  }
                }}
              />
            </span>
          </div>
          <div className=" flex max-w-[350px] justify-between">
            <div className="flex flex-col items-start gap-4">
              <p className="font-roc text-3xl uppercase text-white">35+</p>
              <p className="text-md uppercase text-white">Technologies</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="font-roc text-3xl   uppercase text-white">105+</p>
              <p className="text-md uppercase text-white">projects</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="font-roc text-3xl  uppercase text-white">50+</p>
              <p className="text-md uppercase text-white">clients</p>
            </div>
          </div>
        </div>

        <Image
          alt="globus"
          width={530}
          height={377}
          className=" w-full"
          src={"/assets/services/globus.png"}
        />
      </div>
    </section>
  );
}
