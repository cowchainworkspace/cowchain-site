"use client";

import bg_lg from "@/assets/bg/home-clients.png";
import arrow from "@/assets/arrow_right.svg";
import { Counter } from "../components/counter";
import Link from "next/link";
import Image from "next/image";

import brc20 from "@/assets/svgComponents/clientsLogo/Brc20";
import hybrid from "@/assets/svgComponents/clientsLogo/Hybrid";
import pixel from "@/assets/svgComponents/clientsLogo/Pixel";
import raiser from "@/assets/svgComponents/clientsLogo/Raiser";
import retroBridge from "@/assets/svgComponents/clientsLogo/RetroBridge";
import step from "@/assets/svgComponents/clientsLogo/Step";
import tenet from "@/assets/svgComponents/clientsLogo/Tenet";
import gbc from "@/assets/svgComponents/clientsLogo/GBC";

export const logos = [
  { name: "Brc20", logo: brc20 },
  { name: "Hybrid", logo: hybrid },
  { name: "Pixel", logo: pixel },
  { name: "Raiser", logo: raiser },
  { name: "RetroBridge", logo: retroBridge },
  { name: "Step", logo: step },
  { name: "Tenet", logo: tenet },
  { name: "GBC", logo: gbc }
];

export default function Clients() {
  return (
    <section className="relative border-t border-t-th-fade">
      <Image
        alt=""
        className="absolute -top-[38%] right-0 hidden h-screen md:-top-[45%] md:block md:h-min  lg:-top-[80%]"
        src={bg_lg}
      />

      <div className="py-heading px-default relative flex flex-col">
        <div className=" grid grid-cols-1 md:mt-12 lg:grid-cols-2 lg:gap-16">
          <h2 className="lg:order-0 text-4xl uppercase text-white  md:text-[60px]">
            OUR CLIENTS
          </h2>
          <Link
            href="/cases"
            className="hidden lg:order-1 lg:my-auto lg:ml-auto lg:block"
          >
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                VIEW ALL PROJECTS
              </p>
              <Image className="w-6" src={arrow} alt=""></Image>
            </div>
          </Link>
          <div className="mt-8 flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto">
            <div>
              <div className="flex items-center">
                <Counter duration={4} target={35} />
              </div>
              <p className="body1 mt-2 uppercase">Techonologies</p>
            </div>
            <div>
              <div className="flex items-center">
                <Counter duration={4} target={120} />
                <span className="num_lg  text-white">+</span>
              </div>
              <p className="body1 mt-2 uppercase">Projects</p>
            </div>
            <div>
              <div className="flex items-center">
                <Counter duration={4} target={60} />
                <span className="num_lg  text-white">+</span>
              </div>
              <p className="body1 mt-2 uppercase">Clients</p>
            </div>
          </div>
          <p className="body my-[40px] max-w-lg text-base leading-6 md:my-[20px] lg:order-2 lg:max-w-xl">
            Over the course of just 3 years, our team has expertly developed and
            got the market for 120+ products in various niches, so we know
            exactly how to make your product successful. NFT marketplace?
            Play-to-Earn app? Crypto wallet? DeFi bridge? Chances are, we’ve
            done it all. Take a look at our portfolio and see for yourself
          </p>
          <Link href="/cases" className="lg:hidden">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                ALL PROJECTS
              </p>

              <Image className="w-6" src={arrow} alt=""></Image>
            </div>
          </Link>
        </div>

        <div className="grid mt-[37px] gap-[33px] sm:gap-[35px] w-full grid-cols-4">
          {logos.map((brand) => (
            <div className="h-[40px] w-[60px] sm:h-[116px] flex items-center justify-center sm:w-[300px]">
              <brand.logo className="w-[60px] sm:w-[140px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
