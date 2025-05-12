"use client";

import bg_clients_lg from "@/assets/bg/clients_navbar_bg_lg.png";
import bg_clients from "@/assets/bg/clients_navbar_bg_sm.png";
import menu_close from "@/assets/homepage/modal_close.svg";
import menu_open from "@/assets/menu_open.svg";
import ContactForm from "@/components/utils/ContactForm";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ServicesAndTechnologies } from "../app/(dashboard)/(home)/blocks/ServicesAndTechMenu";
import { useOpenMenu } from "../hooks/useOpenMenu";
import { useSetBurgerMenu } from "../hooks/useSetBurgerMenu";
import { useSetMobServiceMenu } from "../hooks/useSetMobServiceMenu";
import { useToggleMenu } from "../hooks/useToggleMenu";
import BurgerMenu from "./BurgerMenu";
import NavbarAnchorLinks from "./NavbarAnchorLinks";
import NavbarRoutingLinks from "./NavbarRoutingLinks";

const sideVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export default function Navbar({ isPageNotFound = false }) {
  const { serviceMenuOpen, setServiceMenuOpen } = useOpenMenu();
  const { serviceMobMenuOpen, setServiceMobMenuOpen } = useSetMobServiceMenu();
  const { toggleMenu, setToggleMenu } = useToggleMenu();
  const { burgerOpen, setBurgerOpen } = useSetBurgerMenu();

  const pathname = usePathname();

  const menuRef = useRef(null);

  useEffect(() => {
    setServiceMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle-button")
      ) {
        setServiceMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [openForm, setOpenForm] = useState(false);
  const [windowHeight, setWindowheight] = useState("");
  const [isTeamBg, setIsTeamBg] = useState(false);
  const [isGradient, setIsGradient] = useState(true);
  const [isHomePage, setIsHomePage] = useState(true);

  const { isRendering, setIsLoading, setIsRendering } = useLoader();

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs.init(process.env.NEXT_PUBLIC_REACT_APP_DEV_EMAILJS_PUBLIC_KEY);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    setTimeout(() => {
      setIsRendering(false);
    }, 700);
  }, []);

  useEffect(() => {
    setWindowheight(window.innerHeight);
    setIsHomePage(pathname === "/");
    setIsGradient(
      pathname === "/cases" ||
        pathname === "/clients" ||
        pathname === "/policy" ||
        pathname === "/services"
    );
    setIsTeamBg(pathname === "/team" || pathname === "/sitemap");

    if (pathname === "/team") {
      setIsGradient(false);
      setIsHomePage(false);
    }
    isPageNotFound && setIsTeamBg(true);
  }, [pathname, isTeamBg, setIsGradient, setIsHomePage]);

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
        className={cn("relative z-[23] bg-transparent opacity-0", {
          "pb-36 md:pb-0": isHomePage,
          "opacity-100": !isRendering
        })}
      >
        {!isHomePage && (
          <Image
            srcSet={`${bg_clients} 360w, ${bg_clients} 480w, ${bg_clients} 720w, ${bg_clients_lg} 1920w`}
            alt=""
            className={cn(
              "absolute bottom-0 right-0 min-h-[140%] min-w-[200vw] md:min-w-full",
              {
                hidden: !isGradient
              }
            )}
            src={bg_clients_lg}
          />
        )}

        <div
          className={
            isHomePage
              ? "navbar-wrapper relative flex h-24 items-center justify-between gap-x-8   px-4 md:h-16 md:border-b  md:border-th-fade md:border-b-th-fade md:px-8 lg:px-0"
              : "navbar-wrapper  relative flex h-24 items-center justify-between gap-x-8 px-4 md:h-16 md:border-b md:border-th-fade md:px-8 lg:px-0"
          }
        >
          <NavbarAnchorLinks toggleServices={toggleServices} />
          <Link
            href="/"
            className="z-50 flex items-center justify-center"
            rel="nofollow"
          >
            <Image
              src="/homepage/logo_light.svg"
              alt="Home logo"
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
              alt=""
            />
          ) : (
            <Image
              className="ml-auto w-6 cursor-pointer lg:hidden"
              alt=""
              src={menu_open}
              onClick={openBurger}
            />
          )}

          <NavbarRoutingLinks setOpenForm={setOpenForm} />

          <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />

          <BurgerMenu
            windowHeight={windowHeight}
            toggleMenu={toggleMenu}
            sideVariants={sideVariants}
            closeBurger={closeBurger}
            closeMobServiceMenu={closeMobServiceMenu}
            openMobileServiceMenu={openMobileServiceMenu}
            serviceMobMenuOpen={serviceMobMenuOpen}
            linkVariants={linkVariants}
            handleMobileFormOpen={handleMobileFormOpen}
          />
        </div>
      </section>
      <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />
      {serviceMenuOpen && (
        <div ref={menuRef}>
          <ServicesAndTechnologies setServiceMenuOpen={setServiceMenuOpen} />
        </div>
      )}
    </>
  );
}
