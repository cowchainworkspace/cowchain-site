import React from "react";
import bg_lg from "assets/bg/clients_header_bg_lg.png";
import Chevron from "components/icons/chevron";
import { Link } from "react-router-dom";
import Tag from "components/ui/tag";

const HeroSection = () => {
  return (
    <section className="relative px-4 md:pt-16">
      <img
        alt=""
        className="absolute right-0 top-0 min-h-[70%] min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="relative pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Link to={"/cases"} className="flex items-center gap-2">
          <Chevron className="h-4 w-4" />
          <span className=" text-slate-600">back to all projects</span>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <h1 className="my-6 text-center uppercase">Marsan</h1>
          <div className="flex justify-center gap-2">
            <Tag title={"Mobile App"} />
            <Tag title={"Non-custodial exchange"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
