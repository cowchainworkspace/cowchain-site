import React from "react";
import Tag from "components/ui/tag";
import team1 from "assets/team/team-carousel/team1.png";
import team2 from "assets/team/team-carousel/team2.png";
import team3 from "assets/team/team-carousel/team3.png";
import team4 from "assets/team/team-carousel/team4.png";
import team5 from "assets/team/team-carousel/team5.png";

const photos = [team1, team2, team3, team4, team5];

export const HeroSection = () => {
  return (
    <section className="scrollbar-none container  relative  w-full border-b border-b-th-fade pt-20  md:max-w-full lg:pt-[120px]">
      <div className="relative flex cursor-default flex-col items-start justify-center px-5 pb-8 md:px-8 md:pb-12 lg:items-center lg:px-16 xl:px-24">
        <Tag title={"team"} className={"mb-4 md:mb-8"} />
        <h1 className="mb-10 max-w-[1270px] text-[32px] uppercase text-white lg:mt-6 lg:text-[82px] xl:text-center   xl:text-7xl">
          We are a team of{" "}
          <span className="violet-gradient-text">30+ web3 natives</span> making
          crypto simple since 2020
        </h1>
        <div className="mt-9 flex max-w-[110%] items-start justify-start gap-2 overflow-x-scroll md:items-center   md:overflow-auto  lg:max-w-full  lg:justify-between  xl:max-w-none ">
          {photos.map((imgSrc, index) => (
            <img
              src={imgSrc}
              className="h-[220px] w-[220px] lg:h-[314px] lg:w-[314px]"
              alt=""
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
