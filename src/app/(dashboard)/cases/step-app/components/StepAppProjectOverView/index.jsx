import Link from "next/link";
import RightArrowSvg from "public/svgIcons/RightArrowSvg";
import React from "react";
import { overviewStepAppItems } from "../../utils/constants";
import StepAppOverviewItems from "../StepAppOverviewItems";

const StepAppProjectOverView = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] py-30 pl-[97px] pr-[109px]">
        <div className="grid grid-cols-[1fr_521px] gap-[182px]">
          <div>
            <div className="flex flex-col gap-[30px]">
              <h3 className="font-roc text-[54px] font-medium uppercase leading-90 text-white">
                Project overview
              </h3>
              <br className="hidden custom1430:block" />
              <p className="text-left font-manrope text-sm font-[450] leading-[22.1px] !text-white-70">
                StepApp combines fitness, gaming, and blockchain, offering one
                of the
                <br className="hidden custom1430:block" /> most practical
                blockchain use cases in the move-to-earn space. As a
                <br className="hidden custom1430:block" /> standout example of
                blockchain for business, it leverages custom
                <br className="hidden custom1430:block" /> blockchain
                development to power Step Exchange for EVM swaps, a wallet
                <br className="hidden custom1430:block" /> that bridges in-game
                custodial balances with Web3, and a Launchpad for
                <br className="hidden custom1430:block" /> decentralized
                projects – all while incorporating principles of supply chain
                <br className="hidden custom1430:block" /> blockchain to ensure
                secure and transparent asset flows.
              </p>
              <Link className="flex gap-4" href={"#"} target="_blank">
                <span className="font-roc text-[22px] font-medium uppercase leading-90 text-white underline">
                  visit website
                </span>{" "}
                <RightArrowSvg />
              </Link>
            </div>
          </div>
          <StepAppOverviewItems items={overviewStepAppItems} />
        </div>
      </div>
    </section>
  );
};

export default StepAppProjectOverView;
