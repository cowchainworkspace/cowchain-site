import React, { useState } from "react";
import logo_light from "../assets/logo_light.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/homepage/modal_close.svg";
import bg from "../assets/bg/navbar_top.png";
import bg_lg from "../assets/bg/navbar_top_lg.png";
import bg_clients from "../assets/bg/clients_navbar_bg_sm.png";
import bg_clients_lg from "../assets/bg/clients_navbar_bg_lg.png";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../assets/arrow_right.svg";
import { Link } from "react-router-dom";
import linkedin from "../assets/footer/linkedin.svg";
import telegram from "../assets/footer/telegram.svg";
import twitter from "../assets/footer/twitter.svg";
import medium from "../assets/footer/medium.svg";
import mail from "../assets/footer/mail.svg";
import ContactForm from "./utils/ContactForm";
import { useLocation } from "react-router-dom";
import { cn } from "lib/utils";

export const Navbar = ({ setBurgerOpen, isGradient = true }) => {
  const [openForm, setOpenForm] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
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

  const location = useLocation();
  const windowHeight = window.innerHeight;
  const isHomePage = location.pathname === "/";

  return (
    <>
      <section className="relative bg-transparent">
        {isHomePage ? (
          <img
            srcSet={`${bg} 360w, ${bg} 480w, ${bg} 720w, ${bg_lg} 1920w`}
            sizes="(max-width: 640px) 100vw, 100vw"
            alt=""
            className={cn("absolute bottom-0 left-0 h-full w-full", {
              hidden: !isGradient
            })}
            src={bg_lg}
          />
        ) : (
          <img
            srcSet={`${bg_clients} 360w, ${bg_clients} 480w, ${bg_clients} 720w, ${bg_clients_lg} 1920w`}
            sizes="200vw"
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
              ? "navbar-wrapper relative flex h-24 items-center justify-between gap-x-8 border-b border-b-th-fade px-4 md:h-16 md:border-b md:border-th-fade md:px-8 lg:px-0"
              : "navbar-wrapper relative flex h-24 items-center justify-between gap-x-8 px-4 md:h-16 md:border-b md:border-th-fade md:px-8 lg:px-0"
          }
        >
          <nav className="hidden w-full max-w-[360px] items-center justify-between pl-12 lg:flex xl:max-w-md">
            {anchorLinks.map((link, index) => (
              <Link key={index} to={link.link}>
                <p className="navlink mt-1">{link.title}</p>
              </Link>
            ))}
          </nav>
          <Link
            to={"/"}
            className="flex items-center justify-center"
            rel="nofollow"
          >
            <img
              className="w-32 md:w-36 lg:w-40"
              title="Home"
              alt="Home-1"
              src={logo_light}
            ></img>
          </Link>
          {toggleMenu ? (
            <img
              className="ml-auto w-6 cursor-pointer lg:hidden"
              src={menu_close}
              onClick={closeBurger}
              alt=""
            ></img>
          ) : (
            <img
              className="ml-auto w-6 cursor-pointer lg:hidden"
              alt=""
              src={menu_open}
              onClick={openBurger}
            ></img>
          )}
          <div className="hidden w-full max-w-[360px] items-center justify-end gap-16 lg:flex xl:max-w-md">
            {routerLinks.map((link, index) => (
              <Link key={index * 4} to={link.link}>
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
                      <img
                        className="w-32"
                        title="Home"
                        alt="Home-1"
                        src={logo_light}
                      ></img>
                    </a>
                    <img
                      className="ml-auto w-8 cursor-pointer lg:hidden"
                      src={menu_close}
                      onClick={closeBurger}
                      alt=""
                    ></img>
                  </motion.div>
                  <motion.nav className="mt-8 flex flex-col gap-y-6 px-4">
                    {anchorLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.link}
                        onClick={closeBurger}
                        variants={linkVariants}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center">
                          <p className="font-roc text-base font-medium uppercase text-white">
                            {link.title}
                          </p>
                          <img
                            className="mb-1 ml-auto w-6"
                            src={arrow}
                            alt=""
                          ></img>
                        </div>
                      </Link>
                    ))}
                    {routerLinks.map((link, index) => (
                      <Link
                        key={index * 4}
                        to={link.link}
                        onClick={closeBurger}
                        variants={linkVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center">
                          <p className="font-roc text-base font-medium uppercase text-white">
                            {link.title}
                          </p>
                          <img
                            className="mb-1 ml-auto w-6"
                            src={arrow}
                            alt=""
                          ></img>
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
                      <img className="w-14" alt="linkedIn" src={linkedin}></img>
                    </a>
                    <a
                      href="https://t.me/cowchain_team"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <img className="w-14" alt="telegram" src={telegram}></img>
                    </a>
                    <a
                      href="https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <img className="w-14" alt="twitter" src={twitter}></img>
                    </a>
                    <a
                      href="https://medium.com/"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <img className="w-14" alt="medium" src={medium}></img>
                    </a>
                    <a
                      href="mailto:sales@cowchain.io"
                      rel="nofollow noreferrer"
                      target="_blank"
                    >
                      <img className="w-14" alt="mail" src={mail}></img>
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
};
