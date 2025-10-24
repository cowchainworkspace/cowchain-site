"use client";

import arrow from "@/assets/arrow_right.svg";
import bg_lg from "@/assets/bg/home-clients.png";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "../components/counter";

import agnt from "@/assets/svgComponents/clientsLogo/Agnt";
import brc20 from "@/assets/svgComponents/clientsLogo/Brc20";
import gbc from "@/assets/svgComponents/clientsLogo/GBC";
import hybrid from "@/assets/svgComponents/clientsLogo/Hybrid";
import pixel from "@/assets/svgComponents/clientsLogo/Pixel";
import retroBridge from "@/assets/svgComponents/clientsLogo/RetroBridge";
import step from "@/assets/svgComponents/clientsLogo/Step";
import tenet from "@/assets/svgComponents/clientsLogo/Tenet";

export const logos = [
  {
    name: "RetroBridge",
    logo: retroBridge,
    linkUrl: "https://retrobridge.io/"
  },
  { name: "Step", logo: step, linkUrl: "https://step.app/" },
  { name: "GBC", logo: gbc, linkUrl: "https://app.findgbc.com/" },
  { name: "Pixel", logo: pixel, linkUrl: "https://www.pixelverse.xyz/" },
  { name: "Hybrid", logo: hybrid, linkUrl: "https://buildonhybrid.com/" },
  { name: "Agnt", logo: agnt, linkUrl: "https://agnthub.ai/" },
  { name: "Brc20", logo: brc20, linkUrl: "https://brc20.com/" },
  { name: "Tenet", logo: tenet, linkUrl: "https://tenet.org/" }
];

export default function Clients() {
  return (
    <section className="relative border-t border-t-th-fade">
      <Image
        alt="Background decoration ellipse"
        className="pointer-events-none absolute -top-[38%] right-0 z-[0] hidden h-screen md:-top-[45%] md:block md:h-min  lg:-top-[65%]"
        src={bg_lg}
      />

      <div className="px-default relative flex flex-col py-[60px] pb-[20px] md:mx-auto md:max-w-[1440px] md:pb-[60px]">
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
              <Image
                className="w-6"
                src={arrow}
                alt="Background decoration ellipse"
              />
            </div>
          </Link>
          <div className="mt-8 flex w-full max-w-xl flex-col justify-between customSmall:flex-row lg:order-3 lg:ml-auto">
            <div>
              <div className="flex items-center">
                <Counter
                  duration={4}
                  target={35}
                  className="max-h-[36px] text-[36px]
                 leading-[36px] md:max-h-[48px] md:text-[48px] md:leading-[48px]"
                />
              </div>
              <p className="body1 mt-2 uppercase">Technologies</p>
            </div>
            <div>
              <div className="flex items-center">
                <Counter
                  duration={4}
                  target={150}
                  className="max-h-[36px] text-[36px]
                 leading-[36px] md:max-h-[48px] md:text-[48px] md:leading-[48px]"
                />
                <span
                  className="block max-h-[36px] overflow-hidden font-roc text-[36px] font-medium leading-[36px] 
            text-white md:max-h-none md:text-4xl md:leading-tight"
                >
                  +
                </span>
              </div>
              <p className="body1 mt-2 uppercase">Projects</p>
            </div>
            <div>
              <div className="flex items-center">
                <Counter
                  duration={4}
                  target={60}
                  className="max-h-[36px] text-[36px]
                 leading-[36px] md:max-h-[48px] md:text-[48px] md:leading-[48px]"
                />
                <span
                  className="block max-h-[36px] overflow-hidden font-roc text-[36px] font-medium leading-[36px] 
            text-white md:max-h-none md:text-4xl md:leading-tight"
                >
                  +
                </span>
              </div>
              <p className="body1 mt-2 uppercase">Clients</p>
            </div>
          </div>
          <p className="my-[40px] max-w-lg text-[14px] leading-6 md:my-[20px] md:text-base lg:order-2 lg:max-w-xl">
            Over the course of just 3 years, our team has expertly developed and
            got the market for 150+ products in various niches, so we know
            exactly how to make your product successful. NFT marketplace?
            Play-to-Earn app? Crypto wallet? DeFi bridge? Chances are, we’ve
            done it all. Take a look at our portfolio and see for yourself
          </p>
          <Link href="/cases" className="lg:hidden">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                ALL PROJECTS
              </p>

              <Image className="w-6" src={arrow} alt="Navigation arrow" />
            </div>
          </Link>
        </div>

        <div className="mt-[37px] grid w-full grid-cols-4 gap-[35px]">
          {logos.map((brand) => (
            <Link
              href={brand.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={brand.name}
              className="flex h-[40px] w-[60px] items-center justify-center  sm:h-[50px] sm:w-[130px] md:h-[60px] md:w-[150px] custom1200:h-[116px] custom1200:w-[300px]"
            >
              <brand.logo className="w-[60px] sm:w-[100px] custom1200:w-[140px]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
