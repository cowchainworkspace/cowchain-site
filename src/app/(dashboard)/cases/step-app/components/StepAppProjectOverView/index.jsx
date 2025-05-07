import Link from "next/link";
import RightArrowSvg from "public/svgIcons/RightArrowSvg";
import React from "react";
import { overviewStepAppItems } from "../../utils/constants";
import StepAppOverviewItems from "../StepAppOverviewItems";

const StepAppProjectOverView = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pt-[50px] md:px-8 lg:px-10 xl:py-30 xl:pl-[97px] xl:pr-[109px]">
        <div className="grid gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px] xl:gap-[182px]">
          <div>
            <div className="flex flex-col gap-[30px] px-4 md:px-0">
              <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
                Project overview
              </h3>
              <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-6">
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
              <Link
                className="flex items-center gap-4"
                href={"https://step.app/"}
                target="_blank"
              >
                <span className="font-roc text-lg font-medium uppercase leading-90 text-white underline xl:text-[22px]">
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
