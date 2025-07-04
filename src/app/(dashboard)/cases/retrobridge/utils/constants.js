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
  wallet,
} from "../../../../../../public/cases/RetroBridge/solutions";

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

export const retroBridgeMobileTags = [
  {
    id: 1,
    tagLabel: "Web Development"
  },
  {
    id: 3,
    tagLabel: "Bridge"
  },
  {
    id: 2,
    tagLabel: "DeFi"
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
        desc: "Over $600M in bridged transactions."
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
        desc: "A dApp explorer for discovering Web3 apps, filtered by chain and category."
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
    href: slideOne,
    mobileHeight: 202,
    mobileWidth: 303,
  },
  {
    id: 2,
    width: 817,
    height: 539,
    desc: "screen with a token transfer",
    href: slideTwo,
    mobileHeight: 202,
    mobileWidth: 303,
  },
  {
    id: 3,
    width: 255,
    height: 539,
    desc: "mobile screen with a transfer details",
    href: slideThree,
    mobileHeight: 202,
    mobileWidth: 94,
  },
  {
    id: 4,
    width: 818,
    height: 539,
    desc: "screen with a recent transactions",
    href: slideFour,
    mobileHeight: 202,
    mobileWidth: 303,
  },
  {
    id: 5,
    width: 816,
    height: 539,
    desc: "sun set phase",
    href: slideOne,
    mobileHeight: 202,
    mobileWidth: 303,
  },
  {
    id: 6,
    width: 817,
    height: 539,
    desc: "screen with a token transfer",
    href: slideTwo,
    mobileHeight: 202,
    mobileWidth: 303,
  },
  {
    id: 7,
    width: 255,
    height: 539,
    desc: "mobile screen with a transfer details",
    href: slideThree,
    mobileHeight: 202,
    mobileWidth: 94,
  },
  {
    id: 8,
    width: 818,
    height: 539,
    desc: "screen with a recent transactions",
    href: slideFour,
    mobileHeight: 202,
    mobileWidth: 303,
  }
];

export const retroBridgeSolutions = [
  {
    id: 1,
    title: "Website & Bridging App",
    desc: "The platform’s website and app were built with React and Node.js, showcasing blockchain for business through responsive and scalable solutions.",
    textBlockWidth: 498,
    imageClasses: 'xl:-mt-[10px]',
    img: {
      width: 500,
      height:500,
      info: "decorated bottles with nfts inside",
      href: bottles,
      mobileWidth:343, 
      mobileHeight: 270,
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
      mobileWidth:343, 
      mobileHeight: 280,
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
      href: display,
      mobileWidth:227, 
      mobileHeight: 260,

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
      href: wallet,
      mobileWidth:343, 
      mobileHeight: 260,


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
      href: bottlesTwo,
      mobileWidth:343, 
      mobileHeight: 270,

    }
  },
  {
    id: 6,
    title: "dApp Explorer",
    desc: "Developed a dApp explorer that lets users browse integrated dApps across supported chains, sorted by category, popularity, and network, positioning the product as one of the most comprehensive blockchain case studies in cross-chain discovery.",
    textBlockWidth: 605,
    img: {
      width: 374,
      height: 320,
      info: "coins with a hybrid icon",
      href: bridger,
      mobileWidth:240, 
      mobileHeight: 204,

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
