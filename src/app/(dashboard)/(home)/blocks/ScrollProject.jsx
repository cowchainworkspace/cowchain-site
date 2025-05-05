"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={link}
      id={"project-" + id}
      className={cn(
        "project-card group relative flex cursor-pointer justify-center",
        {
          "border  border-th-fade": !mobile,
          "border-b  border-t border-b-th-fade  border-t-th-fade": mobile,
          "h-[546px]  md:h-[624px]": !mobile,
          "h-[130vw] min-h-[20vw]": mobile
        }
      )}
    >
      <div
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

        <div className="absolute bottom-[40px] left-[20px] right-[20px] z-[2] flex flex-col items-start gap-y-[14px] custom480:bottom-[30px]  custom480:left-[38px]  md:w-full md:gap-y-4">
          <div className="flex max-w-[420px] flex-wrap  gap-x-[3px] gap-y-[8px] custom480:hidden custom480:items-start  custom480:gap-x-[8px] group-hover:custom480:flex">
            {tags.map(({ tagName, isMain }, index) => (
              <div
                key={index}
                className="max-h-[34px] rounded-full bg-white px-[16px] py-2"
              >
                <p
                  className={cn(
                    "text-xs font-medium text-black lg:text-sm",
                    isMain && "text-sm font-bold"
                  )}
                >
                  {tagName}
                </p>
              </div>
            ))}
          </div>

          <span className="text-left font-roc text-lg font-medium uppercase text-white md:text-2xl">
            {title}
          </span>
          <p className="md:body max-w-sm  text-left text-[14px] !text-[#fff]">
            {description}
          </p>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(to bottom, transparent 45%, #4D2C91 80%)"
        }}
        className="absolute bottom-0 z-[1] hidden h-full w-full custom480:group-hover:flex"
      ></div>
    </Link>
  );
};
