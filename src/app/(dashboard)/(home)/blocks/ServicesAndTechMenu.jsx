import { SocialLinks } from "@/components/SocialLinks";
import React from "react";
import { ArrowForward } from "../../../../assets/svgComponents/ArrowForward";

const blocks = [
  {
    title: "WHITE LABEL SOLUTIONS",
    items: [
      "Explore White Label Solutions",
      "RWA platform",
      "Social-fi mini-app",
      "Mobile crypto wallet",
      "ICO constructor",
      "ICO platform",
      "NFT Marketplace",
      "Staking",
      "Crypto Lottery",
      "Exchange",
      "ITC (Social Trading Platform)"
    ]
  },
  {
    title: "TECHNOLOGIES",
    items: [
      "Web3 Full-stack Development",
      "NFT Development",
      "dApp Development",
      "DeFi Development",
      "Smart Contract Development",
      "AI Development"
    ]
  },
  {
    title: "SERVICES",
    items: [
      "DEX Development",
      "Crypto Wallet",
      "Cryptocurrency Exchange",
      "P2P crypto exchange",
      "ICO Platform",
      "RWA Tokenization",
      "NFT Game",
      "Metaverse"
    ]
  }
];

const other = ["Web3 UI/UX design", "Blockchain consulting"];

export const ServicesAndTechnologies = () => {
  return (
    <div className="flex h-[423px] w-full border-b border-b-th-fade bg-black text-white">
      <div className="pointer-events-none flex h-[423px] w-[112px] items-center justify-center">
        <span
          className="violet-gradient-text -rotate-90 transform whitespace-nowrap text-left
    text-[34px] font-bold uppercase tracking-wide"
        >
          SERVICES <br /> & TECHNOLOGIES
        </span>
      </div>

      {blocks.map((block, index) => (
        <div
          key={index}
          className="flex w-[252px] flex-col border-l border-l-th-fade"
        >
          <div className="flex h-[73px] items-center border-b border-b-th-fade font-bold">
            <span className="pl-[32px]">{block.title}</span>
          </div>
          <ul className="mt-4 space-y-2 pl-[32px]">
            {block.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex cursor-pointer items-center text-[12px] opacity-70"
              >
                <ArrowForward className="mr-[6px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-1 flex-col border-l border-l-th-fade">
        <div className="flex min-h-[73px] w-[252px] items-center border-b border-r border-b-th-fade border-r-th-fade  font-bold">
          <span className="pl-[32px]">OTHER</span>
        </div>
        <ul className="mt-4 space-y-2 pl-[32px]">
          {other.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="flex cursor-pointer items-center text-[12px] opacity-70 hover:text-purple-400"
            >
              <ArrowForward className="mr-[6px]" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex h-full w-full items-end justify-end p-[30px]">
          <SocialLinks isMenu />
        </div>
      </div>
    </div>
  );
};
