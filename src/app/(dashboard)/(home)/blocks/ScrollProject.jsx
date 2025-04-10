"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ScrollProject = ({
  title,
  description,
  photo,
  tags,
  id,
  link,
  mobile = false
}) => {
  return (
    <div
      id={"project-" + id}
      className={cn("project-card group relative flex justify-center", {
        "border  border-th-fade": !mobile,
        "border-b  border-t border-b-th-fade  border-t-th-fade": mobile,
        "h-[546px]  md:h-[624px]": !mobile,
        "min-h-[20vw] h-[130vw]": mobile
      })}
    >
      <Link
        href={link}
        className={cn("relative flex flex-col  items-start md:w-[547px]", {
          "h-[624px] w-[480px]": !mobile,
          " max-w-[375px] md:h-[419px]": mobile,
          "gap-[30px]": !mobile,
          "gap-[20px] ": mobile
        })}
      >
        <div className="flex w-full justify-center">
          <Image
            className={cn("sm:h-[100%] ", {
              "h-[624px] w-[480px]": !mobile,
              "h-auto min-w-[100vw]": mobile
            })}
            src={photo.src}
            width={503}
            height={380}
            alt={title}
          />
        </div>

        <div className="absolute custom480:left-[38px] z-[2] bottom-[40px] right-0 custom480:top-[406px] flex w-full flex-col  items-start  gap-y-[14px] md:gap-y-4">
          <div className="hidden max-w-[400px] flex-wrap gap-x-[3px] gap-y-[8px] custom480:flex custom480:items-start custom480:gap-x-2">
            {tags.map((tag, index) => (
              <div key={index} className="rounded-full max-h-[34px] bg-white px-[16px] py-2">
                <p className="text-xs font-medium text-black lg:text-sm">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          <span className="text-left font-roc text-lg font-medium uppercase text-white md:text-2xl">
            {title}
          </span>
          <p className="md:body max-w-sm  text-left text-[14px] !text-[#bbb]">
            {description}
          </p>
        </div>
      </Link>
{/* 
      <div
        style={{
          background: "linear-gradient(to bottom, transparent 45%, #000 80%)"
        }}
        className="absolute bottom-0 z-[1] h-full w-full group-hover:flex md:hidden"
      ></div> */}
    </div>
  );
};
