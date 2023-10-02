import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="relative">
      <div className="grid grid-cols-1">
        <div className="border-b border-b-th-fade py-16 text-center px-4 flex flex-col gap-y-6">
          <h3 className="text-center">STAY UP TO DATE</h3>
          <a href="#" className="mx-auto">
            <div className="flex items-center gap-x-2">
              <p className="header text-white uppercase underline">
                ALL ARTICLES
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
