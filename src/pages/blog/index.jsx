import React, { useState } from "react";
import Navbar from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import Footer from "components/Footer";
import Contact from "components/Contact";
import stone from "assets/blog/posts/stone.png";
import sphere from "assets/blog/posts/sphere.png";
import robot from "assets/blog/posts/robot.png";
import dics from "assets/blog/posts/dics.png";
import human from "assets/blog/posts/human.png";
import { Post } from "./components/post";

const posts = {
  main: [
    {
      tag: "NFT",
      title: "NFTs and Web3: Transforming Digital Ownership",
      content:
        "Discover the synergy between Non-Fungible Tokens (NFTs) and Web3 technology. Learn how NFTs are reshaping the way we perceive and trade digital assets, and explore the innovative ways...",
      imgSrc: stone,
      className: "xl:border-r border-b border-th-fade"
    },
    {
      tag: "Development",
      title:
        "Building Trust in the Metaverse: Security and Privacy in Web3 Development",
      content:
        "Dive into the world of Web3 development and understand how it revolutionizes the internet as we know it. Explore the key concepts, technologies, and potential applications that make Web3...",
      imgSrc: sphere,
      className: "xl:border-r border-b border-th-fade"
    }
  ],
  secondary: [
    {
      tag: "Development",
      title: "Unleashing the Power of Web3: A Comprehensive Introduction",
      content:
        "Delve into the crucial aspects of security and privacy in the Web3 landscape. Explore the challenges and solutions for safeguarding user data, preventing vulnerabilities, and establishing...",
      imgSrc: robot,
      className: "border-b xl:border-none border-th-fade"
    },
    {
      tag: "Economy",
      title: "Smart Contracts Unveiled: Empowering Transactions in Web3",
      content:
        "Unravel the world of smart contracts, the building blocks of decentralized applications (DApps) in Web3. Learn how these self-executing contracts automate processes...",
      imgSrc: dics,
      className: " border-b xl:border-x xl:border-y-[0px]  border-th-fade"
    },
    {
      tag: "Gaming",
      title: "Web3 Gaming: The Future of Immersive and Rewarding Experiences",
      content:
        "Immerse yourself in the future of gaming with Web3 technology. Explore how decentralized networks, blockchain integration, and tokenization are ushering in a new era of interactive...",
      imgSrc: human
    }
  ]
};

export const Blog = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  document.body.style.overflow = burgerOpen ? "hidden" : "visible";

  return (
    <section>
      <div className="relative overflow-x-hidden bg-black">
        <Navbar isGradient={false} setBurgerOpen={setBurgerOpen} />
        <HeroSection />
        <section className="border-y border-th-fade">
          <div className="flex w-full flex-col xl:flex-row">
            {posts.main.map((post, index) => (
              <Post key={post + index} {...post} />
            ))}
          </div>
          <div className="flex flex-col xl:flex-row">
            {posts.secondary.map((post, index) => (
              <Post key={post + index} {...post} />
            ))}
          </div>
        </section>
        <ViewMoreSection />
        <Contact className={"overflow-visible"} />
        <Footer />
      </div>
    </section>
  );
};

const ViewMoreSection = () => {
  return (
    <section
      id="view_more"
      className="relative z-10 mt-16  overflow-hidden md:mt-20"
    >
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col items-center justify-center gap-y-8 px-4 py-16 text-center ">
          <h3 className="mx-auto text-center text-2xl">
            You are viewing 5 of 41 articles
          </h3>
          <button type="submit" className="btn-submit uppercase xl:px-12">
            view more
          </button>
        </div>
      </div>
    </section>
  );
};
