import React from "react";

const CaseTag = ({ tagLabel }) => {
  return (
    <div className="rounded-20 flex items-center justify-center border-[0.5px] border-white px-4 py-2">
      <p>{tagLabel}</p>
    </div>
  );
};

export default CaseTag;
