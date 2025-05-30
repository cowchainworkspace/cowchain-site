"use client";

import logofont from "@/assets/footer/logofont.svg";
import { useLoader } from "@/hooks/useLoader";
import { useSetBurgerMenu } from "@/hooks/useSetBurgerMenu";
import { useSetMobServiceMenu } from "@/hooks/useSetMobServiceMenu";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { animateScroll as scroll } from "react-scroll";
import { useOpenMenu } from "../hooks/useOpenMenu";
import { FaqAccordion } from "./FAQAccordion";
import { SocialLinks } from "./SocialLinks";

export default function Footer({ footerForm }) {
  const [isBorder, setIsBorder] = useState(false);
  const { isRendering } = useLoader();
  const { toggleMenu, setToggleMenu } = useToggleMenu();
  const { setServiceMenuOpen } = useOpenMenu();
  const { setServiceMobMenuOpen } = useSetMobServiceMenu();
  const { setBurgerOpen } = useSetBurgerMenu();
  const pathname = usePathname();
  const isShownFaqs =
    pathname.includes("/cases") ||
    pathname.includes("/blog") ||
    pathname.includes("/team");

  const openServiceMenu = () => {
    scroll.scrollToTop();
    setServiceMenuOpen(true);
  };
  const openMobileMenu = () => {
    setToggleMenu(true);
    setBurgerOpen(true);
    setServiceMobMenuOpen(true);
  };

  useEffect(() => {
    setIsBorder(pathname === "/sitemap" || pathname === "/error");
  }, [pathname]);

  return (
    <>
      <section
        id="footer"
        className={cn("relative opacity-0", {
          "opacity-100": !isRendering,
          "border-t border-t-th-fade": isBorder
        })}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <SocialLinks footerForm={footerForm} />
          <div className="px-default border-b border-b-th-fade py-[60px] lg:hidden">
            <FaqAccordion openServicePage={openMobileMenu} />
          </div>
          <div className="px-default hidden border-b border-b-th-fade py-[65px] lg:block">
            <div className="grid grid-cols-3 gap-x-8">
              <div className="footer-links h-full">
                <div className=" flex h-full flex-col gap-y-4">
                  <p className="font-roc text-base font-medium !text-white">
                    WHAT WE DO
                  </p>
                  <button type="button" onClick={openServiceMenu}>
                    <p className="text-left text-[#bbb]">
                      Services &<br></br> Techonologies
                    </p>
                  </button>
                  <Link href="/cases">
                    <p className="text-[#bbb]">Cases</p>
                  </Link>
                  <div className="flex-grow"></div>
                </div>
              </div>
              <div className="footer-links h-full">
                <div className="flex h-full flex-col gap-y-4">
                  <p className="font-roc font-medium !text-white">AGENCY</p>
                  <Link href="/team">
                    <p className="text-[#bbb]">Team</p>
                  </Link>
                  <Link href="/blog">
                    <p className="text-[#bbb]">Blog</p>
                  </Link>
                  <div className="flex-grow"></div>
                </div>
              </div>
              <div className="footer-links h-full">
                <div className="flex h-full flex-col gap-y-4">
                  <p className="font-roc text-base font-medium !text-white">
                    HELP
                  </p>
                  <AnchorLink href="#contact">
                    <p className="text-[#bbb]">Contact Us</p>
                  </AnchorLink>
                  <Link href="/policy">
                    <p className="text-[#bbb]">Privacy Policy</p>
                  </Link>
                  {!isShownFaqs && (
                    <AnchorLink href="#faq">
                      <p className="text-[#bbb]">FAQs</p>
                    </AnchorLink>
                  )}
                  <div className="flex-grow" />
                </div>
              </div>
            </div>
          </div>

          <div className=" px-2 py-3 md:col-span-2 md:py-8">
            <a href="/">
              <Image
                className="w-full"
                src={logofont}
                alt="Cowchain company logo"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
