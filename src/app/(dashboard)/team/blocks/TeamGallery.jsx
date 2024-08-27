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
import newEmploye from "@/assets/homepage/team/newTeam/addEmployesImg.png";
import olehMobImg from "@/assets/homepage/team/newTeam/olehMobImg.png";
import linkedin from "@/assets/homepage/linkedin.svg";
import { cn } from "@/lib/utils";
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
    },
    check: false
  },
  {
    name: "Viacheslav",
    role: "COO",
    photo: Viacheslav,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/slava-ivchenko/"
    },
    check: ""
  },
  {
    name: "Oleh",
    role: "Head of Development",
    photo: Oleh,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/oleh-shutiak-%F0%9F%87%BA%F0%9F%87%A6-92786b229"
    },
    check: "oleh"
  },

  {
    name: "Vlad",
    role: "Head of Sales",
    photo: Vlad,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: ""
    },
    check: ""
  },

  {
    name: "Alexandra",
    role: "Head of Marketing",
    photo: Alexandra,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/bohdan-solomakha-750a14240/"
    },
    check: ""
  },

  {
    name: "Alex",
    role: "Head of Lead Generation",
    photo: Alex,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "'"
    },
    check: ""
  },
  {
    name: "Hanna",
    role: "Business Development Lead",
    photo: Hanna,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: ""
    },
    check: ""
  },

  {
    name: "Ruslan",
    role: "Business Development Representative",
    photo: Ruslan,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/ruslan-siniaiev-600340240/"
    },
    check: ""
  },
  {
    name: "Olexandr",
    role: "Business Development Representative",
    photo: Olexandr,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: ""
    },
    check: ""
  },
  {
    name: "+Many more",
    role: "Business Development Representative",
    photo: newEmploye,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: ""
    },
    check: "new"
  }
];

const TeamCard = ({ name, role, photo, social, check }) => {
  return (
    <div
      className={cn(
        "relative flex max-w-[200px] flex-col justify-start gap-y-9 xl:max-w-[400px]",
        {
          "md:hidden": check === "new"
        }
      )}
    >
      {check === "oleh" ? (
        <>
          <div
            className="flex h-full hidden max-h-[187px] min-h-[187px]  bg-cover bg-center bg-no-repeat md:flex xl:max-h-[459px] xl:min-h-[459px] xl:w-[400px]"
            style={{ backgroundImage: `url(${photo.src})` }}
          />

          <div
            className="flex h-full max-h-[187px] min-h-[187px] md:hidden  bg-cover bg-center bg-no-repeat xl:max-h-[459px] xl:min-h-[459px] xl:w-[400px]"
            style={{ backgroundImage: `url(${olehMobImg.src})` }}
          />
        </>
      ) : (
        <div
          className="flex h-full max-h-[187px] min-h-[187px]  bg-cover bg-center bg-no-repeat xl:max-h-[459px] xl:min-h-[459px] xl:w-[400px]"
          style={{ backgroundImage: `url(${photo.src})` }}
        />
      )}
      <div>
        <span
          className="font-roc text-sm font-medium uppercase text-white"
          style={{
            opacity: check === "new" ? 0.1 : 1,
            textAlign: check === "new" ? "center" : "left",
            display: "block",
            width: "100%"
          }}
        >
          {name}
        </span>
        <p
          className="caption  uppercase"
          style={{
            opacity: check === "new" && 0
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

const TeamGallery = () => {
  return (
    <section
      id="team"
      className="relative flex flex-col items-center justify-center px-6 pt-[60px] pb-28 md:pt-[115px]"
    >
      <h3 className="mb-[36px] md:mb-20 uppercase">Meet the team</h3>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 lg:col-span-3 xl:gap-x-5 xl:gap-y-20">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} check={member.check} />
          // <TeamCard key={index} index={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamGallery;
