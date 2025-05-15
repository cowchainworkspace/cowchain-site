import {
 slideOne,
 slideThree,
 slideTwo
} from "../../../../../../public/cases/brc20/slider";
import {
brc20SolutionFour, brc20SolutionMobFour, brc20SolutionMobOne, brc20SolutionMobThree, brc20SolutionMobTwo, brc20SolutionOne, brc20SolutionThree, brc20SolutionTwo 
} from "../../../../../../public/cases/brc20/solutions";

export const brc20Tags = [
  {
    id: 1,
    tagLabel: "Web Development"
  },
  {
    id: 2,
    tagLabel: "DeFi"
  },
];



export const overviewBRC20Items = [
  {
    id: 1,
    itemName: "Project Outcomes",
    itemValue: [
      {
        itemValue:
          "$80M raised within 48 hours, marking a major milestone in BRC20 innovation stories"
      },
      {
        itemValue:
          "45,000+ X users, building an engaged community around Ordinals adoption"
      },
    ]
  },
  {
    id: 2,
    itemName: "Project Architecture",
    itemValue: [
      {
        itemValue:
          "BRC20 Launchpad, facilitating token distribution and community-based funding"
      },
      {
        itemValue:
          "Market Dashboard, tracking top BRC20 tokens, Ordinals, and providing educational resources"
      },
      {
        itemValue:
          "BTC Staking & Trading, offering tailored staking and trading opportunities for users"
      },
      {
        itemValue:
          "Testnet Bridge, enabling early experimentation before mainnet deployment"
      }
    ]
  },

];

export const brc20Slides = [
  {
    id: 1,
    width: 946,
    height: 534,
    mobileHeight: 154,
    mobileWidth: 274,
    desc: "BRC20 assembly screen",
    href: slideOne
  },
  {
    id: 2,
    width: 946,
    height: 534,
    mobileHeight: 154,
    mobileWidth: 274,
    desc: "BRC20 staking screen",
    href: slideTwo
  },
  {
    id: 3,
    width: 946,
    height: 534,
    mobileHeight: 154,
    mobileWidth: 274,
    desc: "BRC20 laucnhpad screen",
    href: slideThree
  },
  {
    id: 4,
    width: 946,
    height: 534,
    mobileHeight: 154,
    mobileWidth: 274,
    desc: "BRC20 assembly screen",
    href: slideOne
  },
  {
    id: 5,
    width: 946,
    height: 534,
    mobileHeight: 154,
    mobileWidth: 274,
    desc: "BRC20 staking screen",
    href: slideTwo
  },
  {
    id: 6,
    width: 946,
    height: 534,
    mobileHeight: 154,
    mobileWidth: 274,
    desc: "BRC20 laucnhpad screen",
    href: slideThree
  },
];

export const brc20Solutions = [
  {
    id: 1,
    title: "BRC20 Launchpad Development",
    desc: "Built a dedicated launchpad for BRC20 token distribution, ensuring fair launches and optimizing liquidity allocation for projects.",
    textBlockWidth: 450,
    img: {
      mobileHeight: 176,
      mobileWidth: 207,
      width: 348,
      height: 296,
      info: "Participate pop up",
      href: brc20SolutionOne,
      mobileHref: brc20SolutionMobOne

    }
  },
  {
    id: 2,
    title: "Market Dashboard",
    desc: "Developed a dashboard offering live tracking of BRC20 token insights, Ordinals analytics, and educational resources to support new adopters.",
    textBlockWidth: 500,
    img: {
      mobileHeight: 157,
      mobileWidth: 130,
      width: 256,
      height: 309,
      info: "BRC20 White hive",
      href: brc20SolutionTwo,
      mobileHref: brc20SolutionMobTwo

    }
  },
  {
    id: 3,
    title: "BTC Staking & Trading",
    desc: "Integrated staking and trading options allow users to earn passive income and execute BTC trades directly on the platform.",
    textBlockWidth: 485,
    img: {
      mobileHeight: 166,
      mobileWidth: 334,
      width: 585,
      height: 290,
      info: "GBC NFT groups",
      href: brc20SolutionThree,
      mobileHref: brc20SolutionMobThree
    },
          imageClasses: "xl:-mr-[50px]",

  },
  {
    id: 4,
    title: "Testnet Bridge Implementation",
    desc: "Built a testnet bridge, enabling projects to test deployments before launching on the Bitcoin mainnet.",
    textBlockWidth: 520,
    img: {
      mobileHeight: 197,
      mobileWidth: 315,
      width: 501,
      height: 314,
      info: "GBC quest",
      href: brc20SolutionFour,
      mobileHref: brc20SolutionMobFour

    },
    imageClasses: "xl:-ml-[61px]",
  }
];

export const brc20Team = [
  {
    id: 1,
    department: "development",
    people:
      "Oleh Proidakov, Bohdan Solomakha, Oleh Shutiak"
  },
  {
    id: 2,
    department: "project management",
    people: "Oleksandr Bohdanov"
  },
  {
    id: 3,
    department: "devops",
    people: "Ivan Chalienko, Taras Yakushevych"
  }
];

