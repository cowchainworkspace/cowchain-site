import React from "react";
import CaseItem from "../CaseItem";

const CasesList = ({ cases }) => {
  return (
    <section className="flex w-full flex-col gap-[30px]">
      {cases.map((caseItem) => (
        <>
          {(caseItem.caseName !== "Reflect" && caseItem.caseName !== "BRC20") && (
            <CaseItem key={caseItem.id} caseItem={caseItem} />
          )}
        </>
      ))}
    </section>
  );
};

export default CasesList;
