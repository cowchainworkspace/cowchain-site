import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import CasesSlider from "../components/CasesSlider";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedMemelutProjects } from "../data";
import MemelutOverview from "./components/MemelutOverview";
import MemelutSolutions from "./components/MemelutSolutions";
import MemelutWhatWeDid from "./components/MemelutWhatWeDid";
import dynamic from "next/dynamic";

import { metadata } from "./utils/memelutMetadata";

import { getCaseSchema, setBreadcrumbSchema } from "@/lib/utils";
import {
  memelutSlides,
  memelutSolutions,
  memelutTeam
} from "./utils/constants";
export { metadata };

const MemelutHeaderContainer = dynamic(
  () => import("./components/MemelutHeaderContainer")
);
const MemelutContent = dynamic(() => import("./components/MemelutContent"));

const Memelut = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "Memelut",
    "memelut"
  );
  const caseSchema = getCaseSchema("Memelut", "memelut", metadata?.description);
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
        <MemelutHeaderContainer />
        <MemelutContent />
      </section>
    </>
  );
};

export default Memelut;
