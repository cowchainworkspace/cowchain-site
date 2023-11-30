import React from "react";
import bg from "../../../assets/homepage/clients_bg.png";
import bg_lg from "../../../assets/homepage/clients_bg_lg.png";
import arrow from "../../../assets/arrow_right.svg";
import { Counter } from "../../home/components/counter";

export const Clients = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        srcSet={`${bg} 700w, ${bg_lg} 1000w`}
        sizes="(max-width: 640px) 70vw, 70vw"
        alt=""
        className="absolute -right-[10%] top-0 w-full"
        src={bg_lg}
      />
      <div className="py-heading px-default relative border-b border-b-th-fade">
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
          <h3 className="lg:order-0 text-white">OUR CLIENTS</h3>
          <a
            href="/cases"
            className="hidden lg:order-1 lg:my-auto lg:ml-auto lg:block"
          >
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                VIEW ALL PROJECTS
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
          <div className="mt-8 grid w-full max-w-xl grid-cols-3 gap-x-8 lg:order-3 lg:ml-auto">
            <div>
              <Counter duration={4} target={30} />
              <p className="body1 mt-2 uppercase">Techonologies</p>
            </div>
            <div>
              <Counter duration={4} target={84} />
              <p className="body1 mt-2 uppercase">Projects</p>
            </div>
            <div>
              <Counter duration={4} target={50} />
              <p className="body1 mt-2 uppercase">Clients</p>
            </div>
          </div>
          <p className="body my-8 max-w-lg md:my-12 lg:order-2 lg:max-w-xl">
            Over the course of just 3 years, our team has expertly developed 84+
            products in various niches, so we know exactly how to make your
            product successful. NFT marketplace? Play-to-Earn app? Crypto
            wallet? DeFi bridge? Chances are, we’ve done it all. Take a look at
            our portfolio and see for yourself
          </p>
          <a href="#" className="lg:hidden">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                ALL PROJECTS
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
