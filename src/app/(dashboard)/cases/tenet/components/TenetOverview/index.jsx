import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewTenetItems } from "../../utils/constants";
import TenetOverviewItems from "../TenetOverviewItems";

const TenetOverview = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pt-[50px] md:px-8 lg:px-10  xl:py-[120px] xl:pl-[97px] xl:pr-[109px]">
        <div className="grid gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px] xl:gap-[182px]">
          <div className="flex flex-col gap-[150px]">
            <div className="flex flex-col gap-6 px-4  md:px-0 xl:gap-[30px]">
              <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
                Project overview
              </h3>
              <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-[22px]">
                Tenet was developed to address the limitations of traditional
                staking by
                <br className="hidden custom1430:block" /> introducing a
                multi-network liquid staking ecosystem. Users can stake LSDs
                <br className="hidden custom1430:block" /> across multiple
                networks, engage in governance, and maximize yields through
                <br className="hidden custom1430:block" /> advanced restaking
                mechanisms. A key component of the Tenet project is its
                <br className="hidden custom1430:block" /> native stablecoin,
                which provides liquidity for loans, borrowing, and DeFi
                <br className="hidden custom1430:block" /> integrations. The
                platform also features an AI-powered crypto wallet, enhancing
                <br className="hidden custom1430:block" /> security and
                usability. The launch of TenetScan V2 enhances transparency and
                <br className="hidden custom1430:block" /> provides deeper
                insights into network activity as Tenet solutions evolve.
              </p>
              <Link
                className="flex items-center gap-4"
                href={"https://tenet.org/"}
                target="_blank"
              >
                <span className="text-lg font-medium uppercase leading-90 text-white underline xl:text-2xl">
                  visit website
                </span>{" "}
                <RightArrowSvg />
              </Link>
            </div>
          </div>
          <TenetOverviewItems items={overviewTenetItems} />
        </div>
      </div>
    </section>
  );
};

export default TenetOverview;
