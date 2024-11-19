import React from "react";
import { HeroSection } from "./blocks/HeroSections";
import Link from "next/link";
import dot from "@/assets/icons/dot.png";
import Image from "next/image";
import { Descriptions } from "antd";

const links = [
  {
    title: "Cowchain main page",
    link: "/"
  },
  {
    title: "Services & Technologies",
    link: "/services"
  },
  {
    title: "Cases",
    link: "/cases"
  },
  {
    title: "Clients",
    link: "/clients"
  },
  {
    title: "Team",
    link: "/team"
  },
  {
    title: "Privacy Policy",
    link: "/policy"
  }
];

const casesLinks = [
  {
    title: "Exchange wallet app",
    link: "/cases/payment"
  },
  {
    title: "Integration Blockchain into Hotel business",
    link: "/cases/hotel"
  },
  {
    title: "Cross-chain Transfer Bridge",
    link: "/cases/bridge"
  },
  {
    title: "M2E platform",
    link: "/cases/move"
  },
  {
    title: "Decentralized Crypto Exchange",
    link: "/cases/finance"
  },
  {
    title: "Crypto wallet app",
    link: "/cases/wallet"
  }
];

export const metadata = {
  metadataBase: new URL("https://cowchain.io/sitemap"),
  title: "Decentralized Web3 Development Services | Cowchain",
  description: `Discover Cowchain's blockchain expertise and its revolutionary impact on decentralized applications and business solutions.`
};

export default function Page() {
  return (
    <section>
      <div className="scrollbar-none relative flex w-full flex-col items-center justify-start ">
        <HeroSection />
        <div className="relative flex  flex-col gap-4 px-5 pb-8 md:px-8 md:pb-12 lg:w-[1432px] lg:px-16 xl:px-24">
          {links.map((link, index) => (
            <>
              {!(link.title === "Cases") ? (
                <Link
                  key={index}
                  className="border-b border-b-th-fade pb-4"
                  href={link.link}
                >
                  <p>{link.title}</p>
                </Link>
              ) : (
                <div>
                  <div
                    key={index}
                    className="border-b border-b-th-fade pb-4"
                    href={link.link}
                  >
                    <p className="mb-2">{link.title}</p>
                    {casesLinks.map((link, index) => (
                      <Link
                        href={link.link}
                        key={index}
                        className="my-4 ml-4 flex items-center gap-2"
                      >
                        <Image alt="Dot" className="h-4 w-4" src={dot} />
                        <p className="opacity-80">{link.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
