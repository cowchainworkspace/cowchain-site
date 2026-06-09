const title = "DePIN Development Company | Decentralized Physical Infrastructure | Cowchain";
const description =
  "Cowchain builds DePIN networks — token incentives, device onboarding, proof-of-physical-work and marketplaces for compute, storage, bandwidth and sensor data. 150+ Web3 projects delivered since 2020.";
const url = "https://cowchain.io/services/depin-development";

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  title,
  description,
  alternates: {
    canonical: "/services/depin-development"
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
