import React from "react";
import { HeroSection } from "../components/service/blocks/HeroSection";
import Achievements from "../components/service/blocks/Achievements";
import { ExpertiseServices } from "../components/service/blocks/ExpertiseServices";
import { icoPlatformBenefits } from "./utils/data";

const IcoPlatformDevelopment = () => {
  return (
    <section>
      <HeroSection
        title={"ICO Platform Development "}
        desc={
          "Expert ICO Platform Development Services for Your Blockchain Project"
        }
      />
      <Achievements
        tag={"What Are ICO Platform Development Services?"}
        desc={
          <>
            ICO platform development services provide a
            <br className="hidden custom1430:block" />{" "}
            <span className="violet-gradient-text">comprehensive solution</span>{" "}
            for launching blockchain-
            <br className="hidden custom1430:block" />
            based fundraising campaigns. These platforms enable
            <br className="hidden custom1430:block" /> startups and established
            companies to raise capital by
            <br className="hidden custom1430:block" /> offering tokens to
            investors in exchange for funding.
            <br className="hidden custom1430:block" /> Leveraging blockchain
            technology,{" "}
            <span className="violet-gradient-text">
              an ICO (Initial Coin
              <br className="hidden custom1430:block" /> Offering) platform
              ensures transparency, automation,
              <br className="hidden custom1430:block" /> and security
            </span>
            , streamlining the fundraising process while
            <br className="hidden custom1430:block" /> fostering trust between
            project teams and investors.
          </>
        }
        descClasses={"lg:text-[39px]"}
        containerClasses={"xl:pl-[88px] xl:pr-[106px]"}
      />
      <ExpertiseServices
        data={icoPlatformBenefits}
        title={
          <>
            Key Benefits
            <br /> of Using an ICO
            <br /> Platform for
            <br /> Your Project
          </>
        }
        sectionContainerClasses={"md:flex-row md:gap-5"}
        titleClasses="mb-6 md:mb-0 xl:text-[60px] xl:leading-90"
        containerClasses="xl:gap-[60px] xl:grid xl:gap-9"
      />
    </section>
  );
};

export default IcoPlatformDevelopment;
