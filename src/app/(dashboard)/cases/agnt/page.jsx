import { getCaseSchema, setBreadcrumbSchema } from "@/lib/utils";
import React from "react";
import { metadata } from "./utils/agntMetadata";
import dynamic from "next/dynamic";

export { metadata };
const AgntHeader = dynamic(() => import("./components/AgntHeader"));
const AgntContent = dynamic(() => import("./components/AgntContent"));

const Agnt = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "AGNT.Hub",
    "agnt"
  );
  const caseSchema = getCaseSchema("AGNT.Hub", "agnt", metadata?.description);

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
      <section>
        <AgntHeader />
        <AgntContent />
      </section>
    </>
  );
};

export default Agnt;
