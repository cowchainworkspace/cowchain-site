import {agent, crossChain, gbc as gbcImage, hybrid as hybridImage, m2eNewOne, memolut, pixelVerse, tenet as tenetImage } from "./../../../../public/projects"

const getRelatedProjects = (project, allProjects) => {
  return allProjects.filter(p =>
    project.relatedSlugs.includes(p.projectLink)
  );
};

const memelut  = {
  id: 1,
  tags: [
    { isMain: true, tagName: "Mobile App" },
    { isMain: false, tagName: "Trading" },
    { isMain: false, tagName: "Crypto Wallet" }
  ],
  title: "memelut",
  desc: "Memelut is an all-in-one app that simplifies exploring, trading, and storing memecoins.",
  img: memolut,
  projectLink: "memelut",
  textGap: "md:gap-[24px]",
  cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
  relatedSlugs: ["pixel-verse", "gbc", "retrobridge"],
}

const retrobridge = {
  id: 2,
  tags: [
    { isMain: true, tagName: "Web Development" },
    { isMain: false, tagName: "DeFi" },
    { isMain: false, tagName: "Bridge" },
    { isMain: false, tagName: "NFT" }
  ],
  title: 'Cross-chain transfer bridge',
  desc: 'RetroBridge is a blockchain-powered platform enabling seamless cross-chain asset transfers.',
  img: crossChain,
  textColor: "text-secondary",
  projectLink: "retrobridge",
  textGap: "md:gap-[24px]",
  cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
  relatedSlugs: ["step-app", "tenet", "agnt"],
}

const gbc = {
  id: 3,
  tags: [
    { isMain: true, tagName: "Web Development" },
    { isMain: false, tagName: "Trading" },
    { isMain: false, tagName: "NFT" }
  ],
  title: 'GMX BLUEBERRY CLUB',
  desc: 'GBC is a next-generation NFT platform that combines customization, trading, and gamification.',
  img: gbcImage,
  textColor: "text-white",
  projectLink: "gbc",
  textGap: "md:gap-[24px]",
  cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
  relatedSlugs: ["memelut", "pixel-verse", "step-app"],
}

const stepApp = {
  id: 4,
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
  title: 'STEP APP',
  desc: 'Step App is an innovative Move-to-Earn platform that rewards users for physical movement.',
  img: m2eNewOne,
  textColor: "text-secondary",
  projectLink: "step-app",
  textGap: "md:gap-[24px]",
  cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
  relatedSlugs: ["gbc", "agnt", "hybrid"],
}

const agnt =  {
  id: 5,
  tags: [
    { isMain: true, tagName: "Web Development" },
    { isMain: true, tagName: "AI Development" },
    { isMain: false, tagName: "Crypto Wallet" },
    { isMain: false, tagName: "DeFi" },
    { isMain: false, tagName: "NFT" }
  ],
  title: "agnt.hub",
  desc: "AGNT.Hub is the first omnichain ecosystem for AI agents in Web3, also integrated into X.",
  img: agent,
  textColor: "text-secondary",
  cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
  projectLink: "agnt",
  tagsWidth: "max-w-[320px] md:max-w-fit",
  relatedSlugs: ["retrobridge", "hybrid", "tenet"],

}

const pixelverse = {
  id: 6,
  tags: [
    { isMain: true, tagName: "Mobile App" },
    { isMain: true, tagName: "Telegram Mini-Apps" },
    { isMain: false, tagName: "GameFi" }
  ],
  title: "PixelVerse",
  desc: "PixelVerse is a GameFi ecosystem that merges Web2 accessibility with Web3 innovation through Telegram Mini-Apps.",
  img: pixelVerse,
  projectLink: "pixel-verse",
  textGap: "md:gap-[24px]",
  cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[17px]",
  textColor: "text-secondary",
  relatedSlugs: ["memelut", "gbc", "step-app"],
}

const hybrid = {
    id: 7,
    tags: [
      { isMain: true, tagName: "Web Development" },
      { isMain: true, tagName: "AI Development" },
      { isMain: true, tagName: "Blockchain Development" },
      { isMain: false, tagName: "Bridge" },
      { isMain: false, tagName: "Staking" },
      { isMain: false, tagName: "L1" }
    ],
    title: 'hybrid',
    desc: 'Hybrid is a Layer 2 blockchain on Arbitrum Nitro, integrating the MoE framework  specialized AI agents.',
    img: hybridImage,
    projectLink: "hybrid",
    textGap: "md:gap-[24px]",
    cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
    relatedSlugs: ["agnt", "tenet", "retrobridge"],
}

const tenet = 
  {
    id: 8,
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
    title: "tenet",
    desc: "Tenet is a Cosmos-based Layer-1 blockchain designed to validate networks using LSD/LRT assets.",
    img: tenetImage,
    titleClasses: "text-black",
    tagClasses: "bg-[#000000] border-[1px] border-white h-[34px] md:h-[36px]",
    tagDescClasses: "text-white",
    textColor: "text-black",
    projectLink: "tenet",
    textGap: "md:gap-[24px]",
    cardClasses: "pb-4 px-4 xl:px-0 xl:pb-[30px]",
    relatedSlugs: ["memelut", "step-app", "hybrid"],
  }

const allProjects = [memelut, gbc, tenet, retrobridge, agnt, pixelverse, stepApp, hybrid]


export const relatedRetorbridgeProjects = getRelatedProjects(retrobridge, allProjects);
export const relatedPixelverseProjects = getRelatedProjects(pixelverse, allProjects);
export const relatedAgntProjects = getRelatedProjects(agnt, allProjects);
export const relatedGBCProjects = getRelatedProjects(gbc, allProjects);
export const relatedHybridProjects = getRelatedProjects(hybrid, allProjects);
export const relatedStepAppProjects = getRelatedProjects(stepApp, allProjects);
export const relatedMemelutProjects = getRelatedProjects(memelut, allProjects);
export const relatedTenetProjects = getRelatedProjects(tenet, allProjects);
