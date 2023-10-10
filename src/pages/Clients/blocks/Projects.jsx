import React, { useState } from "react";
import pic1 from "../../../assets/homepage/projects/1.jpg";
import pic2 from "../../../assets/homepage/projects/2.jpg";
import pic3 from "../../../assets/homepage/projects/3.jpg";
import { Scrollama, Step } from "react-scrollama";
import { motion } from "framer-motion";

const sectionsData = [
  {
    title: "Startups riding the blockchain wave 1",
    description:
      "Got an idea keeping you up at night? Let's turn it into a tangible and effective solution. We'll guide you through the development process, ensuring that your product is both functional and aligned with your business goals",
    projects: [
      {
        pic: pic1,
        name: "Decentralized Exchange (DEX)",
      },
      {
        pic: pic2,
        name: "Decentralized Exchange (DEX)",
      },
    ],
  },
  {
    title: "Startups riding the blockchain wave 2",
    description:
      "Got an idea keeping you up at night? Let's turn it into a tangible and effective solution. We'll guide you through the development process, ensuring that your product is both functional and aligned with your business goals",
    projects: [
      {
        pic: pic1,
        name: "Decentralized Exchange (DEX)",
      },
      {
        pic: pic2,
        name: "Decentralized Exchange (DEX)",
      },
    ],
  },
  {
    title: "Startups riding the blockchain wave 3",
    description:
      "Got an idea keeping you up at night? Let's turn it into a tangible and effective solution. We'll guide you through the development process, ensuring that your product is both functional and aligned with your business goals",
    projects: [
      {
        pic: pic1,
        name: "Decentralized Exchange (DEX)",
      },
      {
        pic: pic2,
        name: "Decentralized Exchange (DEX)",
      },
    ],
  },
];

const Projects = () => {
  const windowHeight = window.innerHeight;

  return (
    <section id="clients-projects">
      <div className="relative border-b border-b-th-fade">
        {sectionsData &&
          sectionsData.map((section, index) => (
            <>
              <div className="section-rendered h-[1vh]"></div>
              <article
                className={
                  index !== 0
                    ? "bg-black sticky px-4 md:px-8 flex flex-col py-10 border-t border-t-th-fade"
                    : "bg-black sticky px-4 md:px-8 flex flex-col py-10"
                }
                style={{
                  top: `${5 * (index + 2)}vh`,
                }}
              >
                <p className="text-xl font-roc text-white uppercase leading-none font-medium max-w-xs">
                  {section.title}
                </p>
                <div className="mt-10 bg-black">
                  <p className="text-th-grey">{section.description}</p>
                  <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    {section.projects &&
                      section.projects.map((project, index) => (
                        <div
                          key={index}
                          className="relative flex flex-col p-4 w-full max-w-sm h-[30vh]"
                        >
                          <div
                            className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${project.pic})`,
                            }}
                          ></div>
                          <h2 className="relative text-white max-w-[140px] mt-auto">
                            {project.name}
                          </h2>
                        </div>
                      ))}
                  </div>
                </div>
              </article>
            </>
          ))}
      </div>
    </section>
  );
};

export default Projects;
