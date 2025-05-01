import dot from "@/assets/icons/dot.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeroSection } from "./blocks/HeroSections";
import { casesLinks, links } from "./data/data";
import { metadata } from "./data/siteMapMetaData";

export { metadata };

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
