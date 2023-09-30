import React from "react";
import pic1 from "../../../assets/homepage/projects/1.jpg";
import pic2 from "../../../assets/homepage/projects/2.jpg";
import pic3 from "../../../assets/homepage/projects/3.jpg";

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

const Project = ({ title, description, photo, tags }) => {
  return (
    <article
      className="relative bg-cover bg-no-repeat bg-bottom border-b border-b-th-fade py-8 px-4"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
      <div className="mt-[20vh] flex flex-col gap-y-4 relative">
        <p className="text-white heading uppercase">{title}</p>
        <p className="caption">{description}</p>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="grid grid-cols-1">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
