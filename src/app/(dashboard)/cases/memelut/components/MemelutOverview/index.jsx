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
                Memelut was developed to remove barriers in memecoin trading by
                offering an intuitive and engaging user experience. Instead of
                navigating multiple platforms like Phantom, Raydium, and
                Twitter, users can discover, trade, and track memecoins in one
                place. The app integrates blockchain technology to ensure
                transparency and security, while features like friends’ feeds
                and direct messaging enhance social interaction and market
                engagement. This streamlined approach positions Memelut among
                notable blockchain use cases, making memecoin trading more
                accessible.
              </p>
              <Link className="flex gap-4" href={"https://apps.apple.com/ua/app/memelut-memecoins-crypto/id6569243953"} target="_blank">
                <span className="text-2xl font-medium uppercase leading-90 text-white underline">
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
