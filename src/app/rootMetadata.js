const title = "Web3 Development Company | Cowchain";
// Meta description: tuned for Google (~150 chars).
const description =
  "Cowchain is a Web3 development company — 150+ blockchain projects delivered since 2020: DeFi, RWA, stablecoins, AI agents, smart contracts and dApps.";
// Social description: shorter (~115 chars) so previews don't truncate on mobile.
const socialDescription =
  "Web3 development company — 150+ blockchain projects since 2020: DeFi, RWA, stablecoins, AI agents and smart contracts.";

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
    description: socialDescription,
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
    description: socialDescription,
    images: ["https://cowchain.io/images/og-image.png"]
  }
};
