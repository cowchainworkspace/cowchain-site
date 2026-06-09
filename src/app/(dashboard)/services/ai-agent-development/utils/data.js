import {
  SecureSvg,
  SpeedSvg,
  AnalyticSvg,
  AccessSvg,
  InfinitySvg,
  GraphSvg,
  DistributionSvg,
  AdminPanelSvg
} from "../../../../../../public/svgIcons";

export const aiAgentBenefits = [
  {
    title: "Agents that transact, not just chat",
    desc: "Give an AI agent its own wallet so it can execute swaps, pay for APIs, rebalance positions, and settle on-chain — autonomously, within limits you define.",
    icon: InfinitySvg,
    hasBlackBg: true
  },
  {
    title: "Machine-to-machine payments",
    desc: "Agents pay each other for data, compute, and services in real time using emerging standards like the x402 payment protocol adopted across major cloud and AI platforms.",
    icon: SpeedSvg,
    hasBlackBg: true
  },
  {
    title: "Verifiable, on-chain actions",
    desc: "Every agent decision that touches money is auditable on-chain — with spending caps, allow-lists, and human-in-the-loop guardrails baked in.",
    icon: SecureSvg,
    hasBlackBg: true
  }
];

export const aiAgentExpertise = [
  {
    title: "Agentic wallets & smart accounts",
    desc: "Account-abstraction wallets (ERC-4337 / smart accounts) that give agents programmable spending policies, session keys, and recoverable control."
  },
  {
    title: "On-chain autonomous agents",
    desc: "Agents that monitor markets and contracts, then act — arbitrage, liquidations protection, treasury rebalancing, airdrop eligibility, and DAO operations."
  },
  {
    title: "Machine-to-machine payment rails",
    desc: "x402-style HTTP-native micropayments so agents can buy data, compute, and API access on demand without human checkout."
  },
  {
    title: "Agent infrastructure & orchestration",
    desc: "Tool-use frameworks, memory, on-chain identity, and multi-agent coordination wired into your existing protocol or product."
  }
];

export const aiAgentHowItWorks = [
  {
    title: "1. Define the agent's mandate",
    desc: "We map exactly what the agent is allowed to do, with what budget, and under what conditions — the policy layer that keeps autonomy safe."
  },
  {
    title: "2. Give it a wallet and tools",
    desc: "The agent gets a smart-account wallet with spending caps and the on-chain/off-chain tools it needs: DEXes, oracles, contracts, APIs, and payment rails."
  },
  {
    title: "3. Connect reasoning to execution",
    desc: "We bridge the model's decisions to verifiable on-chain actions, so insight becomes transactions automatically — with logging and guardrails at every step."
  },
  {
    title: "4. Monitor, cap, and improve",
    desc: "Live monitoring, kill-switches, and retraining loops keep the agent reliable as markets and protocols change."
  }
];

export const aiAgentIndustries = [
  {
    title: "DeFi & trading",
    text: "Agents that rebalance, hedge, manage liquidity, and defend positions in real time.",
    icon: GraphSvg
  },
  {
    title: "DAOs & governance",
    text: "Agents that surface urgent proposals, execute approved actions, and run treasury operations.",
    icon: AdminPanelSvg
  },
  {
    title: "Payments & commerce",
    text: "Autonomous agents that buy and sell services with stablecoins via machine-to-machine payments.",
    icon: DistributionSvg
  },
  {
    title: "Data & compute markets",
    text: "Agents that pay per call for data, inference, and DePIN compute on demand.",
    icon: AnalyticSvg
  },
  {
    title: "Consumer & TG mini-apps",
    text: "Intent-based assistants that act on-chain for users who never see a contract.",
    icon: AccessSvg
  }
];

export const aiAgentFaqData = [
  {
    title: "What is an on-chain AI agent?",
    content:
      "An on-chain AI agent is an autonomous program that combines an AI model with its own crypto wallet, so it can make decisions and then execute them as real blockchain transactions — trading, paying for services, or acting on smart contracts — within rules and spending limits set by its owner."
  },
  {
    title: "What is x402 and why does it matter for agents?",
    content:
      "x402 is an open, HTTP-native payment standard designed for autonomous agents and machine-to-machine transactions, enabling real-time low-cost micropayments for API access, data, and compute. Adoption by major cloud and AI platforms in 2026 made it a practical settlement layer for agent economies, and Cowchain builds agents that pay and get paid this way."
  },
  {
    title: "How do you keep autonomous agents safe?",
    content:
      "We use smart-account wallets with hard spending caps, allow-lists, session keys, and kill-switches, plus on-chain logging of every action and optional human-in-the-loop approval for high-value moves. Autonomy is always bounded by policy you control."
  },
  {
    title: "How long does it take to build an AI agent?",
    content:
      "A focused agent with a wallet, a defined mandate, and a few tools can ship in 4–8 weeks. Multi-agent systems with custom on-chain infrastructure and payment rails typically take 8–12+ weeks including integration and testing."
  }
];

export const aiAgentOtherServices = [
  {
    text: "AI Development",
    author:
      "Custom models, analytics, and automation that power the reasoning behind your agents."
  },
  {
    text: "Smart Contract Development",
    author:
      "The audited on-chain logic agents act on — vaults, policies, and execution contracts."
  },
  {
    text: "Stablecoin & Payments",
    author:
      "The settlement layer agents use to pay each other and pay for services."
  },
  {
    text: "DeFi Development",
    author:
      "Protocols and strategies your agents can manage, hedge, and optimize autonomously."
  }
];
