import React from "react";

const CaseTag = ({ tagLabel }) => {
  return (
    <div className="flex items-center justify-center rounded-20 border-[0.5px] border-white px-4 py-2">
      <p className="font-manrope text-sm leading-[18px] text-white">
        {tagLabel}
      </p>
    </div>
  );
};

export default CaseTag;
