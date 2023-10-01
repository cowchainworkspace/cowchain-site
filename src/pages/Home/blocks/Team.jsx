import React from "react";
import arrow from "../../../assets/arrow_right.svg";
import photo from "../../../assets/homepage/team/mykhailo.jpg";
import linkedin from "../../../assets/homepage/linkedin.svg";

const teamData = [
  {
    name: "mikhailo",
    role: "founder & CTO",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
  {
    name: "Vladyslav",
    role: "full-stack dev",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
  {
    name: "Nikita",
    role: "web 3 & solidity  dev",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
  {
    name: "Vladyslav",
    role: "full-stack dev",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
  {
    name: "jurii",
    role: "full-stack dev",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
  {
    name: "oleh",
    role: "development lead",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
  {
    name: "Bohdan",
    role: "web 3 full-stack dev",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
  {
    name: "Vladyslav",
    role: "full-stack dev",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
  {
    name: "jurii",
    role: "full-stack dev",
    photo: photo,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "#",
    },
  },
];

const TeamCard = ({ name, role, photo, social }) => {
  return (
    <div className="relative py-[8vh] px-4 flex flex-col gap-y-2 border-b border-b-th-fade team_card_wrapper">
      <div className="team_card_overlay absolute top-0 left-0 h-full w-full flex">
        <div
          className="bg-cover bg-center bg-no-repeat p-8 h-full w-full flex"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="relative mt-auto ml-auto">
            <a href="#" rel="nofollow" target="_blank">
              <img className="w-12" src={social?.icon}></img>
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-center">{name}</h2>
      <p className="text-center caption uppercase">{role}</p>
    </div>
  );
};

const Team = () => {
  return (
    <section id="team" className="relative">
      <div className="relative grid grid-cols-1">
        <div className="border-b border-b-th-fade py-16 text-center px-4 flex flex-col gap-y-6">
          <h3 className="text-center">OUR TEAM</h3>
          <a href="#" className="mx-auto">
            <div className="flex items-center gap-x-2">
              <p className="header text-white uppercase underline">
                MEET COWCHAIN
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
        <div className="grid grid-cols-2 team_wrapper">
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
