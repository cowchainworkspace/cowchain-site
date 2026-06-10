import {
  SecureSvg,
  SpeedSvg,
  AnalyticSvg,
  AccessSvg,
  InfinitySvg,
  GraphSvg,
  DistributionSvg,
  ReduceSvg
} from "../../../../../../public/svgIcons";

export const depinBenefits = [
  {
    title: "Hardware that earns",
    desc: "Token incentives reward real-world contributors — GPUs, storage, bandwidth, hotspots, sensors — turning idle infrastructure into a revenue-sharing network.",
  },
  {
    title: "Capital-light scaling",
    desc: "Crowdsource physical supply instead of buying it. DePIN networks bootstrap real capacity faster and cheaper than centralized build-outs.",
  },
  {
    title: "Verifiable real-world work",
    desc: "Proof-of-physical-work and oracle attestation make sure rewards map to genuine contribution — not gamed metrics.",
  }
];

export const depinExpertise = [
  {
    title: "Token & incentive design",
    desc: "Tokenomics that bootstrap supply, balance demand, and stay sustainable — burn/mint equilibrium, emissions schedules, and reward curves modeled before launch."
  },
  {
    title: "Device onboarding & identity",
    desc: "Secure provisioning, on-chain device identity, and firmware/SDK integration so real hardware can join the network and report trustlessly."
  },
  {
    title: "Proof-of-physical-work & oracles",
    desc: "Verification layers that confirm compute delivered, data sensed, or coverage provided, with oracle and attestation pipelines feeding rewards."
  },
  {
    title: "Resource marketplaces",
    desc: "On-chain marketplaces that price and settle compute, storage, bandwidth, and sensor data — increasingly paid per-use by AI workloads and autonomous agents."
  }
];

export const depinHowItWorks = [
  {
    title: "1. Model the network economics",
    desc: "Before any code, we simulate supply incentives and demand-side pricing so the token rewards real growth instead of inflation."
  },
  {
    title: "2. Build the contribution layer",
    desc: "Device SDKs, onboarding flows, and on-chain identity let contributors plug hardware in and start earning with minimal friction."
  },
  {
    title: "3. Verify and reward",
    desc: "Proof-of-physical-work plus oracles confirm genuine contribution and distribute rewards transparently on-chain."
  },
  {
    title: "4. Open the marketplace",
    desc: "Buyers — including AI compute workloads and agents — purchase resources on demand, closing the loop between supply and real revenue."
  }
];

export const depinIndustries = [
  {
    title: "Compute & AI (DeAI)",
    text: "GPU and inference networks that supply AI workloads as miners shift from token incentives to real revenue.",
    icon: AnalyticSvg
  },
  {
    title: "Storage & bandwidth",
    text: "Decentralized storage and CDN/bandwidth networks with verifiable capacity.",
    icon: DistributionSvg
  },
  {
    title: "Wireless & connectivity",
    text: "Community-built coverage networks rewarding hotspot and node operators.",
    icon: SpeedSvg
  },
  {
    title: "Energy & mobility",
    text: "Distributed energy, EV charging, and mobility data networks with on-chain settlement.",
    icon: GraphSvg
  },
  {
    title: "Sensors & mapping",
    text: "Environmental, location, and IoT sensor networks that turn real-world data into a tradable asset.",
    icon: AccessSvg
  }
];

export const depinFaqData = [
  {
    title: "What is DePIN?",
    content:
      "DePIN stands for Decentralized Physical Infrastructure Networks. It uses token incentives to reward individuals and businesses for supplying real-world hardware — GPUs, storage, bandwidth, sensors, or wireless coverage — coordinating physical infrastructure through a blockchain instead of a single company. The combined market cap of DePIN tokens exceeded $60 billion heading into 2026."
  },
  {
    title: "What does DePIN development involve?",
    content:
      "DePIN development covers token and incentive design, device onboarding and on-chain identity, proof-of-physical-work and oracle verification, and a marketplace that prices and settles the resource being provided. Cowchain delivers these as one coordinated build, modeled for economic sustainability before launch."
  },
  {
    title: "Why is DePIN growing in 2026?",
    content:
      "AI gave DePIN a second act: networks supplying GPU and compute are attracting real AI workloads and revenue, so contributors earn from usage rather than token emissions alone. That shift from speculative rewards to genuine demand is what makes 2026 DePIN networks more sustainable."
  },
  {
    title: "How long does it take to launch a DePIN network?",
    content:
      "A DePIN MVP — token, onboarding for one device class, basic verification, and a simple marketplace — typically takes 10–16 weeks. Production networks with multiple hardware types and robust proof-of-physical-work are scoped after an economic-design phase."
  }
];

export const depinOtherServices = [
  {
    text: "Smart Contract Development",
    author:
      "Audited reward, staking, and marketplace contracts at the core of any DePIN network."
  },
  {
    text: "AI Agent Development",
    author:
      "Agents that buy DePIN compute and data on demand via machine-to-machine payments."
  },
  {
    text: "Stablecoin & Payments",
    author:
      "Stable settlement so contributors and buyers transact without token volatility."
  },
  {
    text: "Blockchain Consulting",
    author:
      "Architecture, chain selection, and tokenomics modeling to de-risk your network before launch."
  }
];
