import Image from "next/image";
import Link from "next/link";
import RightArrowSvg from "public/svgIcons/RightArrowSvg";
import React from "react";
import { overviewAgntItems } from "../../utils/constants";
import AgntOverviewItems from "../AgntOverviewItems";

const AgntProjectOverView = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pl-[97px] pr-[109px] pt-[118px]">
        <div className="grid grid-cols-[1fr_521px] gap-[133px]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-[30px]">
              <h3 className="font-roc text-[54px] font-medium uppercase leading-90 text-white">
                Project overview
              </h3>
              <p className="text-left font-manrope text-sm font-semibold leading-[22.1px] !text-white-70">
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
              <Link className="flex gap-4" href={"#"} target="_blank">
                <span className="font-roc text-[22px] font-medium uppercase leading-90 text-white underline">
                  visit website
                </span>{" "}
                <RightArrowSvg />
              </Link>
            </div>
            <Image
              src={"/cases/agnt/agent-review.webp"}
              width={390}
              height={691}
              alt="Agent Person"
              className="ml-auto"
            />
          </div>
          <AgntOverviewItems items={overviewAgntItems} />
        </div>
      </div>
    </section>
  );
};

export default AgntProjectOverView;
