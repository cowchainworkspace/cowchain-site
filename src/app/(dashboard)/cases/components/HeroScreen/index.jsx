import React from "react";
import CaseTag from "../CaseTag";
import HeroButton from "../HeroButton/HeroButton";

const CaseHeroScreen = ({ tags, pageTitle, heroDescription }) => {
  return (
    <section className="w-full pb-32 pt-[111px]">
      <div className="mx-auto flex max-w-[724px] flex-col items-center gap-6">
        <div className="flex gap-2">
          {tags.map(({ tagLabel, id }) => (
            <CaseTag key={id} tagLabel={tagLabel} />
          ))}
        </div>
        <h2 className="font-manrope text-[64px] font-semibold normal-case text-white">
          {pageTitle}
        </h2>
        <p className="text-white-70 font-manrope mx-auto w-[641px] text-center">
          {heroDescription}
        </p>
        <HeroButton />
      </div>
    </section>
  );
};

export default CaseHeroScreen;
