import {
  SecureSvg,
  SpeedSvg,
  ReduceSvg,
  AnalyticSvg,
  AccessSvg,
  InfinitySvg,
  GraphSvg,
  DistributionSvg
} from "../../../../../../public/svgIcons";

// Benefit cards — self-contained, extractable claims for answer engines.
export const stablecoinBenefits = [
  {
    title: "Near-instant settlement",
    desc: "Move value 24/7 in seconds instead of waiting on bank cut-off times, correspondent chains, or weekend delays. Stablecoins settled an estimated $46T+ in 2025 — more than Visa.",
  },
  {
    title: "Lower payment costs",
    desc: "Cut cross-border and FX fees dramatically by replacing intermediaries with on-chain transfers, while keeping a full, auditable transaction trail.",
  },
  {
    title: "Programmable money",
    desc: "Embed compliance, escrow, streaming payroll, and automated treasury logic directly into the token and payment flow with smart contracts.",
  }
];

export const stablecoinExpertise = [
  {
    title: "Fiat-backed stablecoins",
    desc: "1:1 reserve-collateralized tokens with attestation and proof-of-reserves reporting, built for issuers, fintechs, and banks entering on-chain payments."
  },
  {
    title: "Crypto-collateralized & yield-bearing stablecoins",
    desc: "Over-collateralized and tokenized-treasury-backed designs (T-bill yield passed to holders), with on-chain risk parameters and liquidation logic."
  },
  {
    title: "Stablecoin payment rails",
    desc: "Merchant checkout, mass payouts, remittance corridors, and on/off-ramp integrations across Ethereum, Polygon, BNB Chain, Solana, and L2s."
  },
  {
    title: "Treasury & B2B settlement",
    desc: "Corporate treasury tooling for holding, sweeping, and settling in stablecoins, with multi-sig custody and accounting-ready reporting."
  }
];

export const stablecoinCompliance = [
  {
    title: "Reserve management & proof of reserves",
    desc: "We implement attestation feeds, on-chain proof-of-reserves, and reserve-segregation logic so holders and regulators can verify backing in real time."
  },
  {
    title: "Compliance-by-design",
    desc: "Allow/deny lists, travel-rule data, KYC/AML gating at the on-ramp, and configurable freeze/seize controls — aligned with MiCA, GENIUS Act-style frameworks, and regional money-transmission rules."
  },
  {
    title: "Security & audits",
    desc: "Every contract ships through internal review and third-party audit. We design upgrade paths, pause switches, and monitoring so a payment network stays solvent and exploit-resistant under load."
  }
];

export const stablecoinIndustries = [
  {
    title: "Cross-border payments",
    text: "Faster, cheaper remittance and B2B corridors that bypass slow correspondent banking.",
    icon: DistributionSvg
  },
  {
    title: "Fintech & neobanks",
    text: "Embed stablecoin balances, payouts, and FX inside existing apps without becoming a blockchain company.",
    icon: AnalyticSvg
  },
  {
    title: "Marketplaces & gig platforms",
    text: "Instant global payouts to contractors and sellers, with programmable fees and escrow.",
    icon: AccessSvg
  },
  {
    title: "Treasury & DAOs",
    text: "Hold, stream, and settle operating capital on-chain with transparent reporting.",
    icon: GraphSvg
  },
  {
    title: "Web3 & AI-agent commerce",
    text: "Settlement layer for machine-to-machine payments and autonomous agents using protocols like x402.",
    icon: SecureSvg
  }
];

export const stablecoinFaqData = [
  {
    title: "What does stablecoin development involve?",
    content:
      "Stablecoin development covers token design (fiat-backed, crypto-collateralized, or yield-bearing), the smart contracts that mint, burn and transfer the token, reserve and proof-of-reserve mechanisms, compliance controls, and the payment rails that let businesses send, receive and settle the stablecoin. Cowchain delivers all of these as an end-to-end build."
  },
  {
    title: "How long does it take to launch a stablecoin or payment rail?",
    content:
      "A focused stablecoin MVP with mint/burn, reserve logic and a payment integration typically takes 8–12 weeks. Fully compliant issuer-grade systems with proof-of-reserves, KYC/AML gating and multi-chain payouts take longer and are scoped after a discovery phase."
  },
  {
    title: "Which blockchains do you support for stablecoin payments?",
    content:
      "We build on Ethereum, Polygon, BNB Chain, Solana and major L2s, and design cross-chain transfer flows so the same stablecoin can settle wherever your users and partners already are."
  },
  {
    title: "Can you make the stablecoin regulation-ready?",
    content:
      "Yes. We design compliance-by-design: configurable allow/deny lists, freeze controls, travel-rule data, and proof-of-reserves, aligned with frameworks such as MiCA and emerging US stablecoin legislation. We work alongside your legal counsel rather than replacing it."
  }
];

export const stablecoinOtherServices = [
  {
    text: "DeFi Development",
    author:
      "Liquidity pools, lending and yield strategies that give your stablecoin real on-chain utility and demand."
  },
  {
    text: "RWA Tokenization",
    author:
      "Back stablecoins or yield products with tokenized treasuries and real-world assets."
  },
  {
    text: "Smart Contract Development",
    author:
      "Audited mint/burn, access-control and settlement contracts at the core of any payment network."
  },
  {
    text: "AI Agent Development",
    author:
      "Autonomous agents that pay and get paid in stablecoins via machine-to-machine payment protocols."
  }
];
