"use client";

import dexAdvisoryBg from "@/assets/bg/dexAdvisoryBg.svg";
import Tag from "@/components/ui/tag";
import Image from "next/image";

export function KeyFeatures({
  isOneBlock,
  title,
  desc,
  topBorder = true,
  bottomBorder = true,
  noBg = false,
  tag,
}) {
  return (
    <section
      className={`relative ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {!noBg && (
        <Image
          alt=""
          className="absolute -bottom-[38%] right-0  md:block "
          src={dexAdvisoryBg}
        />
      )}

      <div className="pt-[126px] pb-[84px] px-default relative flex flex-col justify-between gap-[107px]">
        <div className="  lg:gap-16">
          {tag && (
            <Tag
              title={tag}
              className="mb-4 max-w-[194px] md:mb-8"
            />
          )}
          <h2 className="lg:order-0 text-[60px] uppercase text-white  md:text-[60px]">
            {title}
          </h2>
          <div className="mt-8 flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto"></div>
          <p className="body my-[40px] max-w-[592px] text-base leading-6 md:my-[20px]">
            {desc}
          </p>
        </div>

        {!isOneBlock && (
          <div className="flex justify-between">
            <div className="relative max-w-[519px] bg-cover">
              <div className="mr-auto w-full text-left ">
                <span className="text-left font-roc !text-[20px] font-medium uppercase !leading-none text-white">
                  Security Features of Decentralized Exchange Platform
                </span>
              </div>
              <div>
                <p className="mt-[24px] text-[16px] !leading-[22px] !text-[#BBBBBB] ">
                  Security is a priority in every decentralized exchange
                  development platform we build. From multi-signature wallets to
                  secure authentication processes, we embed advanced security
                  measures that protect user assets and transactions. Our
                  decentralized exchange development includes advanced
                  encryption techniques to safeguard data during transactions
                </p>
              </div>
            </div>

            <div className="relative  max-w-[519px] bg-cover">
              <div className="mr-auto w-full text-left ">
                <span className="text-left font-roc !text-[20px] font-medium uppercase !leading-none text-white">
                  Premium Features of Our Decentralized Exchange Platform
                </span>
              </div>
              <div>
                <p className="mt-[24px] text-[16px] !leading-[22px] !text-[#BBBBBB] ">
                  Our platforms offer advanced features, including cross-chain
                  compatibility, liquidity pooling, and staking, ensuring that
                  your decentralized exchange development caters to the growing
                  needs of the market
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
