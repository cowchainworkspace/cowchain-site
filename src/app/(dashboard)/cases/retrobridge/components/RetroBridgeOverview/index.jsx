import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewRetroBridgeItems } from "../../utils/constants";
import RetroBridgeOverviewItems from "../RetroBridgeOverviewItems";
const RetroBridgeOverview = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pb-[120px] pl-[97px] pr-[109px] pt-[115px]">
        <div className="grid grid-cols-[1fr_521px] gap-[182px]">
          <div className="flex flex-col gap-8">
            <h3 className="font-roc text-[54px] font-medium uppercase leading-90 text-white">
              Project overview
            </h3>
            <p className="text-left font-manrope text-sm font-[450] leading-6 !text-white-70">
              RetroBridge was designed to address the growing need for reliable
              multichain
              <br className="hidden custom1430:block" /> solutions in the
              blockchain ecosystem. Supporting over 42 blockchain
              <br className="hidden custom1430:block" /> networks, including EVM
              Layer 2 chains and others like StarkNet, Aptos, and
              <br className="hidden custom1430:block" /> Cosmos, RetroBridge
              serves as a dynamic blockchain supply chain platform for
              <br className="hidden custom1430:block" /> digital assets.
            </p>
            <Link className="flex gap-4" href={"#"} target="_blank">
              <span className="text-2xl font-medium uppercase leading-90 text-white underline">
                visit website
              </span>{" "}
              <RightArrowSvg />
            </Link>
          </div>
          <RetroBridgeOverviewItems items={overviewRetroBridgeItems} />
        </div>
      </div>
    </section>
  );
};

export default RetroBridgeOverview;
