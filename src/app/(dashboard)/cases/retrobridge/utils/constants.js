import {
  slideFour,
  slideOne,
  slideThree,
  slideTwo
} from "../../../../../../public/cases/RetroBridge/slider";

import {
  bottles,
  bottlesTwo,
  bridger,
  display,
  graph,
  wallet
} from "../../../../../../public/cases/RetroBridge/solutions";

import { agent, gbc, m2ePlatformImg } from "../../../../../../public/projects";

export const retroBridgeTags = [
  {
    id: 1,
    tagLabel: "Web Development"
  },
  {
    id: 2,
    tagLabel: "DeFi"
  },
  {
    id: 3,
    tagLabel: "Bridge"
  },
  {
    id: 4,
    tagLabel: "NFT"
  },
  

];

export const overviewRetroBridgeItems = [
  {
    id: 1,
    itemName: "tech stack",
    itemValue: "React, Node.Js, Solidity, Ethers.Js, Web3.Js, MongoDB."
  },
  {
    id: 2,
    itemName: "Project Outcomes",
    itemValue: [
      {
        desc: "Over $200M in bridged transactions."
      },
      {
        desc: "1M+ executed cross-chain bridges."
      },
      {
        desc: "Positioned RetroBridge as a key blockchain application example in multichain operations."
      }
    ]
  },
  {
    id: 3,
    itemName: "Project Architecture",
    itemDesc:
      "RetroBridge integrates robust blockchain technology examples such as smart contracts and decentralized protocols to create an advanced bridging solution. Its architecture includes:",
    itemValue: [
      {
        desc: "A DEX for fast and secure token swaps."
      },
      {
        desc: "A testnet bridge and faucet for risk-free testing."
      },
      {
        desc: "A dApp explorer for tracking transactions."
      },
      {
        desc: "NFT-backed project phases for user engagement."
      }
    ]
  }
];

export const retroBridgeSlides = [
  {
    id: 1,
    width: 816,
    height: 539,
    desc: "sun set phase",
    href: slideOne
  },
  {
    id: 2,
    width: 817,
    height: 539,
    desc: "screen with a token transfer",
    href: slideTwo
  },
  {
    id: 3,
    width: 255,
    height: 539,
    desc: "mobile screen with a transfer details",
    href: slideThree
  },
  {
    id: 4,
    width: 818,
    height: 539,
    desc: "screen with a recent transactions",
    href: slideFour
  },
  {
    id: 5,
    width: 816,
    height: 539,
    desc: "sun set phase",
    href: slideOne
  },
  {
    id: 6,
    width: 817,
    height: 539,
    desc: "screen with a token transfer",
    href: slideTwo
  },
  {
    id: 7,
    width: 255,
    height: 539,
    desc: "mobile screen with a transfer details",
    href: slideThree
  },
  {
    id: 8,
    width: 818,
    height: 539,
    desc: "screen with a recent transactions",
    href: slideFour
  }
];

export const retroBridgeSolutions = [
  {
    id: 1,
    title: "Website & Bridging App",
    desc: "The platform’s website and app were built with React and Node.js, showcasing blockchain for business through responsive and scalable solutions.",
    textBlockWidth: 498,
    imageClasses: '-mt-[10px]',
    img: {
      width: 500,
      height:500,
      info: "decorated bottles with nfts inside",
      href: bottles
   }
  },
  {
    id: 2,
    title: "Testnet Bridge & Faucet",
    desc: "Developed a testnet bridge and faucet, allowing users to test cross-chain transactions and gain familiarity with the platform’s functionality before deploying assets on the main network.",
    textBlockWidth: 608,
    img: {
      width: 440,
      height: 400,
      info: "graph with decoration ellipse",
      href: graph,
    }
  },
  {
    id: 3,
    title: "Multichain Integration",
    desc: "Supported EVM and Layer 2 networks, plus emerging chains like StarkNet and Cosmos, expanding blockchain use cases while offering practical applications for supply chain blockchain in diverse industries.",
    textBlockWidth: 599,
    img: {
      width: 335,
      height: 406,
      info: "bridger display",
      href: display
    }
  },
  {
    id: 4,
    title: "Adventure Campaigns",
    desc: "Gamified experiences with challenges and rewards drove community engagement and adoption.",
    textBlockWidth: 448,
    img: {
      width: 400,
      height: 440,
      info: "bridge wallet with a decoration ellipse",
      href: wallet
    }
  },
  {
    id: 5,
    title: "NFT Integration",
    desc: "Phased project implementation, each stage supported by unique NFTs, fostering user engagement and showcasing blockchain’s potential in enhancing cross-chain transactions and interoperability.",
    textBlockWidth: 541,
    img: {
      width: 447,
      height: 320,
      info: "decorated bottles with nfts inside",
      href: bottlesTwo
    }
  },
  {
    id: 5,
    title: "dApp Explorer",
    desc: "Developed a dApp explorer enabling users to track transactions and blockchain activities efficiently, positioning the project as one of the standout blockchain case studies in cross-chain technology.",
    textBlockWidth: 605,
    img: {
      width: 374,
      height: 320,
      info: "coins with a hybrid icon",
      href: bridger
    }
  }
];

export const retroBridgeTeam = [
  {
    id: 1,
    department: "development",
    people: "Oleh Shutiak, Oleh Proidakov"
  },
  {
    id: 2,
    department: "project management",
    people: "Aleksandr Bohdanov"
  },
  {
    id: 3,
    department: "marketing & Seo",
    people: "Alexandr Yaremenko"
  },
  {
    id: 4,
    department: "ui/ux design",
    people: "Valeriya Bobko"
  }
];

export const retroBridgeProjects = [
  {
    id: 1,
    tags: ["Web Development ", "Mobile App", "GameFi", "Trading", "DEX", "DeFi", "NFT", "Staking", "Crypto Wallet"],
    title: "m2e platform",
    desc: "StepApp is an innovative Move-to-Earn platform that rewards users for physical movement.",
    img: m2ePlatformImg,
    itemClasses: "pb-[30px] mt-auto",
    projectLink: "#"
  },
  {
    id: 2,   
    tags: ["Web Development", "Trading", "NFT"],
    title: "GBC DAPP",
    desc: "GBC is a next-generation NFT platform that combines customization, trading, and gamification.",
    img: gbc,
    itemClasses: "pb-[30px] mt-auto",
    projectLink: "gbc"
  },
  {
    id: 3,
    tags: ["Web Development", "AI Development", "DeFi", "Crypto Wallet"],
    title: "agenthub",
    desc: "AGNT.Hub is the first omnichain ecosystem for AI agents in Web3, also integrated into X.",
    img: agent,
    itemClasses: "pb-[30px] mt-auto",
    projectLink: "agnt"
  }
];
