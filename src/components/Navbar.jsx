import React, { useState } from "react";
import logo_light from "../assets/logo_light.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/homepage/modal_close.svg";
import bg from "../assets/bg/navbar_top.png";
import bg_lg from "../assets/bg/navbar_top_lg.png";
import bg_clients from "../assets/bg/clients_navbar_bg_sm.png";
import bg_clients_lg from "../assets/bg/clients_navbar_bg_lg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
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

const Navbar = ({ setBurgerOpen }) => {
  const [openForm, setOpenForm] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const sideVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const anchorLinks = [
    {
      title: "Services & Technologies",
      link: "/expertise",
    },
    {
      title: "Cases",
      link: "/projects",
    },
    {
      title: "Clients",
      link: "/clients",
    },
  ];

  const routerLinks = [
    {
      title: "Team",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
    },
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
    setBurgerOpen(false);
    setOpenForm(true);
  };

  const location = useLocation();
  const windowHeight = window.innerHeight;
  const isHomePage = location.pathname === "/";

  return (
    <section className="bg-transparent relative">
      {isHomePage ? (
        <img
          srcSet={`${bg} 360w, ${bg} 480w, ${bg} 720w, ${bg_lg} 1920w`}
          sizes="(max-width: 640px) 100vw, 100vw"
          alt=""
          className="absolute bottom-0 left-0 w-full h-full"
          src={bg_lg}
        />
      ) : (
        <img
          srcSet={`${bg_clients} 360w, ${bg_clients} 480w, ${bg_clients} 720w, ${bg_clients_lg} 1920w`}
          sizes="200vw"
          alt=""
          className="absolute bottom-0 right-0 min-w-[200vw] md:min-w-full min-h-[140%]"
          src={bg_clients_lg}
        />
      )}

      <div
        className={
          isHomePage
            ? "relative px-4 md:px-8 lg:px-0 h-24 md:h-16 flex items-center gap-x-8 justify-between md:border-b md:border-th-fade navbar-wrapper border-b border-b-th-fade"
            : "relative px-4 md:px-8 lg:px-0 h-24 md:h-16 flex items-center gap-x-8 justify-between navbar-wrapper md:border-b md:border-th-fade"
        }
      >
        <nav className="hidden pl-12 lg:flex items-center justify-between w-full max-w-[360px] xl:max-w-md">
          {anchorLinks.map((link, index) => (
            <Link key={index} to={link.link}>
              <p className="navlink mt-1">{link.title}</p>
            </Link>
          ))}
        </nav>
        <a href="/" rel="nofollow">
          <img
            className="w-32 md:w-36 lg:w-40"
            title="Home"
            alt="Home-1"
            src={logo_light}
          ></img>
        </a>
        {toggleMenu ? (
          <img
            className="w-6 ml-auto cursor-pointer lg:hidden"
            src={menu_close}
            onClick={closeBurger}
            alt=""
          ></img>
        ) : (
          <img
            className="w-6 ml-auto cursor-pointer lg:hidden"
            alt=""
            src={menu_open}
            onClick={openBurger}
          ></img>
        )}
        <div className="hidden lg:flex ml-auto items-center justify-between w-full max-w-[360px] xl:max-w-md">
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
              className="absolute w-full min-h-full top-0 right-0 z-50"
            >
              <motion.div
                style={{
                  height: `${windowHeight}px`,
                }}
                className="overflow-y-scroll relative bg-black flex flex-col pb-8"
                initial="closed"
                animate={toggleMenu ? "open" : "closed"}
                variants={sideVariants}
              >
                <motion.div className="relative px-4 h-24 md:h-16 flex items-center border-b border-b-th-fade">
                  <a href="/" rel="nofollow">
                    <img
                      className="w-32"
                      title="Home"
                      alt="Home-1"
                      src={logo_light}
                    ></img>
                  </a>
                  <img
                    className="w-8 ml-auto cursor-pointer lg:hidden"
                    src={menu_close}
                    onClick={closeBurger}
                    alt=""
                  ></img>
                </motion.div>
                <motion.nav className="flex flex-col mt-8 px-4 gap-y-6">
                  {anchorLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      onClick={closeBurger}
                      variants={linkVariants}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center">
                        <p className="text-base uppercase font-roc font-medium text-white">
                          {link.title}
                        </p>
                        <img
                          className="w-6 ml-auto mb-1"
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
                        <p className="text-base uppercase font-roc font-medium text-white">
                          {link.title}
                        </p>
                        <img
                          className="w-6 ml-auto mb-1"
                          src={arrow}
                          alt=""
                        ></img>
                      </div>
                    </Link>
                  ))}
                </motion.nav>
                <button
                  className="btn-submit text-center mt-auto mx-4"
                  onClick={handleMobileFormOpen}
                >
                  GET IN TOUCH
                </button>
                <motion.div className="flex items-center justify-center gap-x-2 mx-auto mt-8">
                  <a
                    href="https://www.linkedin.com/company/cowchain/"
                    rel="nofollow"
                    target="_blank"
                  >
                    <img className="w-14" src={linkedin}></img>
                  </a>
                  <a
                    href="https://t.me/cowchain_team"
                    rel="nofollow"
                    target="_blank"
                  >
                    <img className="w-14" src={telegram}></img>
                  </a>
                  <a
                    href="https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw"
                    rel="nofollow"
                    target="_blank"
                  >
                    <img className="w-14" src={twitter}></img>
                  </a>
                  <a href="#" rel="nofollow" target="_blank">
                    <img className="w-14" src={medium}></img>
                  </a>
                  <a
                    href="mailto:sales@cowchain.io"
                    rel="nofollow"
                    target="_blank"
                  >
                    <img className="w-14" src={mail}></img>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />
    </section>
  );
};

export default Navbar;
