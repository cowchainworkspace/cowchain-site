"use client";

import React from "react";
import { ExpertiseBlock } from "./components/expertise";
import { cn } from "@/lib/utils";
import Image from "next/image";

const expertiseData = [
  {
    title: "Ethereum",
    text: "Ethereum is among the most popular networks, with a rich ecosystem of tools and libraries for smart contract development."
  },
  {
    title: "Polygon",
    text: "Ethereum is among the most popular networks, with a rich ecosystem of tools and libraries for smart contract development."
  },
  {
    title: "Avalanche",
    text: "Ethereum is among the most popular networks, with a rich ecosystem of tools and libraries for smart contract development."
  },
  {
    title: "BNB Chain",
    text: "Ethereum is among the most popular networks, with a rich ecosystem of tools and libraries for smart contract development."
  }
];

export default function Networks({ margin = "mt-[calc(35vh_+_1.5625vh)]" }) {
  return (
    <section
      id="expertise"
      className={cn("relative border-t border-t-th-fade  md:mt-0", margin)}
    >
      <div className="relative z-20 grid lg:grid-cols-2">
        <div className="relative grid grid-cols-1 pt-14 md:border-r md:border-r-th-fade">
          <Image
            alt=""
            width={530}
            height={377}
            className="absolute -top-60 right-0 -z-10 md:hidden"
            src={"/assets/services/radial-mobile.png"}
          />
          <div className="mx-auto mb-16 flex flex-col items-center justify-center gap-y-8  text-center text-white md:max-w-[433px]">
            <h3 className="mx-auto cursor-default text-center font-roc text-2xl uppercase leading-none   md:text-left md:text-[42px]">
              Blockchain networks we work with
            </h3>
            <span className="text-[#bbb] md:text-left">
              The experts at our smart contract development company are
              experienced in working with various blockchain networks, which
              allows us to offer optimal solutions depending on the project
              requirements:
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-1">
          <div className="grid grid-cols-2">
            {expertiseData.map((expertise, index) => (
              <ExpertiseBlock key={index * 2} {...expertise} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
