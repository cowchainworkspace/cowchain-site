import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../public/svgIcons/RightArrowSvg";
import OverviewItems from "../OverviewItems/OverviewItems";

const ProjectOverview = ({
  projectTitle,
  projectDescription,
  overviewItems,
  webSiteLink
}) => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pb-[121px] pl-[97px] pr-[109px] pt-[141px]">
        <div className="grid grid-cols-2 gap-[182px]">
          <div className="flex flex-col gap-8">
            <h3 className="leading-90 font-roc text-[54px] font-medium uppercase text-white">
              {projectTitle}
            </h3>
            <p className="text-left font-manrope text-sm font-semibold leading-6 !text-white-70">
              {projectDescription}
            </p>
            <Link className="flex gap-4" href={webSiteLink} target="_blank">
              <span className="leading-90 text-2xl font-medium uppercase text-white underline">
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
