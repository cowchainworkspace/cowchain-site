import aws from "@/assets/svgComponents/stack/AWSStackIcon";
import ava from "@/assets/svgComponents/stack/Avalanche";
import azure from "@/assets/svgComponents/stack/AzureIcon";
import binance from "@/assets/svgComponents/stack/BinanceIcon";
import bitcoin from "@/assets/svgComponents/stack/BitcoinStackIcon";
import eth from "@/assets/svgComponents/stack/Ethereum";
import express from "@/assets/svgComponents/stack/ExpressStackIcon";
import googleCloud from "@/assets/svgComponents/stack/GoogleCloudStackIcon";
import javascript from "@/assets/svgComponents/stack/JavascriptStackIcon";
import microservices from "@/assets/svgComponents/stack/MicroservicesStackIcon";
import mongodb from "@/assets/svgComponents/stack/MongodbIcon";
import mysql from "@/assets/svgComponents/stack/MySQLStackIcon";
import near from "@/assets/svgComponents/stack/NearStackIcon";
import nest from "@/assets/svgComponents/stack/NestStackIcon";
import nextjs from "@/assets/svgComponents/stack/NextJsIcon";
import nodejs from "@/assets/svgComponents/stack/NodeJsIcon";
import okx from "@/assets/svgComponents/stack/OKXStackIcon";
import polygon from "@/assets/svgComponents/stack/Polygon";
import postgres from "@/assets/svgComponents/stack/PostgresqlIcon";
import privy from "@/assets/svgComponents/stack/PrivyStackIcon";
import react from "@/assets/svgComponents/stack/ReactIcon";
import solana from "@/assets/svgComponents/stack/SolanaStackIcon";
import subgraph from "@/assets/svgComponents/stack/SubgraphStackIcon";
import ton from "@/assets/svgComponents/stack/TONStackIcon";
import tailwind from "@/assets/svgComponents/stack/TailwindStackIcon";
import thirdWeb from "@/assets/svgComponents/stack/ThirdWebStackIcon";

export const expertiseData = [
  {
    title: <>Blockchain <br/> Platforms</>,
    tools: [
      { logo: eth, alt: "Ethereum" },
      { logo: solana, alt: "Solana" },
      { logo: polygon, alt: "Polygon" },
      { logo: ava, alt: "Avalanche" },
      { logo: binance, alt: "BNB Chain" },
      { logo: bitcoin, alt: "Bitcoin" },
      { logo: ton, alt: "TON" },
      { logo: near, alt: "Near" }
    ]
  },
  {
    title: "Databases",
    tools: [
      { logo: mongodb, alt: "MongoDB" },
      { logo: mysql, alt: "MySQL" },
      { logo: postgres, alt: "PostgreSQL" }
    ]
  },
  {
    title: <>Front-End <br/> Technologies</>,
    tools: [
      { logo: react, alt: "React.js" },
      { logo: nextjs, alt: "Next.js" },
      { logo: javascript, alt: "JavaScript" },
      { logo: tailwind, alt: "Tailwind CSS" }
    ]
  },
  {
    title: <>Back-End <br/>  Technologies</>,
    tools: [
      { logo: nodejs, alt: "Node.js" },
      { logo: express, alt: "Express" },
      { logo: nest, alt: "Nest.js" },
      { logo: microservices, alt: "Microservices" }
    ]
  },
  
  {
    title: "Cloud Services",
    tools: [
      { logo: aws, alt: "AWS" },
      { logo: azure, alt: "Azure" },
      { logo: googleCloud, alt: "Google Cloud" }
    ]
  },
  {
    title: "Integrators of",
    tools: [
      { logo: okx, alt: "OKX" },
      { logo: privy, alt: "Privy" },
      { logo: thirdWeb, alt: "third web" },
      { logo: subgraph, alt: "Subgraph" }
    ]
  }
];

export const nftStackData = [
  {
    title: "Blockchain Platforms",
    text: "With faster transaction times and lower fees, Polygon is ideal for NFT developers looking to optimize cost efficiency while maintaining Ethereum’s security standards",
    tools: [
      { logo: eth, alt: "Ethereum" },
      { logo: ava, alt: "Avalanche" },
      { logo: polygon, alt: "Polygon" },
      { logo: solana, alt: "Solana" },
      { logo: bitcoin, alt: "Bitcoin" },
      { logo: ton, alt: "TON" },
      { logo: binance, alt: "BNB Chain" },
    ]
  }
];
