import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewGbcItems } from "../../utils/constants";
import GBCOverviewItems from "../GBCOverviewItems";

const GBCOverview = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pb-[145px] pl-[90px] pr-[100px] pt-[120px]">
        <div className="grid grid-cols-[1fr_521px] gap-[151px]">
          <div className="flex flex-col gap-[150px]">
            <div className="flex flex-col gap-[30px]">
              <h3 className="font-roc text-[54px] font-medium uppercase leading-90 text-white">
                Project overview
              </h3>
              <p className="text-left font-manrope text-sm font-semibold leading-[22px] !text-white-70">
                GMX Blueberry Club (GBC) was developed as a dedicated NFT dApp
                for the
                <br className="hidden custom1430:block" /> GMX community, which
                boasts $276B+ in trading volume and 700K+
                <br className="hidden custom1430:block" /> active users. Built
                to enhance NFT utility, GBC goes beyond ownership
                <br className="hidden custom1430:block" /> with wearable
                customization, in-app trading, and interactive challenges.
                <br className="hidden custom1430:block" /> With backing from
                Arbitrum, it provides a seamless trading experience
                <br className="hidden custom1430:block" />
                while introducing decentralized competitions and tokenized
                rewards. The
                <br className="hidden custom1430:block" /> platform is already
                integrated into the broader GMX ecosystem, with
                <br className="hidden custom1430:block" /> 250K+ Twitter
                followers and an NFT market with over 1,900 ETH in trading
                <br className="hidden custom1430:block" /> volume on OpenSea.
              </p>
              <Link className="flex gap-4" href={"#"} target="_blank">
                <span className="text-2xl font-medium uppercase leading-90 text-white underline">
                  visit website
                </span>{" "}
                <RightArrowSvg />
              </Link>
            </div>
            <Image
              src={"/cases/gbc/overview-img.webp"}
              width={505}
              height={444}
              alt="GBC Person"
            />
          </div>
          <GBCOverviewItems items={overviewGbcItems} />
        </div>
      </div>
    </section>
  );
};

export default GBCOverview;
