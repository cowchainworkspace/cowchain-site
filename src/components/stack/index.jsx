import React from "react";
// import eth from "@/assets/homepage/expertises/ethereum.svg";
// import ava from "@/assets/homepage/expertises/avalanche.svg";
// import polygon from "@/assets/homepage/expertises/polygon.svg";
// import binance from "@/assets/homepage/expertises/binance.svg";
// import nodejs from "@/assets/homepage/expertises/nodejs.svg";
// import mongodb from "@/assets/homepage/expertises/mongodb.svg";
// import mssql from "@/assets/homepage/expertises/mssql.svg";
// import postgres from "@/assets/homepage/expertises/postgresql.svg";
// import react from "@/assets/homepage/expertises/react.svg";
// import nextjs from "@/assets/homepage/expertises/nextjs.svg";
// import ts from "@/assets/homepage/expertises/typescript.svg";
// import ios from "@/assets/homepage/expertises/ios.svg";
// import android from "@/assets/homepage/expertises/android.svg";
// import { ExpertiseBlock } from "./components/expertise";
// import clients from "@/assets/homepage/clients.png";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import fullStackImg from "@/assets/icons/expertice/fullStackImg.svg";
import whiteLabel from "@/assets/icons/expertice/marketing.svg";
import startaps from "@/assets/icons/expertice/startaps.svg";
import venture from "@/assets/icons/expertice/venture.svg";
import marketing from "@/assets/icons/expertice/whiteLabel.svg";

const expertiseData = [
  {
    title: "FULL STACK DEVELOPMENT",
    text: "Transforming conceptual ideas into results-driven web3 code. With experienced developers, we'll turn your concept into a marketable product smoothly and effectively.",
    icon: fullStackImg
  },
  {
    title: "STARTUP ACCELERATOR",
    text: "Our accelerator provides funding, development, packaging and go-to-market support. Leverage our extensive network to achieve top web3 recognition.",
    icon: startaps
  },
  {
    title: "EARLY STAGE VENTURE CAPITAL",
    text: "We offer early-stage capital, strategic guidance, and mentorship to Web3 startups, ensuring your unique needs are met for success in the competitive Web3 landscape.",
    icon: venture
  },
  {
    title: "COMPLEX MARKETING AND BUSSINES DEVELOPMENT",
    text: "Improve the awareness of your project and establish a vast audience with the help of Web3 marketing strategies and our business development support.",
    icon: marketing
  },
  {
    title: "WHITE LABEL PRODUCTION",
    text: `Use affordable ready made products developed by industry professionals saving time and cost needed for "from scratch" custom development.`,
    icon: whiteLabel
  }
];

export default function Stack({
  title,
  isGradient = false,
  gradientStyles = "absolute -bottom-2/3 -right-20 block h-[526px] w-[526px] md:hidden",
  margin = "mt-[calc(35vh_+_1.5625vh)]"
}) {
  return (
    <section
      id="expertise"
      className="relative flex justify-center border-b border-b-th-fade border-t border-t-th-fade px-[20px] py-[60px] md:pb-[132px] md:pl-[84px] md:pr-[64px] md:pt-[108px]"
    >
      <div className="grid grid-cols-1 gap-y-[42px] md:grid-rows-2 md:gap-x-[100px] lg:grid-cols-3">
        <div className="col-span-1 row-span-1 flex items-center justify-center md:justify-start">
          <h2 className="whitespace-pre-line text-[36px] text-center uppercase md:text-start md:text-[60px]">
            {title}
          </h2>
        </div>

        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            className="col-span-1 row-span-1 flex flex-col items-start"
          >
            <div
              style={{ border: "0.1px solid rgba(255, 255, 255, 0.5)" }}
              className="mb-[24px] md:mb-[37px] flex min-h-[42px] min-w-[42px] md:min-h-[64px] md:min-w-[64px] items-center justify-center rounded-full bg-transparent"
            >
              <Image
                src={expertise.icon}
                width={'auto'}
                height={'auto'}
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]"
                alt={expertise.title}
              />
            </div>
            <div className="mb-2 flex items-center">
              <div className="">
                <h3 className="mb-[22px] max-w-[310px] text-xl">
                  {expertise.title}
                </h3>
                <p
                  style={{
                    color: "#BBBBBB"
                  }}
                  className="text-[16px] leading-22px"
                >
                  {expertise.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
