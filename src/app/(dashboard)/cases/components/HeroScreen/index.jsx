import { cn } from "@/lib/utils";
import React from "react";
import CaseTag from "../CaseTag";
import HeroButton from "../HeroButton/HeroButton";

const CaseHeroScreen = ({
  tags,
  pageTitle,
  heroDescription,
  sectionClasses = "",
  containerClasses = "",
  headerClasses = "",
  descriptionClasses = ""
}) => {
  return (
    <section className={cn("w-full pb-32 pt-[111px]", sectionClasses)}>
      <div
        className={cn(
          "mx-auto flex max-w-[724px] flex-col items-center gap-6",
          containerClasses
        )}
      >
        <div className="flex gap-2">
          {tags.map(({ tagLabel, id }) => (
            <CaseTag key={id} tagLabel={tagLabel} />
          ))}
        </div>
        <h2
          className={cn(
            "font-manrope text-[64px] font-semibold normal-case text-white",
            headerClasses
          )}
        >
          {pageTitle}
        </h2>
        <p
          className={cn(
            "w-[641px] text-center font-manrope text-sm font-semibold leading-6 text-white-70",
            descriptionClasses
          )}
        >
          {heroDescription}
        </p>
        <HeroButton />
      </div>
    </section>
  );
};

export default CaseHeroScreen;
