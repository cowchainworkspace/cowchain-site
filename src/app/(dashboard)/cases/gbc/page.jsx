import React from "react";

import { metadata } from "./utils/gbcMetadata";
import { setBreadcrumbSchema } from "@/lib/utils";
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <GBCHeaderContainer />
      <GBCContent />
      <section></section>
    </>
  );
};

export default GBC;
