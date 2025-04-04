import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../public/svgIcons/RightArrowSvg";
import OverviewItems from "../OverviewItems/OverviewItems";
import { cn } from "@/lib/utils";

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
          "mx-auto max-w-[1440px] pb-[127px] pl-[97px] pr-[109px] pt-[141px]",
          sectionClasses
        )}
      >
        <div
          className={cn(
            "grid grid-cols-[1fr_521px] gap-[182px]",
            overviewClasses
          )}
        >
          <div className="flex flex-col gap-8">
            <h3 className="font-roc text-[54px] font-medium uppercase leading-90 text-white">
              {projectTitle}
            </h3>
            <p className="text-left font-manrope text-sm font-semibold leading-6 !text-white-70">
              {projectDescription}
            </p>
            <Link className="flex gap-4" href={webSiteLink} target="_blank">
              <span className="font-roc text-2xl font-medium uppercase leading-90 text-white underline">
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
