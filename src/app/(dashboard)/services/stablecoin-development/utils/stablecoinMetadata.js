const title = "Stablecoin Development & Payments Company | Cowchain";
const description =
  "Cowchain builds stablecoins and stablecoin payment rails — fiat-backed and crypto-collateralized tokens, cross-border settlement, treasury and merchant payments. 150+ Web3 projects delivered since 2020.";
const url = "https://cowchain.io/services/stablecoin-development";

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  title,
  description,
  alternates: {
    canonical: "/services/stablecoin-development"
  },
  openGraph: {
    type: "website",
    url,
    siteName: "Cowchain",
    title,
    description,
    images: ["https://cowchain.io/images/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@cow_chain",
    title,
    description,
    images: ["https://cowchain.io/images/og-image.png"]
  }
};
