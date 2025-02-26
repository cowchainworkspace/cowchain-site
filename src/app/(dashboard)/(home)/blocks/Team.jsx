"use client";

import arrow from "@/assets/arrow_right.svg";
import { TeamCard } from "../components/team-card";
import Image from "next/image";
import { teamData } from "../homeData/data";

export default function Team() {
  return (
    <section
      id="team"
      className="relative flex items-center justify-center border-b border-b-th-fade py-[60px] text-center md:pb-[84px] md:pt-[126px] lg:text-left"
    >
      <div className="relative  grid w-full grid-cols-1 lg:grid-cols-5 min-[2000px]:grid-cols-6">
        <div className="px-default z-10 flex flex-col gap-y-6 pb-[84px] md:pb-[60px] lg:col-span-5 lg:flex-row min-[2000px]:col-span-6">
          <div>
            <h2 className="text-left mb-0 md:mb-[60px] text-4xl uppercase text-white md:text-[60px] lg:flex-1">
              {/* <span
              style={{
                background:
                  "linear-gradient(146deg, #e9bbff 32.8%, #8e66ff 61.09%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              50+&nbsp;
            </span> */}
              OUR TEAM
            </h2>
            <p className="leading-22px max-w-[600px] hidden text-left text-[16px] text-[#BBBBBB] md:block">
              The team, as part of a Web3 development agency, consists of 50+
              Web3-native developers with deep expertise in blockchain
              technology. Our aim is to empower businesses by providing
              innovative, secure, and scalable solutions that meet your needs.
            </p>
          </div>
          <div className="text-left lg:flex-1 lg:text-right">
            <a href="/team" className="inline-block">
              <div className="flex items-center justify-center gap-x-2 lg:justify-end">
                <p className="header uppercase text-white underline">
                  MEET COWCHAIN
                </p>
                <Image className="w-6" src={arrow} alt="Arrow icon" />
              </div>
            </a>
          </div>
          <p className="leading-22px block text-left text-[16px] text-[#BBBBBB] md:hidden">
            The team, as part of a Web3 development agency, consists of 50+
            Web3-native developers with deep expertise in blockchain technology.
            Our aim is to empower businesses by providing innovative, secure,
            and scalable solutions that meet your needs.
          </p>
        </div>

        <div
          className="team_wrapper mx-auto grid auto-cols-fr grid-cols-1 bg-black px-[20px] md:grid-cols-2 md:gap-6 md:gap-[24px]  lg:col-span-5 xl:grid-cols-3 min-[2000px]:col-span-6
        "
        >
          {teamData.map((member, index) => (
            <TeamCard key={index} index={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
