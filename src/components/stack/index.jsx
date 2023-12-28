import React from "react";
import eth from "assets/homepage/expertises/ethereum.svg";
import ava from "assets/homepage/expertises/avalanche.svg";
import polygon from "assets/homepage/expertises/polygon.svg";
import binance from "assets/homepage/expertises/binance.svg";
import nodejs from "assets/homepage/expertises/nodejs.svg";
import mongodb from "assets/homepage/expertises/mongodb.svg";
import mssql from "assets/homepage/expertises/mssql.svg";
import postgres from "assets/homepage/expertises/postgresql.svg";
import react from "assets/homepage/expertises/react.svg";
import nextjs from "assets/homepage/expertises/nextjs.svg";
import ts from "assets/homepage/expertises/typescript.svg";
import aws from "assets/homepage/expertises/aws.svg";
import google from "assets/homepage/expertises/google.svg";
import azure from "assets/homepage/expertises/azure.svg";
import bg from "assets/homepage/expertise_bg.png";
import bg_lg from "assets/homepage/expertise_bg_lg.png";
import { ExpertiseBlock } from "./components/expertise";
import clients from "assets/homepage/clients.png";

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
    title: "CLOUD",
    text: "By incorporating EventBuses, microservices, analytics, and serverless applications, we build flexible, scalable, and data-driven software systems",
    tools: [
      {
        logo: aws,
        alt: "Amazon"
      },
      {
        logo: google,
        alt: "Google"
      },
      {
        logo: azure,
        alt: "Azure"
      }
    ]
  }
];

const Stack = ({
  title,
  isGradient = false,
  gradientStyles = "absolute -bottom-2/3 -right-20 block  h-[526px] w-[526px] md:hidden"
}) => {
  return (
    <section id="expertise" className="relative  overflow-hidden md:-mt-0">
      <div className="relative grid lg:grid-cols-3">
        <div className="py-heading px-default md-border-r relative  flex justify-center  border-b border-b-th-fade text-center md:col-span-1">
          <h3 className="z-10 max-w-[183px] text-center text-4xl uppercase leading-[40px] md:max-w-none md:text-left md:text-[60px] md:leading-[53px]">
            {title}
          </h3>
          {isGradient && (
            <img src={clients} className={gradientStyles} alt="" />
          )}
        </div>
        <div className="grid lg:col-span-2 lg:grid-cols-2">
          {expertiseData.map((expertise, index) => (
            <ExpertiseBlock key={index * 2} {...expertise} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
