"use client";
import React from "react";
import { useFilteredCases } from "../../../../../hooks/use-filter-cases";
import { HeroSection } from "../../blocks/HeroSection";
import { cases } from "../../constants";
import CasesList from "../CasesList";
import LoadMoreCases from "../LoadMoreCases";
import ScrollToTop from "../ScrollToTop";

const CasesContainer = () => {
  const {
    visibleCases,
    selectedTag,
    setSelectedTag,
    totalFiltered,
    loadMore,
    isLoadingMore,
    hasMore
  } = useFilteredCases(cases);
  return (
    <section>
      <div className="relative  bg-black">
        <HeroSection currentTag={selectedTag} setTag={setSelectedTag} />
        <CasesList cases={visibleCases} />
        <LoadMoreCases
          showMoreCases={loadMore}
          isLoadingMore={isLoadingMore}
          isDisabled={!hasMore}
        />
        <ScrollToTop
          currentNumber={visibleCases.length}
          totalNumber={totalFiltered}
        />
      </div>
    </section>
  );
};

export default CasesContainer;
