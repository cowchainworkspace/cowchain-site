"use client";

import arrow from "@/assets/arrow_right.svg";
import photo1 from "@/assets/homepage/team/mykhailo.jpg";
import photo2 from "@/assets/homepage/team/vyacheslav.jpg";
import photo3 from "@/assets/homepage/team/oleh.jpg";
import photo4 from "@/assets/homepage/team/andrii.jpg";
import photo5 from "@/assets/homepage/team/bohdan.jpg";
import photo6 from "@/assets/homepage/team/veronika.jpg";
import photo7 from "@/assets/homepage/team/ruslan.jpg";
import photo8 from "@/assets/homepage/team/saminu.jpg";
import photo9 from "@/assets/homepage/team/alexandr.jpg";

import MichaelImg from "@/assets/team/executives/MichaelImg.png";
import OlehImg from "@/assets/team/executives/OlehImg.png";
import ViacheclavImgpng from "@/assets/team/executives/ViacheclavImgpng.png";

import linkedin from "@/assets/homepage/linkedin.svg";
import bg from "@/assets/bg/team_bg.png";
import { TeamCard } from "../components/team-card";
import Image from "next/image";

const teamData = [
  {
    name: "Michael",
    role: "Founder & CEO",
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
    photo: OlehImg,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%B8%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-549988195"
    }
  },
  {
    name: "Oleh",
    role: "Development lead",
    photo: ViacheclavImgpng,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/oleh-shutiak-%F0%9F%87%BA%F0%9F%87%A6-92786b229"
    }
  },
];

export default function Team() {
  return (
    // <section id="team" className="relative">
    //   <div className="relative grid grid-cols-1 overflow-hidden lg:grid-cols-5 min-[2000px]:grid-cols-6">
   
    //     <div className="md-border-r py-heading px-default z-10 flex flex-col gap-y-6 border-b border-b-th-fade text-center lg:col-span-2 lg:text-left min-[2000px]:col-span-3">
    //       <h2 className="text-center text-4xl uppercase text-white  md:text-[60px] lg:text-left">
    //         OUR TEAM
    //       </h2>
    //       <a href="/team" className="mx-auto lg:mx-0">
    //         <div className="flex items-center gap-x-2">
    //           <p className="header uppercase text-white underline">
    //             MEET COWCHAIN
    //           </p>
    //           <Image className="w-6" src={arrow} alt=""></Image>
    //         </div>
    //       </a>
    //     </div>
        
    //     <div className="team_wrapper grid auto-cols-fr grid-cols-2 border-b border-b-th-fade bg-black md:grid-cols-3 lg:col-span-3">
    //       {teamData.map((member, index) => (
    //         <TeamCard key={index} index={index} {...member} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section id="team" className="relative pt-[128px] pb-[84px]  border-b border-b-th-fade text-center lg:text-left" >
      <div className="relative grid grid-cols-1 lg:grid-cols-5 min-[2000px]:grid-cols-6">
        <div className="flex flex-col lg:flex-row lg:col-span-5 min-[2000px]:col-span-6 py-heading px-default z-10 gap-y-6">
          <h2 className="text-4xl uppercase text-white md:text-[60px] lg:flex-1 lg:text-left">
            OUR TEAM
          </h2>
          <div className="lg:flex-1 lg:text-right">
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
        <div className="team_wrapper grid auto-cols-fr grid-cols-2 md:grid-cols-3 lg:col-span-5 min-[2000px]:col-span-6 gap-6 bg-black">
          {teamData.map((member, index) => (
            <TeamCard
              key={index}
              index={index}
              {...member}
              className="h-[540px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
