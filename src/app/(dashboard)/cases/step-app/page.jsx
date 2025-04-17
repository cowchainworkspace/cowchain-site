import React from "react";
import CaseHeroScreen from "../components/HeroScreen";
import { stepAppTags } from "./utils/constants";

const StepApp = () => {
  return (
    <section>
      <CaseHeroScreen
        tags={stepAppTags}
        pageTitle={"Step App"}
        heroDescription={
          <>
            StepApp is an innovative Move-to-Earn platform that rewards users
            for physical movement. With over 300,000 active users, 9M unique
            wallets and a presence in 100+ countries, the project exemplifies
            the intersection of fitness and blockchain innovation.
          </>
        }
        tagContainerClasses="flex-wrap justify-center max-w-[484px]"
      />
    </section>
  );
};

export default StepApp;
