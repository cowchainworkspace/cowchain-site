"use client";

import arrow from "@/assets/arrow_right.svg";

import MichaelImg from "@/assets/homepage/team/newTeam/michaelImg.png";
import OlehImg from "@/assets/team/executives/OlehImg2.png";
import ViacheclavImgpng from "@/assets/team/executives/ViacheclavImgpng.png";

import linkedin from "@/assets/homepage/linkedin.svg";
import { TeamCard } from "../components/team-card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const teamData = [
  {
    name: "Michael",
    role: "CEO & Founder",
    photo: MichaelImg,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/onchainmichael"
    }
  },
  {
    name: "Viacheslav",
    role: "COO",
    photo: ViacheclavImgpng,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/slava-ivchenko/"
    }
  },
  {
    name: "Oleh",
    role: "Head of Development",
    photo: OlehImg,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/oleh-shutiak-%F0%9F%87%BA%F0%9F%87%A6-92786b229"
    }
  }
];

export default function Team() {
  return (

    <section
      id="team"
      className="relative flex items-center justify-center border-b border-b-th-fade py-[60px] text-center md:pb-[84px] md:pt-[126px] lg:text-left"
    >
      <div className="relative  grid w-full grid-cols-1 lg:grid-cols-5 min-[2000px]:grid-cols-6">
        <div className="px-default z-10 flex flex-col gap-y-6 pb-[84px] md:pb-[60px] lg:col-span-5 lg:flex-row min-[2000px]:col-span-6">
          <h2 className="text-4xl uppercase text-white md:text-[60px] lg:flex-1 text-left">
            <span
              style={{
                background:
                  "linear-gradient(146deg, #e9bbff 32.8%, #8e66ff 61.09%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              50+&nbsp;
            </span>
            PEOPLE TEAM
          </h2>
          <div className="lg:flex-1 text-left lg:text-right">
            <a href="/team" className="inline-block">
              <div className="flex items-center justify-center gap-x-2 lg:justify-end">
                <p className="header uppercase text-white underline">
                  MEET COWCHAIN
                </p>
                <Image className="w-6" src={arrow} alt="Arrow icon" />
              </div>
            </a>
          </div>
        </div>

        <div className="team_wrapper mx-auto grid auto-cols-fr grid-cols-1 md:gap-[24px] bg-black px-[20px] md:grid-cols-2 xl:grid-cols-3  md:gap-6 lg:col-span-5 min-[2000px]:col-span-6
        ">
          {teamData.map((member, index) => (
            <TeamCard key={index} index={index} {...member} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
