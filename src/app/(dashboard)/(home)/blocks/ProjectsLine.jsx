
"use client"
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { projectLogos } from "../utils/homeData";
import { cn } from "@/lib/utils";

export default function ProjectsLine() {
  return (
    <div className="w-full py-[51px] border-t-[0.5px] border-[#FFFFFF80]">
      <Marquee direction="left" speed={50} pauseOnHover={true}>
        <div className="flex items-center gap-30">
          {projectLogos.map((logo, index) => (
            <Link key={logo.name} href={logo.linkUrl} target="_blank" rel="noopener noreferrer" className={cn(projectLogos.length === index + 1 && "mr-30")}>
              <logo.logo />
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  )
}