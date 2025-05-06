"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../public/svgIcons/RightArrowSvg";

const MoreProjects = ({ projects, headerClasses = "", isReversed }) => {
  const [isMoreThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <section className={cn("pt-[50px] xl:pt-[154px]")}>
      <div className="mx-auto mb-[50px] flex max-w-[1440px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:px-8 xl:mb-[84px] xl:pl-[95px] xl:pr-[99px]">
        <h2
          className={cn(
            "font-manrope text-[32px] font-semibold uppercase leading-[42px] text-white xl:text-[60px]",
            headerClasses
          )}
        >
          More projects
        </h2>
        <Link
          className="flex items-center gap-4"
          href={"/cases"}
          target="_blank"
        >
          <span className="font-roc text-lg font-medium uppercase leading-90 text-white underline xl:text-2xl">
            all cases
          </span>{" "}
          <RightArrowSvg />
        </Link>
      </div>
      <div
        className={cn(
          "flex flex-col border-y-[0.5px] !border-white-50 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3",
          isReversed && "flex-col-reverse"
        )}
      >
        {projects.map(
          ({
            id,
            tags,
            title,
            desc,
            img,
            textColor,
            itemClasses,
            projectLink,
            textGap,
            cardClasses,
            tagsContainer,
            titleClasses = "",
            tagClasses = "",
            tagDescClasses = ""
          }) => {
            return (
              <Link
                href={projectLink}
                key={id}
                className={cn(
                  "z-10 flex h-[487px] w-full flex-col items-center xl:h-[624px]",
                  cardClasses
                )}
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <div
                  className={cn(
                    "mt-auto flex w-full flex-col gap-4 md:max-w-[403px] md:gap-6 xl:mt-auto",
                    itemClasses
                  )}
                >
                  <div className={cn("flex flex-wrap gap-2", tagsContainer)}>
                    {tags.map(({ tagName, isMain }) => (
                      <div
                        className={cn(
                          "flex items-center justify-center rounded-20 border-[0.5px] border-white bg-white px-4 py-2",
                          tagClasses
                        )}
                        key={tagName}
                      >
                        <p
                          className={cn(
                            "font-manrope text-sm font-medium leading-[18px] text-black",
                            isMain && "!font-bold",
                            tagDescClasses
                          )}
                        >
                          {tagName}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className={cn("flex flex-col gap-4", textGap)}>
                    <h3
                      className={cn(
                        "font-roc text-2xl font-medium uppercase leading-90 text-white",
                        titleClasses
                      )}
                    >
                      {title}
                    </h3>
                    <p
                      className={cn(
                        "font-manrope text-xs leading-[20px] text-white xl:text-base xl:leading-[22px]",
                        textColor
                      )}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
};

export default MoreProjects;
