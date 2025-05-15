import {
  agntImage,
  brc20Image,
  gbcImage,
  hybridImage,
  memelutImage,
  pixelVerseImage,
  reflectImage,
  retroBridgeImage,
  stepAppImage,
  tenetImage
} from "../../../../public/cases/main";

import {
  agntMobile,
  brc20Mobile,
  gbcMobile,
  hybrydMobileIcon,
  memeLutMobileImg,
  pixelverseMobileImg,
  reflectMobileImg,
  retroBridgeMobile,
  stepUpMobile,
  tenetMobileImg
} from "../../../../public/cases/main";

export const casesTags = [
  {
    id: 1,
    tagName: "Web Development",
    tags: [
      "GameFi",
      "Trading",
      "Crypto Wallet",
      "DEX",
      "DeFi",
      "Bridge",
      "NFT",
      "Staking"
    ]
  },
  {
    id: 2,
    tagName: "Mobile App",
    tags: ["Mobile GameFi", "Mobile Trading", "Mobile Crypto Wallet"]
  },
  {
    id: 3,
    tagName: "AI Development",
    tags: ["AI Development", "Mobile AI Development"]
  },
  {
    id: 4,
    tagName: "Telegram Mini-Apps",
    tags: ["Telegram Mini-Apps", "Mobile Telegram Mini-Apps"]
  },
  {
    id: 5,
    tagName: "Blockchain Development",
    tags: ["Blockchain Development", "Mobile Blockchain Development"]
  },
  {
    id: 6,
    tagName: "all filters",
    tags: ["all filters"]
  }
];

export const cases = [
  {
    id: 1,
    tags: [
      { isMain: true, tagName: "Web Development" },
      { isMain: true, tagName: "AI Development" },
      { isMain: false, tagName: "Crypto Wallet" },
      { isMain: false, tagName: "DeFi" },
      { isMain: false, tagName: "NFT" }
    ],
    filterTags: [
      { tagName: "Web Development" },
      { tagName: "AI Development" },
      { tagName: "Crypto Wallet" },
      { tagName: "DeFi" },
      { tagName: "NFT" }
    ],
    caseName: "AGNT.Hub",
    caseDescription:
      "AGNT.Hub is the first omnichain ecosystem for AI agents in Web3, also integrated into X. By combining AI automation, Web3 analytics, and cross-chain execution, the platform enables users to create, deploy, and monetize AI-driven solutions. As part of the DeFAI sector, AGNT.Hub connects AI market strategies with blockchain infrastructure, setting a new standard for decentralized AI.",
    link: "cases/agnt",
    caseImage: agntImage,
    caseMobileImage: agntMobile,
    imageHeight: 560,
    containerWidth: 870
  },
  {
    id: 2,
    tags: [
      { isMain: true, tagName: "Web Development" },
      { isMain: false, tagName: "DeFi" },
      { isMain: false, tagName: "Bridge" },
      { isMain: false, tagName: "NFT" }
    ],
    filterTags: [
      { tagName: "Web Development" },
      { tagName: "Bridge" },
      { tagName: "DeFi" },
      { tagName: "NFT" }
    ],
    caseName: "Retrobridge",
    caseDescription:
      "RetroBridge is a blockchain-powered platform enabling seamless cross-chain asset transfers. With $200M in bridged volume and 1M+ successful transactions, it demonstrates the growing demand for interoperability in Web3.",
    link: "cases/retrobridge",
    caseImage: retroBridgeImage,
    caseMobileImage: retroBridgeMobile,
    imageHeight: 560,
    containerWidth: 769
  },
  {
    id: 3,
    tags: [
      { isMain: true, tagName: "Web Development" },
      { isMain: true, tagName: "Mobile App" },
      { isMain: false, tagName: "GameFi" },
      { isMain: false, tagName: "Crypto Wallet" },
      { isMain: false, tagName: "Trading" },
      { isMain: false, tagName: "DEX" },
      { isMain: false, tagName: "DeFi" },
      { isMain: false, tagName: "NFT" },
      { isMain: false, tagName: "Staking" }
    ],
    filterTags: [
      { tagName: "Web Development" },
      { tagName: "Mobile App" },
      { tagName: "GameFi" },
      { tagName: "Crypto Wallet" },
      { tagName: "Trading" },
      { tagName: "DEX" },
      { tagName: "DeFi" },
      { tagName: "NFT" },
      { tagName: "Staking" },
      { tagName: "Mobile GameFi" },
      { tagName: "Mobile Crypto Wallet" },
      { tagName: "Mobile Trading" },
      { tagName: "Mobile DEX" },
      { tagName: "Mobile DeFi" },
      { tagName: "Mobile NFT" },
      { tagName: "Mobile Staking" }
    ],
    caseName: "Step app",
    caseDescription:
      "StepApp is an innovative Move-to-Earn platform that rewards users for physical movement. With over 300,000 active users, 9M unique wallets and a presence in 100+ countries, the project exemplifies the intersection of fitness and blockchain innovation.",
    link: "cases/step-app",
    caseImage: stepAppImage,
    caseMobileImage: stepUpMobile,
    imageHeight: 560,
    containerWidth: 848,
    tagsWidth: 510
  },
  {
    id: 4,
    tags: [
      { isMain: true, tagName: "Web Development" },
      { isMain: false, tagName: "Trading" },
      { isMain: false, tagName: "NFT" }
    ],
    filterTags: [
      { tagName: "Web Development" },
      { tagName: "Trading" },
      { tagName: "NFT" }
    ],
    caseName: "GMX Blueberry Club",
    caseDescription:
      "GMX Blueberry Club (GBC) is a next-generation NFT platform that combines customization, trading, and gamification. It allows users to collect and personalize GBC NFTs, trade assets, earn Sweet Points, and participate in competitions and interactive quests.",
    link: "cases/gbc",
    caseImage: gbcImage,
    caseMobileImage: gbcMobile,
    imageHeight: 560,
    containerWidth: 860
  },
  {
    id: 5,
    tags: [
      { isMain: true, tagName: "Web Development" },
      { isMain: true, tagName: "AI Development" },
      { isMain: true, tagName: "Blockchain Development" },
      { isMain: false, tagName: "Bridge" },
      { isMain: false, tagName: "Staking" },
      { isMain: false, tagName: "L1" }
    ],
    filterTags: [
      { tagName: "Web Development" },
      { tagName: "AI Development" },
      { tagName: "Blockchain Development" },
      { tagName: "Bridge" },
      { tagName: "Staking" },
      { tagName: "L1" }
    ],
    caseName: "Hybrid",
    caseDescription:
      "Hybrid is a Layer 2 blockchain on Arbitrum Nitro, integrating the Mixture of Experts (MoE) framework to power specialized AI agents. By enabling real-time AI execution on-chain, it bridges blockchain and AI-driven solutions. With Atlas – The Web3 Copilot, Hybrid simplifies market research, data tracking, and AI monetization, solidifying its role in blockchain innovation.",
    link: "cases/hybrid",
    caseImage: hybridImage,
    caseMobileImage: hybrydMobileIcon,
    imageHeight: 560,
    containerWidth: 848
  },

  // TEMPORARILY HIDE: Reflect case card is hidden until design is finalized
  // {
  //   id: 6,
  //   tags: [
  //     { isMain: true, tagName: "Web Development" },
  //     { isMain: true, tagName: "AI Development" },
  //     { isMain: false, tagName: "Trading" },
  //     { isMain: false, tagName: "DeFi" }
  //   ],
  //   caseName: "Reflect",
  //   caseDescription:
  //     "Reflect is an AI agent designed to streamline DeFi interactions across Velodrome, Aerodrome, and 10+ additional chains. By enabling users to manage liquidity, execute swaps, stake assets, and vote on governance proposals directly through chat commands, Reflect enhances simplicity and accessibility in DeFAI.",
  //   link: "cases/reflect",
  //   caseImage: reflectImage,
  //   caseMobileImage: reflectMobileImg,
  //   imageHeight: 560,
  //   containerWidth: 848
  // },
  {
    id: 7,
    tags: [
      { isMain: true, tagName: "Mobile App" },
      { isMain: true, tagName: "Telegram Mini-Apps" },
      { isMain: false, tagName: "GameFi" }
    ],
    filterTags: [
      { tagName: "Mobile App" },
      { tagName: "Mobile Telegram Mini-Apps" },
      { tagName: "Mobile GameFi" }
    ],
    caseName: "Pixelverse",
    caseDescription:
      "PixelVerse bridges Web2 and Web3 gaming with Telegram Mini-Apps like PixelTap, achieving 45 million monthly active users (MAU).",
    link: "cases/pixel-verse",
    caseImage: pixelVerseImage,
    caseMobileImage: pixelverseMobileImg,
    imageHeight: 560,
    containerWidth: 450
  },

  {
    id: 8,
    tags: [
      { isMain: true, tagName: "Web Development" },
      { isMain: false, tagName: "DeFi" }
    ],
    caseName: "BRC20",
    caseDescription:
      "BRC20 is the first Launchpad built for the Ordinals ecosystem, redefining how Bitcoin-based assets are distributed and traded.",
    link: "cases/brc20",
    caseImage: brc20Image,
    caseMobileImage: brc20Mobile,
    imageHeight: 540,
    containerWidth: 450
  },

  {
    id: 9,
    tags: [
      { isMain: true, tagName: "Mobile App" },
      { isMain: false, tagName: "Trading" },
      { isMain: false, tagName: "Crypto Wallet" }
    ],
    filterTags: [
      { tagName: "Mobile App" },
      { tagName: "Mobile Trading" },
      { tagName: "Mobile Crypto Wallet" }
    ],
    caseName: "Memelut",
    caseDescription:
      "Memelut is an all-in-one app that simplifies exploring, trading, and storing memecoins. Designed for the growing $1.5T annual memecoin market, it eliminates the need for multiple apps by integrating a swipe-to-trade experience, social feeds, and secure storage into a single platform.",
    link: "cases/memelut",
    caseImage: memelutImage,
    caseMobileImage: memeLutMobileImg,
    imageHeight: 560,
    containerWidth: 730
  },
  {
    id: 10,
    tags: [
      { isMain: true, tagName: "Web Development" },
      { isMain: true, tagName: "Blockchain Development" },
      { isMain: false, tagName: "Trading" },
      { isMain: false, tagName: "Crypto Wallet" },
      { isMain: false, tagName: "DEX" },
      { isMain: false, tagName: "DeFi" },
      { isMain: false, tagName: "Bridge" },
      { isMain: false, tagName: "L1" },
      { isMain: false, tagName: "Staking" }
    ],
    filterTags: [
      { tagName: "Web Development" },
      { tagName: "Blockchain Development" },
      { tagName: "Trading" },
      { tagName: "Crypto Wallet" },
      { tagName: "DEX" },
      { tagName: "DeFi" },
      { tagName: "Bridge" },
      { tagName: "L1" },
      { tagName: "Staking" }
    ],
    caseName: "Tenet",
    caseDescription:
      "Tenet is a Cosmos-based Layer-1 blockchain designed to validate networks using LSD/LRT assets. By integrating LayerZero technology, Tenet enables cross-chain liquidity, governance participation, and diversified staking opportunities across Ethereum, BNB, Polygon, Avalanche, and more.",
    link: "cases/tenet",
    caseImage: tenetImage,
    caseMobileImage: tenetMobileImg,
    imageHeight: 560,
    containerWidth: 630
  }
];
