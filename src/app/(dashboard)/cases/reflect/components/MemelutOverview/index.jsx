import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewMemelutItems } from "../../utils/constants";
import MemelutOverviewItems from "../MemelutOverviewItems";
import { cn } from "@/lib/utils";

const MemelutOverview = ({ containerClasses }) => {
  return (
    <section>
      <div
        className={cn(
          "mx-auto max-w-[1440px] pt-[50px] md:px-8 lg:px-10 xl:pb-[145px] xl:pl-[90px] xl:pr-[100px] xl:pt-[120px]",
          containerClasses
        )}
      >
        <div className="grid gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px] xl:gap-[151px]">
          <div className="flex flex-col gap-[150px]">
            <div className="flex flex-col gap-6 px-4  md:px-0 xl:gap-[30px]">
              <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
                Project overview
              </h3>
              <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-[22px]">
                Reflect was created to remove friction from decentralized
                finance by embedding AI automation into liquidity ecosystems.
                The platform replaces fragmented DeFi interactions with a
                unified AI-powered interface, eliminating the need for manual
                navigation across multiple dApps. From multi-token swaps to
                staking and emissions claims, Reflect centralizes key actions
                within a single AI system. By integrating directly with Twitter
                and Telegram, it brings DeFAI automation where users already
                engage, bridging accessibility with convenience.
              </p>
              <Link
                className="flex items-center gap-4"
                href={
                  "https://apps.apple.com/ua/app/memelut-memecoins-crypto/id6569243953"
                }
                target="_blank"
              >
                <span className="text-lg font-medium uppercase leading-90 text-white underline xl:text-2xl">
                  visit website
                </span>{" "}
                <RightArrowSvg />
              </Link>
            </div>
          </div>
          <MemelutOverviewItems items={overviewMemelutItems} />
        </div>
      </div>
    </section>
  );
};

export default MemelutOverview;
