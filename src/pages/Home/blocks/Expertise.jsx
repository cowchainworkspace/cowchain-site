import React from "react";
import { useCollapse } from "react-collapsed";
import eth from "../../../assets/homepage/expertises/ethereum.svg";
import ava from "../../../assets/homepage/expertises/avalanche.svg";
import polygon from "../../../assets/homepage/expertises/polygon.svg";
import binance from "../../../assets/homepage/expertises/ethereum.svg";
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
        alt: "Microsoft SQL",
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
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    duration: 100,
  });
  return (
    <div
      className="p-3 min-h-[48px] min-w-[48px] border bg-black border-white rounded-full flex items-center justify-center gap-x-2"
      {...getToggleProps()}
    >
      <div>
        <img alt={alt} src={logo}></img>
      </div>
      <div className="pl-2" {...getCollapseProps()}>
        <p className="body1">{alt}</p>
      </div>
    </div>
  );
};

const ExpertiseBlock = ({ title, text, tools }) => {
  return (
    <article className="border-b border-b-th-fade px-4 py-12 expertise_wrapper">
      <p className="body3 text-white">{title}</p>
      <p className="text-th-grey mt-8">{text}</p>
      <div className="flex items-center tools_wrapper mt-8">
        {tools.map((tool, index) => (
          <CollapsedIcon key={index} {...tool} />
        ))}
      </div>
    </article>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="relative">
      <img className="absolute bottom-0 right-0" src={bg} alt=""></img>
      <div className="relative grid grid-cols-1">
        <div className="border-b border-b-th-fade py-16 text-center px-4">
          <h3 className="text-center">
            OUR<br></br>EXPERTISE
          </h3>
        </div>
        <div>
          {expertiseData.map((expertise, index) => (
            <ExpertiseBlock key={index * 2} {...expertise} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
