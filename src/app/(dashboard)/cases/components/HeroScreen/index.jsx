import { cn } from "@/lib/utils";
import React from "react";
import CaseTag from "../CaseTag";
import HeroButton from "../HeroButton/HeroButton";
import CasesBackButton from "../CasesBackButton";

const CaseHeroScreen = ({
  tags,
  pageTitle,
  heroDescription,
  sectionClasses = "",
  containerClasses = "",
  headerClasses = "",
  descriptionClasses = "",
  bgDecoration
}) => {
  return (
    <section className={cn("relative w-full pb-32 pt-[111px]", sectionClasses)}>
      <CasesBackButton classes={"absolute left-10 top-10"} />
      <div
        className={cn(
          "mx-auto flex max-w-[724px] flex-col items-center gap-6",
          containerClasses
        )}
      >
        {bgDecoration}
        <div className="flex gap-2">
          {tags.map(({ tagLabel, id }) => (
            <CaseTag key={id} tagLabel={tagLabel} />
          ))}
        </div>
        <h1
          className={cn(
            "font-manrope text-[64px] font-semibold normal-case text-white",
            headerClasses
          )}
        >
          {pageTitle}
        </h1>
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
