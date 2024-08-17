import React from "react";
import Michael from "@/assets/homepage/team/newTeam/michaelImg.png";
import Viacheslav from "@/assets/homepage/team/newTeam/viacheslavImg.png";
import Oleh from "@/assets/homepage/team/newTeam/olehImg.png";
import Vlad from "@/assets/homepage/team/newTeam/vladImg.png";
import Alexandra from "@/assets/homepage/team/newTeam/alexandraImg.png";
import Alex from "@/assets/homepage/team/newTeam/alexImg.png";
import Hanna from "@/assets/homepage/team/newTeam/hannaImg.png";
import Ruslan from "@/assets/homepage/team/newTeam/ruslanImg.png";
import Olexandr from "@/assets/homepage/team/newTeam/olexandrIng.png";
import linkedin from "@/assets/homepage/linkedin.svg";
// import { TeamCard } from "../../(home)/components/team-card";

const teamData = [
  {
    name: "Michael",
    role: "Founder & CEO",
    photo: Michael,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/onchainmichael"
    }
  },
  {
    name: "Viacheslav",
    role: "COO",
    photo: Viacheslav,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%B8%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-549988195"
    }
  },
  {
    name: "Oleh",
    role: "Development lead",
    photo: Oleh,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/oleh-shutiak-%F0%9F%87%BA%F0%9F%87%A6-92786b229"
    }
  },

  {
    name: "Vlad",
    role: "Head of Sales",
    photo: Vlad,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: ""
    }
  },

  {
    name: "Alexandra",
    role: "Head of Marketing",
    photo: Alexandra,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/bohdan-solomakha-750a14240/"
    }
  },

  {
    name: "Alex",
    role: "Head of Lead Generation",
    photo: Alex,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "'"
    }
  },
  {
    name: "Hanna",
    role: "Business Development Lead",
    photo: Hanna,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: ""
    }
  },

  {
    name: "Ruslan",
    role: "Business Development Representative",
    photo: Ruslan,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/ruslan-siniaiev-600340240/"
    }
  },
  {
    name: "Olexandr",
    role: "Business Development Representative",
    photo: Olexandr,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: ""
    }
  }
];

const TeamCard = ({ name, role, photo, social }) => {
  return (
    <div className="relative flex flex-col justify-start max-w-[200px] gap-y-9 xl:max-w-[400px]">
      <div
        className="flex h-full min-h-[187px]  bg-cover bg-center bg-no-repeat xl:min-h-[459px] xl:w-[400px]"
        style={{ backgroundImage: `url(${photo.src})` }}
      />
      <div>
        <span className="font-roc text-sm font-medium uppercase text-white">
          {name}
        </span>
        <p className="caption  uppercase">{role}</p>
      </div>
    </div>
  );
};

const TeamGallery = () => {
  return (
    <section
      id="team"
      className="relative flex flex-col items-center justify-center border-b border-t border-b-th-fade border-t-th-fade px-6 pb-28 pt-[115px]"
    >
      <h3 className="mb-20 uppercase">Meet the team</h3>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 bg-black md:grid-cols-3 lg:col-span-3 xl:gap-x-5 xl:gap-y-20">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} />
          // <TeamCard key={index} index={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamGallery;
