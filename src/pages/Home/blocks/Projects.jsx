import React, { useRef, useEffect, useState } from "react";
import pic1 from "../../../assets/homepage/projects/1.jpg";
import pic2 from "../../../assets/homepage/projects/2.jpg";
import pic3 from "../../../assets/homepage/projects/3.jpg";
import { Link } from "react-router-dom";
import { useInView, motion } from "framer-motion";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const projectsData = [
  {
    title: "Marsan Exchange",
    description:
      "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
    photo: pic1,
    tags: ["React.js", "Solidity", "Subgraph"],
  },
  {
    title: "Eva Crypto Wallet",
    description:
      "Multichain mobile wallet development with AI integration for an optimized portfolio management",
    photo: pic2,
    tags: ["React.js", "Solidity", "Subgraph"],
  },
  {
    title: "Triend",
    description:
      "Decentralized plugin development for travelers’ review verification. Proof-of-attendance protocol and reward system integration",
    photo: pic3,
    tags: ["React.js", "Solidity", "Subgraph"],
  },
];

const Project = ({ title, description, photo, tags, id }) => {
  return (
    <article
      id={"project-" + id}
      className="relative cursor-pointer w-full bg-cover bg-no-repeat bg-center border-b border-b-th-fade py-8 px-4 md:px-8 lg:px-16 flex h-80 md:h-96 lg:h-[480px] xl:h-[624px] project-card md:min-w-[25vw]"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-4 project-overlay px-12 py-8 xl:py-12">
        <Link to="/" className="btn-contact ml-auto">
          VIEW PROJECT
        </Link>
        <div className="mt-auto flex flex-col gap-y-4">
          <div className="flex items-center gap-x-1 md:gap-x-2">
            {tags.map((tag, index) => (
              <div key={index} className="bg-white rounded-full py-2 px-3">
                <p className="text-black text-xs lg:text-sm font-medium">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          <h2 className="mt-2">{title}</h2>
          <p className="body !text-[#bbb] max-w-sm">{description}</p>
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-y-4 relative lg:hidden">
        <h2>{title}</h2>
        <p className="text-sm font-normal text-[#bbb] leading-normal max-w-xs">
          {description}
        </p>
      </div>
    </article>
  );
};

const Projects = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { amount: 0.9 });

  const [elementHeight, setElementHeight] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  const windowHeight = document.documentElement.clientHeight;
  const animationHeight = windowHeight - elementHeight * 0.5;

  useEffect(() => {
    setElementHeight(scrollRef.current.getBoundingClientRect().height);
  });

  useEffect(() => {
    const handleScroll = (event) => {
      setElementTop(scrollRef.current.getBoundingClientRect().top);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return (
    <section ref={scrollRef} id="projects" className="relative">
      <div className="grid projects-wrapper grid-cols-1 md:flex md:w-full box-border max-w-100vw">
        <motion.article
          id="project-1"
          className="relative cursor-pointer bg-cover bg-no-repeat bg-center border-b border-b-th-fade py-8 px-4 md:px-8 lg:px-16 flex h-80 md:h-96 lg:h-[480px] xl:h-[624px] project-card md:min-w-[25vw]"
          style={{
            backgroundImage: `url(${pic1})`,
          }}
          active={
            animationHeight >= elementTop &&
            elementTop > (animationHeight / 3) * 2 - elementHeight * 0.15
              ? "true"
              : "false"
          }
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-4 project-overlay px-12 py-8 xl:py-12">
            <Link to="/" className="btn-contact ml-auto">
              VIEW PROJECT
            </Link>
            <div className="mt-auto flex flex-col gap-y-4">
              <div className="flex items-center gap-x-1 md:gap-x-2">
                {projectsData[0].tags.map((tag, index) => (
                  <div key={index} className="bg-white rounded-full py-2 px-3">
                    <p className="text-black text-xs lg:text-sm font-medium">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="mt-2">Marsan Exchange</h2>
              <p className="body !text-[#bbb] max-w-sm">
                Mobile app development for a non-custodial Canadian exchange.
                KYC integration. Chat support
              </p>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-y-4 relative lg:hidden">
            <h2>Marsan Exchange</h2>
            <p className="text-sm font-normal text-[#bbb] leading-normal max-w-xs">
              Mobile app development for a non-custodial Canadian exchange. KYC
              integration. Chat support
            </p>
          </div>
        </motion.article>
        <article
          id="project-2"
          className="relative cursor-pointer w-full bg-cover bg-no-repeat bg-center border-b border-b-th-fade py-8 px-4 md:px-8 lg:px-16 flex h-80 md:h-96 lg:h-[480px] xl:h-[624px] project-card md:min-w-[25vw]"
          style={{ backgroundImage: `url(${pic2})` }}
          active={
            (animationHeight / 3) * 2 - elementHeight * 0.15 >= elementTop &&
            elementTop > animationHeight / 3 - elementHeight * 0.33
              ? "true"
              : "false"
          }
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-4 project-overlay px-12 py-8 xl:py-12">
            <Link to="/" className="btn-contact ml-auto">
              VIEW PROJECT
            </Link>
            <div className="mt-auto flex flex-col gap-y-4">
              <div className="flex items-center gap-x-1 md:gap-x-2">
                {projectsData[1].tags.map((tag, index) => (
                  <div key={index} className="bg-white rounded-full py-2 px-3">
                    <p className="text-black text-xs lg:text-sm font-medium">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="mt-2">Eva Crypto Wallet</h2>
              <p className="body !text-[#bbb] max-w-sm">
                Multichain mobile wallet development with AI integration for an
                optimized portfolio management
              </p>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-y-4 relative lg:hidden">
            <h2>Eva Crypto Wallet</h2>
            <p className="text-sm font-normal text-[#bbb] leading-normal max-w-xs">
              Multichain mobile wallet development with AI integration for an
              optimized portfolio management
            </p>
          </div>
        </article>
        <article
          id="project-3"
          className="relative cursor-pointer w-full bg-cover bg-no-repeat bg-center border-b border-b-th-fade py-8 px-4 md:px-8 lg:px-16 flex h-80 md:h-96 lg:h-[480px] xl:h-[624px] project-card md:min-w-[25vw]"
          style={{ backgroundImage: `url(${pic3})` }}
          active={
            animationHeight / 3 - elementHeight * 0.33 >= elementTop &&
            elementTop > elementHeight * -0.5
              ? "true"
              : "false"
          }
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-4 project-overlay px-12 py-8 xl:py-12">
            <Link to="/" className="btn-contact ml-auto">
              VIEW PROJECT
            </Link>
            <div className="mt-auto flex flex-col gap-y-4">
              <div className="flex items-center gap-x-1 md:gap-x-2">
                {projectsData[2].tags.map((tag, index) => (
                  <div key={index} className="bg-white rounded-full py-2 px-3">
                    <p className="text-black text-xs lg:text-sm font-medium">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="mt-2">Triend</h2>
              <p className="body !text-[#bbb] max-w-sm">
                Decentralized plugin development for travelers’ review
                verification. Proof-of-attendance protocol and reward system
                integration
              </p>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-y-4 relative lg:hidden">
            <h2>Triend</h2>
            <p className="text-sm font-normal text-[#bbb] leading-normal max-w-xs">
              Decentralized plugin development for travelers’ review
              verification. Proof-of-attendance protocol and reward system
              integration
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
