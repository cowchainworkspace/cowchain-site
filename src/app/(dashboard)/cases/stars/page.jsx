import Contact from "@/components/Contact";
import { setBreadcrumbSchema } from "@/lib/utils";
import React from "react";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { hybrid, reflect, tenet } from "../data";
import SliderContainer from "./components/SliderContainer";
import StarsOverview from "./components/StarsOverview";
import StarsSolutions from "./components/StarsSolutions";
import StarsWhatWeDid from "./components/StarsWhatWeDid";
import { starsTeam } from "./utils/constants";
import { metadata } from "./utils/starsMetadata";
import StarsHeaderContainer from "./components/StarsHeaderContainer";
export { metadata };

const Stars = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "Stars",
    "stars"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <section>
        <StarsHeaderContainer />
        <StarsOverview />
        <SliderContainer />
        <StarsSolutions />
        <StarsWhatWeDid />
        <TeamBehind
          team={starsTeam}
          headerClasses={"text-xs leading-5 tracking-[2px]"}
          descClasses={"xl:text-xl xl:leading-[30px]"}
          classes={"xl:px-[97px]"}
          titleClasses={"xl:text-[55.24px]"}
          containerClasses={"md:grid-cols-2 custom1430:grid-cols-[1fr_600px]"}
        />
        <MoreProjects projects={[reflect, tenet, hybrid]} />
        <Contact
          titleClasses={"mb-8 md:mb-0"}
          className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
        />
      </section>
    </>
  );
};

export default Stars;
