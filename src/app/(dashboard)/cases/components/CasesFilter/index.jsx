import { cn } from "@/lib/utils";
import React from "react";
import FilterSvg from "../../../../../../public/svgIcons/filterSvg";

const CasesFilter = ({ tags, currentTag, setTag }) => {
  return (
    <div>
      <ul className="mt-15 flex gap-2">
        {tags.map(({ id, tagName }) => (
          <li key={id}>
            <button
              onClick={() => setTag(tagName)}
              type="button"
              className={cn(
                "flex rounded-[40px] border-[0.5px] border-transparent bg-white-15 px-6 py-4 font-roc text-base font-medium uppercase leading-90 text-white",
                currentTag.toLowerCase() === tagName.toLowerCase() &&
                  "border-white bg-transparent",
                tagName === "all filters" && "items-center gap-[10px]"
              )}
            >
              {tagName === "all filters" && <FilterSvg />}
              {tagName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CasesFilter;
