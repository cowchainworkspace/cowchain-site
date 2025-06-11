import {
  gbcRewardsFive,
  gbcRewardsFour,
  gbcRewardsKeys,
  gbcRewardsOne,
  gbcRewardsThree,
  gbcRewardsTwo
} from "@/assets/cases/gbc/rewards";
import {
  gbcSlideOne,
  gbcSlideThree,
  gbcSlideTwo
} from "@/assets/cases/gbc/slider";
import {
  gbcClubSlideEight,
  gbcClubSlideFive,
  gbcClubSlideFour,
  gbcClubSlideOne,
  gbcClubSlideSeven,
  gbcClubSlideSix,
  gbcClubSlideThree,
  gbcClubSlideTwo
} from "@/assets/cases/gbc/slides";
import {
  gbcSolutionGroup,
  gbcSolutionGroupMobile,
  gbcSolutionKey,
  gbcSolutionKeyMobile,
  gbcSolutionQuest,
  gbcSolutionQuestMobile
} from "@/assets/cases/gbc/solutions";

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
        itemValue:
          "A dynamic dApp project that merges NFT customization, trading, and gamification."
      },
      {
        itemValue:
          "An interactive ecosystem with Sweet Points rewards, boosting user engagement."
      },
      {
        itemValue:
          "Integrated Camp as an additional engagement layer with structured blockchain study and interactive quests."
      },
      {
        itemValue:
          "Stable blockchain deployment supporting secure transactions and optimized performance."
      }
    ]
  },
  {
    id: 3,
    itemName: "Project Architecture",
    itemValue: [
      {
        itemValueTitle: "NFT Customization",
        itemValueDescription: "For equipping and personalizing GBC assets.",
        mobileData: "NFT Customization for equipping and personalizing GBC assets"
      },
      {
        itemValueTitle: "Wearables Marketplace",

        itemValueDescription: "A marketplace for trading of Wearables and NFTs.",
        mobileData: "A marketplace for trading of Wearables and NFTs"
      },
      {
        itemValueTitle: "Sweet Points",

        itemValueDescription:
          "A Sweet Points economy rewarding user activity with in-platform incentives.",
          mobileData: "A Sweet Points economy rewarding user activity with in-platform incentives"
      },
      {
        itemValueTitle: "Trading Competitions",

        itemValueDescription:
          "Trading competitions to drive market engagement and liquidity.",
          mobileData: "Trading competitions to drive market engagement and liquidity"
      },
      {
        itemValueTitle: "Camp Hub",

        itemValueDescription:
          "A Camp hub offering quests and structured blockchain study.",
          mobileData: "A Camp hub offering quests and structured blockchain study"
      }
    ]
  }
];

export const gbcSlides = [
  {
    id: 1,
    width: 623,
    height: 443,
    mobileHeight: 190,
    mobileWidth: 262,
    desc: "GBC wardrobe screen",
    href: gbcSlideOne
  },
  {
    id: 2,
    width: 623,
    height: 442,
    mobileHeight: 190,
    mobileWidth: 262,
    desc: "GBC NFT screen",
    href: gbcSlideTwo
  },
  {
    id: 3,
    width: 623,
    height: 445,
    mobileHeight: 190,
    mobileWidth: 262,
    desc: "GBC Wallet screen",
    href: gbcSlideThree
  },
  {
    id: 4,
    width: 623,
    height: 443,
    mobileHeight: 190,
    mobileWidth: 262,
    desc: "GBC wardrobe screen",
    href: gbcSlideOne
  },
  {
    id: 5,
    width: 623,
    height: 442,
    mobileHeight: 190,
    mobileWidth: 262,
    desc: "GBC NFT screen",
    href: gbcSlideTwo
  },
  {
    id: 6,
    width: 623,
    height: 445,
    mobileHeight: 190,
    mobileWidth: 262,
    desc: "GBC Wallet screen",
    href: gbcSlideThree
  }
];

export const gbcSolutions = [
  {
    id: 1,
    title: "Sweet Points & Reward System",
    desc: "Built an incentive system where users earn Sweet Points through transactions, participation, and completing quests.",
    textBlockWidth: 572,
    img: null
  },
  {
    id: 2,
    title: "NFT Customization & Trading Integration",
    desc: "Built a customization module allowing users to personalize NFTs and trade Wearables & assets in a secure marketplace.",
    textBlockWidth: 570,
    img: {
      mobileHeight: 141,
      mobileWidth: 273,
      width: 363,
      height: 250,
      info: "GBC keys",
      href: gbcSolutionKey,
      mobileHref: gbcSolutionKeyMobile
    }
  },
  {
    id: 3,
    title: "Secure & Scalable Transactions",
    desc: "Implemented on-chain trading mechanics with optimized performance, ensuring reliable NFT transactions and scalable performance.",
    textBlockWidth: 547,
    img: {
      mobileHeight: 196,
      mobileWidth: 343,
      width: 510,
      height: 332,
      info: "GBC NFT groups",
      leftMargin: "xl:-mr-[30px]",
      href: gbcSolutionGroup,
      mobileHref: gbcSolutionGroupMobile
    }
  },
  {
    id: 4,
    title: "Gamified Learning with Camp",
    desc: "Introduced Camp, a learning hub that combines interactive quests and structured blockchain study, making engagement both educational and rewarding.",
    textBlockWidth: 598,
    img: {
      mobileHeight: 196,
      mobileWidth: 196,
      width: 340,
      height: 340,
      info: "GBC quest",
      leftMargin: "xl:ml-[61px]",
      href: gbcSolutionQuest,
      mobileHref: gbcSolutionQuestMobile
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
    people:
      "Oleh Shutiak, Nazar Ostafiichuk, Ruslan Hrinov, Vladyslav Buzhenko, Vladyslav Atanov, Yaroslav Samoilenko, Daniil Stoian, Danylo Provilsky, Oleh Popovych, Vladyslav Pereder"
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
    people:
      "Yurii Honoskov, Vitalii Dorokhin, Maksym Podoliak, Taras Yakushevych, Evgeniy Kilochek"
  }
];

