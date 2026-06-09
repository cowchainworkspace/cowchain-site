const title = "Web3 Development Company | Cowchain";
const description =
  "Cowchain is a Web3 development company that has delivered 150+ blockchain projects since 2020 — DeFi, RWA tokenization, stablecoin payments, AI agents, smart contracts, dApps and NFT platforms across Ethereum, Polygon and BNB Chain.";

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  title,
  description,
  applicationName: "Cowchain",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://cowchain.io/",
    siteName: "Cowchain",
    title,
    description,
    images: [
      {
        url: "https://cowchain.io/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cowchain — Web3 Development Company"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@cow_chain",
    title,
    description,
    images: ["https://cowchain.io/images/og-image.png"]
  }
};
