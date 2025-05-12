"use client";
import { ServicesAndTechnologiesMob } from "@/app/(dashboard)/(home)/blocks/ServicesAndTechnologiesMob";
import arrow from "@/assets/arrow_right.svg";
import menu_close from "@/assets/homepage/modal_close.svg";
import {
  anchorLinks,
  burgerMenuIconsLinks,
  routerLinks
} from "@/lib/constants/navbar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BurgerMenu = ({
  sideVariants,
  toggleMenu,
  serviceMobMenuOpen,
  windowHeight,
  closeMobServiceMenu,
  closeBurger,
  openMobileServiceMenu,
  linkVariants,
  handleMobileFormOpen
}) => {
  return (
    <AnimatePresence>
      {toggleMenu && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ zIndex: 200 }}
          className="absolute right-0 top-0 z-50 h-screen overflow-auto bg-black"
        >
          <motion.div
            style={{
              minHeight: "100dvh",
              height: `${!serviceMobMenuOpen ? "100dvh" : "auto"}`
            }}
            className="relative flex flex-col overflow-y-scroll bg-black pb-8"
            initial="closed"
            animate={toggleMenu ? "open" : "closed"}
            variants={sideVariants}
          >
            <motion.div className="relative flex h-24 items-center border-b border-b-th-fade px-4 md:h-16">
              <Link href="/" rel="nofollow">
                <img
                  className="w-32"
                  title="Home"
                  alt="Home-1"
                  src={"/homepage/logo_light.svg"}
                />
              </Link>
              <Image
                className="ml-auto w-8 cursor-pointer lg:hidden"
                src={menu_close}
                onClick={(e) => {
                  closeBurger();
                  closeMobServiceMenu(e);
                }}
                alt=""
              />
            </motion.div>
            <motion.nav
              className={`${!serviceMobMenuOpen ? "mt-8 px-4" : "h-full"}  flex  flex-col gap-y-6 `}
            >
              {serviceMobMenuOpen ? (
                <ServicesAndTechnologiesMob
                  closeServiceMenu={closeMobServiceMenu}
                  closeBurger={closeBurger}
                />
              ) : (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      openMobileServiceMenu(e);
                    }}
                    className="flex items-center "
                  >
                    <p className="cursor-pointer font-roc text-base font-medium uppercase text-white">
                      Services & Technologies
                    </p>
                    <Image className="mb-1 ml-auto w-6" src={arrow} alt="" />
                  </button>
                  {anchorLinks.map((link, index) => (
                    <Link key={index} href={link.link} onClick={closeBurger}>
                      <div className="flex items-center">
                        <p className="font-roc text-base font-medium uppercase text-white">
                          {link.title}
                        </p>
                        <Image
                          className="mb-1 ml-auto w-6"
                          src={arrow}
                          alt=""
                        />
                      </div>
                    </Link>
                  ))}
                  {routerLinks.map((link, index) => (
                    <Link
                      key={index * 4}
                      href={link.link}
                      onClick={closeBurger}
                      variants={linkVariants}
                    >
                      <div className="flex items-center">
                        <p className="font-roc text-base font-medium uppercase text-white">
                          {link.title}
                        </p>
                        <Image
                          className="mb-1 ml-auto w-6"
                          src={arrow}
                          alt=""
                        />
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </motion.nav>
            <button
              type="button"
              className="btn-submit mx-4 mt-auto text-center"
              onClick={handleMobileFormOpen}
            >
              GET IN TOUCH
            </button>
            <motion.div className="mx-auto mt-8 flex items-center justify-center gap-x-2">
              {burgerMenuIconsLinks.map(({ id, url, image }) => (
                <Link
                  href={url}
                  key={id}
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image
                    className="w-14"
                    width={14}
                    height={14}
                    alt="linkedIn"
                    src={image}
                  />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenu;
