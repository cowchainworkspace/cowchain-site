"use client";

import logofont from "@/assets/footer/logofont.svg";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Faq from "react-faq-component";
import { animateScroll as scroll } from "react-scroll";
import { useOpenMenu } from "../hooks/useOpenMenu";
import { SocialLinks } from "./SocialLinks";

const faqRows = {
  title: "",
  rows: [
    {
      title: <h2 className="text-[16px] leading-[16px]">WHAT WE DO</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <AnchorLink href="#expertise">
            <p>Services & Techonologies</p>
          </AnchorLink>
          <AnchorLink href="#projects">
            <p>Cases</p>
          </AnchorLink>
          <AnchorLink href="#clients">
            <p>Clients</p>
          </AnchorLink>
        </div>
      )
    },
    {
      title: <h2 className="text-[16px] leading-[16px]">AGENCY</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <Link href={"/"}>
            <p>Team</p>
          </Link>
        </div>
      )
    },
    {
      title: <h2 className="text-[16px] leading-[16px]">HELP</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <AnchorLink href="#contact">
            <p>Contact Us</p>
          </AnchorLink>
          <Link href={"/policy"}>
            <p>Privacy Policy</p>
          </Link>
          <AnchorLink href="#faq">
            <p>FAQs</p>
          </AnchorLink>
        </div>
      )
    }
  ]
};

const faqConfig = {
  animate: true,
  openOnload: false,
  expandIcon: (
    <div className="mt-[7px]">
      <svg
        width="12"
        height="6"
        viewBox="0 0 12 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6L0.803848 -4.86779e-08L11.1962 -1.3313e-06L6 6Z"
          fill="white"
        />
      </svg>
    </div>
  ),
  collapseIcon: (
    <div className="-mt-[12px]">
      <svg
        width="12"
        height="6"
        viewBox="0 0 12 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6L0.803848 -4.86779e-08L11.1962 -1.3313e-06L6 6Z"
          fill="white"
        />
      </svg>
    </div>
  )
};

const faqStyles = {
  bgColor: "#000000",
  display: "flex",
  alignItems: "center",
  titleTextColor: "white",
  titleTextSize: "16px",
  rowTitleColor: "white",
  rowContentTextSize: "16px",
  rowContentPaddingTop: "0px",
  rowContentPaddingBottom: "0px",
  rowContentPaddingLeft: "0px",
  rowContentPaddingRight: "0px",
  arrowColor: "none",
  transitionDuration: "0.3s",
  timingFunc: "ease"
};

export default function Footer({ footerForm }) {
  const [isBorder, setIsBorder] = useState(false);
  const { isRendering } = useLoader();
  const { setServiceMenuOpen } = useOpenMenu();
  const pathname = usePathname();

  const openServiceMenu = () => {
    scroll.scrollToTop();
    setServiceMenuOpen(true);
  };

  useEffect(() => {
    setIsBorder(pathname === "/sitemap" || pathname === "/error");
  }, [pathname]);

  return (
    <>
      {" "}
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
            <Faq data={faqRows} styles={faqStyles} config={faqConfig} />
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
                  <AnchorLink href="#faq">
                    <p className="text-[#bbb]">FAQs</p>
                  </AnchorLink>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </div>
          </div>

          <div className=" px-2 py-3 md:col-span-2 md:py-8">
            <a href="/">
              <Image className="w-full" src={logofont} alt=""></Image>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
