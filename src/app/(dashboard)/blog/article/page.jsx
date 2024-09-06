"use client";

import { useState, useEffect } from "react";
// import Navbar from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
// import { Footer } from "@/components/Footer";
import splash from "@/assets/blog/articles/splash.png";
import planet from "@/assets/blog/articles/planet.png";
import FooterForm from "@/components/utils/FooterForm";
import { Blog } from "./blocks/Blog";
import Image from "next/image";

const titles = ["first", "second", "third"];

export default function Article({ setBurgerOpen }) {
  const [activeButton, setActiveButton] = useState(null); // Track the active button

  useEffect(() => {
    // IntersectionObserver to highlight button when the section is in view
    const observerOptions = {
      root: null,
      threshold: 0.5 // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveButton(entry.target.id); // Set the active button based on the visible section
        }
      });
    }, observerOptions);

    // Observe target sections
    const firstSection = document.getElementById("first-article");
    const secondSection = document.getElementById("second-article");

    if (firstSection) observer.observe(firstSection);
    if (secondSection) observer.observe(secondSection);

    // Cleanup the observer on unmount
    return () => {
      if (firstSection) observer.unobserve(firstSection);
      if (secondSection) observer.unobserve(secondSection);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="relative min-h-screen  bg-black">
        {/* <Navbar isGradient={false} setBurgerOpen={setBurgerOpen} /> */}
        <HeroSection />
        <Image
          src={splash}
          className=" block max-h-[560px] w-full object-cover"
          alt=""
        />

        <div className="flex  mb-28 mt-20  items-start justify-center gap-[20px">

          <div className="sticky top-0 flex flex-col items-start transition-all duration-500">
            {titles.map((title, index) => (
              <button
                key={index}
                title={title}
                onClick={() => scrollToSection(`${title}-article`)}
                className={`${
                  activeButton === `${title}-article`
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          <div>
          <div className="container relative text-left 2xl:max-w-[670px]">
            <h3
              id="first-article"
              className="mb-6 text-left text-2xl uppercase"
            >
              Building Trust in the Metaverse: Security and Privacy in Web3
              Development
            </h3>
            <span className="text-sm  text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </span>
            <Image
              src={planet}
              className=" my-12 block max-h-[260px] w-full object-cover"
              alt=""
            />
            <span className="text-sm  text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </span>
          </div>
          <div className="relative my-28 flex w-full flex-col items-center  overflow-hidden">
            <h3 className="mb-2 text-2xl uppercase">
              Subscribe to our newsletter
            </h3>
            <span className="mb-10 text-secondary">
              Receive weekly updates on new posts and features
            </span>
            <FooterForm />
          </div>

          <div className="container mb-28 mt-20 text-left 2xl:max-w-[670px] ">
            <h3 id="second-article" className="mb-6 text-left text-2xl uppercase">
              Building Trust in the Metaverse: Security and Privacy in Web3
              Development
            </h3>
            <span className="text-sm  text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </span>
          </div>

          <div className="container mb-28 mt-20 text-left 2xl:max-w-[670px] ">
            <h3 id="third-article" className="mb-6 text-left text-2xl uppercase">
              Building Trust in the Metaverse: Security and Privacy in Web3
              Development
            </h3>
            <span className="text-sm  text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </span>
          </div>
          </div>

          <div className="sticky  top-0 flex flex-col items-center  overflow-hidden">
            <h3 id="first-article" className="mb-2 text-2xl uppercase">
              Subscribe to our newsletter
            </h3>
            <span className="mb-10 text-secondary">
              Receive weekly updates on new posts and features
            </span>
            <FooterForm />
          </div>

        </div>

        <Blog />
        {/* <Footer /> */}
      </div>
    </section>
  );
}
