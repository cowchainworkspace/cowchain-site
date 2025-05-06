import Link from "next/link";
import RightArrowSvg from "public/svgIcons/RightArrowSvg";
import React from "react";
import { overviewAgntItems } from "../../utils/constants";
import AgntOverviewItems from "../AgntOverviewItems";

const AgntProjectOverView = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pt-[50px] md:px-8 lg:px-10 xl:py-30 xl:pl-[97px] xl:pr-[109px]">
        <div className="grid gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px] xl:gap-[133px]">
          <div className="flex flex-col px-4 md:px-0">
            <div className="flex flex-col gap-6 xl:gap-[30px]">
              <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
                Project overview
              </h3>
              <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-[22.1px]">
                AGNT.Hub was developed to bridge Web3 infrastructure and AI
                <br className="hidden custom1430:block" />
                automation, addressing the growing demand for AI-powered
                trading,
                <br className="hidden custom1430:block" /> analytics, and
                on-chain execution. Traditional AI solutions struggle with
                <br className="hidden custom1430:block" /> blockchain
                integration, limiting their effectiveness in decentralized
                <br className="hidden custom1430:block" /> environments.
                AGNT.Hub solves this by providing an all-in-one ecosystem
                <br className="hidden custom1430:block" /> where users can
                deploy AI models, track market trends, and automate
                <br className="hidden custom1430:block" /> transactions within
                X. This case study example highlights how AGNT Hub
                <br className="hidden custom1430:block" /> leverages omnichain
                compatibility and AI integration to redefine Web3
                <br className="hidden custom1430:block" />
                automation.
              </p>
              <Link
                className="flex items-center gap-4"
                href={"https://agnthub.ai/"}
                target="_blank"
              >
                <span className="font-roc text-lg font-medium uppercase leading-90 text-white underline xl:text-[22px]">
                  visit website
                </span>{" "}
                <RightArrowSvg />
              </Link>
            </div>
          </div>
          <AgntOverviewItems items={overviewAgntItems} />
        </div>
      </div>
    </section>
  );
};

export default AgntProjectOverView;
