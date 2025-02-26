"use client";

import dexAdvisoryBg from "@/assets/bg/dexAdvisoryBg.svg";
import Tag from "@/components/ui/tag";
import Image from "next/image";

const Keydata = [
  {
    title: "Security Features of Decentralized Exchange Platform",
    desc: "Security is a priority in every decentralized exchange development platform we build. From multi-signature wallets to secure authentication processes, we embed advanced security measures that protect user assets and transactions. Our decentralized exchange development includes advanced encryption techniques to safeguard data during transactions"
  },
  {
    title: "Premium Features of Our Decentralized Exchange Platform",
    desc: "Our platforms offer advanced features, including cross-chain compatibility, liquidity pooling, and staking, ensuring that your decentralized exchange development caters to the growing needs of the market"
  }
];

export function KeyFeatures({
  isOneBlock,
  title,
  desc,
  topBorder = true,
  bottomBorder = true,
  noBg = false,
  tag,
  reverse,
  data = Keydata,
}) {
  return (
    <section
      className={`relative ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {!noBg && (
        <Image
          alt=""
          className="absolute -bottom-[38%] right-0 md:block"
          src={dexAdvisoryBg}
        />
      )}

      <div
        className={`px-default relative flex mx-auto  max-w-[1440px] flex-col justify-between ${isOneBlock ? "py-[60px] md:py-[126px]" : "pb-[84px] pt-[60px] md:pt-[126px]"} gap-[107px] `}
      >
        <div className={` ${reverse ? "flex flex-row gap-[102px]" : "block"}"`}>
          {tag && <Tag title={tag} className="mb-[40px] max-w-[194px] md:mb-8" />}
          <h2 className="lg:order-0 text-[36px] uppercase text-white  md:text-[60px]">
            {title}
          </h2>
          <p className="mt-[40px] max-w-[824px] md:text-base leading-6 md:my-[20px] text-[14px]">
            {desc}
          </p>
        </div>

        {!isOneBlock && (
          <div className="flex justify-between">
            {data.map(({title, desc}) => (
              <div className="relative  max-w-[519px] bg-cover">
              <div className="mr-auto w-full text-left">
                <span className="text-left font-roc text-[20px] font-medium uppercase !leading-none text-white">
                  {title}
                </span>
              </div>
              <div>
                <p className="mt-[24px] text-[16px] !leading-[22px] !text-[#BBBBBB] ">
                  {desc}
                </p>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
