import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewBRC20Items } from "../../utils/constants";
import BRC20OverviewItems from "../BRC20OverviewItems";

const BRC20Overview = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pt-[50px] md:px-8 lg:px-10 xl:py-[120px] xl:pl-[90px] xl:pr-[100px]">
        <div className="grid gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px] xl:gap-[151px]">
          <div>
            <div className="flex flex-col gap-6 px-4  md:px-0 xl:gap-[30px]">
              <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
                Project overview
              </h3>
              <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-[22px]">
                BRC20 was created to streamline BRC20 token distribution,
                ensuring fair
                <br className="hidden custom1430:block" /> launches and
                sustainable growth for Bitcoin-based assets. The platform allows
                <br className="hidden custom1430:block" /> projects to
                distribute tokens directly to the COM community, with 80% of
                funds
                <br className="hidden custom1430:block" /> going to creators and
                20% allocated for COM buybacks. The launchpad also
                <br className="hidden custom1430:block" />
                integrates real-time market analytics, offering a dashboard for
                tracking top
                <br className="hidden custom1430:block" /> BRC20 tokens,
                Ordinals, and key insights into the evolving Bitcoin ecosystem.
                <br className="hidden custom1430:block" /> This BRC20 case study
                explores how blockchain innovation enhances Bitcoin’s
                <br className="hidden custom1430:block" /> utility through
                tokenized assets.
              </p>
              <Link
                className="flex items-center gap-4"
                href={" https://hub.findgbc.io/"}
                target="_blank"
              >
                <span className="text-lg font-medium uppercase leading-90 text-white underline xl:text-2xl">
                  visit website
                </span>{" "}
                <RightArrowSvg />
              </Link>
            </div>
          </div>
          <BRC20OverviewItems items={overviewBRC20Items} />
        </div>
      </div>
    </section>
  );
};

export default BRC20Overview;
