import React from "react";
import bg_lg from "../../../assets/bg/clients_header_bg_lg.png";

const Header = () => {
  return (
    <section id="clients-header" className="relative">
      <img
        alt=""
        className="absolute top-0 right-0 min-w-[200vw] md:min-w-full min-h-[150%] md:min-h-[130%] lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="px-default flex flex-col pb-16 md:pb-32 lg:pb-48 lg:pt-16 relative">
        <div className="mt-16 border border-white rounded-full py-[6px] lg:py-3 px-8 mr-auto">
          <p className="body1 text-white">clients</p>
        </div>
        <h1 className="text-white mt-4 lg:mt-6 uppercase xl:!text-[100px]">
          cowchain <br></br> works with
        </h1>
      </div>
    </section>
  );
};

export default Header;
