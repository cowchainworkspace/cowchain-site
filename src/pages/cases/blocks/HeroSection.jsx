import React from "react";
import bg_lg from "assets/bg/clients_header_bg_lg.png";
import Tag from "components/ui/tag";
import Filters from "components/icons/filters";

const categories = [
  "staking",
  "mobile app",
  "dex",
  "nft",
  "play2earn",
  "dashboard",
  "trading"
];

const HeroSection = () => {
  return (
    <section className="relative pt-16">
      <img
        alt=""
        className="absolute right-0 top-0 min-h-[150%] min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="relative flex flex-col px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag title={"case studies"} />
        <h1 className="mt-4 text-5xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-[100px]">
          we offer the diversity of skills
        </h1>
        <div className="my-14 flex items-center justify-end gap-2 lg:justify-between">
          <div className="hidden gap-2 lg:flex">
            {categories.map((title, index) => (
              <Category key={index} title={title} />
            ))}
          </div>
          <button className="pointer flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[36px] border border-white bg-transparent px-6 py-4 text-sm uppercase leading-[14px] text-white xl:text-base">
            <Filters className={"h-4 w-4"} />
            All filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

export const Category = ({ title }) => {
  return (
    <div className="pointer cursor-pointer break-words rounded-[40px] bg-white/10 px-5 py-4 text-sm uppercase leading-[14px] text-white xl:px-6 xl:text-base">
      {title}
    </div>
  );
};
