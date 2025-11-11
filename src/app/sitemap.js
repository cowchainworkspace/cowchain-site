import { getAllArticles } from "@/lib/api/articles";

export default async function sitemap() {
  const now = new Date();
  const blogs = await getAllArticles();
  const blogsData = blogs.data.map(({ slug }) => ({
    url: `https://cowchain.io/blog/articles/${slug}`,
    lastModified: now,
    priority: 0.6
  }));
  return [
    {
      url: "https://cowchain.io/",
      lastModified: now,
      priority: 1
    },
    {
      url: "https://cowchain.io/cases",
      lastModified: now,
      priority: 0.8
    },
    {
      url: "https://cowchain.io/cases/agnt",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://cowchain.io/cases/retrobridge",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://cowchain.io/cases/step-app",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://cowchain.io/cases/gbc",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://cowchain.io/cases/hybrid",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://cowchain.io/cases/pixel-verse",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://cowchain.io/cases/memelut",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://cowchain.io/cases/tenet",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://cowchain.io/cases/brc20",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    },

    {
      url: "https://cowchain.io/services/ai-development",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/blockchain-consulting",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/crypto-lottery",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/crypto-wallet",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/cryptocurrency-exchange",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/dapp-development",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/defi-development",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/dex-development",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/exchange",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/ico-constructor",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/ico-platform",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/ico-platform-development",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/mobile-crypto-wallet",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/nft-development",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/nft-game",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/nft-marketplace",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/p2p-crypto-exchange",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/rwa-platform",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/rwa-tokenization",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/smart-contract-development",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/social-fi-mini-app",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/staking",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/web3-fullstack-development",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/web3-ui-ux-design",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://cowchain.io/services/white-label-solutions",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },

    {
      url: "https://cowchain.io/blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: "https://cowchain.io/team",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4
    },
    {
      url: "https://cowchain.io/policy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    ...blogsData
  ];
}
