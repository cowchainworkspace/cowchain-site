import { SocialLinks } from "@/components/SocialLinks";
import React from "react";
import { ArrowForward } from "../../../../assets/svgComponents/ArrowForward";
import Link from "next/link";

const blocks = [
  {
    title: "WHITE LABEL SOLUTIONS",
    items: [
      {
        title: "Explore White Label Solutions",
        link: "/services/white_label_solutions"
      },
      { title: "RWA platform", link: "/services/rwa_platform" },
      { title: "Social-fi mini-app", link: "/services/social_fi_mini_app" },
      { title: "Mobile crypto wallet", link: "/services/mobile_crypto_wallet" },
      { title: "ICO constructor", link: "/services/ico_constructor" },
      { title: "ICO platform", link: "/services/ico_platform" },
      { title: "NFT Marketplace", link: "/services/nft_marketplace" },
      { title: "Staking", link: "/services/staking" },
      { title: "Crypto Lottery", link: "/services/crypto_lottery" },
      { title: "Exchange", link: "/services/exchange" },
      {
        title: "ITC (Social Trading Platform)",
        link: "/services/itc_social_trading_platform"
      }
    ]
  },
  {
    title: "TECHNOLOGIES",
    items: [
      {
        title: "Web3 Full-stack Development",
        link: "/services/web3_fullstack_development"
      },
      { title: "NFT Development", link: "/services/nft_development" },
      { title: "dApp Development", link: "/services/dapp_development" },
      { title: "DeFi Development", link: "/services/defi_development" },
      {
        title: "Smart Contract Development",
        link: "/services/smart_contract_development"
      },
      { title: "AI Development", link: "/services/ai_development" }
    ]
  },
  {
    title: "SERVICES",
    items: [
      { title: "DEX Development", link: "/services/dex_development" },
      { title: "Crypto Wallet", link: "/services/crypto_wallet" },
      {
        title: "Cryptocurrency Exchange",
        link: "/services/cryptocurrency_exchange"
      },
      { title: "P2P crypto exchange", link: "/services/p2p_crypto_exchange" },
      { title: "ICO Platform", link: "/services/ico_platform" },
      { title: "RWA Tokenization", link: "/services/rwa_tokenization" },
      { title: "NFT Game", link: "/services/nft_game" },
      { title: "Metaverse", link: "/services/metaverse" }
    ]
  }
];

const other = [
  { title: "Web3 UI/UX design", link: "/services/web3_ui_ux_design" },
  { title: "Blockchain consulting", link: "/services/blockchain_consulting" }
];

export const ServicesAndTechnologies = () => {
  return (
    <div className="absolute top-[64px] z-[300] flex h-[423px] w-full border-b border-b-th-fade bg-black text-white">
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
                className="flex cursor-pointer items-center text-[12px] opacity-70 hover:text-purple-400"
              >
                <ArrowForward className="mr-[6px]" />
                <Link href={item.link}>{item.title}</Link>
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
              <Link href={item.link}>{item.title}</Link>
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
