import BookSvg from "@/assets/svg/blog/BookSvg";
import React from "react";

export const Reading = ({ reading_minutes }) => {
  return (
    <div className="flex items-center gap-2">
      <BookSvg />
      <p className="text-sm leading-[22px] text-secondary">{`${reading_minutes} min read`}</p>
    </div>
  );
};
