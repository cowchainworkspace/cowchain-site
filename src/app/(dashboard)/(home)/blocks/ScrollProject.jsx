"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <motion.div
      id={"project-" + id}
      className={cn(
        "project-card group relative flex max-h-[325px] min-h-[325px] min-w-[100vw] w-full  max-w-[380vw]  cursor-pointer border-b border-b-th-fade bg-cover  bg-center   bg-no-repeat will-change-transform md:max-h-[698px] md:min-h-[625px] md:min-w-[33.5vw]"
      )}
      style={{ 
        backgroundImage: `url(${photo.src})`,
        backgroundSize: '403px auto',
       }}
    >
      <motion.div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></motion.div>
      <Link
        href={link}
        className="absolute left-0 top-0 flex h-full w-full flex-col gap-y-4 px-12 py-8 group-hover:flex md:hidden xl:py-12"
      >
        <div className="btn-contact ml-auto max-h-24 max-w-[96px] opacity-0 md:max-h-none md:max-w-none md:opacity-100">
          VIEW PROJECT
        </div>
        <div className="absolute bottom-5 flex max-w-[270px] flex-col gap-y-4 md:max-w-none">
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
    </motion.div>
  );
};
