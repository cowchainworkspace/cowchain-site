"use client";

import React, { createElement } from "react";
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
import { cn } from "@/lib/utils";
import { useGetItems } from "@/hooks/use-strapi";
import Markdown from "markdown-to-jsx";
import dexStackBg from "@/assets/bg/dexStackBg.svg";
import Image from "next/image";

const expertiseData = [
  {
    title: "Blockchain Platforms",
    text: "From dApps to blockchains – you name it, we do it. Whether you only have a concept in mind or a running business, we can integrate it with Web3",
    tools: [
      {
        logo: eth,
        alt: "Ethereum"
      },
      {
        logo: ava,
        alt: "Avalanche"
      },
      {
        logo: polygon,
        alt: "Polygon"
      },
      {
        logo: binance,
        alt: "Binance"
      }
    ]
  },
  {
    title: "Databases",
    text: "Combining your vision and best usability practices, we create products that live up to your business goals and are intuitive for users",
    tools: [
      {
        logo: react,
        alt: "ReactJS"
      },
      {
        logo: nextjs,
        alt: "NextJS"
      },
      {
        logo: ts,
        alt: "Typescript"
      }
    ]
  },
  {
    title: "Front-End Technologies",
    text: "Expertly crafting native and cross-platform mobile apps, we turn your vision into reality. Focused on performance, user experience, and seamless design, our mobile solutions ensure your app excels in today's dynamic market.",
    tools: [
      {
        logo: ios,
        alt: "IOS"
      },
      {
        logo: android,
        alt: "Android"
      },
      {
        logo: react,
        alt: "React Native"
      }
    ]
  },
  {
    title: "Cloud Services",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture",
    tools: [
      {
        logo: nodejs,
        alt: "NodeJS"
      },
      {
        logo: mongodb,
        alt: "MongoDB"
      },
      {
        logo: mssql,
        alt: "MicrosoftSQL"
      },
      {
        logo: postgres,
        alt: "PostgreSQL"
      }
    ]
  },
  {
    title: "Back-End Technologies",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture",
    tools: [
      {
        logo: nodejs,
        alt: "NodeJS"
      },
      {
        logo: mongodb,
        alt: "MongoDB"
      },
      {
        logo: mssql,
        alt: "MicrosoftSQL"
      },
      {
        logo: postgres,
        alt: "PostgreSQL"
      }
    ]
  }
];

export function ServiceStack({ margin = "mt-[calc(35vh_+_1.5625vh)]" }) {
  const { data } = useGetItems("services-contents");

  return (
    <section
      id="expertise"
      className={cn("relative px-[88px] py-[127px] md:mt-0", margin)}
    >
      <Image
        alt=""
        className="absolute -top-24 left-0 "
        src={dexStackBg}
      />
      <div className="relative z-20 grid grid-cols-3 ">
        <div className="relative col-span-1 row-span-3 pt-14 max-w-[284px]">
          <div className="mx-auto mb-16   flex max-w-[284px] flex-col items-center justify-center text-left    text-white ">
            <div className="col-span-2 row-span-1 flex flex-col items-start gap-[26px] md:justify-start">
              <h2 className="whitespace-pre-line text-center text-[36px] uppercase md:text-start md:text-[60px]">
                Tech Stack We UsE
              </h2>

              <p className="leading-22px text-[16px] text-[#BBBBBB]">
                To achieve high performance in decentralized exchange software
                development, we rely on the following tech stack
              </p>
            </div>
          </div>
        </div>
        {expertiseData.map((expertise, index) => (
              <ExpertiseBlock key={index * 2} {...expertise} />
            ))}
      </div>
    </section>
  );
}
