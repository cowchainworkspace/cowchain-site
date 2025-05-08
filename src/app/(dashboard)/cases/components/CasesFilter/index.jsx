import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import FilterSvg from "../../../../../../public/svgIcons/filterSvg";
import { FilterMenu } from "./FilterMenu/FilterMenu";

const CasesFilter = ({ tags, currentTag, setTag }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 640; 
  
    if (isFilterOpen && isMobile) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  
    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [isFilterOpen]);

  return (
    <div className="w-fit w-full relative">
      <ul className="mt-15 justify-start sm:justify-end w-full custom1430:justify-auto flex flex-wrap gap-2">
        {tags.map(({ id, tagName }) => (
          <li
            className={cn(tagName !== "all filters" && "hidden custom1430:block", "relative ")}
            key={id}
          >
            <button
              onClick={() => {
                if (tagName === "all filters") {
                  handleMenuOpen();
                  return;
                };
                if (currentTag.toLowerCase() === tagName.toLowerCase()) {
                  setTag("all filters");
                  return;
                }
                setTag(tagName);
              }}
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
            {isFilterOpen && tagName === "all filters" && <FilterMenu setTag={setTag} setIsFilterOpen={setIsFilterOpen} />}
          </li>
        ))}
           
      </ul>
   
    </div>
  );
};

export default CasesFilter;
