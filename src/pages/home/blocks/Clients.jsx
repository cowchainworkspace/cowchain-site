import React from "react";
import bg from "assets/homepage/clients_bg.png";
import bg_lg from "assets/bg/home-clients.png";
import arrow from "assets/arrow_right.svg";
import { Counter } from "../../home/components/counter";
import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <section className="relative">
      <img
        alt=""
        className="absolute -top-[45%] right-0 h-screen md:-top-[45%] md:h-min  lg:-top-[80%]"
        src={bg_lg}
      />

      <div className="py-heading px-default relative">
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
          <h3 className="lg:order-0 text-white">OUR CLIENTS</h3>
          <Link
            to="/cases"
            className="hidden lg:order-1 lg:my-auto lg:ml-auto lg:block"
          >
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                VIEW ALL PROJECTS
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </Link>
          <div className="mt-8 flex w-full max-w-xl justify-between  lg:order-3 lg:ml-auto">
            <div>
              <Counter duration={4} target={35} />
              <p className="body1 mt-2 uppercase">Techonologies</p>
            </div>
            <div>
              <Counter duration={4} target={93} />
              <p className="body1 mt-2 uppercase">Projects</p>
            </div>
            <div>
              <Counter duration={4} target={57} />
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
          <Link to="/cases" className="lg:hidden">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                VIEW ALL PROJECTS
              </p>

              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clients;
