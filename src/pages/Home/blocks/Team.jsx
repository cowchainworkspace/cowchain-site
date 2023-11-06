import React from "react";
import arrow from "assets/arrow_right.svg";
import photo1 from "assets/homepage/team/mykhailo.jpg";
import photo2 from "assets/homepage/team/vyacheslav.jpg";
import photo3 from "assets/homepage/team/oleh.jpg";
import photo4 from "assets/homepage/team/andrii.jpg";
import photo5 from "assets/homepage/team/bohdan.jpg";
import photo6 from "assets/homepage/team/veronika.jpg";
import photo7 from "assets/homepage/team/ruslan.jpg";
import photo8 from "assets/homepage/team/saminu.jpg";
import photo9 from "assets/homepage/team/alexandr.jpg";
import linkedin from "assets/homepage/linkedin.svg";
import bg from "assets/bg/team_bg.png";

const teamData = [
  {
    name: "Michael",
    role: "Founder & CEO",
    photo: photo1,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/onchainmichael"
    }
  },
  {
    name: "Viacheslav",
    role: "COO",
    photo: photo2,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%B8%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-549988195"
    }
  },
  {
    name: "Oleh",
    role: "Development lead",
    photo: photo3,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/oleh-shutiak-%F0%9F%87%BA%F0%9F%87%A6-92786b229"
    }
  },
  {
    name: "Andrii",
    role: "Full-stack Web3 developer",
    photo: photo4,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B3%D1%80%D0%BE%D0%BC%D0%B0%D0%B4%D0%B5%D1%86%D0%BA%D0%B8%D0%B9-1b26231b8"
    }
  },
  {
    name: "Bohdan",
    role: "Full-stack Web3 developer",
    photo: photo5,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/bohdan-solomakha-750a14240/"
    }
  },
  {
    name: "Veronika",
    role: "Marketing manager",
    photo: photo6,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/veronika-volkonovska-12318b250/"
    }
  },
  {
    name: "Ruslan",
    role: "Lead Generation manager",
    photo: photo7,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/ruslan-siniaiev-600340240/"
    }
  },
  {
    name: "Saminu",
    role: "Full-stack Web3 developer",
    photo: photo8,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/smailafiiia/"
    }
  },
  {
    name: "Alexander",
    role: "Full-stack Web3 developer",
    photo: photo9,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/alexander-barabash-9a76aa217/"
    }
  }
];

const TeamCard = ({ name, role, photo, social }) => {
  return (
    <div className="team_card_wrapper relative flex flex-col gap-y-2 border-b border-r border-b-th-fade border-r-th-fade px-4 py-[8vh] xl:py-[12vh] ">
      <div className="team_card_overlay absolute left-0 top-0 flex h-full w-full">
        <div
          className="flex h-full w-full bg-cover bg-center bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="relative ml-auto mt-auto">
            <a href={social?.url} rel="nofollow noreferrer" target="_blank">
              <img alt={""} className="w-12" src={social?.icon}></img>
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-center">{name}</h2>
      <p className="caption text-center uppercase">{role}</p>
    </div>
  );
};

const Team = () => {
  return (
    <section id="team" className="relative">
      <img
        className="absolute bottom-0 left-0 hidden h-full w-1/2 lg:block"
        src={bg}
        alt=""
      ></img>
      <div className="relative grid grid-cols-1 lg:grid-cols-5">
        <div className="md-border-r py-heading px-default flex flex-col gap-y-6 border-b border-b-th-fade text-center lg:col-span-2 lg:text-left">
          <h3 className="text-center lg:text-left">OUR TEAM</h3>
          <a href="#" className="mx-auto lg:mx-0">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                MEET COWCHAIN
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
        <div className="team_wrapper grid grid-cols-2 bg-black md:grid-cols-3 lg:col-span-3">
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
