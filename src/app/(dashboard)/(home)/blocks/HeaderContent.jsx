"use client"
import playIcon from "@/assets/icons/homepage/linkedInIcon.svg";
import michaelAvatar from "@/assets/icons/homepage/michaelAvatarImg.png";
import Image from "next/image";
import React from "react";
const Video = dynamic(() => import("./Video"));
import dynamic from "next/dynamic";
import { heroScreenData } from "../utils/homeData";
import { motion } from "framer-motion";
import ProjectsLine from "./ProjectsLine";
import { useMediaQuery } from "@chakra-ui/react";
import { cn } from "@/lib/utils";

export default function HeaderContent() {
  const [isMoreThan1023] = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <div className=" xl:mt-[83px] lg:grid lg:grid-cols-[2fr_1fr] w-full mx-auto px-5 xl:px-[79px] mb-[276px]">
        <div className="relative mb-[24px] max-lg:pt-[83px] flex max-md:gap-3 gap-6 max-md:flex-col-reverse flex-col md:mb-0 md:gap-x-1 custom1200:max-w-[823px] ">
          <p className="font-semibold leading-[18px] max-md:text-sm max-md:max-w-[200px] !text-[#BBBBBB] text-base z-[22]">Stop Managing Developers. Start Shipping Products.</p>
          <h1 className="uppercase relative z-[22] font-[500] text-[24px] custom1200:text-[40px] custom1200:leading-[0.9]">
            The proactive engineering partner for ambitious Web3 & FinTech founders.
            We rescue stalled projects and accelerate launches.
          </h1>
          <Video className="w-[500px] lg:hidden h-auto -right-[89px] max-md:w-[450px] max-md:left-1/2 top-1/2 max-md:-translate-x-1/2" />

        </div>
        <div className="relative w-full max-md:hidden">
          <Video className="w-[500px] -top-[80%] h-auto -right-[89px] max-md:w-[450px] max-md:left-1/2 max-md:-top-[120%] max-md:-translate-x-1/2" />
        </div>
      </div>
      <div className="w-full flex mt-auto max-md:flex-col">
        <div className="border-t-[0.5px] border-[#FFFFFF80]  hidden lg:block  h-[189px] mt-auto w-[79px] shrink-0" />

        {heroScreenData.map(({ icon: Icon, title, content }) => (
          <div key={title} className={cn("flex flex-1 h-[262px]", isMoreThan1023 && "h-fit")}>
            <motion.article
              initial="collapsed"
              whileHover="expanded"
              variants={{
                collapsed: { height: isMoreThan1023 ? 189 : 134 },
                expanded: { height: isMoreThan1023 ? 262 : 234 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex mt-auto flex-1 group flex-col gap-8 p-6 border-[0.5px] border-b-[0px] border-[#FFFFFF80] overflow-hidden relative"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "linear-gradient(3.61deg, rgba(77, 44, 145, 0) 2.97%, #4D2C91 93.57%)"
                }}
              />
              <span className="size-7 flex items-center justify-center relative"><Icon /></span>

              <div className="flex flex-col gap-4 relative">
                <h3 className="text-[16px] font-roc uppercase font-[500] md:text-[24px] md:leading-[0.9] max-w-[225px]">{title}</h3>
                <motion.p
                  variants={{
                    collapsed: { opacity: 0, height: 0, marginTop: 0 },
                    expanded: { opacity: 1, height: "auto", marginTop: 0 }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-[16px] font-manrope text-[#BBBBBB] font-normal leading-[22px] max-w-[276px]"
                >
                  {content}
                </motion.p>
              </div>
            </motion.article>
          </div>
        ))}

        <div className="border-t-[0.5px] border-[#FFFFFF80] hidden lg:block h-[189px] w-[79px] shrink-0 mt-auto" />
      </div>
      <ProjectsLine />
    </>
  );
}
