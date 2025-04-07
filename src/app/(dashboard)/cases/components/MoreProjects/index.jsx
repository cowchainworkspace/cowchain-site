import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../public/svgIcons/RightArrowSvg";

const MoreProjects = ({ projects }) => {
  return (
    <section className={cn("pt-[154px]")}>
      <div className="mx-auto mb-[50px] flex max-w-[1440px] items-start justify-between pl-[95px] pr-[99px]">
        <h2 className="font-manrope text-[60px] font-semibold uppercase leading-[42px] text-white">
          More projects
        </h2>
        <Link
          className="flex items-center gap-4"
          href={"/cases"}
          target="_blank"
        >
          <span className="font-roc text-2xl font-medium uppercase leading-90 text-white underline">
            view all
          </span>{" "}
          <RightArrowSvg />
        </Link>
      </div>
      <div className="grid grid-cols-3 border-y-[0.5px] !border-white-50">
        {projects.map(({ id, tags, title, desc, img, textColor }) => {
          return (
            <div
              key={id}
              className={
                "z-10 flex h-[624px] w-full flex-col items-center pb-[30px]"
              }
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="mt-auto flex max-w-[403px] flex-col gap-6">
                <div className="flex gap-2">
                  {tags.map((tag) => (
                    <div
                      className="flex items-center justify-center rounded-20 border-[0.5px] border-white bg-white px-4 py-2"
                      key={tag}
                    >
                      <p className="font-manrope text-sm font-medium leading-[18px] text-black">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
                <h3 className="font-roc text-2xl font-medium uppercase leading-90 text-white">
                  {title}
                </h3>
                <p
                  className={cn(
                    "font-manrope text-base leading-[22px] text-white",
                    textColor
                  )}
                >
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoreProjects;
