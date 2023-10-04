import React from "react";
import eth from "../../../assets/homepage/expertises/ethereum.svg";
import ava from "../../../assets/homepage/expertises/avalanche.svg";
import polygon from "../../../assets/homepage/expertises/polygon.svg";
import binance from "../../../assets/homepage/expertises/binance.svg";
import nodejs from "../../../assets/homepage/expertises/nodejs.svg";
import mongodb from "../../../assets/homepage/expertises/mongodb.svg";
import mssql from "../../../assets/homepage/expertises/mssql.svg";
import postgres from "../../../assets/homepage/expertises/postgresql.svg";
import react from "../../../assets/homepage/expertises/react.svg";
import nextjs from "../../../assets/homepage/expertises/nextjs.svg";
import ts from "../../../assets/homepage/expertises/typescript.svg";
import aws from "../../../assets/homepage/expertises/aws.svg";
import google from "../../../assets/homepage/expertises/google.svg";
import azure from "../../../assets/homepage/expertises/azure.svg";
import bg from "../../../assets/homepage/expertise_bg.png";
import bg_lg from "../../../assets/homepage/expertise_bg_lg.png";

const expertiseData = [
  {
    title: "BLOCKCHAIN",
    text: "From dApps to blockchains – you name it, we do it. Whether you only have a concept in mind or a running business, we can integrate it with Web3",
    tools: [
      {
        logo: eth,
        alt: "Ethereum",
      },
      {
        logo: ava,
        alt: "Avalanche",
      },
      {
        logo: polygon,
        alt: "Polygon",
      },
      {
        logo: binance,
        alt: "Binance",
      },
    ],
  },
  {
    title: "BACK-END",
    text: "Based on factors like project complexity and its scalability needs, we deploy the most suitable and easy-to-maintain product architecture",
    tools: [
      {
        logo: nodejs,
        alt: "NodeJS",
      },
      {
        logo: mongodb,
        alt: "MongoDB",
      },
      {
        logo: mssql,
        alt: "MicrosoftSQL",
      },
      {
        logo: postgres,
        alt: "PostgreSQL",
      },
    ],
  },
  {
    title: "FRONT-END",
    text: "Combining your vision and best usability practices, we create products that live up to your business goals and are intuitive for users",
    tools: [
      {
        logo: react,
        alt: "ReactJS",
      },
      {
        logo: nextjs,
        alt: "NextJS",
      },
      {
        logo: ts,
        alt: "Typescript",
      },
    ],
  },
  {
    title: "CLOUD",
    text: "By incorporating EventBuses, microservices, analytics, and serverless applications, we build flexible, scalable, and data-driven software systems",
    tools: [
      {
        logo: aws,
        alt: "Amazon",
      },
      {
        logo: google,
        alt: "Google",
      },
      {
        logo: azure,
        alt: "Azure",
      },
    ],
  },
];

const CollapsedIcon = ({ logo, alt }) => {
  return (
    <div className="tool-icon-container h-12 min-h-[48px] min-w-[48px] border bg-black border-th-grey rounded-full flex items-center justify-center gap-x-2">
      <img className="" src={logo}></img>
      <div className="hidden tool-text pl-2 text-center">
        <p className="body1">{alt}</p>
      </div>
    </div>
  );
};

const ExpertiseBlock = ({ title, text, tools }) => {
  return (
    <article className="relative border-b border-b-th-fade px-4 xl:px-8 py-12 lg:py-16 xl:py-20 expertise_wrapper md-border-r">
      <div className="absolute top-0 left-0 w-full h-full expertise_wrapper_bg"></div>
      <div className="relative">
        <p className="body3 text-white">{title}</p>
        <p className="text-[#bbb] mt-8">{text}</p>
        <div className="flex items-center tools_wrapper mt-8">
          {tools.map((tool, index) => (
            <CollapsedIcon key={index} {...tool} />
          ))}
        </div>
      </div>
    </article>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="relative">
      <img
        srcSet={`${bg} 700w, ${bg_lg} 1000w`}
        sizes="(max-width: 640px) 70vw, 70vw"
        alt=""
        className="absolute bottom-0 right-0 w-full"
        src={bg_lg}
      />
      <div className="relative grid grid-cols-1 md:grid-cols-5">
        <div className="border-b border-b-th-fade py-heading text-center px-default md:col-span-2 md-border-r">
          <h3 className="text-center md:text-left">
            OUR<br></br>EXPERTISE
          </h3>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 xl:grid-cols-2">
          {expertiseData.map((expertise, index) => (
            <ExpertiseBlock key={index * 2} {...expertise} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
