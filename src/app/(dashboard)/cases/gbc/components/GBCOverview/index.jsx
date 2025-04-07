import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../../public/svgIcons/RightArrowSvg";
import { overviewGbcItems } from "../../utils/constants";
import GBCOverviewItems from "../GBCOverviewItems";

const GBCOverview = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] pb-[91px] pl-[90px] pr-[100px] pt-[120px]">
        <div className="grid grid-cols-[1fr_480px] gap-[151px]">
          <div className="flex flex-col gap-[150px]">
            <div className="flex flex-col gap-[30px]">
              <h3 className="font-roc text-[54px] font-medium uppercase leading-90 text-white">
                Project overview
              </h3>
              <p className="text-left font-manrope text-[12.89px] font-semibold leading-[22px] !text-white-70">
                GMX Blueberry Club (GBC) was developed as a dedicated NFT dApp
                for the GMX <br className="hidden custom1430:block" />{" "}
                community, which boasts $276B+ in trading volume and 700K+
                active users. <br className="hidden custom1430:block" /> Built
                to enhance NFT utility, GBC goes beyond ownership with wearable
                <br className="hidden custom1430:block" /> customization, in-app
                trading, and interactive challenges. With backing from
                <br className="hidden custom1430:block" /> Arbitrum, it provides
                a seamless trading experience while introducing
                <br className="hidden custom1430:block" />
                decentralized competitions and tokenized rewards. The platform
                is already
                <br className="hidden custom1430:block" /> integrated into the
                broader GMX ecosystem, with 250K+ Twitter followers and
                <br className="hidden custom1430:block" /> an NFT market with
                over 1,900 ETH in trading volume on OpenSea.
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
