"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ContactForm from "../../../../../components/utils/ContactForm";
import CaseTag from "../CaseTag";
import CasesBackButton from "../CasesBackButton";
import HeroButton from "../HeroButton/HeroButton";

const CaseHeroScreen = ({
  tags,
  pageTitle,
  heroDescription,
  sectionClasses = "",
  containerClasses = "",
  headerClasses = "",
  descriptionClasses = "",
  bgDecoration,
  tagContainerClasses = ""
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section
      className={cn(
        "relative w-full pb-[50px] md:pt-[50px] lg:pb-32 lg:pt-[111px]",
        sectionClasses
      )}
    >
      <CasesBackButton
        classes={
          "absolute hidden md:flex md:left-3 md:top-3 xl:left-10 xl:top-10"
        }
      />
      <div
        className={cn(
          "mx-auto flex max-w-[724px] flex-col items-center gap-6 px-4 lg:px-0",
          containerClasses
        )}
      >
        {bgDecoration}
        <div className={cn("flex gap-2 justify-center flex-wrap", tagContainerClasses)}>
          {tags.map(({ tagLabel, id }) => (
            <CaseTag key={id} tagLabel={tagLabel} />
          ))}
        </div>
        <h1
          className={cn(
            "font-montserrat text-[64px] font-medium normal-case text-white",
            headerClasses
          )}
        >
          {pageTitle}
        </h1>
        <p
          className={cn(
            "max-w-[641px] text-center font-manrope text-xs font-[450] leading-6 tracking-wider  text-white-70 md:text-sm",
            descriptionClasses
          )}
        >
          {heroDescription}
        </p>
        <HeroButton openModal={setModalOpen} />
      </div>
      <ContactForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  );
};

export default CaseHeroScreen;
