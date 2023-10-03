import React, { useState } from "react";
import logo_light from "../assets/logo_light.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/homepage/modal_close.svg";
import bg_top from "../assets/bg/navbar_top.png";
import bg_top_lg from "../assets/bg/navbar_top_lg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../assets/arrow_right.svg";
import { Link } from "react-router-dom";
import linkedin from "../assets/footer/linkedin.svg";
import telegram from "../assets/footer/telegram.svg";
import twitter from "../assets/footer/twitter.svg";
import medium from "../assets/footer/medium.svg";
import mail from "../assets/footer/mail.svg";

const Navbar = () => {
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
      link: "#expertise",
    },
    {
      title: "Cases",
      link: "#projects",
    },
    {
      title: "Clients",
      link: "#clients",
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

  return (
    <section className="bg-transparent relative">
      <img
        srcSet={`${bg_top} 760w, ${bg_top_lg} 1000w`}
        sizes="(max-width: 640px) 100vw, 100vw"
        alt=""
        className="absolute bottom-0 left-0 w-full h-full"
        src={bg_top_lg}
      />
      <div className="relative px-default lg:pr-0 h-24 md:h-16 flex items-center gap-x-8 border-b border-b-[#ffffff50] justify-between">
        <nav className="hidden lg:flex items-center justify-between w-full max-w-[400px] xl:max-w-lg">
          {anchorLinks.map((link, index) => (
            <AnchorLink key={index} href={link.link}>
              <p className="navlink mt-1">{link.title}</p>
            </AnchorLink>
          ))}
        </nav>
        <a href="/" rel="nofollow">
          <img
            className="w-32"
            title="Home"
            alt="Home-1"
            src={logo_light}
          ></img>
        </a>
        {toggleMenu ? (
          <img
            className="w-6 ml-auto cursor-pointer lg:hidden"
            src={menu_close}
            onClick={() => setToggleMenu(false)}
            alt=""
          ></img>
        ) : (
          <img
            className="w-6 ml-auto cursor-pointer lg:hidden"
            alt=""
            src={menu_open}
            onClick={() => setToggleMenu(true)}
          ></img>
        )}
        <div className="hidden lg:flex items-center justify-between w-full max-w-[400px] xl:max-w-lg">
          {routerLinks.map((link, index) => (
            <Link key={index * 4} to={link.link}>
              <p className="navlink mt-1">{link.title}</p>
            </Link>
          ))}
          <AnchorLink href="#contact" className="btn-submit h-16">GET IN TOUCH</AnchorLink>
        </div>
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ width: 0 }}
              exit={{ width: 0 }}
              animate={{ width: "100%", maxWidth: "100%" }}
              className="absolute w-full top-0 right-0 z-50"
            >
              <motion.div
                className="h-[100vh] relative bg-black flex flex-col pb-8"
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
                    onClick={() => setToggleMenu(false)}
                    alt=""
                  ></img>
                </motion.div>
                <motion.nav className="flex flex-col mt-16 px-4 gap-y-12">
                  {anchorLinks.map((link, index) => (
                    <AnchorLink
                      key={index}
                      href={link.link}
                      onClick={() => setToggleMenu(false)}
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
                    </AnchorLink>
                  ))}
                  {routerLinks.map((link, index) => (
                    <Link
                      key={index * 4}
                      to={link.link}
                      onClick={() => setToggleMenu(false)}
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
                <AnchorLink
                  href="#contact"
                  className="btn-submit text-center mt-auto mx-4"
                  onClick={() => setToggleMenu(false)}
                >
                  GET IN TOUCH
                </AnchorLink>
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
    </section>
  );
};

export default Navbar;
