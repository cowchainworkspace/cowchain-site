import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import FilterSvg from "../../../../../../public/svgIcons/filterSvg";
import { FilterMenu } from "./FilterMenu/FilterMenu";

const CasesFilter = ({ casesTags, currentTags, setTags }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTags, setselectedTags] = useState(currentTags);

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

  useEffect(() => {
    setselectedTags(currentTags);
  }, [currentTags]);

  const handleTagButtonClick = (tags) => {
    if (tags.length === 1 && tags[0].toLowerCase() === "all filters") {
      handleMenuOpen();
      return;
    }

    const lowerCurrentTags = currentTags.map((tag) => tag.toLowerCase());
    const lowerTags = tags.map((tag) => tag.toLowerCase());

    const allTagsIncluded = lowerTags.every((tag) =>
      lowerCurrentTags.includes(tag)
    );

    if (allTagsIncluded) {
      setTags((prev) =>
        prev.filter((tag) => !lowerTags.includes(tag.toLowerCase()))
      );
    } else {
      setTags((prev) => {
        const lowerPrev = prev.map((tag) => tag.toLowerCase());
        const newTags = tags.filter(
          (tag) => !lowerPrev.includes(tag.toLowerCase())
        );
        return [...prev, ...newTags];
      });
    }
  };

  return (
    <div className="relative w-fit w-full">
      <ul className="custom1430:justify-auto mt-15 flex w-full flex-wrap justify-start gap-2 sm:justify-end">
        {casesTags.map(({ id, tagName, tags }) => (
          <li
            className={cn(
              tagName !== "all filters" && "hidden custom1430:block",
              "relative "
            )}
            key={id}
          >
            <button
              onClick={() => handleTagButtonClick(tags)}
              type="button"
              className={cn(
                "flex rounded-[40px] border-[0.5px] border-transparent bg-white-15 px-6 py-4 font-roc text-base font-medium uppercase leading-90 text-white",
                tags.every((tag) =>
                  currentTags
                    .map((t) => t.toLowerCase())
                    .includes(tag.toLowerCase())
                ) && "border-white bg-transparent",
                tagName === "all filters" && "items-center gap-[10px]"
              )}
            >
              {tagName === "all filters" && <FilterSvg />}
              {tagName}
            </button>
            {isFilterOpen && tagName === "all filters" && (
              <FilterMenu
                setTags={setTags}
                setIsFilterOpen={setIsFilterOpen}
                setselectedTags={setselectedTags}
                selectedTags={selectedTags}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CasesFilter;
