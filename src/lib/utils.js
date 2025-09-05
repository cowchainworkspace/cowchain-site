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

export const getServiceSchema = ({serviceName, serviceDescription, serviceType, serviceUrl}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: "Cowchain",
      url: "https://cowchain.io/",
      logo: "/logo-light.svg",
      sameAs: [
        "https://www.linkedin.com/company/cowchaindev/",
        "https://t.me/Johnatan17",
        "https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw",
        "https://cowchain.medium.com/"
      ]
    },
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