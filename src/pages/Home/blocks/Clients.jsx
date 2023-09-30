import React from "react";
import bg from "../../../assets/homepage/clients_bg.png";
import arrow from "../../../assets/arrow_right.svg";

const Clients = () => {
  return (
    <section id="clients" className="relative">
      <img className="absolute top-0 right-0" src={bg} alt=""></img>
      <div className="relative border-b border-b-th-fade py-16 px-4">
        <h3 className="text-white">OUR CLIENTS</h3>
        <div className="grid grid-cols-3 gap-x-8 mt-12">
          <div>
            <p className="num_lg text-whites">30+</p>
            <p className="body1 uppercase mt-2">Techonologies</p>
          </div>
          <div>
            <p className="num_lg text-whites">84+</p>
            <p className="body1 uppercase mt-2">Projects</p>
          </div>
          <div>
            <p className="num_lg text-whites">50+</p>
            <p className="body1 uppercase mt-2">Clients</p>
          </div>
        </div>
        <p className="my-8 body">
          Over the course of just 3 years, our team has expertly developed 84+
          products in various niches, so we know exactly how to make your
          product successful. NFT marketplace? Play-to-Earn app? Crypto wallet?
          DeFi bridge? Chances are, we’ve done it all. Take a look at our
          portfolio and see for yourself
        </p>
        <a href="#">
          <div className="flex items-center gap-x-2">
            <p className="text-lg text-white uppercase underline font-roc">ALL PROJECTS</p>
            <img className="w-6" src={arrow} alt=""></img>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Clients;
