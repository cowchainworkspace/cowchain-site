import React from "react";
import eth from "@/assets/homepage/expertises/ethereum.svg";
import ava from "@/assets/homepage/expertises/avalanche.svg";
import polygon from "@/assets/homepage/expertises/polygon.svg";
import binance from "@/assets/homepage/expertises/binance.svg";
import nodejs from "@/assets/homepage/expertises/nodejs.svg";
import mongodb from "@/assets/homepage/expertises/mongodb.svg";
import mssql from "@/assets/homepage/expertises/mssql.svg";
import postgres from "@/assets/homepage/expertises/postgresql.svg";
import react from "@/assets/homepage/expertises/react.svg";
import nextjs from "@/assets/homepage/expertises/nextjs.svg";
import ts from "@/assets/homepage/expertises/typescript.svg";
import ios from "@/assets/homepage/expertises/ios.svg";
import android from "@/assets/homepage/expertises/android.svg";
import { ExpertiseBlock } from "./components/expertise";
import clients from "@/assets/homepage/clients.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import fullStackImg from "@/assets/icons/expertice/fullStackImg.svg";
import marketing from "@/assets/icons/expertice/marketing.svg";
import startaps from "@/assets/icons/expertice/startaps.svg";
import venture from "@/assets/icons/expertice/venture.svg";
import whiteLabel from "@/assets/icons/expertice/whiteLabel.svg";

const expertiseData = [
  {
    title: "BLOCKCHAIN",
    text: "From dApps to blockchains – you name it, we do it. Whether you only have a concept in mind or a running business, we can integrate it with Web3",
    icon: fullStackImg
  },
  {
    title: "FRONT-END",
    text: "Combining your vision and best usability practices, we create products that live up to your business goals and are intuitive for users",
    icon: marketing
  },
  {
    title: "MOBILE",
    text: "Expertly crafting native and cross-platform mobile apps, we turn your vision into reality. Focused on performance, user experience, and seamless design, our mobile solutions ensure your app excels in today's dynamic market.",
    icon: whiteLabel
  },
  {
    title: "BACK-END",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture",
    icon: startaps
  },
  {
    title: "BACK-END",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture",
    icon: venture
  }
];

export default function Stack({
  title,
  isGradient = false,
  gradientStyles = "absolute -bottom-2/3 -right-20 block h-[526px] w-[526px] md:hidden",
  margin = "mt-[calc(35vh_+_1.5625vh)]"
}) {
  return (
    <section id="expertise" className="relative mt-10">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="col-span-1 row-span-1 flex items-center justify-center">
          <h2 className="text-4xl uppercase text-center">{title}</h2>
        </div>
        {expertiseData.map((expertise, index) => (
          <div key={index} className="col-span-1 row-span-1 p-4 flex flex-col items-start">
            <div className="mb-2 flex items-center">
                <div className="min-h-[64px] min-w-[64px] flex items-center justify-center border border-white rounded-full bg-transparent">
                  <Image src={expertise.icon} width={28} height={28} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl">{expertise.title}</h3>
                  <p>{expertise.text}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}
