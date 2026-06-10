import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getSplitText = (text) => {
  if (!text) return;

  const lines = text.split("\n").filter((line) => line.trim().length > 0);

  const articleInfo = {
    title: "",
    description: []
  };

  let currentSection = null;
  let foundAnySubtitle = false;

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      articleInfo.title = line.replace(/^## /, "").trim();
    } else if (line.startsWith("### ")) {
      foundAnySubtitle = true;
      currentSection = {
        subtitle: line.replace(/^### /, "").trim(),
        content: []
      };
      articleInfo.description.push(currentSection);
    } else {
      if (!foundAnySubtitle) {
        // No `###` subtitles found yet? Make one default section.
        if (!articleInfo.description.length) {
          currentSection = {
            subtitle: null,
            content: []
          };
          articleInfo.description.push(currentSection);
        }
      }

      if (!currentSection) {
        currentSection = {
          subtitle: null,
          content: []
        };
        articleInfo.description.push(currentSection);
      }

      currentSection.content.push(line.trim());
    }
  });

  return articleInfo;
};

export const setBreadcrumbSchema = (
  sectionTitle,
  sectionUrl,
  itemTitle,
  slug
) => {
  return {
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
          "@id": `https://cowchain.io/${sectionUrl}/`,
          name: sectionTitle
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebPage",
          "@id": `https://cowchain.io/cases/${slug}`,
          name: itemTitle
        }
      }
    ]
  };
};

export const setBreadcrumbSchemaServices = ( itemTitle, slug) => {
  return {
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
          "@id": `https://cowchain.io/services/${slug}`,
          name: itemTitle
        }
      },
    ]
  };
};

// Single source of truth for the Cowchain entity. Reused across every schema
// so LLMs and search engines resolve one consistent organization identity.
export const COWCHAIN_SAME_AS = [
  "https://www.linkedin.com/company/cowchaindev/",
  "https://t.me/yyuriivnaa",
  "https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw",
  "https://cowchain.medium.com/"
];

export const cowchainOrganization = {
  "@type": "Organization",
  "@id": "https://cowchain.io/#organization",
  name: "Cowchain",
  url: "https://cowchain.io/",
  logo: "https://cowchain.io/logo-light.svg",
  sameAs: COWCHAIN_SAME_AS
};

// Rich, site-wide Organization schema. This is the single most important entity
// signal for LLMs answering "who is Cowchain?" — keep facts here verifiable.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cowchain.io/#organization",
  name: "Cowchain",
  alternateName: "Cowchain Dev",
  url: "https://cowchain.io/",
  logo: "https://cowchain.io/logo-light.svg",
  image: "https://cowchain.io/images/og-image.png",
  description:
    "Cowchain is a Web3 development company founded in 2020. The team has delivered 150+ blockchain projects across Ethereum, Polygon and BNB Chain, covering DeFi, RWA tokenization, stablecoin payments, AI agents, smart contracts, dApps and NFT platforms.",
  foundingDate: "2020",
  email: "sales@cowchain.io",
  knowsAbout: [
    "Web3 development",
    "Blockchain development",
    "Smart contract development",
    "DeFi development",
    "Real-world asset (RWA) tokenization",
    "Stablecoin payments",
    "AI agents",
    "DePIN",
    "NFT development",
    "dApp development"
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "sales@cowchain.io",
    availableLanguage: ["English"]
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  // Verifiable 5.0 / 9 reviews shown on https://cowchain.io/clients
  // (Clutch profile: https://clutch.co/profile/cowchain).
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "9",
    reviewCount: "9"
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Davyd Koriahin" },
      reviewBody:
        "Cowchain completed the platform on time and within budget. They completed a detailed technical research phase, created a state-of-the-art web3 infrastructure, and helped develop and deploy the platform efficiently. Their clear communication and innovative solutions impressed us."
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Antoine Marsan" },
      reviewBody:
        "Cowchain leads proactive project management; they deliver on time and communicate regularly. The team's invaluable experience has ensured deliverables with exceptional quality."
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Tanya Chumachenko" },
      reviewBody:
        "Cowchain successfully delivered a Telegram app with smooth DEX Screener and Claimr API integrations, boosting user engagement and acquisition. They were able to integrate complex systems quickly."
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Artem Poliakoff" },
      reviewBody:
        "Thanks to Cowchain's work, we were able to complete our ecosystem and full flow cycle. The team was meticulous and efficient; they delivered on time and beyond expectations, standing out for their expertise and professionalism."
    }
  ],
  sameAs: COWCHAIN_SAME_AS
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cowchain.io/#website",
  url: "https://cowchain.io/",
  name: "Cowchain",
  description:
    "Web3 development company delivering blockchain, DeFi, RWA tokenization, stablecoin, AI-agent and smart-contract solutions.",
  publisher: { "@id": "https://cowchain.io/#organization" },
  inLanguage: "en"
};

export const getServiceSchema = ({serviceName, serviceDescription, serviceType, serviceUrl}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: cowchainOrganization,
    serviceType: serviceType,
    areaServed: {
      "@type": "Country",
      name: "Worldwide"
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://cowchain.io/services/${serviceUrl}`,
      availableLanguage: ["English"]
    }
  };
};

// HowTo schema from an ordered array of { title, desc } steps. LLMs and search
// engines surface step-by-step process markup directly in answers.
export const getHowToSchema = (name, steps = []) => {
  const step = steps
    .map((s, i) => {
      const stepName = s.title || s.name;
      const text = s.desc || s.text || s.content;
      if (typeof text !== "string") return null;
      return {
        "@type": "HowToStep",
        position: i + 1,
        name: typeof stepName === "string" ? stepName : undefined,
        text
      };
    })
    .filter(Boolean);

  if (step.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step
  };
};

// Case-study schema. Marks a case page up as an Article authored by Cowchain
// about a client project — gives LLMs an extractable, attributed proof point.
export const getCaseSchema = (name, slug, description, image) => {
  if (!name || !slug) return null;
  const url = `https://cowchain.io/cases/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: `${name} — Case Study`,
    name: `${name} case study`,
    description: typeof description === "string" ? description : undefined,
    about: { "@type": "Thing", name },
    image: image ? [image] : undefined,
    author: { "@id": "https://cowchain.io/#organization" },
    publisher: { "@id": "https://cowchain.io/#organization" },
    isPartOf: { "@id": "https://cowchain.io/#website" },
    inLanguage: "en",
    url
  };
};

// FAQPage schema from an array of { title/question, content/answer } items.
// Extractable Q&A is one of the strongest signals for LLM answer engines.
export const getFaqSchema = (items = []) => {
  const mainEntity = items
    .map((item) => {
      const name = item.question || item.title;
      const text = item.answer || item.content;
      if (!name || !text) return null;
      return {
        "@type": "Question",
        name: typeof name === "string" ? name : undefined,
        acceptedAnswer: {
          "@type": "Answer",
          text: typeof text === "string" ? text : undefined
        }
      };
    })
    .filter((q) => q && q.name && q.acceptedAnswer.text);

  if (!mainEntity.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity
  };
};

// BlogPosting schema for a Strapi article. Returns null if there's no data so
// the page can render without the script tag.
export const getArticleSchema = (article, slug) => {
  if (!article) return null;

  const url = `https://cowchain.io/blog/articles/${slug}`;
  const authorName = article.author_name
    ? article.author_name.split(",")[0].trim()
    : "Cowchain";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.SEO?.MetaTitle || article.article_title,
    description: article.SEO?.MetaDescription || undefined,
    image: article.banner_img?.url ? [article.banner_img.url] : undefined,
    datePublished: article.publishedAt || article.createdAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
      description: article.author_info || undefined
    },
    publisher: {
      "@type": "Organization",
      name: "Cowchain",
      logo: {
        "@type": "ImageObject",
        url: "https://cowchain.io/logo-light.svg"
      }
    },
    keywords: article.article_tag?.tag_name || undefined,
    articleSection: article.article_tag?.tag_name || undefined
  };
};