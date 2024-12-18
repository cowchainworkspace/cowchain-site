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
        "h-[546px]  md:h-[698px]": !mobile,
        "min-h-[419px]  md:h-[419px]": mobile
      })}
    >
      <Link
        href={link}
        className={cn(
          "relative flex md:w-[547px] py-[20px] flex-col items-start md:h-[698px] md:py-[72px]",
          {
            "h-[546px]": !mobile,
            "h-[419px]  max-w-[375px] md:h-[419px]": mobile,
            "gap-[30px]": !mobile,
            "gap-[20px] p-[20px] py-[38px]": mobile
          }
        )}
      >

        <div className="w-full flex justify-center">
          <Image
            className={cn("h-[100%] ", {
              "max-h-[348px] w-auto md:max-h-[370px]": !mobile,
              "max-h-auto w-full ": mobile
            })}
            src={photo.src}
            width={503}
            height={380}
            alt={title}
          />
        </div>

        <div className="flex gap-y-[14px] max-w-[402px] flex-col md:ml-[72px] items-start md:gap-y-4">
          <div className="hidden gap-x-1 md:flex md:items-start md:gap-x-2">
            {tags.map((tag, index) => (
              <div key={index} className="rounded-full bg-white px-3 py-2">
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

      <div
        style={{
          background: "linear-gradient(to bottom, transparent 45%, #4D2C91 80%)"
        }}
        className="absolute bottom-0 z-[-1] h-full w-full group-hover:flex md:hidden"
      ></div>
    </div>
  );
};
