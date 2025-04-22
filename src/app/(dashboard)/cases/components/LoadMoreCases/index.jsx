import { cn } from "@/lib/utils";
import React from "react";
import { DotsLoader } from "../../../../../components/loader/DotsLoader";

const LoadMoreCases = ({
  showMoreCases,
  isDisabled = false,
  isLoadingMore
}) => {
  return (
    <section
      id="view_more"
      className="relative z-10 overflow-hidden border-b border-b-th-fade"
    >
      <div className="flex flex-col items-center justify-center gap-y-5 px-4 py-16 text-center ">
        <button
          type="button"
          className={cn("btn-submit  bg-white uppercase xl:px-12", {
            "pointer-events-none opacity-50": isDisabled
          })}
          onClick={() => {
            showMoreCases();
          }}
          disabled={isDisabled}
        >
          {isLoadingMore ? <DotsLoader /> : "Load More"}
        </button>
      </div>
    </section>
  );
};

export default LoadMoreCases;
