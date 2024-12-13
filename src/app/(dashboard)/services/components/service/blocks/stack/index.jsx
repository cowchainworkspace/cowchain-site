"use client";

import React from "react";
import eth from "@/assets/homepage/expertises/ethereum.svg";
import ava from "@/assets/homepage/expertises/avalanche.svg";
import polygon from "@/assets/homepage/expertises/polygon.svg";
import binance from "@/assets/homepage/expertises/binance.svg";
import nodejs from "@/assets/homepage/expertises/nodejs.svg";
import mongodb from "@/assets/homepage/expertises/mongodb.svg";
import postgres from "@/assets/homepage/expertises/postgresql.svg";
import react from "@/assets/homepage/expertises/react.svg";
import nextjs from "@/assets/homepage/expertises/nextjs.svg";
import aws from "@/assets/stack/AWSStackIcon.svg";
import azure from "@/assets/stack/Azure.svg";
import bitcoin from "@/assets/stack/bitcoinStackIcon.svg";
import express from "@/assets/stack/ExpressStackIcon.svg";
import googleCloud from "@/assets/stack/GoogleCloudStackIcon.svg";
import javascript from "@/assets/stack/javascriptStackIcon.svg";
import microservices from "@/assets/stack/MicroservicesStackIcon.svg";
import mysql from "@/assets/stack/MySQLStackIcon.svg";
import near from "@/assets/stack/NearStackIcon.svg";
import nest from "@/assets/stack/NestStackIcon.svg";
import okx from "@/assets/stack/OKXStackIcon.svg";
import privy from "@/assets/stack/PrivyStackIcon.svg";
import solana from "@/assets/stack/solanaStackIcon.svg";
import subgraph from "@/assets/stack/SubgraphStackIcon.svg";
import tailwind from "@/assets/stack/TailwindStackIcon.svg";
import thirdWeb from "@/assets/stack/thirdWebStackIcon.svg";
import ton from "@/assets/stack/TONStackIcon.svg";
import { ExpertiseBlock } from "./components/expertise";
import { cn } from "@/lib/utils";
import { useGetItems } from "@/hooks/use-strapi";
import dexStackBg from "@/assets/bg/dexStackBg.svg";
import Image from "next/image";

const expertiseData = [
  {
    title: "Blockchain Platforms",
    text: "From dApps to blockchains – you name it, we do it. Whether you only have a concept in mind or a running business, we can integrate it with Web3",
    tools: [
      { logo: eth, alt: "Ethereum" },
      { logo: solana, alt: "Solana" },
      { logo: polygon, alt: "Polygon" },
      { logo: ava, alt: "Avalanche" },
      { logo: binance, alt: "Binance Smart Chain" },
      { logo: bitcoin, alt: "Bitcoin" },
      { logo: ton, alt: "TON" },
      { logo: near, alt: "Near" }
    ]
  },
  {
    title: "Front-End Technologies",
    text: "Expertly crafting native and cross-platform mobile apps, we turn your vision into reality. Focused on performance, user experience, and seamless design, our mobile solutions ensure your app excels in today's dynamic market.",
    tools: [
      { logo: react, alt: "React.js" },
      { logo: nextjs, alt: "Next.js" },
      { logo: javascript, alt: "JavaScript" },
      { logo: tailwind, alt: "Tailwind CSS" }
    ]
  },
  {
    title: "Back-End Technologies",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture",
    tools: [
      { logo: nodejs, alt: "Node.js" },
      { logo: express, alt: "Express" },
      { logo: nest, alt: "Nest.js" },
      { logo: microservices, alt: "Microservices" }
    ]
  },
  {
    title: "Databases",
    text: "Combining your vision and best usability practices, we create products that live up to your business goals and are intuitive for users",
    tools: [
      { logo: mongodb, alt: "MongoDB" },
      { logo: mysql, alt: "MySQL" },
      { logo: postgres, alt: "PostgreSQL" }
    ]
  },
  {
    title: "Cloud Services",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture",
    tools: [
      { logo: aws, alt: "AWS" },
      { logo: azure, alt: "Azure" },
      { logo: googleCloud, alt: "Google Cloud" }
    ]
  },
  {
    title: "Integrators of",
    text: "Leveraging the most advanced integration services, we seamlessly connect your applications with top-tier blockchain tools.",
    tools: [
      { logo: okx, alt: "OKX" },
      { logo: privy, alt: "Privy" },
      { logo: thirdWeb, alt: "third web" },
      { logo: subgraph, alt: "Subgraph" }
    ]
  }
];

export function ServiceStack({ margin = "mt-[calc(35vh_+_1.5625vh)]", title }) {
  const { data } = useGetItems("services-contents");

  return (
    <section
      id="expertise"
      className={cn("relative px-[88px] py-[127px] md:mt-0", margin)}
    >
      <Image alt="" className="absolute -top-24 left-0 " src={dexStackBg} />
      <div className="relative z-20 grid grid-cols-3  gap-y-[50px] max-w-[1440px] mx-auto">
        <div className="relative col-span-1 row-span-3 max-w-[284px]">
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
