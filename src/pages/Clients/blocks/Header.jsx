import React from "react";
import bg_lg from "../../../assets/bg/clients_header_bg_lg.png";

const Header = () => {
  return (
    <section id="clients-header" className="relative">
      <img alt="" className="absolute top-0 right-0 min-w-[200vw] min-h-[130%]" src={bg_lg} />
      <div className="px-default flex flex-col pb-32 relative">
        <div className="mt-16 border border-white rounded-full py-[6px] px-4 mr-auto">
          <p className="body1 text-white">clients</p>
        </div>
        <h1 className="text-white mt-4 uppercase">cowchain works with</h1>
      </div>
    </section>
  );
};

export default Header;
