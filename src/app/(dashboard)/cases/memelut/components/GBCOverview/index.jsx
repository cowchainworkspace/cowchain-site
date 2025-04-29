import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewGbcItems } from "../../utils/constants";
import GBCOverviewItems from "../GBCOverviewItems";
import { cn } from "@/lib/utils";

const GBCOverview = ({containerClasses}) => {
  return (
    <section>
      <div className={cn("mx-auto max-w-[1440px] pt-[50px] md:px-8 lg:px-10 xl:pb-[145px] xl:pl-[90px] xl:pr-[100px] xl:pt-[120px]", containerClasses)}>
        <div className="grid gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px] xl:gap-[151px]">
          <div className="flex flex-col gap-[150px]">
            <div className="flex flex-col gap-6 px-4  md:px-0 xl:gap-[30px]">
              <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
                Project overview
              </h3>
              <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-[22px]">
                AGNT.Hub was developed to bridge Web3 infrastructure and AI{" "}
                <br className="hidden custom1430:block" />
                automation, addressing the growing demand for AI-powered
                trading, <br className="hidden custom1430:block" /> analytics,
                and on-chain execution. Traditional AI solutions struggle with{" "}
                <br className="hidden custom1430:block" /> blockchain
                integration, limiting their effectiveness in decentralized{" "}
                <br className="hidden custom1430:block" /> environments.
                AGNT.Hub solves this by providing an all-in-one ecosystem{" "}
                <br className="hidden custom1430:block" /> where users can
                deploy AI models, track market trends, and automate{" "}
                <br className="hidden custom1430:block" /> transactions within
                X. This case study example highlights how AGNT Hub{" "}
                <br className="hidden custom1430:block" /> leverages omnichain
                compatibility and AI integration to redefine Web3{" "}
                <br className="hidden custom1430:block" />
                automation.
              </p>
              <Link className="flex gap-4" href={"#"} target="_blank">
                <span className="text-2xl font-medium uppercase leading-90 text-white underline">
                  visit website
                </span>{" "}
                <RightArrowSvg />
              </Link>
            </div>
          </div>
          <GBCOverviewItems items={overviewGbcItems} />
        </div>
      </div>
    </section>
  );
};

export default GBCOverview;
