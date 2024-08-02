"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ScrollProject = ({
  title,
  description,
  photo,
  tags,
  id,
  link,
  index
}) => {
  return (
    <div
      id={"project-" + id}
      className={cn("project-card group relative flex h-full  border border-th-fade")}
      // style={{
      //   backgroundImage: `url(${photo.src})`,
      //   backgroundSize: "403px auto"
      // }}
    >
      <Link
        href={link}
        className="relative flex h-[698px] w-full flex-col items-center gap-[32px] p-[72px]"
      >
        {/* <div className="btn-contact ml-auto max-h-24 max-w-[96px] opacity-0 md:max-h-none md:max-w-none md:opacity-100">
          VIEW PROJECT
        </div> */}

        <div className="h-[387px] w-auto">
          <Image src={photo.src} width={380} height={380} alt={title} />
        </div>

        <div 
        style={{ 
          background: 'linear-gradient(to bottom, transparent 45%, #4D2C91 80%)' 
        }}
        className="absolute z-[-1] h-full w-full group-hover:flex md:hidden">

        </div>

        <div className="flex max-w-[270px] flex-col gap-y-4 md:max-w-none ">
          <div className="hidden items-center gap-x-1 md:flex md:gap-x-2">
            {tags.map((tag, index) => (
              <div key={index} className="rounded-full bg-white px-3 py-2">
                <p className="text-xs font-medium text-black lg:text-sm">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          <span className="mt-2 font-roc text-lg font-medium uppercase text-white md:text-2xl">
            {title}
          </span>
          <p className="body max-w-sm !text-[#bbb]">{description}</p>
        </div>
      </Link>
    </div>
  );
};
