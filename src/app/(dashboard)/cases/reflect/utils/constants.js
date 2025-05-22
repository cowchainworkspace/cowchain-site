import {
  firstSlideReflect,
  secondSlideReflect,
  thirdSlideReflect
} from "../../../../../../public/cases/reflect/slider";
import {
  reflectCrossPlatformAi,
  reflectAiPowered,
  reflectGovernance,
  reflectRealTimePortfolio,
  reflectVelodrome,
  mobReflectAiPowered,
  mobReflectCrossPlatformAi,
  mobReflectGovernance,
  mobReflectRealTimePortfolio,
  mobReflectVelodrome
} from "../../../../../../public/cases/reflect/solutions";

export const reflectTags = [
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

export const overviewReflectItems = [
  {
    id: 1,
    itemName: "tech stack",
    itemValue:
      "TypeScript, React, TailwindCSS, NestJS, NodeJS, PostgreSQL, Redis, Viem, Wagmi, Privy, OpenAI libraries"
  },
  {
    id: 2,
    itemName: "Project Outcomes",
    itemValue: [
      {
        itemValueDescription:
          "Multi-token swaps execute 50% faster than standard Aerodrome transactions"
      },
      {
        itemValueDescription:
          "Users interact with DeFAI directly on leading social networks"
      },
      {
        itemValueDescription:
          "Enhanced transparency through blockchain technology, ensuring secure transactions."
      }
    ]
  },
  {
    id: 2,
    itemName: "Project Architecture",
    itemValue: [
      {
        itemValueDescription:
          "AI chat execution for managing swaps, staking, liquidity, and governance through text commands"
      },
      {
        itemValueDescription:
          "Twitter and Telegram bots enabling DeFAI actions directly in chat without switching apps"
      },
      {
        itemValueDescription:
          "AI-powered portfolio analytics for tracking token holdings, rewards, and governance locks"
      },
      {
        itemValueDescription:
          "Multi-chain compatibility supporting Velodrome, Aerodrome, and 10+ additional networks"
      }
    ]
  }
];

export const reflectSlides = [
  {
    id: 1,
    width: 837,
    height: 492,
    mobileHeight: 158,
    mobileWidth: 261,
    desc: "Reflect Screen",
    href: firstSlideReflect
  },
  {
    id: 2,
    width: 837,
    height: 492,
    mobileHeight: 158,
    mobileWidth: 261,
    desc: "Reflect Screen",
    href: secondSlideReflect
  },
  {
    id: 3,
    width: 837,
    height: 492,
    mobileHeight: 158,
    mobileWidth: 261,
    desc: "Reflect screen",
    href: thirdSlideReflect
  }
];

export const reflectSolutions = [
  {
    id: 1,
    title: "AI-Powered DeFi Automation",
    desc: "Developed Reflect as an AI-driven chat assistant, enabling users to swap, stake, and vote directly within messaging platforms.",
    textBlockWidth: 670,
    img: {
      mobileHeight: 157,
      mobileWidth: 343,
      width: 530,
      height: 372,
      info: "AI-Powered DeFi Automation",
      href: reflectAiPowered,
      mobileHref: mobReflectAiPowered
    }
  },
  {
    id: 2,
    title: "Velodrome & Aerodrome Integration",
    desc: "Expanded Reflect’s functionality across 10+ EVM chains, optimizing transaction execution speed and improving multi-token trading.",
    textBlockWidth: 630,
    textStyle: "xl:items-start !text-left",
    img: {
      mobileHeight: 157,
      mobileWidth: 343,
      width: 530,
      height: 372,
      info: "Velodrome & Aerodrome Integration",
      href: reflectVelodrome,
      mobileHref: mobReflectVelodrome
    }
  },
  {
    id: 3,
    title: "Cross-Platform AI Execution",
    desc: "Integrated Reflect into Twitter and Telegram, bringing DeFAI into social platforms without the need for external apps",
    textBlockWidth: 603,
    img: {
      mobileHeight: 157,
      mobileWidth: 343,
      width: 530,
      height: 372,
      info: "Cross-Platform AI Execution",
      href: reflectCrossPlatformAi,
      mobileHref: mobReflectCrossPlatformAi
    }
  },
  {
    id: 4,
    title: "Real-Time Portfolio Insights",
    desc: "Built a wallet dashboard displaying balances, staking rewards, governance participation, and liquidity positions.",
    textBlockWidth: 603,
    textStyle: "xl:items-start !text-left",
    img: {
      mobileHeight: 157,
      mobileWidth: 343,
      width: 530,
      height: 372,
      info: "Real-Time Portfolio Insights",
      href: reflectRealTimePortfolio,
      mobileHref: mobReflectRealTimePortfolio
    }
  },
  {
    id: 4,
    title: "Governance & Voting Automatio",
    desc: "Enabled AI execution of staking, emissions claims, and governance voting, reducing manual effort and ensuring active participation.",
    textBlockWidth: 603,
    img: {
      mobileHeight: 157,
      mobileWidth: 343,
      width: 530,
      height: 372,
      info: "Governance & Voting Automatio",
      href: reflectGovernance,
      mobileHref: mobReflectGovernance
    }
  }
];

export const reflectTeam = [
  {
    id: 1,
    department: "development",
    people: "Oleh Proidakov, Egor Kravchenko, Volodymyr Romanenko , Oleh Popovych, David Shahmatov."
  },
  {
    id: 2,
    department: "project management",
    people: "Oleksandr Bohdanov"
  },
  {
    id: 3,
    department: "Analytic",
    people: "Oleksandr Handzhuk"
  },
  {
    id: 4,
    department: "qa",
    people: "Yurii Honoskov, Evgeniy Kilochek, Olena Kovalova"
  }
];
