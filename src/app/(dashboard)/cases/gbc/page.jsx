import React from "react";

import { metadata } from "./utils/gbcMetadata";
import { getCaseSchema, setBreadcrumbSchema } from "@/lib/utils";
import dynamic from "next/dynamic";

export { metadata };

const GBCHeaderContainer = dynamic(
  () => import("./components/GBCHeaderContainer")
);
const GBCContent = dynamic(() => import("./components/GBCContent"));

const GBC = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "GMX Blueberry Club",
    "gbc"
  );
  const caseSchema = getCaseSchema("GMX Blueberry Club", "gbc", metadata?.description);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      {caseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
        />
      )}
      <GBCHeaderContainer />
      <GBCContent />
      <section></section>
    </>
  );
};

export default GBC;
