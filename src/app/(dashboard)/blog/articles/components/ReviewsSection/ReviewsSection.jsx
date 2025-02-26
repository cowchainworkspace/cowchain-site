import { reviewsData } from "@/lib/constants/reviews";
import React from "react";

export const ReviewsSection = () => {
  return (
    <div className="flex flex-col items-center gap-5 md:gap-[40px]">
      <h3 className="font-roc text-lg  uppercase leading-6 tracking-[0] text-white md:text-[24px]">
        How do you like this article?
      </h3>
      <div className="grid w-[335px] grid-cols-5 md:w-[591px]">
        {reviewsData.map(({ id, icon, text }) => (
          <button
            type="button"
            key={id}
            className="flex  flex-col items-center"
          >
            <span className="text-md:text-[54px] text-[36px]">{icon}</span>
            <p className="max-w-[80px] text-xs font-medium leading-4 text-white md:text-base md:leading-6">
              {text}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
