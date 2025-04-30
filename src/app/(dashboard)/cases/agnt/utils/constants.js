import {
  slideOne,
  slideThree,
  slideTwo
} from "../../../../../../public/cases/agnt/slider";

import {
  solutionFive,
  solutionFour,
  solutionOne,
  solutionSix,
  solutionThree,
  solutionTwo, 
  solutionMobFive,
  solutionMobSix,
  solutionMobFour,
  solutionMobOne,
  solutionMobThree,
  solutionMobTwo
} from "../../../../../../public/cases/agnt/solutions";


import { crossChain, gbc, m2eNewOne } from "../../../../../../public/projects";

export const agntTags = [
  {
    id: 1,
    tagLabel: "Web Development"
  },
  {
    id: 2,
    tagLabel: "AI Development"
  },
  {
    id: 3,
    tagLabel: "Crypto Wallet"
  },
  {
    id: 4,
    tagLabel: "DeFi"
  },
  {
    id: 5,
    tagLabel: "NFT"
  },
  
];

export const overviewAgntItems = [
  {
    id: 1,
    itemName: "Project Outcomes",
    itemValue: [
      "7,241 users registered within 24 hours, reflecting solid initial adoption.",
      "160,000+ total users, reflecting rapid expansion in Web3 & AI automation.",
      "94,000 Twitter followers, building a highly engaged community."
    ]
  },
  {
    id: 2,
    itemName: "Project Architecture",
    itemValue: [
      {
        itemTitle: "AGNT Connect",
        itemValueDescription:
          "AGNT Connect, an AI-driven Web3 extension within X, featuring a non-custodial wallet for buying, sending, receiving, and swapping tokens directly inside X. It includes advanced analytics for tracking top accounts, AI-powered project agents for real-time insights, and Tweet-to-Deploy, enabling tokenized AI agent launches directly from X."
      },
      {
        itemTitle: "AGNT Marketplace",
        itemValueDescription:
          "AGNT Marketplace, a hub for building, upgrading, and monetizing AI agents. Users can deploy trading bots, risk managers, and on-chain analysts without coding, while the AI Extensions Marketplace provides automation tools and strategy upgrades."
      },
      {
        itemTitle: "AGNT Omnichain Deployer",
        itemValueDescription:
          "AGNT Omnichain Deployer, the first cross-chain AI agent hub, powered by LayerZero’s OFT. It enables AI deployment across Solana, Base and other EVM chains, with dynamic liquidity distribution, allowing AI agents to allocate capital across multiple networks based on launch conditions."
      }
    ]
  }
];

export const agntSlides = [
  {
    id: 1,
    width: 824,
    height: 586,
    mobileHeight: 200,
    mobileWidth: 282,
    desc: "Agent hub screen",
    href: slideOne
  },
  {
    id: 2,
    width: 824,
    height: 586,
    mobileHeight: 200,
    mobileWidth: 282,
    desc: "Agent hub screen",
    href: slideTwo
  },
  {
    id: 3,
    width: 824,
    height: 586,
    mobileHeight: 200,
    mobileWidth: 282,
    desc: "Agent hub screen",
    href: slideThree
  },
  {
    id: 4,
    width: 824,
    height: 586,
    mobileHeight: 200,
    mobileWidth: 282,
    desc: "Agent hub screen",
    href: slideOne
  },
  {
    id: 5,
    width: 824,
    height: 586,
    mobileHeight: 200,
    mobileWidth: 282,
    desc: "Agent hub screen",
    href: slideTwo
  },
  {
    id: 6,
    width: 824,
    height: 586,
    mobileHeight: 200,
    mobileWidth: 282,
    desc: "Agent hub screen",
    href: slideThree
  }
];

export const agntSolutions = [
  {
    id: 1,
    title: "Quest Gym",
    desc: "AGNT Quest Gym introduces a gamified way to earn AGNT Points by actively participating in the ecosystem. Users complete daily quests, try to make AI laugh, and dive deeper into AGNT.Hub through articles and quizzes to stack more points. A dynamic leaderboard tracks top participants, while NFT-based achievements mark those who were here before the meta flipped.",
    textBlockWidth: 647,
    img: {
      mobileHeight: 202,
      mobileWidth: 343,
      width: 527,
      height: 310,
      info: "Agnt screens",
      href: solutionOne,
      mobileHref: solutionMobOne
    }
  },
  {
    id: 2,
    title: "On-Chain Liquidity & DeFAI Automation",
    desc: <>"Enabled AI-powered execution across DeFAI, allowing agents<br className="hidden custom1430:block" /> to manage liquidity pools, stake, lend, and execute automated<br className="hidden custom1430:block" /> DeFAI strategies across multiple chains. No delays, no missed<br className="hidden custom1430:block" /> opportunities – just real-time execution. AGNT.Hub’s<br className="hidden custom1430:block" /> execution model is one of the most compelling case<br className="hidden custom1430:block" /> study reports in AI-driven blockchain automation."</>,
    textBlockWidth: 580,
    img: {
      width: 517,
      height: 340,
      mobileHeight: 222,
      mobileWidth: 343,
      info: "Agnt screens",
      href: solutionTwo,
      mobileHref: solutionMobTwo
    }
  },
  {
    id: 3,
    title: "Self-Custodial Web3 Wallet & AI Execution",
    desc: "Integrated a non-custodial wallet inside AGNT Connect, allowing users to buy, send, receive, and swap tokens directly within X. AI agents execute automated transactions, token swaps, and on-chain interactions with full security.",
    textBlockWidth: 588,
    img: {
      mobileHeight: 82,
      mobileWidth: 343,
      width: 567,
      height: 134,
      info: "Agnt screens",
      href: solutionSix,
      mobileHref: solutionMobThree

    }
  },
  {
    id: 4,
    title: "Web3 & AI Embedded in X",
    desc: "Developed AGNT Connect, a Web3 extension inside X, embedding AI-powered analytics, token interactions, and agent deployment directly into your feed. Users can track market trends, interact with AI agents, and execute trades seamlessly — without leaving X.",
    textBlockWidth: 625,
    img: {
      width: 517,
      height: 299,
      mobileHeight: 199,
      mobileWidth: 343,
      info: "Agnt screens",
      href: solutionThree,
      mobileHref: solutionMobFour
    }
  },
  {
    id: 5,
    title: "AI Agent Marketplace",
    desc: "Created AGNT Marketplace, a hub where users can deploy, customize, and scale AI agents with modular upgrades. No-code integrations allow agents to gain new trading logic, automation tools, and risk management features.",
    textBlockWidth: 601,
    img: {
      width: 567,
      height: 134,
      mobileHeight: 82,
      mobileWidth: 343,
      info: "Agnt screens",
      href: solutionFour,
      mobileHref: solutionMobFive

    }
  },
  {
    id: 6,
    title: "Omnichain AI Agent Deployment",
    desc: "Built AGNT Omnichain Deployer, enabling AI agents to operate across Solana, Base and other EVM chains. AI models dynamically allocate liquidity, execute cross-chain strategies, and adapt in real-time using LayerZero OFT.",
    textBlockWidth: 634,
    img: {
      width: 528,
      height: 306,
      mobileHeight: 210,
      mobileWidth: 343,
      info: "Agnt screens",
      href: solutionFive,
      mobileHref: solutionMobSix
    }
  }
];



export const agntTeam = [
  {
    id: 1,
    department: "development",
    people: "Oleh Shutiak, Andrii Shpontak, Yaroslav Samoilenko, Dmytro Pivkopa, Ruslan Hrinov, Vladyslav Buzhenko, Danylo Provilsky"
  },
  {
    id: 4,
    department: "qa",
    people: "Mykola Ursalov, Ivan Chalienko, Taras Pirus"
  }
];

export const agntProjects = [
  {
    id: 1,
    tags: ['Web Development', 'Defi', 'Bridge', "NFT"],
    title: 'RETROBRIDGE',
    desc: 'RetroBridge is a blockchain-powered platform enabling seamless cross-chain asset transfers.',
    img: crossChain,
    textColor: "text-secondary",
    projectLink: "retrobridge",
    textGap: "md:gap-[24px]",
    cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
  },
  {
    id: 2,
    tags: ['Web Development', 'Trading', "NFT"],
    title: 'GMX BLUEBERRY CLUB',
    desc: 'GBC is a next-generation NFT platform that combines customization, trading, and gamification.',
    img: gbc,
    textColor: "text-white",
    projectLink: "gbc",
    textGap: "md:gap-[24px]",
    cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
  },
  {
    id: 3,
    tags: ["Web Development ", "Mobile App", "GameFi", "Trading", "DEX", "DeFi", "NFT", "Staking", "Crypto Wallet"],
    title: 'STEP APP',
    desc: 'StepApp is an innovative Move-to-Earn platform that rewards users for physical movement.',
    img: m2eNewOne,
    textColor: "text-secondary",
    projectLink: "step-app",
    textGap: "md:gap-[24px]",
    cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
  },
]
