import {
  gbcRewardsFive,
  gbcRewardsFour,
  gbcRewardsKeys,
  gbcRewardsOne,
  gbcRewardsThree,
  gbcRewardsTwo
} from "../../../../../../public/cases/gbc/rewards";
import {
  gbcSlideOne,
  gbcSlideThree,
  gbcSlideTwo
} from "../../../../../../public/cases/gbc/slider";
import {
  gbcClubSlideEight,
  gbcClubSlideFive,
  gbcClubSlideFour,
  gbcClubSlideOne,
  gbcClubSlideSeven,
  gbcClubSlideSix,
  gbcClubSlideThree,
  gbcClubSlideTwo
} from "../../../../../../public/cases/gbc/slides";
import {
  gbcSolutionGroup,
  gbcSolutionKey,
  gbcSolutionQuest
} from "../../../../../../public/cases/gbc/solutions";

import { memolut, m2eNew, reflectNew } from "../../../../../../public/projects";

export const gbcTags = [
  {
    id: 1,
    tagLabel: "Web Development"
  },
  {
    id: 2,
    tagLabel: "Trading"
  },
  {
    id: 3,
    tagLabel: "NFT"
  }
];

export const overviewGbcItems = [
  {
    id: 1,
    itemName: "tech stack",
    itemValue: "React, Node.Js, Nest.Js, Solidity, Web3.Js, PostgreSQL."
  },
  {
    id: 2,
    itemName: "Project Outcomes",
    itemValue: [
      {
        itemValueDescription:
          "A dynamic dApp project that merges NFT customization, trading, and gamification."
      },
      {
        itemValueDescription:
          "An interactive ecosystem with Sweet Points rewards, boosting user engagement."
      },
      {
        itemValueDescription:
          "Integrated Camp as an additional engagement layer with structured blockchain study and interactive quests."
      },
      {
        itemValueDescription:
          "Stable blockchain deployment supporting secure transactions and optimized performance."
      }
    ]
  },
  {
    id: 3,
    itemName: "Project Architecture",
    itemDesc:
      "GBC dApp’s modular structure enables a scalable and adaptable NFT ecosystem. Key components include:",
    itemValue: [
      {
        itemValueDescription:
          "NFT Customization for equipping and personalizing GBC assets."
      },
      {
        itemValueDescription: "A marketplace for trading of Wearables and NFTs."
      },
      {
        itemValueDescription:
          "A Sweet Points economy rewarding user activity with in-platform incentives."
      },
      {
        itemValueDescription:
          "Trading competitions to drive market engagement and liquidity."
      },
      {
        itemValueDescription:
          "A Camp hub offering quests and structured blockchain study."
      }
    ]
  }
];

export const gbcSlides = [
  {
    id: 1,
    width: 623,
    height: 443,
    desc: "GBC wardrobe screen",
    href: gbcSlideOne
  },
  {
    id: 2,
    width: 623,
    height: 442,
    desc: "GBC NFT screen",
    href: gbcSlideTwo
  },
  {
    id: 3,
    width: 623,
    height: 445,
    desc: "GBC Wallet screen",
    href: gbcSlideThree
  },
  {
    id: 4,
    width: 623,
    height: 443,
    desc: "GBC wardrobe screen",
    href: gbcSlideOne
  },
  {
    id: 5,
    width: 623,
    height: 442,
    desc: "GBC NFT screen",
    href: gbcSlideTwo
  },
  {
    id: 6,
    width: 623,
    height: 445,
    desc: "GBC Wallet screen",
    href: gbcSlideThree
  }
];

export const gbcSolutions = [
  {
    id: 1,
    title: "Sweet Points & Reward System",
    desc: "Built an incentive system where users earn Sweet Points through transactions, participation, and completing quests.",
    textBlockWidth: 524,
    img: null
  },
  {
    id: 2,
    title: "NFT Customization & Trading Integration",
    desc: "Built a customization module allowing users to personalize NFTs and trade Wearables & assets in a secure marketplace.",
    textBlockWidth: 541,
    img: {
      width: 364,
      height: 292,
      info: "GBC keys",
      leftMargin: "ml-[52px]",
      href: gbcSolutionKey
    }
  },
  {
    id: 3,
    title: "Secure & Scalable Transactions",
    desc: "Implemented on-chain trading mechanics with optimized performance, ensuring reliable NFT transactions and scalable performance.",
    textBlockWidth: 524,
    img: {
      width: 533,
      height: 352,
      info: "GBC NFT groups",
      leftMargin: "-mr-[30px]",
      href: gbcSolutionGroup
    }
  },
  {
    id: 4,
    title: "Gamified Learning with Camp",
    desc: "Introduced Camp, a learning hub that combines interactive quests and structured blockchain study, making engagement both educational and rewarding.",
    textBlockWidth: 598,
    img: {
      width: 340,
      height: 340,
      info: "GBC quest",
      leftMargin: "ml-[61px]",
      href: gbcSolutionQuest
    }
  }
];

export const gbcRewards = [
  {
    id: 1,
    title: "GMX Pass",
    desc: "Keep your deposit to reach the next tier",
    img: gbcRewardsKeys,
    width: 177,
    height: 177,
    imgDesc: "GMX Pass"
  },
  {
    id: 2,
    title: "GMX Pass Tier 1",
    img: gbcRewardsOne,
    width: 140,
    height: 140,
    imgDesc: "GMX Pass Tier 1"
  },
  {
    id: 3,
    title: "Classic Polo",
    img: gbcRewardsTwo,
    width: 140,
    height: 140,
    imgDesc: "Classic Polo"
  },
  {
    id: 3,
    title: "Stonk",
    img: gbcRewardsThree,
    width: 140,
    height: 140,
    imgDesc: "Stonk"
  },
  {
    id: 4,
    title: "Old Money Hat",
    img: gbcRewardsFour,
    width: 140,
    height: 140,
    imgDesc: "Old Money Hat"
  },
  {
    id: 5,
    title: "Chart",
    img: gbcRewardsFive,
    width: 140,
    height: 140,
    imgDesc: "Chart"
  }
];

export const gbcClubSlides = [
  {
    id: 1,
    tag: "GBC Starter",
    name: "Kudaberi",
    width: 160,
    height: 160,
    imgDesc: "Kudaberi",
    img: gbcClubSlideOne
  },
  {
    id: 2,
    tag: "GMX Blueberry Club",
    name: "GBC #5939",
    width: 160,
    height: 160,
    imgDesc: "GBC #5939",
    img: gbcClubSlideTwo
  },
  {
    id: 3,
    tag: "GMX Blueberry Club",
    name: "GBC #5939",
    width: 160,
    height: 160,
    imgDesc: "GBC #5939",
    img: gbcClubSlideThree
  },
  {
    id: 4,
    tag: "GMX Blueberry Club",
    name: "GBC #5939",
    width: 160,
    height: 160,
    imgDesc: '"GBC #5939',
    img: gbcClubSlideFour
  },
  {
    id: 5,
    tag: "GBC Starter",
    name: "GBC #5939",
    width: 160,
    height: 160,
    imgDesc: "GBC #5939",
    img: gbcClubSlideFive
  },
  {
    id: 6,
    tag: "GMX Blueberry Club",
    name: "GBC #5939",
    width: 160,
    height: 160,
    imgDesc: '"GBC #5939',
    img: gbcClubSlideSix
  },
  {
    id: 7,
    tag: "GMX Blueberry Club",
    name: "GBC #5939",
    width: 160,
    height: 160,
    imgDesc: '"GBC #5939',
    img: gbcClubSlideSeven
  },
  {
    id: 8,
    tag: "GMX Blueberry Club",
    name: "GBC #5939",
    width: 160,
    height: 160,
    imgDesc: '"GBC #5939',
    img: gbcClubSlideEight
  }
];

export const gbcTeam = [
  {
    id: 1,
    department: "development",
    people: "Oleh Shutiak, Nazar Ostafiichuk, Ruslan Hrinov, Vladyslav Buzhenko, Vladyslav Atanov, Yaroslav Samoilenko, Daniil Stoian, Danylo Provilsky, Oleh Popovych, Vladyslav Pereder"
  },
  {
    id: 2,
    department: "project management",
    people: "Oleksandr Sosnytskyi"
  },
  {
    id: 3,
    department: "devops",
    people: "Alexander Filatov"
  },
  {
    id: 4,
    department: "qa",
    people: "Yurii Honoskov, Vitalii Dorokhin, Maksym Podoliak, Taras Yakushevych, Evgeniy Kilochek"
  }
];

export const gbcProjects = [
  {
    id: 1,
    tags: ["Website Development ", "Mobile App", "GameFi", "Trading", "DEX", "DeFi", "NFT", "Staking", "Crypto Wallet"],
    title: "m2e platform",
    desc: "StepApp is an innovative Move-to-Earn platform that rewards users for physical movement.",
    img: m2eNew,
    itemClasses: "mt-[363px]",
    projectLink: "#",
    textColor: "text-secondary",
    textGap: "gap-[24px]"
  },
  {
    id: 2,
    tags: ['Mobile App', 'Trading', "Crypto Wallet"],
    title: 'memelut',
    desc: 'Memelut is an all-in-one app that simplifies exploring, trading, and storing memecoins.',
    img: memolut,
    projectLink: "#",
    textGap: "gap-[24px]"
  },
  {
    id: 3,
    tags: [ 'Website Development', '24/7 Support', 'Web3'],
    title: 'REFLECT',
    desc: 'Reflect is an AI agent designed to streamline DeFi interactions across Velodrome, Aerodrome, and 10+ additional chains.',
    img: reflectNew,
    projectLink: "#"
  },

]
