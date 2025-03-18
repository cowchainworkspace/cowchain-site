"use client";

import arrow from "@/assets/arrow_right.svg";
import bg_clients_lg from "@/assets/bg/clients_navbar_bg_lg.png";
import bg_clients from "@/assets/bg/clients_navbar_bg_sm.png";
import bg from "@/assets/bg/navbar_top.png";
import bg_lg from "@/assets/bg/navbar_top_lg.png";
import team_bg from "@/assets/bg/team-mobile.png";
import team from "@/assets/bg/team.png";
import linkedin from "@/assets/footer/linkedin.svg";
import mail from "@/assets/footer/mail.svg";
import medium from "@/assets/footer/medium.svg";
import telegram from "@/assets/footer/telegram.svg";
import twitter from "@/assets/footer/twitter.svg";
import bg_home from "@/assets/homepage/home-mobile.png";
import menu_close from "@/assets/homepage/modal_close.svg";
import menu_open from "@/assets/menu_open.svg";
import ContactForm from "@/components/utils/ContactForm";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ isPageNotFound = false }) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = burgerOpen ? "hidden" : "visible";
  }, []);

  const [openForm, setOpenForm] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowHeight, setWindowheight] = useState("");
  const [isTeamBg, setIsTeamBg] = useState(false);
  const [isGradient, setIsGradient] = useState(true);
  const [isHomePage, setIsHomePage] = useState(true);

  const pathname = usePathname();
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
      pathname === "/services" ||
        pathname === "/cases" ||
        pathname === "/clients" ||
        pathname === "/policy"
    );
    setIsTeamBg(pathname === "/team" || pathname === "/sitemap");

    if (pathname === "/team") {
      setIsGradient(false);
      setIsHomePage(false);
    }
    isPageNotFound && setIsTeamBg(true);
  }, [pathname, isTeamBg, setIsGradient, setIsHomePage]);

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

  const anchorLinks = [
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
    }
  ];

  const routerLinks = [
    {
      title: "Team",
      link: "/team"
    },
    {
      title: "Blog",
      link: "/blog"
    }
  ];

  const openBurger = () => {
    setToggleMenu(true);
    setBurgerOpen(true);
  };

  const closeBurger = () => {
    setToggleMenu(false);
    setBurgerOpen(false);
  };

  const handleMobileFormOpen = () => {
    setToggleMenu(false);
    setBurgerOpen(false);
    setOpenForm(true);
  };

  return (
    <>
      <section
        className={cn("relative bg-transparent opacity-0", {
          "pb-36 md:pb-0": isHomePage,
          "pb-[440px] lg:pb-[670px]": isTeamBg,
          "opacity-100": !isRendering
        })}
      >
        {isHomePage ? (
          <>
            <Image
              priority
              srcSet={`${bg} 360w, ${bg} 480w, ${bg} 720w, ${bg_lg} 1920w`}
              sizes="(max-width: 640px) 100vw, 100vw"
              alt="Top Background"
              className={cn(
                "absolute bottom-0 left-0 hidden h-full w-full md:block",
                {
                  hidden: !isGradient
                }
              )}
              src={bg_lg}
            />
            <Image
              quality={100}
              priority
              className={cn(
                "absolute bottom-0 left-0 block h-full w-full md:hidden",
                {
                  hidden: isGradient
                }
              )}
              src={bg_home}
              alt="Navbar Background"
            />
          </>
        ) : (
          <Image
            srcSet={`${bg_clients} 360w, ${bg_clients} 480w, ${bg_clients} 720w, ${bg_clients_lg} 1920w`}
            alt="Clients Background"
            className={cn(
              "absolute bottom-0 right-0 min-h-[140%] min-w-[200vw] md:min-w-full",
              {
                hidden: !isGradient
              }
            )}
            src={bg_clients_lg}
          />
        )}

        {isTeamBg && (
          <>
            <Image
              className="absolute right-0 top-0 h-full w-full lg:hidden"
              alt="gradient"
              src={team_bg}
            />
            <Image
              className="absolute top-0 hidden h-full w-full lg:block"
              alt="gradient"
              priority
              src={team}
            />
          </>
        )}

        <div
          className={
            isHomePage
              ? "navbar-wrapper relative flex h-24 items-center justify-between gap-x-8   px-4 md:h-16 md:border-b  md:border-th-fade md:border-b-th-fade md:px-8 lg:px-0"
              : "navbar-wrapper relative flex h-24 items-center justify-between gap-x-8 px-4 md:h-16 md:border-b md:border-th-fade md:px-8 lg:px-0"
          }
        >
          <nav className="z-20 hidden w-full max-w-[360px] items-center justify-between pl-12 lg:flex xl:max-w-md">
            {anchorLinks.map((link, index) => (
              <Link key={index} href={link.link}>
                <p className="navlink mt-1">{link.title}</p>
              </Link>
            ))}
          </nav>
          <Link
            href={"/"}
            className="z-20 flex items-center justify-center"
            rel="nofollow"
          >
            <Image
              src="/homepage/logo_light.svg"
              alt="Logo"
              width={160}
              height={160}
              priority
            />
          </Link>
          {toggleMenu ? (
            <Image
              className="ml-auto w-6 cursor-pointer lg:hidden"
              src={menu_close}
              onClick={closeBurger}
              alt="Close Menu"
            ></Image>
          ) : (
            <Image
              className="z-20 ml-auto w-6 cursor-pointer lg:hidden"
              alt="Open Menu"
              src={menu_open}
              onClick={openBurger}
            ></Image>
          )}
          <div className="z-20 hidden w-full max-w-[360px] items-center justify-end gap-16 lg:flex xl:max-w-md">
            {routerLinks.map((link, index) => (
              <Link key={index * 4} href={link.link}>
                <p className="navlink mt-1">{link.title}</p>
              </Link>
            ))}
            <button
              onClick={() => setOpenForm(true)}
              className="btn-submit h-16 w-[200px]"
            >
              GET IN TOUCH
            </button>
          </div>
          <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                initial={{ width: 0 }}
                exit={{ width: 0 }}
                animate={{ width: "100%", maxWidth: "100%" }}
                className="absolute right-0 top-0 z-50 min-h-full w-full"
              >
                <motion.div
                  style={{
                    height: `${windowHeight}px`
                  }}
                  className="relative flex flex-col overflow-y-scroll bg-black pb-8"
                  initial="closed"
                  animate={toggleMenu ? "open" : "closed"}
                  variants={sideVariants}
                >
                  <motion.div className="relative flex h-24 items-center border-b border-b-th-fade px-4 md:h-16">
                    <a href="/" rel="nofollow">
                      <Image
                        className="w-32"
                        title="Home"
                        alt="Home-1"
                        src="/homepage/logo_light.svg"
                        width={128}
                        height={128}
                      />
                    </a>
                    <Image
                      className="ml-auto w-8 cursor-pointer lg:hidden"
                      src={menu_close}
                      onClick={closeBurger}
                      alt=""
                    ></Image>
                  </motion.div>
                  <motion.nav className="mt-8 flex flex-col gap-y-6 px-4">
                    {anchorLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.link}
                        onClick={closeBurger}
                        variants={linkVariants}
                        whiletap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center">
                          <p className="font-roc text-base font-medium uppercase text-white">
                            {link.title}
                          </p>
                          <Image
                            className="mb-1 ml-auto w-6"
                            src={arrow}
                            alt="Arrow"
                          ></Image>
                        </div>
                      </Link>
                    ))}
                    {routerLinks.map((link, index) => (
                      <Link
                        key={index * 4}
                        href={link.link}
                        onClick={closeBurger}
                        variants={linkVariants}
                        whilehover={{ scale: 1.1 }}
                        whiletap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center">
                          <p className="font-roc text-base font-medium uppercase text-white">
                            {link.title}
                          </p>
                          <Image
                            className="mb-1 ml-auto w-6"
                            src={arrow}
                            alt="Arrow"
                          ></Image>
                        </div>
                      </Link>
                    ))}
                  </motion.nav>
                  <button
                    className="btn-submit mx-4 mt-auto text-center"
                    onClick={handleMobileFormOpen}
                  >
                    GET IN TOUCH
                  </button>
                  <motion.div className="mx-auto mt-8 flex items-center justify-center gap-x-2">
                    <a
                      href="https://www.linkedin.com/company/cowchain/"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <Image
                        className="w-14"
                        alt="linkedIn"
                        src={linkedin}
                      ></Image>
                    </a>
                    <a
                      href="https://t.me/cowchain_team"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <Image
                        className="w-14"
                        alt="telegram"
                        src={telegram}
                      ></Image>
                    </a>
                    <a
                      href="https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <Image
                        className="w-14"
                        alt="twitter"
                        src={twitter}
                      ></Image>
                    </a>
                    <a
                      href="https://medium.com/"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <Image className="w-14" alt="medium" src={medium}></Image>
                    </a>
                    <a
                      href="mailto:sales@cowchain.io"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <Image className="w-14" alt="mail" src={mail}></Image>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />
    </>
  );
}
