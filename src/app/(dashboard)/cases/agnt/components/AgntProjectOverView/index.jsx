import Image from "next/image";
import Link from "next/link";
import RightArrowSvg from "public/svgIcons/RightArrowSvg";
import React from "react";
import { overviewAgntItems } from "../../utils/constants";
import AgntOverviewItems from "../AgntOverviewItems";

const AgntProjectOverView = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pl-[123px] pr-[123px] pt-[118px]">
        <div className="grid grid-cols-[1fr_521px] gap-[155px]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-[30px]">
              <h3 className="font-roc text-[49.72px] font-medium uppercase leading-90 text-white">
                Project overview
              </h3>
              <p className="text-left font-manrope text-[12.89px] font-semibold leading-[22px] !text-white-70">
                AGNT.Hub was developed to bridge Web3 infrastructure and AI
                automation,
                <br className="hidden custom1430:block" /> addressing the
                growing demand for AI-powered trading, analytics, and on-chain
                <br className="hidden custom1430:block" /> execution.
                Traditional AI solutions struggle with blockchain integration,
                limiting
                <br className="hidden custom1430:block" /> their effectiveness
                in decentralized environments. AGNT.Hub solves this by
                <br className="hidden custom1430:block" /> providing an
                all-in-one ecosystem where users can deploy AI models, track
                <br className="hidden custom1430:block" /> market trends, and
                automate transactions within X. This case study example
                <br className="hidden custom1430:block" /> highlights how AGNT
                Hub leverages omnichain compatibility and AI integration
                <br className="hidden custom1430:block" /> to redefine Web3
                automation.
              </p>
              <Link className="flex gap-4" href={"#"} target="_blank">
                <span className="text-[22.1px] font-medium uppercase leading-90 text-white underline">
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
              className="ml-[128px]"
            />
          </div>
          <AgntOverviewItems items={overviewAgntItems} />
        </div>
      </div>
    </section>
  );
};

export default AgntProjectOverView;
