import React from "react";
import pic1 from "../../../assets/homepage/projects/1.jpg";
import pic2 from "../../../assets/homepage/projects/2.jpg";
import pic3 from "../../../assets/homepage/projects/3.jpg";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const projectsData = [
  {
    title: "Marsan Exchange",
    description:
      "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
    photo: pic1,
    tags: ["React.js", "Solidity", "Subgraph"],
  },
  {
    title: "Eva Crypto Wallet",
    description:
      "Multichain mobile wallet development with AI integration for an optimized portfolio management",
    photo: pic2,
    tags: ["React.js", "Solidity", "Subgraph"],
  },
  {
    title: "Triend",
    description:
      "Decentralized plugin development for travelers’ review verification. Proof-of-attendance protocol and reward system integration",
    photo: pic3,
    tags: ["React.js", "Solidity", "Subgraph"],
  },
];

const Project = ({ title, description, photo, tags, id }) => {
  const { scrollYProgress } = useScroll();
  return (
    <article
      id={"project-" + id}
      className="relative cursor-pointer w-full bg-cover bg-no-repeat bg-center border-b border-b-th-fade py-8 px-4 md:px-8 lg:px-16 flex h-80 md:h-96 lg:h-[480px] xl:h-[624px] project-card md:min-w-[25vw]"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-4 project-overlay lg:px-12 px-6 py-4 md:py-8 lg:py-16">
        <Link to="/" className="btn-contact ml-auto">
          VIEW PROJECT
        </Link>
        <div className="mt-auto flex flex-col gap-y-4">
          <div className="flex items-center gap-x-1 md:gap-x-2">
            {tags.map((tag, index) => (
              <div key={index} className="bg-white rounded-full py-2 px-3">
                <p className="text-black text-xs font-medium">{tag}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-2">{title}</h2>
          <p className="body !text-[#bbb] max-w-sm">{description}</p>
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-y-4 relative md:hidden">
        <h2>{title}</h2>
        <p className="text-sm font-normal text-[#bbb] leading-normal">{description}</p>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="grid grid-cols-1 md:flex md:w-full">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} id={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
