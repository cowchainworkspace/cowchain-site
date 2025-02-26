import { useVisibleData } from "@/hooks/useVisibleData";
import AnchorLink from "react-anchor-link-smooth-scroll";

import React from "react";

export const SideMenu = ({ articleTitles }) => {
  const visibleSectionId = useVisibleData(articleTitles);

  return (
    <div className="sticky top-0 hidden w-[203px] flex-col items-start transition-all duration-500 xl:flex">
      {articleTitles.map(({ title, id }) => (
        <button
          type="button"
          key={id}
          title={title}
          className={`line-clamp-2 h-[48px] pl-[20px] text-left text-sm leading-[16.8px] ${
            visibleSectionId === `${id}` ? "text-[#925EFF]" : "text-[#BBBBBB]"
          }`}
          style={{
            borderLeft:
              visibleSectionId === `${id}`
                ? "2px solid #925EFF"
                : "2px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <AnchorLink className={"line-clamp-2"} href={`#${id}`}>
            {title}
          </AnchorLink>
        </button>
      ))}
    </div>
  );
};
