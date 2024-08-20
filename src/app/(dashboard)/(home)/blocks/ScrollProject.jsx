"use client";

import Link from "next/link";
// import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ScrollProject = ({
  title,
  description,
  photo,
  tags,
  id,
  link,
  mobile = false,
  // index
}) => {
  return (
    <div
      id={"project-" + id}
      className={cn(
        "project-card group relative", {
          'border  border-th-fade': !mobile,
          'border-t  border-t-th-fade border-b  border-b-th-fade': mobile,
          "h-[546px]  md:h-[698px]": !mobile,
          "min-h-[419px]  md:h-[419px]": mobile,
        }
      )}
      // style={{
      //   backgroundImage: `url(${photo.src})`,
      //   backgroundSize: "403px auto"
      // }}
    >
      <Link
        href={link}
        className={cn("relative flex w-full flex-col items-center  md:h-[698px] md:py-[72px]", {
          ' h-[546px]': !mobile,
          "h-[419px]  md:h-[419px]": mobile,
          'gap-[32px] p-[22px] py-[40px]': !mobile,
          'gap-[20px] p-[20px] py-[20px]': mobile

        })}
      >
        {/* <div className="btn-contact ml-auto max-h-24 max-w-[96px] opacity-0 md:max-h-none md:max-w-none md:opacity-100">
          VIEW PROJECT
        </div> */}

        <div className="flex flex-col items-center">
          <div className="h-[100%] w-auto max-h-[348px] w-auto md:max-h-[380px]">
            <Image
              className={cn("h-[100%] ",
                {
                  'max-h-[348px] w-auto md:max-h-[380px]': !mobile,
                  'max-h-[250px] w-auto md:max-h-[250px]': mobile,
                }
              )}
              src={photo.src}
              width={503}
              height={380}
              alt={title}
            />
          </div>
        </div>

        

        <div className="flex flex-col items-start gap-y-4 max-w-[402px]">
          <div className="hidden gap-x-1 md:flex md:items-center md:gap-x-2">
            {tags.map((tag, index) => (
              <div key={index} className="rounded-full bg-white px-3 py-2">
                <p className="text-xs font-medium text-black lg:text-sm">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          <span className="mt-2 font-roc text-lg font-medium uppercase text-white text-left md:text-2xl">
            {title}
          </span>
          <p className="md:body max-w-sm  text-[14px] !text-[#bbb] text-left">
            {description}
          </p>
        </div>
      </Link>

      <div
          style={{
            background:
              "linear-gradient(to bottom, transparent 45%, #4D2C91 80%)"
          }}
          className="absolute bottom-0 z-[-1] h-full w-full group-hover:flex md:hidden"
        ></div>
    </div>
  );
};
