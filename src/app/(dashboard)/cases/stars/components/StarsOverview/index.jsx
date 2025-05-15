import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewStarsItems } from "../../utils/constants";
import StarsOverviewItems from "../StarsOverviewItems";

const StarsOverview = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pb-[30px] pt-[50px] md:px-8 lg:px-10 xl:py-[120px] xl:pl-[90px] xl:pr-[100px]">
        <div className="grid gap-[50px] md:grid-cols-2 xl:grid-cols-[1fr_521px] xl:gap-[151px]">
          <div>
            <div className="flex flex-col gap-6 px-4  md:px-0 xl:gap-[30px]">
              <h3 className="font-roc text-[32px] font-medium uppercase leading-90 text-white xl:text-[54px]">
                Project overview
              </h3>
              <p className="text-left font-manrope text-xs font-[450] leading-5 !text-white-70 xl:text-sm xl:leading-[22px]">
                Stars launched with a clear goal: make Web3 onboarding simple,
                social, and
                <br className="hidden custom1430:block" /> sticky. In an
                ecosystem full of clunky reward systems and low-retention dApps,
                <br className="hidden custom1430:block" /> Stars created a
                lightweight Telegram bot app that feels like a game but works
                <br className="hidden custom1430:block" /> like a growth engine.
                Users complete missions, earn points, and climb ranks – all
                <br className="hidden custom1430:block" /> from the comfort of a
                familiar messaging interface. This frictionless approach to
                <br className="hidden custom1430:block" /> mini app integration
                helped Stars cut through the noise and drive viral user
                <br className="hidden custom1430:block" /> acquisition. From
                airdrop hunters to loyal community members, the Stars TG bot
                <br className="hidden custom1430:block" /> built a wide funnel –
                and kept users around.
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
          <StarsOverviewItems items={overviewStarsItems} />
        </div>
      </div>
    </section>
  );
};

export default StarsOverview;
