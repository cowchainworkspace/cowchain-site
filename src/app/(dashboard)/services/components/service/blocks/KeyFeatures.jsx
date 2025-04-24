"use client";

import dexAdvisoryBg from "@/assets/bg/dexAdvisoryBg.svg";
import whiteLabelBg from "@/assets/bg/white-label-ellipse.webp";
import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import Image from "next/image";
const Keydata = [
  {
    title: (
      <>
        Security Features of Decentralized <br className="hidden lg:block" />{" "}
        Exchange Platform
      </>
    ),
    desc: (
      <>
        Security is a priority in every decentralized exchange development
        platform we build. From multi-signature wallets to secure authentication
        processes, we embed advanced security measures that protect user assets
        and transactions. Our decentralized exchange development includes
        advanced encryption techniques <br className="hidden lg:block" /> to
        safeguard data during transactions
      </>
    )
  },
  {
    title: "Premium Features of Our Decentralized Exchange Platform",
    desc: (
      <>
        Our platforms offer advanced features, including cross-chain
        compatibility, liquidity pooling, and staking, ensuring that your
        decentralized exchange development caters to the growing
        <br className="hidden lg:block" /> needs of the market
      </>
    )
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
  isWhiteLabelBg = false,
  isMaxWidthTab = false,
  titleClasses = "",
  isTextSecondary,
  descClasses,
  titleBlockClasses = "",
  imageClasses = "",
  containerClasses = "",
  customBg
}) {
  return (
    <section
      className={`relative ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {!noBg && (
        <Image
          alt=""
          className={cn(
            "pointer-events-none absolute -bottom-[38%] right-0 hidden md:block",
            imageClasses
          )}
          src={dexAdvisoryBg}
        />
      )}
      {isWhiteLabelBg && (
        <Image
          alt="background decoration"
          className="pointer-events-none absolute -bottom-[180%] left-0 hidden md:block"
          src={whiteLabelBg}
        />
      )}
      {customBg}
      <div
        className={cn(
          ` relative mx-auto flex max-w-[1440px]  flex-col justify-between px-5 md:px-8 ${isOneBlock ? "pb-[30px] pt-[60px] md:py-[126px] lg:pb-[84px]" : "pb-[30px] pt-[60px] md:py-[126px]"} gap-10 md:gap-[107px] lg:pl-[88px] lg:pr-[92px]`,
          containerClasses
        )}
      >
        <div
          className={cn(
            ` ${reverse ? "flex flex-row gap-[102px]" : "block"}`,
            titleBlockClasses
          )}
        >
          {tag && (
            <Tag title={tag} className="mb-[40px] max-w-[194px] md:mb-8" />
          )}
          <h2
            className={cn(
              "lg:order-0 relative z-[2] text-[36px] uppercase leading-[90%] text-white  md:text-[60px]",
              titleClasses
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "relative z-[2] mt-[40px] max-w-[824px] text-[14px] leading-6 md:my-[20px] md:text-base",
              {
                "max-w-[592px]": isMaxWidthTab,
                "text-secondary": isTextSecondary
              },
              descClasses
            )}
          >
            {desc}
          </p>
        </div>

        {!isOneBlock && (
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-10 xl:gap-0">
            {data.map(({ title, desc }, index) => (
              <div className="relative  max-w-[510px] bg-cover" key={index}>
                <div className="mr-auto w-full text-left ">
                  <span className="text-left font-roc text-[20px] font-medium uppercase !leading-none text-white">
                    {title}
                  </span>
                </div>
                <div>
                  <p className="mt-[24px] text-left text-[16px] !leading-[22px] !text-[#BBBBBB] ">
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
