"use client";

import menu_close from "@/assets/homepage/modal_close.svg";
import menu_open from "@/assets/menu_open.svg";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ServicesAndTechnologies } from "../app/(dashboard)/(home)/blocks/ServicesAndTechMenu";
import { useOpenForm } from "../hooks/useOpenForm";
import { useOpenMenu } from "../hooks/useOpenMenu";
import { useSetBurgerMenu } from "../hooks/useSetBurgerMenu";
import { useSetMobServiceMenu } from "../hooks/useSetMobServiceMenu";
import { useToggleMenu } from "../hooks/useToggleMenu";

import BurgerMenu from "./BurgerMenu";
import NavbarAnchorLinks from "./NavbarAnchorLinks";
import NavbarRoutingLinks from "./NavbarRoutingLinks";
import { trackEvent } from "./utils/event-track";

const sideVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function Navbar() {
  const { serviceMenuOpen, setServiceMenuOpen } = useOpenMenu();
  const { serviceMobMenuOpen, setServiceMobMenuOpen } = useSetMobServiceMenu();
  const { toggleMenu, setToggleMenu } = useToggleMenu();
  const { setBurgerOpen } = useSetBurgerMenu();
  const { setOpenForm } = useOpenForm();
  const { isRendering } = useLoader();
  const pathname = usePathname();

  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(".menu-toggle-button")
    ) {
      setServiceMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeServiceMenu = (e) => {
    e.stopPropagation();
    setServiceMenuOpen(false);
  };

  const openBurger = () => {
    setToggleMenu(true);
    setBurgerOpen(true);
  };

  const closeBurger = () => {
    setToggleMenu(false);
    setBurgerOpen(false);
    setServiceMenuOpen(false);
  };

  const handleMobileFormOpen = () => {
    trackEvent();
    setToggleMenu(false);
    setBurgerOpen(false);
    setOpenForm(true);
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setServiceMenuOpen(!serviceMenuOpen);
  };

  const closeMobServiceMenu = (e) => {
    e.stopPropagation();
    setServiceMobMenuOpen(false);
  };

  const openMobileServiceMenu = (e) => {
    e.stopPropagation();
    setServiceMobMenuOpen(true);
  };

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [toggleMenu]);

  return (
    <>
      <section
        className={cn(
          "relative z-[23] bg-transparent opacity-100 lg:sticky lg:top-0 lg:transition-colors lg:duration-300",
          {
            "pb-36 md:pb-0": pathname === "/",
            "lg:bg-black/80 lg:backdrop-blur-md": scrolled
          }
        )}
      >
        <div
          className={
            pathname === "/"
              ? "navbar-wrapper  relative flex h-24 items-center justify-between gap-x-8   px-4 md:h-16 md:border-b  md:border-th-fade md:border-b-th-fade md:px-8 lg:px-0"
              : "navbar-wrapper  relative flex h-24 items-center justify-between gap-x-8 px-4 md:h-16 md:border-b md:border-th-fade md:px-8 lg:px-0"
          }
        >
          <NavbarAnchorLinks
            serviceMenuOpen={serviceMenuOpen}
            toggleServices={toggleServices}
          />
          <Link
            href="/"
            className="z-[23] flex items-center justify-center"
            rel="nofollow"
          >
            <Image
              src="/homepage/logo_light.svg"
              alt="Cowchain company logo"
              title="Home"
              width={160}
              height={40}
              className="h-auto w-32 md:w-36 lg:w-40"
              priority
            />
          </Link>
          {toggleMenu ? (
            <Image
              className="ml-auto w-6 cursor-pointer lg:hidden"
              src={menu_close}
              onClick={closeBurger}
              alt="Menu close button"
            />
          ) : (
            <button
              onClick={openBurger}
              className="z-[23] ml-auto w-6 cursor-pointer lg:hidden"
              type="button"
            >
              <Image alt="Menu open button" src={menu_open} />
            </button>
          )}

          <NavbarRoutingLinks setOpenForm={setOpenForm} />

          <BurgerMenu
            toggleMenu={toggleMenu}
            sideVariants={sideVariants}
            closeBurger={closeBurger}
            closeMobServiceMenu={closeMobServiceMenu}
            openMobileServiceMenu={openMobileServiceMenu}
            serviceMobMenuOpen={serviceMobMenuOpen}
            handleMobileFormOpen={handleMobileFormOpen}
          />
        </div>
      </section>
      {serviceMenuOpen && (
        <div ref={menuRef}>
          <ServicesAndTechnologies closeServiceMenu={closeServiceMenu} />
        </div>
      )}
    </>
  );
}
