export const metadata = {
  title: "Explore Premium Blockchain Use Cases | Cowchain",
  description: "Discover innovative blockchain use cases with Cowchain. Explore solutions for secure transactions, asset tokenization, and more. Learn now!",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/cases"
  }
};

  export const casesBreadCrumbList = {
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
          "@id": `https://cowchain.io/cases`,
          name: "Cases"
        }
      },
    ]
  };