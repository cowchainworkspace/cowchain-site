import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../public/svgIcons/RightArrowSvg";
import OverviewItems from "../OverviewItems/OverviewItems";

const ProjectOverview = ({
  projectTitle,
  projectDescription,
  overviewItems,
  webSiteLink,
  sectionClasses,
  overviewClasses
}) => {
  return (
    <section>
      <div
        className={cn(
          "mx-auto max-w-[1440px] pt-[50px] md:px-8 lg:px-10 lg:pb-[50px] xl:pb-[127px] xl:pl-[97px] xl:pr-[109px] xl:pt-[141px]",
          sectionClasses
        )}
      >
        <div
          className={cn(
            "grid gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px]  xl:gap-[182px]",
            overviewClasses
          )}
        >
          <div className="flex flex-col gap-6 px-4 md:px-0 xl:gap-8">
            <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
              {projectTitle}
            </h3>
            <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-6">
              {projectDescription}
            </p>
            <Link
              className="flex items-center gap-4"
              href={webSiteLink}
              target="_blank"
            >
              <span className="font-roc text-lg font-medium uppercase leading-90 text-white underline xl:text-2xl">
                visit website
              </span>{" "}
              <RightArrowSvg />
            </Link>
          </div>
          <OverviewItems overviewItems={overviewItems} />
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
