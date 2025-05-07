import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewRetroBridgeItems } from "../../utils/constants";
import RetroBridgeOverviewItems from "../RetroBridgeOverviewItems";
const RetroBridgeOverview = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pt-[50px] md:px-8 lg:px-10  xl:pb-[120px] xl:pl-[97px] xl:pr-[109px] xl:pt-[115px]">
        <div className="grid gap-[182px] gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px]">
          <div className="flex flex-col gap-6 px-4 md:px-0 xl:gap-8">
            <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
              Project overview
            </h3>
            <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-6">
              RetroBridge was designed to address the growing need for reliable{" "}
              <br className="hidden custom1430:block" />
              multichain solutions in the blockchain ecosystem. Supporting over
              51 <br className="hidden custom1430:block" /> blockchain networks,
              including EVM Layer 2 chains and others like
              <br className="hidden custom1430:block" /> StarkNet, Aptos, and
              Cosmos, RetroBridge serves as a dynamic
              <br className="hidden custom1430:block" /> blockchain supply chain
              platform for digital assets.
            </p>
            <Link
              className="flex items-center gap-4"
              href={"https://retrobridge.io/"}
              target="_blank"
            >
              <span className="text-lg font-medium uppercase leading-90 text-white underline xl:text-2xl">
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
