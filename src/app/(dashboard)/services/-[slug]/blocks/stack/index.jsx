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

const expertiseData = [
  {
    title: "BLOCKCHAIN",
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
    title: "FRONT-END",
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
    title: "MOBILE",
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
    title: "BACK-END",
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

export default function ServiceStack({
  margin = "mt-[calc(35vh_+_1.5625vh)]"
}) {

  return (
    <section id="expertise" className={cn("relative   md:mt-0", margin)}>
      <div className="relative z-20 grid lg:grid-cols-2">
        <div className="relative grid grid-cols-1 border-y  border-y-th-fade pt-14 md:border-r md:border-r-th-fade">
          <div className="mx-auto mb-16   flex max-w-[430px] flex-col items-center justify-center gap-y-8 px-4 text-left    text-white ">
            <h3 className="mx-auto cursor-default   font-roc text-2xl uppercase   leading-none md:text-[42px]">
              The tech stack we use
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
        </div>
        <div className="grid lg:grid-cols-1">
          <div className="grid lg:grid-cols-2">
            {expertiseData.map((expertise, index) => (
              <ExpertiseBlock key={index * 2} {...expertise} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
