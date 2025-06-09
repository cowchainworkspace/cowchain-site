export const metadata = {
  title: "Cowchain Blog | Insights on Blockchain",
  description: "Discover blockchain insights, case studies, and industry trends on the Cowchain Blog. Stay updated on Web3, DeFi, and digital asset innovations.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/blog"
  }
};

export const blogBreadCrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebPage",
          "@id": "https://cowchain.io/",
          name: "Home"
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebPage",
          "@id": `https://cowchain.io/blog`,
          name: "Cowchain Blog"
        }
      },
    ]
  };