import React from "react";
import arrow from "../../../assets/arrow_right.svg";
import photo from "../../../assets/homepage/team/mykhailo.jpg";
import linkedin from "../../../assets/homepage/linkedin.svg";
import bg from "../../../assets/bg/team_bg.png";

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
    <div className="relative py-[8vh] lg:py-[12vh] px-4 flex flex-col gap-y-2 border-b border-r border-b-th-fade border-r-th-fade team_card_wrapper ">
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
      <img
        className="hidden lg:block absolute bottom-0 h-full w-1/2 left-0"
        src={bg}
        alt=""
      ></img>
      <div className="relative grid grid-cols-1 lg:grid-cols-5">
        <div className="border-b border-b-th-fade md-border-r py-heading text-center lg:text-left px-default flex flex-col gap-y-6 lg:col-span-2">
          <h3 className="text-center lg:text-left">OUR TEAM</h3>
          <a href="#" className="mx-auto lg:mx-0">
            <div className="flex items-center gap-x-2">
              <p className="header text-white uppercase underline">
                MEET COWCHAIN
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
        <div className="grid grid-cols-2 bg-black md:grid-cols-3 team_wrapper lg:col-span-3">
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
